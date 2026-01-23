import argparse
from method import empty, list, insert, remove, update

DESC = "CLI Program"
commands = [
  {"command":"t1_findAll", "arguments": [], "method": list },
  {"command":"t1_save", "arguments": ["call"], "method": insert },
  {"command":"t1_edit", "arguments": ["num", "call"], "method": update},
  {"command":"t1_remove", "arguments": ["num"], "method":remove }
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