import glob
import re

files = glob.glob('src/subjects/c-lang/**/*.ts', recursive=True)
count = 0

type_names = {
    'CChapter', 'CArticle', 'CQuestion', 'CFlashcard', 'CEssay',
    'CUserProgress', 'CQuestionSubtype', 'Difficulty', 'OptionId',
    'QuestionType', 'CSearchResult', 'CMockExamSession', 'Theme',
    'ThemeContextType', 'CTabMode'
}

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        lines = fp.readlines()
    
    new_lines = []
    modified = False
    for line in lines:
        m = re.match(r"^import\s+\{([^}]+)\}\s+from\s+(['\"][^'\"]+types[^'\"]*['\"]);?", line)
        if m:
            imported_items = [item.strip() for item in m.group(1).split(',')]
            # check if all items are types
            all_types = all(item in type_names for item in imported_items if item)
            if all_types and not line.startswith('import type'):
                new_lines.append(f"import type {{{m.group(1)}}} from {m.group(2)};\n")
                modified = True
                continue
        new_lines.append(line)
        
    if modified:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.writelines(new_lines)
        count += 1
        print(f"Updated type import in: {f}")

print(f"Total files updated: {count}")
