from pathlib import Path
from PIL import Image
files=sorted(Path('output').glob('gif-frame-*.png'))
assert len(files)==11, 'Expected eleven captured UI frames'
frames=[Image.open(f).convert('RGB').quantize(colors=256) for f in files]
frames[0].save('docs/media/shopping-demo.gif',save_all=True,append_images=frames[1:],duration=[1400,1200,1200,1200,800,1000,160,160,160,700,2200],loop=0,optimize=True,disposal=2)
print('README demo GIF generated from captured UI frames.')
