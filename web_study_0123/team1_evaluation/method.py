from db import findOne, findAll, save

def empty():
  print("함수 정의가 되어 있지 않습니다.")

def users_list(args):
  sql =   """
            select `no`,`name`, `email`, `password`, `gender`, `del_yn`, `mod_date`,`reg_date`
            from team1.user
            """
  list = findAll(sql)
  print(f"번호\t이름\t 이메일\t 비밀번호\t성별\t지운년도\t생성날짜\t수정일자")
  print("-"*100)
  for row in list:
        print(f"{row["no"]}\t{row["name"]}\t{row["email"]}\t{row["password"]}\t{row["gender"]}\t{row["del_yn"]}\t{row["reg_date"]}\t{row["mod_date"]}")
def users_add(args):
    sql = f"insert into team1.user (`name`, `email`, `password`,`gender`,`del_yn`) values('{args.name}','{args.email}','{args.password}','{args.gender}','{args.del_yn}')"
    save(sql)
  
def users_detail(args):
    sql = f"select * from edu.user where `no` = {args.no} "
    list2 = findOne(sql)
    save(sql)
    print(list2)

def users_edit(args):
    sql = f"update team1.user set `email` = '{args.email}',`password` = '{args.password}' where `no`= {args.no}"
    save(sql)


def users_delete(args):
    sql = f"update team1.user set `del_yn`= "1"
    save(sql)


def board_list(args):
  pass
def board_Add(args):
    save(sql)
    select(None)
def board_detail(args):
    
    save(sql)
    select(None)
def board_edit(args): 
    save(sql)
    select(None)

def board_detail(args): 
    save(sql)
    select(None)