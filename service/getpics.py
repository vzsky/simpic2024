import os
from dotenv import load_dotenv
import pymongo
import base64
import functools

foldl = lambda func, acc, xs: functools.reduce(func, xs, acc)

def optionalGet(dict, args) : 
  try: 
    return foldl (lambda dict, arg: dict.get(arg), dict, args)
  except AttributeError: 
    return None

def getPictures(documents, field):
    i = 0
    for document in documents : 
        if i%100 == 0: print(i, 'rows done')
        i += 1

        opGet = lambda args: optionalGet(document, args)
        nat = opGet([field, "natId"])
        ext = opGet([field, "picture", "name"])
        pic = opGet([field, "picture", "encoding"])

        if not pic or not ext or not nat : 
            continue

        pic = pic.split(',')
        ext = ext.split('.')[-1]

        filename = 'pics/{}.{}'.format(nat, ext)
        with open(filename, 'wb') as f:
            data = base64.b64decode(pic[1])
            f.write(data)
            
load_dotenv('../.env')

conn_str = os.environ.get("MONGOURI")
if not conn_str : 
    print("no database config in the environment")
    exit()
client = pymongo.MongoClient(conn_str, serverSelectionTimeoutMS=5000)

db = client["test"]
collection = db["users"]
documents = collection.find()

getPictures(documents, "userinfo")

db = client["test"]
collection = db["teams"]
documents = collection.find()

getPictures(documents, "contestant1")
getPictures(documents, "contestant2")
getPictures(documents, "contestant3")

