import argparse

from cmd import add ## from 뒤에 파일명 쓰고 import 뒤에 함수
from cmd import remove
from cmd import update
from cmd import list


parser = argparse.ArgumentParser(description="CLI 프로그램")
subparsers = parser.add_subparsers(dest="command")

add_parser = subparsers.add_parser("add", help="단어 추가")
add_parser.add_argument("a", help="단어 추가")

add_parser = subparsers.add_parser("remove", help="단어 삭제")
add_parser.add_argument("b", help="단어 삭제")


add_parser = subparsers.add_parser("update", help="수정 ")
add_parser.add_argument("c", help="단어 수정")
add_parser.add_argument("d", help="변경 단어")

add_parser = subparsers.add_parser("list", help="목록 보기")

args = parser.parse_args()

if args.command == "add":
    add(args.a)
elif args.command == "remove":
    remove(args.b)
elif args.command == "update":
    update(args.c, args.d)
elif args.command == "list":
    list()
