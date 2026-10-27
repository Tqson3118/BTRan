import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/append_ch3.py', 'r', encoding='utf-8') as f:
    ch3_code = f.read()

# strip header and verification footer
code_body = ch3_code.split('QUESTIONS_CH3 = []')[1].split('print(f"Constructed Chapter 3:')[0]

with open('scripts/data_ch1_to_ch3.py', 'r', encoding='utf-8') as f:
    orig = f.read()

# Remove initial empty QUESTIONS_CH3 = [] if present
orig = orig.replace('QUESTIONS_CH3 = []\n', '')

new_content = orig + '\nQUESTIONS_CH3 = []\n' + code_body + '\nprint(f"Loaded Chapter 3: {len(QUESTIONS_CH3)} questions")\n'

with open('scripts/data_ch1_to_ch3.py', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully merged Chapter 3 into scripts/data_ch1_to_ch3.py")
