"""Preserve received statements separately from editorial philosophy updates."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
archive = ROOT / 'references/archive/raw-statements'
today = json.loads((ROOT / 'source-notes/2026-10-15-astrology-original-statements.json').read_text())
parts = ['# Uday original teaching statements\n',
         'Compiled 15 October 2026. Original received text is preserved below, including repetitions and transcription wording. These are text records, not audio recordings. Source headings and prefaces are retained as metadata, not additional spoken statements. Assistant summaries are kept in the philosophy reference.\n',
         'Coverage: the existing selected earlier project-chat statements, the 1 October collection, the 10 October Telugu record, the 13 October benefits statements, the 14 October creator-entry statement, and all four substantive statements from the current conversation. This collection does not claim to include every message from every previous chat; unavailable or previously unselected messages have not been reconstructed.\n']
sources = [
    'references/archive/enlightenment-mission-statement-2026-10-01.md',
    'source-notes/2026-10-10-uday-original-statements-te.md',
    'source-notes/2026-10-13-benefits-original-statements.md',
    'source-notes/2026-10-14-creator-entry-original-statement.md',
]
earlier = json.loads((ROOT / 'source-notes/project-original-philosophy-statements.json').read_text())
parts.append('\n## Earlier selected project chat statements\n')
count = 0
for source in earlier['sources']:
    parts.append('\n### ' + source.get('title', source['threadId']) + '\n\nThread: ' + source['threadId'] + '\n')
    for statement in source['statements']:
        parts.append('\nMessage: ' + statement['id'] + '\n\n' + statement['text'] + '\n')
        count += 1
for name in sources:
    parts.append('\n## Retained source ' + name + '\n\n' + (ROOT / name).read_text() + '\n')
parts.append('\n## 15 October 2026 Astrology and the designed game\n\nThread: ' + today['threadId'] + '\n')
for n, statement in enumerate(today['statements'], 1):
    parts.append(f'\n### Statement {n}\n\nMessage: {statement["id"]}\n\n' + statement['text'] + '\n')
combined = '\n'.join(parts)
(archive / 'Uday_Raw_Statements.md').write_text(combined)
(archive / '2026-10-15-astrology-original-statements.json').write_text(json.dumps(today, ensure_ascii=False, indent=2) + '\n')
assert len(today['statements']) == 4
assert all(s['text'] in combined for s in today['statements'])
assert all(s['text'] in combined for src in earlier['sources'] for s in src['statements'])
print(f'Archived four current statements, {count} earlier selected messages, and {len(sources)} retained source files without rewriting their text.')
