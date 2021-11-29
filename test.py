import json

def write_json(new_data, filename=r'/home/george/Documents/djreact/startup/frontend/src/components/leis/data.json'):
    with open(filename,'r+') as file:
          # First we load existing data into a dict.
        file_data = json.load(file)
        # Join new_data with file_data inside emp_details
        file_data["lei_personalizada"].append(new_data)
        # Sets file's current position at offset.
        file.seek(0)
        # convert back to json.
        json.dump(file_data, file, indent = 4)
 
    # python object to be appended
y = {
    "id":2,
    "titulo":[1,2,3,4,5,6,7,8,9,10],
     "capitulos": [k for k in range(1,100,2)],
     "artigos": [k for k in range(1,280,2)],
     "secoes":[k for k in range(1,100,2)],
     "subsecoes":[k for k in range(1,100,2)],
     "nivel2":[k for k in range(1,1550,2)],
     "nivel3":[k for k in range(1,600,2)],
     "nivel4":[k for k in range(1,100,2)]
     
    }
     
write_json(y)

