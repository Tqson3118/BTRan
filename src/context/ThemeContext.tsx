import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { loadUserProgress, setTheme as persistTheme } from '@/utils/storage';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const progress = loadUserProgress();
      if (progress.theme === 'dark' || progress.theme === 'light') {
        return progress.theme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  // Đồng bộ class .dark trên document.documentElement lúc khởi động
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Hàm chuyển đổi Theme với hiệu ứng Circular Reveal Animation (View Transitions API)
  const toggleTheme = useCallback((event?: React.MouseEvent) => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';

    const updateDOM = () => {
      setThemeState(newTheme);
      persistTheme(newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Kiểm tra hỗ trợ View Transitions API
    const doc = document as any;
    if (!doc.startViewTransition) {
      updateDOM();
      return;
    }

    // 1. Tọa độ tâm vòng tròn xuất phát từ vị trí click chuột (hoặc giữa màn hình nếu click phím tắt)
    const x = event ? event.clientX : window.innerWidth / 2;
    const y = event ? event.clientY : window.innerHeight / 2;

    // 2. Định lý Pythagoras: Tính bán kính lớn nhất bao trùm cả 4 góc màn hình
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // 3. Khởi tạo View Transition
    const transition = doc.startViewTransition(async () => {
      updateDOM();
    });

    // 4. Chạy Web Animation cắt lớp (clip-path) theo hình tròn lan tỏa / thu hồi
    transition.ready.then(() => {
      const isDarkMode = newTheme === 'dark';

      // Sáng -> Tối: Lớp sáng cũ (old) thu nhỏ từ toàn màn hình về 0px tại con trỏ
      // Tối -> Sáng: Lớp sáng mới (new) bung nở từ 0px tại con trỏ ra toàn màn hình
      const clipPath = isDarkMode
        ? [`circle(${endRadius}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`]
        : [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];

      document.documentElement.animate(
        { clipPath },
        {
          duration: 500,
          easing: 'ease-in-out',
          fill: 'forwards',
          pseudoElement: isDarkMode
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        }
      );
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
