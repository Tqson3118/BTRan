import re

with open('scripts/e2e-tier-tests.mjs', 'r', encoding='utf-8') as f:
    text = f.read()

matches = re.findall(r'fs\.readFileSync\(path\.join\(ROOT_DIR,\s*[\'"]([^\'"]+)[\'"]', text)
for m in sorted(set(matches)):
    print(m)
