from rembg import remove
from PIL import Image

inp = r'c:\Users\h\Desktop\portfolio\src\assets\portfolio\photo-1.jpg'
out = r'c:\Users\h\Desktop\portfolio\src\assets\portfolio\photo-1-transparent.png'
img = Image.open(inp).convert('RGBA')
result = remove(img)
result.save(out)
print('saved:', out)
