import json

def getData():
    f = open("./data/memo.json","r", encoding="utf-8")
    return json.load(f)

def setData():
    data = getData()
    f = json.dump(data, f, ensure_ascii=False)
    return json.dump(f)

def add(a):
    data = getData()
    result = a
    data["list"].append(result)
    print(data, result)
    data = setData()

def remove(b):
    data = getData()
    result = b
    data["list"].remove(b)
    print(data, result)
    data = setData()


def update(c,d):
    data = getData()
    result = d
    array = data["list"]
    index = array.index(c)
    array[index] = d
    print(data, result)
    data = setData()

def list():
    data = getData()
    array = data["list"]
    for i in range(len(array)):
        print(f"id:{i} name:{array[i]}")
