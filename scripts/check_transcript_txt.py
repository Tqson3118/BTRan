import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
log_path = r'C:\Users\Administrator\.gemini\antigravity\brain\7fcc26fe-4a63-4cb5-abef-964d51216dc1\.system_generated\logs\transcript.jsonl'

with open(log_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        d = json.loads(line)
        if d.get('type') == 'USER_INPUT':
            content = d.get('content', '')
            if 'txt' in content.lower() or 'tách' in content.lower() or 'text' in content.lower():
                print(f"Step {i}: {content}")
