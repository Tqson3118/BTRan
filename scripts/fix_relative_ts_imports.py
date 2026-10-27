import glob
import re
import os

files = glob.glob('src/subjects/c-lang/**/*.ts', recursive=True)
count = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    dir_name = os.path.dirname(f)
    
    # Replace from './xyz' or from '../xyz' where xyz.ts exists
    def replace_import(m):
        quote = m.group(1)
        rel_path = m.group(2)
        # Check if already ends with .ts
        if rel_path.endswith('.ts'):
            return m.group(0)
        # Check if target .ts exists
        target_ts = os.path.normpath(os.path.join(dir_name, rel_path + '.ts'))
        if os.path.exists(target_ts):
            return f"from {quote}{rel_path}.ts{quote}"
        target_index_ts = os.path.normpath(os.path.join(dir_name, rel_path, 'index.ts'))
        if os.path.exists(target_index_ts):
            return f"from {quote}{rel_path}/index.ts{quote}"
        return m.group(0)

    new_content = re.sub(r"from (['\"])(\.\.?[^'\"]+)\1", replace_import, content)

    if new_content != content:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(new_content)
        count += 1
        print(f"Updated: {f}")

print(f"Total updated: {count}")
