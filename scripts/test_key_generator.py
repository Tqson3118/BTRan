import random
from collections import Counter

def generate_balanced_keys(total_count=270, mock_indices=None):
    if mock_indices is None:
        mock_indices = set()
    
    mock_count = len(mock_indices)
    non_mock_count = total_count - mock_count
    
    # Target counts for mock (45): 11, 11, 11, 12
    # Target counts for total (270): 68, 67, 68, 67
    
    # Generate mock sequence
    mock_pool = ['A', 'B', 'C', 'D'] * 11 + ['D'] # 45
    # Shuffle or arrange mock sequence with max run <= 2
    mock_seq = []
    cycle = ['A', 'B', 'C', 'D', 'B', 'A', 'D', 'C', 'C', 'A', 'D', 'B']
    for i in range(mock_count):
        mock_seq.append(cycle[i % len(cycle)])
    # Adjust counts of mock_seq to match 11 A, 11 B, 11 C, 12 D
    # Let's count
    mc = Counter(mock_seq)
    # We will refine to exact counts
    
    # Simple backtracking or greedy approach:
    # Target counts:
    target_counts = {'A': 68, 'B': 67, 'C': 68, 'D': 67}
    target_mock = {'A': 11, 'B': 11, 'C': 11, 'D': 12}
    target_non_mock = {k: target_counts[k] - target_mock[k] for k in target_counts}
    
    keys = [None] * total_count
    
    # Assign mock keys
    rem_mock = dict(target_mock)
    last_mock_key = None
    mock_run = 0
    for idx in sorted(mock_indices):
        # Pick candidate from rem_mock that has count > 0 and doesn't violate run <= 2
        candidates = [k for k in ['A', 'B', 'C', 'D'] if rem_mock[k] > 0]
        # sort candidates by remaining count desc, then avoid last_mock_key if mock_run == 2
        candidates.sort(key=lambda k: (1 if k != last_mock_key else 0, rem_mock[k]), reverse=True)
        chosen = None
        for c in candidates:
            if c == last_mock_key and mock_run >= 2:
                continue
            chosen = c
            break
        if chosen is None:
            chosen = candidates[0]
        keys[idx] = chosen
        rem_mock[chosen] -= 1
        if chosen == last_mock_key:
            mock_run += 1
        else:
            last_mock_key = chosen
            mock_run = 1
            
    # Assign non-mock keys
    rem_non_mock = dict(target_non_mock)
    last_key = None
    run = 0
    for idx in range(total_count):
        if keys[idx] is not None:
            # mock key already assigned
            k = keys[idx]
            if k == last_key:
                run += 1
            else:
                last_key = k
                run = 1
        else:
            candidates = [k for k in ['A', 'B', 'C', 'D'] if rem_non_mock[k] > 0]
            candidates.sort(key=lambda k: (1 if k != last_key else 0, rem_non_mock[k]), reverse=True)
            chosen = None
            for c in candidates:
                if c == last_key and run >= 2:
                    continue
                chosen = c
                break
            if chosen is None:
                chosen = candidates[0]
            keys[idx] = chosen
            rem_non_mock[chosen] -= 1
            if chosen == last_key:
                run += 1
            else:
                last_key = chosen
                run = 1

    # Check runs
    def get_max_run(seq):
        mr, cr, cur = 0, 0, None
        for x in seq:
            if x == cur:
                cr += 1
            else:
                cur, cr = x, 1
            mr = max(mr, cr)
        return mr

    # If any run > 2 in keys or in mock keys, fix by swapping
    passes = 0
    while get_max_run(keys) > 2 and passes < 1000:
        passes += 1
        for i in range(2, total_count):
            if keys[i] == keys[i-1] == keys[i-2]:
                # Find an index j of same mock-status that can be swapped without introducing new run > 2
                is_m = i in mock_indices
                for j in range(total_count):
                    if (j in mock_indices) == is_m and keys[j] != keys[i]:
                        # Try swap
                        keys[i], keys[j] = keys[j], keys[i]
                        if get_max_run(keys) < get_max_run([keys[i-2], keys[i-1], keys[i]]):
                            break
                        # Undo
                        keys[i], keys[j] = keys[j], keys[i]

    print("Total keys count:", Counter(keys))
    mock_keys = [keys[i] for i in sorted(mock_indices)]
    print("Mock keys count:", Counter(mock_keys))
    print("Overall max run:", get_max_run(keys))
    print("Mock max run:", get_max_run(mock_keys))
    return keys

# Test with 45 mock indices
mock_idxs = set(range(0, 270, 6)) # 45 items
keys = generate_balanced_keys(270, mock_idxs)
