import json
import ujson

def write_json(new_data, filename=r'/home/george/Documents/djreact/startup/frontend/src/components/leis/data.json'):
    with open(filename,'r+') as file:
          # First we load existing data into a dict.
        file_data = json.load(file)
        # Join new_data with file_data inside emp_details
        file_data["lei_personalizada"].append(new_data)
        # Sets file's current position at offset.
        file.seek(0)
        # convert back to json.
        ujson.dump(file_data, file, indent = 4)
 
    # python object to be appended
y = {
    "id":3,
    "titulo":[1],
     "capitulos": [k for k in range(1,100)],
     "artigos": [k for k in range(1,280)],
     "secoes":[k for k in range(1,100)],
     "subsecoes":[k for k in range(1,100)],
     "nivel2":[k for k in range(1,1550)],
     "nivel3":[k for k in range(1,600)],
     "nivel4":[k for k in range(1,100)]
     
    }
     
write_json(y)



################ QEUSTAO ###############
def write_json_q(user,new_data, filename=r'/home/george/Documents/djreact/startup/frontend/src/components/leis/data_questoes.json'):
    with open(filename,'r+') as file:
          # First we load existing data into a dict.
        file_data = json.load(file)
        # Join new_data with file_data inside emp_details
        if user in file_data:
            print("já tem")
            file_data[user].update(new_data)
        else: 
            file_data[user] = new_data
        # Sets file's current position at offset.
        file.seek(0)
        # convert back to json.
        ujson.dump(file_data, file, indent =0)

y = {}
id = 30
y[str(id)] = {
    "texto_item":"TESTE DE TEXTO DE ITEM 3 debaixo de secao",
    "titulo":0,
     "capitulo":'',
     "artigo": 0,
     "secao":'',
     "subsecao":'',
     "nivel2":0,
     "nivel3":'',
     "nivel4":''
     
    }



#write_json_q("teste@teste.com",y)