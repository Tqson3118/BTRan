/**
 * src/subjects/c-lang/data/chapters/index.ts
 * Barrel export tập trung toàn bộ 9 chương lý thuyết Lập trình C/C++
 */

import type { CChapter } from '../../types/index';
import { chapter1 } from './chapter1';
import { chapter2 } from './chapter2';
import { chapter3 } from './chapter3';
import { chapter4 } from './chapter4';
import { chapter5 } from './chapter5';
import { chapter6 } from './chapter6';
import { chapter7 } from './chapter7';
import { chapter8 } from './chapter8';
import { chapter9 } from './chapter9';

export {
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  chapter8,
  chapter9,
};

export const allCChapters: CChapter[] = [
  chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9
];

export const cChaptersMap: Record<number, CChapter> = {
  1: chapter1,
  2: chapter2,
  3: chapter3,
  4: chapter4,
  5: chapter5,
  6: chapter6,
  7: chapter7,
  8: chapter8,
  9: chapter9
};

export const CHAPTER_NAMES_C: Record<number, string> = {
  1: 'Chương 1: Tổng quan về Ngôn ngữ C & Môi trường Lập trình',
  2: 'Chương 2: Các Kiểu Dữ Liệu Cơ Bản, Biểu Thức & Nhập/Xuất Chuẩn',
  3: 'Chương 3: Cấu trúc Điều khiển Rẽ nhánh & Vòng lặp',
  4: 'Chương 4: Hàm, Phạm vi Biến & Đệ quy',
  5: 'Chương 5: Mảng (1D, 2D) & Chuỗi Ký Tự (Strings)',
  6: 'Chương 6: Con trỏ (Pointers) & Quản lý Bộ nhớ Động',
  7: 'Chương 7: Kiểu Dữ Liệu Tự Định Nghĩa (Struct, Union, Enum, Typedef)',
  8: 'Chương 8: Thao tác Tệp Tin (File I/O)',
  9: 'Chương 9: Tổng hợp Kiến thức C++ Căn bản & Nhập môn OOP',
};
