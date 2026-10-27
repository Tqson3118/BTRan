/**
 * src/components/landing/LandingPage.tsx
 * Trang chủ chọn môn học - Cổng luyện thi trực tuyến HCMUTE
 * Hỗ trợ chuyển đổi giữa Pháp luật đại cương & Ngôn ngữ lập trình C/C++
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Code2,
  Clock,
  Layers,
  CheckCircle2,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Sparkles,
  Sun,
  Moon,
  GraduationCap,
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Top Navbar */}
      <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  HCMUTE
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold">
                  Study Hub
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Cổng Ôn Tập & Luyện Thi Trực Tuyến
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={(e) => toggleTheme(e)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Đổi giao diện Sáng / Tối"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col justify-center">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Nền tảng ôn thi thông minh chuẩn giáo trình Trường ĐH Sư phạm Kỹ thuật TP.HCM
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            Chọn Môn Học Cần Ôn Tập
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Hệ thống học tập 2 cột thông minh với ngân hàng trắc nghiệm chuẩn hóa, ngăn kéo đối chiếu lý thuyết trực tiếp, thẻ ghi nhớ và thi thử có bấm giờ.
          </p>
        </div>

        {/* 2 Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto w-full">
          {/* MÔN 1: PHÁP LUẬT ĐẠI CƯƠNG */}
          <div
            onClick={() => navigate('/phap-luat')}
            className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-7 lg:p-8 shadow-sm hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500/80 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-2xl shadow-inner group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <BookOpen className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  HCMUTE 2023 · 298 Trang
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Pháp Luật Đại Cương
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Nắm vững bản chất Nhà nước & Pháp luật, các ngành luật cơ bản (Dân sự, Hình sự, Lao động, Hôn nhân) và Luật Phòng chống tham nhũng.
              </p>

              {/* Feature Tags / Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Ngân hàng câu hỏi</span>
                  </div>
                  <span className="text-base font-bold text-slate-800 dark:text-slate-200">
                    195 câu MCQ
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    <span>Thẻ nhớ flashcards</span>
                  </div>
                  <span className="text-base font-bold text-slate-800 dark:text-slate-200">
                    110 thẻ
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Thi thử chuẩn</span>
                  </div>
                  <span className="text-base font-bold text-slate-800 dark:text-slate-200">
                    40 câu / 60 phút
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Chương giáo trình</span>
                  </div>
                  <span className="text-base font-bold text-slate-800 dark:text-slate-200">
                    7 chương
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <div className="w-full py-3.5 px-5 rounded-2xl bg-blue-600 group-hover:bg-blue-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 transition-all">
                <span>Vào ôn tập Pháp Luật</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* MÔN 2: LẬP TRÌNH C / C++ */}
          <div
            onClick={() => navigate('/c-lang')}
            className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-7 lg:p-8 shadow-sm hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500/80 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-2xl shadow-inner group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Code2 className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    Mới ra mắt
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    9 Chương
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Lập Trình C / C++ & OOP
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Giáo trình chuẩn UTE & UTT: Cú pháp C, con trỏ, mảng, chuỗi ký tự, hàm đệ quy, struct/union, file I/O và nền tảng hướng đối tượng C++.
              </p>

              {/* Feature Tags / Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Trắc nghiệm 4 dạng</span>
                  </div>
                  <span className="text-base font-bold text-slate-800 dark:text-slate-200">
                    270 câu MCQ
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Tự luận + Monaco</span>
                  </div>
                  <span className="text-base font-bold text-slate-800 dark:text-slate-200">
                    32 bài code mẫu
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    <Layers className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Thẻ nhớ flashcards</span>
                  </div>
                  <span className="text-base font-bold text-slate-800 dark:text-slate-200">
                    125 thẻ
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Thi thử 2 phần</span>
                  </div>
                  <span className="text-base font-bold text-slate-800 dark:text-slate-200">
                    45 câu / 90 phút
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <div className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-700 group-hover:to-indigo-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all">
                <span>Vào ôn tập Lập Trình C</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200 mb-1">
              Giáo trình 2 cột song song
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
              Mỗi câu trắc nghiệm đều đính kèm trích dẫn điều luật hoặc mục giáo trình cụ thể để tra cứu tức thì.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200 mb-1">
              Monaco Code Editor
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
              Soạn thảo C/C++ trực tiếp trong trình duyệt, đối chiếu lời giải mẫu và độ phức tạp thuật toán.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200 mb-1">
              100% Offline & Bảo mật
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
              Tiến độ làm bài lưu hoàn toàn trên LocalStorage thiết bị, không cần đăng nhập hay gửi dữ liệu ra ngoài.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-xs text-slate-400 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800">
        Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE) · Hệ thống ôn thi đa môn học
      </footer>
    </div>
  );
};

export default LandingPage;
