import glob
import re

files = glob.glob('src/subjects/c-lang/**/*.ts', recursive=True)
count = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    # Replace from '...xyz.ts' with '...xyz'
    new_content = re.sub(r"(from\s+['\"][^'\"]+?)\.ts(['\"])", r"\1\2", content)
    
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(new_content)
        count += 1
        print(f"Removed .ts import from: {f}")

print(f"Total updated: {count}")
