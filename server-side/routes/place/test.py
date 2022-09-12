import json

import easyocr




value = input()
# user=json.loads(value)
#aamer=json.loads(value['name'])

reader = easyocr.Reader(['en']) # this needs to run only once to load the model into memory
result = reader.readtext(value,detail=0)
print(value)
# print(f"your age is ")
print(result)



