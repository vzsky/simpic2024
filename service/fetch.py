import os
from dotenv import load_dotenv
import pymongo
import functools
import csv

foldl = lambda func, acc, xs: functools.reduce(func, xs, acc)

def optionalGet(dict, args) : 
  try: 
    return foldl (lambda dict, arg: dict.get(arg), dict, args)
  except AttributeError: 
    return None

# def teamIndex(teamid) : 
#     db = client["test"]
#     collection = db["teams"]
#     documents = collection.find()
#     print([x for x in documents])

def getUserInfo(document): 
    opGet = lambda args: optionalGet(document, args)
    result = {
        "submit": opGet(["submit"]),
        "fname": opGet(["fname"]),
        "lname": opGet(["lname"]),
        "nname": opGet(["nname"]),
        "nationality": opGet(["nationality"]),
        "natId": opGet(["natId"]),
        "birthday": opGet(["birthday"]),
        "sex": opGet(["sex"]),
        "gender": opGet(["gender"]),
        "email": opGet(["email"]),
        "phone": opGet(["phone"]),
        "telegram": opGet(["phone"]),
        "line": opGet(["line"]),
        "whatapps": opGet(["whatapps"]),
        "instagram": opGet(["instagram"]),
        "facebook": opGet(["facebook"]),
        "emergencyName": opGet(["emergencyName"]),
        "emergencyPhone": opGet(["emergencyPhone"]),
        "medCond": opGet(["medCond"]),
        "medRequire": opGet(["medRequire"]),
        "allergy": opGet(["allergy"]),
        "dietary": opGet(["dietary"]),
        "seasick": opGet(["seasick"]),
        "carsick": opGet(["carsick"]),
        "religion": opGet(["religion"]),
        "rel_cere": opGet(["relCeremony"]),
        "other": opGet(["other"]),
    }
    return result

def getUser(documents):
    i = 0
    result = []
    for document in documents : 
        opGet = lambda args: optionalGet(document, args) 
        if i%100 == 0: print(i, 'rows done')
        i += 1

        result.append({ 
            "role": opGet(["as"]), 
            "userid": opGet(["email"]),
            "observer_submit": opGet(["observer", "submit"]),
            "observer_org": opGet(["observer", "organization"]), 
            "observer_checkin": opGet(["observer", "checkin"]),  
            "observer_exc1": opGet(["observer", "excursion1"]),
            "observer_exc2": opGet(["observer", "excursion2"]),
            "observer_exc3": opGet(["observer", "excursion3"]),
            "observer_exc4": opGet(["observer", "excursion4"]),

            # "teams": [ teamIndex(team) for team in opGet(["teams"])],
            "teams": opGet(["teams"]),
            **getUserInfo(opGet(["userinfo"])),
        })
    return result

def getTeam(documents): 
    i = 0
    result = []
    for document in documents :
        opGet = lambda args: optionalGet(document, args) 
        if i%100 == 0: print(i, 'rows done')
        i += 1
        result.append({
            "id": opGet(["_id"]),
            "team_submit": opGet(["info", "submit"]),

            "team_school": opGet(["info", "school"]),
            "team_address": opGet(["info", "address"]),
            "team_contactname": opGet(["info", "contactname"]),
            "team_contactemail": opGet(["info", "contactemail"]),
            "team_checkin": opGet(["info", "checkin"]),
            "team_room": opGet(["info", "room"]),
            "team_excursion1": opGet(["info", "excursion1"]),
            "team_excursion2": opGet(["info", "excursion2"]),
            "team_excursion3": opGet(["info", "excursion3"]),
            "team_excursion4": opGet(["info", "excursion4"]), 

            **{'c1_'+k:v for (k, v) in getUserInfo(opGet(["contestant1"])).items()}, 
            **{'c2_'+k:v for (k, v) in getUserInfo(opGet(["contestant2"])).items()}, 
            **{'c3_'+k:v for (k, v) in getUserInfo(opGet(["contestant3"])).items()}, 
        })
    return result

load_dotenv('../.env')


conn_str = os.environ.get("MONGOURI")
if not conn_str : 
    print("no database config in the environment")
    exit()
client = pymongo.MongoClient(conn_str, serverSelectionTimeoutMS=5000)

db = client["test"]
collection = db["users"]
documents = collection.find()

users = getUser(documents)
print('writing')

FIELDSNAME = users[0].keys()
with open('user.csv', 'w+', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(FIELDSNAME)

    for user in users :
        writer = csv.DictWriter(f, fieldnames=FIELDSNAME)
        writer.writerow(user)


db = client["test"]
collection = db["teams"]
documents = collection.find()

teams = getTeam(documents)

print('writing')

FIELDSNAME = teams[0].keys()
with open('team.csv', 'w+', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(FIELDSNAME)

    for team in teams :
        writer = csv.DictWriter(f, fieldnames=FIELDSNAME)
        writer.writerow(team)
