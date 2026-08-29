import sys, json
from PIL import Image
ref = sys.argv[1]
rects = json.load(sys.stdin)
im = Image.open(ref).convert('RGB')
W, H = im.size
out = {}
for r in rects:
    x, y, w, h = r['x'], r['y'], r['w'], r['h']
    # 端の1割を落として、枠線や重なった文字の影響を減らす
    mx, my = max(1, w // 10), max(1, h // 10)
    x0, y0 = max(0, x + mx), max(0, y + my)
    x1, y1 = min(W, x + w - mx), min(H, y + h - my)
    if x1 - x0 < 2 or y1 - y0 < 2:
        x0, y0, x1, y1 = max(0, x), max(0, y), min(W, x + w), min(H, y + h)
    if x1 - x0 < 1 or y1 - y0 < 1:
        continue
    crop = im.crop((x0, y0, x1, y1))
    small = crop.resize((8, 8), Image.BILINEAR)
    px = list(small.getdata())
    n = len(px)
    out[r['id']] = [round(sum(p[i] for p in px) / n) for i in range(3)]
json.dump(out, sys.stdout)
