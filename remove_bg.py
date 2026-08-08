import requests
from rembg import remove
from PIL import Image
from io import BytesIO

url = 'https://image.qwenlm.ai/public_source/66e31121-4622-4c40-b2e9-ebddcd1ca7dd/1c988038c-8053-43aa-8d48-1e626a1cec09.png'
response = requests.get(url)
img = Image.open(BytesIO(response.content))
output = remove(img)
output.save('tourist_transparent.png')
