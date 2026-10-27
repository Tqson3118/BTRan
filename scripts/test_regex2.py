import sys, os, glob, re
sys.stdout.reconfigure(encoding='utf-8')

for name, pattern in [("Law", "src/data/questions/questions-ch*.ts"), ("C-Lang", "src/subjects/c-lang/data/questions/questions-ch*.ts")]:
    files = sorted(glob.glob(pattern))
    total_opts = 0
    failed_deltas = 0
    for f in files:
        with open(f, 'r', encoding='utf-8') as fp:
            text = fp.read()
        raw_blocks = re.split(r'["\']?id["\']?\s*:\s*["\']q-', text)
        for blk in raw_blocks[1:]:
            m_opts = re.search(r'["\']?options["\']?\s*:\s*\[(.*?)\]\s*,\s*\n', blk, re.DOTALL)
            options = []
            if m_opts:
                opt_block = m_opts.group(1)
                for opt_m in re.finditer(r'["\']?id["\']?\s*:\s*["\']([A-E])["\']\s*,\s*["\']?text["\']?\s*:\s*(["\'])(.*?)\2\s*(?:,|\})', opt_block, re.DOTALL):
                    options.append({
                        'id': opt_m.group(1),
                        'text': opt_m.group(3).strip()
                    })
            if len(options) == 4:
                total_opts += 1
                lens = [len(o['text']) for o in options]
                delta = (max(lens) - min(lens)) / max(lens)
                if delta > 0.20:
                    failed_deltas += 1

    print(f"[{name}] Total parsed: {total_opts}, Failed delta > 20%: {failed_deltas}")
