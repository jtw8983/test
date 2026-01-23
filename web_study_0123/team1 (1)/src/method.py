import json
import os

FILE_PATH = "./data/storage.json"

def empty():
  print("함수 정의가 되어 있지 않습니다.")

def getData():
  if not os.path.exists(FILE_PATH):
    result = { "t4_fighting": [] }
    f = open(FILE_PATH, "w", encoding="utf-8")
    json.dump(result, f, ensure_ascii=False)
    f.close()
  else :
    f = open(FILE_PATH, "r", encoding="utf-8")
    result = json.load(f)
    f.close()
  return result

def setData(data):
  if not os.path.exists(FILE_PATH):
    pass
  else :  
    f = open(FILE_PATH, "w", encoding="utf-8")
    json.dump(data, f, ensure_ascii=False)
    f.close()
  list(None)

# 시작
def list(arg):
	data=getData()
	if len(data["t4_fighting"]) > 0:
		line1 = "="*50
		line2 = "-"*50
		print(line1)
		print(f"숫자\t내용")
		for i in range(len(data["t4_fighting"])):
			if i < len(data["t4_fighting"]): print(line2)
			print(f"{data["t4_fighting"][i]["id"]}\t{data["t4_fighting"][i]["word"]}")
		print(line1)
	else:
		print("데이터가 없습니다.")


def insert(arg):
	data=getData()
	id=(max((a["id"] for a in data["t4_fighting"]), default=0)+1)
	row={"id":id, "word":arg.call}
	data["t4_fighting"].append(row)
	setData(data)

def update(arg):
	data =getData()
	for i in range(len(data["t4_fighting"])):
		if data["t4_fighting"][i]["id"] == int(arg.num):
			data["t4_fighting"][i]["word"] = arg.call
			break
	setData(data)

def remove(arg):
	data = getData()
	for i in range(len(data["t4_fighting"])):
		if data["t4_fighting"][i]["id"] == int(arg.num):
			del data["t4_fighting"][i]
			break
	setData(data)