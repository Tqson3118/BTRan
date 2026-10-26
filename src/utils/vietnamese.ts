/**
 * src/utils/vietnamese.ts
 * Tiện ích chuẩn hóa tiếng Việt và tìm kiếm không dấu
 */

/**
 * Loại bỏ dấu tiếng Việt và chuyển về chữ thường để so khớp tìm kiếm
 */
export function removeVietnameseAccents(str: string): string {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

/**
 * Kiểm tra chuỗi target có chứa chuỗi query hay không (không phân biệt dấu, hoa thường)
 */
export function searchMatch(target: string, query: string): boolean {
  if (!query) return true;
  if (!target) return false;
  const normalizedTarget = removeVietnameseAccents(target);
  const normalizedQuery = removeVietnameseAccents(query);
  return normalizedTarget.includes(normalizedQuery);
}

/**
 * Tokenize chuỗi query thành các từ khóa để tìm kiếm linh hoạt (AND match)
 */
export function matchAllKeywords(target: string, query: string): boolean {
  if (!query) return true;
  if (!target) return false;
  const normalizedTarget = removeVietnameseAccents(target);
  const words = removeVietnameseAccents(query)
    .split(/\s+/)
    .filter(w => w.length > 0);
  
  return words.every(word => normalizedTarget.includes(word));
}
