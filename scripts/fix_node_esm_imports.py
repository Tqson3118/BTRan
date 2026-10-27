import glob
import re

files = glob.glob('src/subjects/c-lang/**/*.ts', recursive=True)
count = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    # Replace from '../types' or from '../../types' with '../types/index.ts' or '../../types/index.ts'
    new_content = re.sub(r"from (['\"])(\.\./)+types\1", lambda m: m.group(0)[:-1] + "/index.ts" + m.group(1), content)
    
    # Also fix chapter/flashcard/essay imports if any are directory imports
    new_content = re.sub(r"from (['\"])(\.\./chapters)\1", r"from \1\2/index.ts\1", new_content)
    new_content = re.sub(r"from (['\"])(\.\./questions)\1", r"from \1\2/index.ts\1", new_content)
    new_content = re.sub(r"from (['\"])(\.\./flashcards)\1", r"from \1\2/index.ts\1", new_content)
    new_content = re.sub(r"from (['\"])(\.\./essays)\1", r"from \1\2/index.ts\1", new_content)

    if new_content != content:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(new_content)
        count += 1
        print(f"Updated: {f}")

print(f"Total updated: {count}")
