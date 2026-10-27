import re

test_str = """{ id: 'A', text: "In ra chuoi 'Hillo' tren man hinh." }"""
m = re.search(r'["\']?id["\']?\s*:\s*["\']([A-E])["\']\s*,\s*["\']?text["\']?\s*:\s*(["\'])(.*?)\2', test_str)
if m:
    print("Backreference matched correctly:", m.group(3))

# Compare with original regex in verify_mcq_bias.py:
m_orig = re.search(r'["\']?id["\']?\s*:\s*["\']([A-E])["\']\s*,\s*["\']?text["\']?\s*:\s*["\'](.*?)["\']', test_str)
if m_orig:
    print("Original flawed regex matched:", m_orig.group(2))
