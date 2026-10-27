"""
scripts/build_all_clang_essays.py
Tạo trọn vẹn 32 bài tập tự luận lập trình C/C++ chia theo 9 chương
kèm theo đầy đủ 100% mã nguồn mẫu (hoàn thiện 5.3 và 5.4) và starter code.
"""

import os, json, sys, re

sys.stdout.reconfigure(encoding='utf-8')

# Read spec to extract baseline 32 essays
with open('PHASE1_CURRICULUM_ALLOCATION.md', 'r', encoding='utf-8') as f:
    text = f.read()

sec4 = text.split('## 4. DANH MỤC BÀI TẬP TỰ LUẬN LẬP TRÌNH')[1].split('## 5. PHÂN TÍCH SƯ PHẠM')[0]
essay_raw = re.split(r'#### Bài tập\s+(\d+\.\d+):?\s*', sec4)

essays_by_chapter = {i: [] for i in range(1, 10)}

for i in range(1, len(essay_raw), 2):
    num_str = essay_raw[i] # e.g. "1.1"
    body = essay_raw[i+1]
    lines = body.strip().splitlines()
    title = lines[0].strip()
    
    m_id = re.search(r'`(PROG-\d+-\d+)`', body)
    eid = m_id.group(1) if m_id else f"PROG-{num_str.replace('.', '-')}"
    
    m_diff = re.search(r'\*\*Mức độ\*\*:\s*([^\n]+)', body)
    diff = m_diff.group(1).strip() if m_diff else "Trung bình"
    
    m_desc = re.search(r'- \*\*Yêu cầu đề bài\*\*:\s*([^\n]+(?:\n(?!\s*-\s*\*)[^\n]+)*)', body)
    desc = m_desc.group(1).strip() if m_desc else ""
    
    m_in = re.search(r'- \*\*Đầu vào \(Input\)\*\*:\s*([^\n]+)', body)
    in_ex = m_in.group(1).strip() if m_in else ""
    
    m_out = re.search(r'- \*\*Đầu ra \(Output\)\*\*:\s*([^\n]+)', body)
    out_ex = m_out.group(1).strip() if m_out else ""
    
    m_guidance = re.search(r'- \*\*Hướng dẫn thuật toán\*\*:\s*\n((?:\s+\d+\.[^\n]+\n)+)', body)
    guidance = []
    if m_guidance:
        guidance = [g.strip() for g in m_guidance.group(1).strip().splitlines()]
    
    m_code = re.search(r'```(?:c|cpp)\n(.*?)```', body, re.DOTALL)
    code = m_code.group(1).strip() if m_code else ""
    
    ch_id = int(num_str.split('.')[0])
    
    # Custom full implementations for 5.3 and 5.4 as committed to user
    if eid == 'PROG-05-03':
        code = '''#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdbool.h>

// 1. Kiem tra Palindrome (bo qua khoang trang va khong phan biet hoa/thuong)
bool kiemTraPalindrome(const char *s) {
    int left = 0;
    int right = (int)strlen(s) - 1;
    while (left < right) {
        while (left < right && !isalnum((unsigned char)s[left])) left++;
        while (left < right && !isalnum((unsigned char)s[right])) right--;
        if (tolower((unsigned char)s[left]) != tolower((unsigned char)s[right])) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// 2. Chuan hoa chuoi ho ten: cat khoang trang thua, viet hoa dau moi tu
void chuanHoaHoTen(char *s) {
    int len = (int)strlen(s);
    int i = 0, j = 0;
    bool inWord = false;
    
    // Bo khoang trang dau chuoi va chuan hoa giua cac tu
    while (i < len) {
        if (!isspace((unsigned char)s[i])) {
            if (inWord == false && j > 0) {
                s[j++] = ' ';
            }
            s[j++] = (inWord == false) ? toupper((unsigned char)s[i]) : tolower((unsigned char)s[i]);
            inWord = true;
        } else {
            inWord = false;
        }
        i++;
    }
    s[j] = '\\0';
}

// 3. Dao nguoc thu tu cac tu trong cau
void daoChuoi(char *s, int start, int end) {
    while (start < end) {
        char temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++; end--;
    }
}

void daoTuTrongCau(char *s) {
    int len = (int)strlen(s);
    daoChuoi(s, 0, len - 1); // Dao toan bo ky tu
    int start = 0;
    for (int i = 0; i <= len; i++) {
        if (s[i] == ' ' || s[i] == '\\0') {
            daoChuoi(s, start, i - 1); // Dao lai tung tu don le
            start = i + 1;
        }
    }
}

int main(void) {
    char s1[100] = "  nguYen   vAn   aN   ";
    printf("Truoc chuan hoa: \\"%s\\"\\n", s1);
    chuanHoaHoTen(s1);
    printf("Sau chuan hoa:   \\"%s\\"\\n", s1);
    
    char s2[] = "A man, a plan, a canal: Panama";
    printf("Palindrome \\"%s\\": %s\\n", s2, kiemTraPalindrome(s2) ? "DUNG" : "SAI");
    
    char s3[] = "Lap trinh C rat hay";
    printf("Truoc dao tu: \\"%s\\"\\n", s3);
    daoTuTrongCau(s3);
    printf("Sau dao tu:   \\"%s\\"\\n", s3);
    return 0;
}'''

    elif eid == 'PROG-05-04':
        code = '''#include <stdio.h>

// 1. my_strlen: Tinh do dai chuoi
size_t my_strlen(const char *s) {
    const char *p = s;
    while (*p) p++;
    return (size_t)(p - s);
}

// 2. my_strcpy: Sao chep chuoi
char* my_strcpy(char *dest, const char *src) {
    char *ret = dest;
    while ((*dest++ = *src++));
    return ret;
}

// 3. my_strcmp: So sanh noi dung hai chuoi
int my_strcmp(const char *s1, const char *s2) {
    while (*s1 && (*s1 == *s2)) {
        s1++;
        s2++;
    }
    return *(const unsigned char*)s1 - *(const unsigned char*)s2;
}

// 4. my_strcat: Noi chuoi src vao cuoi dest
char* my_strcat(char *dest, const char *src) {
    char *ret = dest;
    while (*dest) dest++;
    while ((*dest++ = *src++));
    return ret;
}

// 5. my_strstr: Tim kiem chuoi con needle trong chuoi me haystack
char* my_strstr(const char *haystack, const char *needle) {
    if (!*needle) return (char*)haystack;
    for (; *haystack; haystack++) {
        if (*haystack == *needle) {
            const char *h = haystack;
            const char *n = needle;
            while (*h && *n && (*h == *n)) {
                h++;
                n++;
            }
            if (!*n) return (char*)haystack;
        }
    }
    return NULL;
}

int main(void) {
    char buf[100];
    my_strcpy(buf, "Xin chao");
    printf("my_strlen = %zu\\n", my_strlen(buf));
    
    my_strcat(buf, " HCMUTE!");
    printf("my_strcat = \\"%s\\"\\n", buf);
    
    printf("my_strcmp = %d\\n", my_strcmp(buf, "Xin chao HCMUTE!"));
    
    char *sub = my_strstr(buf, "HCMUTE");
    printf("my_strstr('HCMUTE') = \\"%s\\"\\n", sub ? sub : "NULL");
    return 0;
}'''

    starter = f"""#include <stdio.h>

// TODO: Cai dat thuat toan cho bai tap {eid}: {title}

int main(void) {{
    // Viet ma nguon xu ly tai day
    
    return 0;
}}
"""

    essay_item = {
        'id': eid,
        'chapterId': ch_id,
        'title': f"Bài tập {num_str}: {title}",
        'difficulty': 'easy' if 'cơ bản' in diff.lower() or 'dễ' in diff.lower() else ('hard' if 'nâng cao' in diff.lower() or 'khó' in diff.lower() else 'medium'),
        'description': desc,
        'inputExample': in_ex,
        'outputExample': out_ex,
        'guidance': guidance,
        'starterCode': starter,
        'referenceCode': code,
        'tags': [f"Chương {ch_id}", "Tự luận", title]
    }
    essays_by_chapter[ch_id].append(essay_item)

out_dir = "src/subjects/c-lang/data/essays"
os.makedirs(out_dir, exist_ok=True)

for ch_id in range(1, 10):
    ch_essays = essays_by_chapter[ch_id]
    file_path = os.path.join(out_dir, f"essays-ch{ch_id}.ts")
    ts_code = f"""/**
 * {file_path}
 * Danh mục bài tập tự luận lập trình Chương {ch_id} ({len(ch_essays)} bài)
 * Đi kèm đề bài, gợi ý từng bước và khung code mẫu đối chiếu cho Monaco Editor
 */

import {{ CEssay }} from '../../types';

export const essaysCh{ch_id}: CEssay[] = {json.dumps(ch_essays, ensure_ascii=False, indent=2)};
"""
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(ts_code)
    print(f"✓ Created {file_path} ({len(ch_essays)} essays)")

# Create essays index.ts
index_file = os.path.join(out_dir, "index.ts")
import_lines = "\n".join([f"import {{ essaysCh{i} }} from './essays-ch{i}';" for i in range(1, 10)])
export_names = ",\n  ".join([f"essaysCh{i}" for i in range(1, 10)])
array_items = ", ".join([f"...essaysCh{i}" for i in range(1, 10)])

index_template = """/**
 * src/subjects/c-lang/data/essays/index.ts
 * Barrel export tập trung toàn bộ 32 bài tập tự luận lập trình C/C++
 */

import { CEssay } from '../../types';
__IMPORTS__

export {
  __EXPORTS__
};

export const allCEssays: CEssay[] = [
  __ARRAY__
];

export const getEssaysByChapter = (chapterId: number): CEssay[] => {
  return allCEssays.filter(e => e.chapterId === chapterId);
};
"""

index_code = (
    index_template.replace("__IMPORTS__", import_lines)
    .replace("__EXPORTS__", export_names)
    .replace("__ARRAY__", array_items)
)

with open(index_file, "w", encoding="utf-8") as f:
    f.write(index_code)

print(f"✓ Created {index_file}")
print("All 32 essays digitized successfully with 100% full implementations for 5.3 and 5.4!")
