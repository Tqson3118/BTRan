import re
import glob

# Check subtypes in questions
subtypes = set()
for f in glob.glob('src/subjects/c-lang/data/questions/questions-ch*.ts'):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    found = re.findall(r"questionSubtype:\s*['\"]([^'\"]+)['\"]", c)
    subtypes.update(found)
print("Subtypes found:", subtypes)

# Check flashcards per chapter
for ch in range(1, 10):
    f = f'src/subjects/c-lang/data/flashcards/flashcards-ch{ch}.ts'
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    cards = re.findall(r"id:\s*['\"]c-fc-ch\d+-\d+['\"]", c)
    print(f"Ch{ch} flashcards: {len(cards)}")

# Check essays per chapter
for ch in range(1, 10):
    f = f'src/subjects/c-lang/data/essays/essays-ch{ch}.ts'
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    essays = re.findall(r"id:\s*['\"]PROG-\d+-\d+['\"]", c)
    print(f"Ch{ch} essays: {len(essays)}")
