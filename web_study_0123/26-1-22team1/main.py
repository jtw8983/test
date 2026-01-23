import argparse
from method import empty, user_list, user_add, user_detail, user_edit, user_delete, board_list, board_add, board_detail, board_edit, board_delete

DESC = "CLI Program"
commands = [
  {"command":"user_list", "arguments":[], "method": user_list},
  {"command":"user_add", "arguments": ["name","email","password","gender"], "method": user_add },
  {"command":"user_detail", "arguments": ["no"], "method": user_detail },
  {"command":"user_edit", "arguments": ["no", "email","password"], "method": user_edit},
  {"command":"user_delete", "arguments": ["no"], "method":user_delete },
  {"command":"board_list", "arguments":[], "method": board_list},
  {"command":"board_add", "arguments":["title","content","user_no"], "method": board_add},
  {"command":"board_detail", "arguments":["no"], "method": board_detail},
  {"command":"board_edit", "arguments":["no","title","content"], "method": board_edit},
  {"command":"board_delete", "arguments":["no"], "method": board_delete},
]

def checkCLI(args):
  for cmd in commands:
    if args.command == cmd["command"]:
      if cmd["method"] == None:
        empty()
      else:
        cmd["method"](args)
      break
  print("종료")

def run():
  parser = argparse.ArgumentParser(description=DESC)
  subparsers = parser.add_subparsers(dest="command")

  for cmd in commands:
    name = cmd["command"]
    arguments = cmd["arguments"]
    add_parser = subparsers.add_parser(name)
    for arg in arguments:
      add_parser.add_argument(arg)

  checkCLI(parser.parse_args())

if __name__ == "__main__":
  run()
