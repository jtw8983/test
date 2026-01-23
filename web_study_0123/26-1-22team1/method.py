from db import findOne, findAll, save

def empty():
  print("함수 정의가 되어 있지 않습니다.")

def user_detail(args): # 사용자 정보 보기
    sql = f"select `no`,`name`, `email`, `password`, `gender`, `del_yn`, `mod_date`,`reg_date` from team1.user where `no` = {args.no} "
    row = findOne(sql)
    print(f"번호\t이름\t 이메일\t 비밀번호\t성별\t탈퇴여부\t수정날짜\t생성일자")
    print("-"*100)
    print(f"{row['no']}\t{row['name']}\t{row['email']}\t{row['password']}\t{row['gender']}\t{row['del_yn']}\t{row['reg_date']}\t{row['mod_date']}")


def user_list(args): # 사용자 목록 가져오기
    sql =   """
            select `no`,`name`, `email`, `password`, `gender`, `mod_date`,`reg_date`
            from team1.user where `del_yn` = '0'
            """
    list = findAll(sql)
    print(f"번호\t이름\t 이메일\t 비밀번호\t성별\\t수정날짜\t생성일자")
    print("-"*50)
    for row in list:
        print(f"{row["no"]}\t{row["name"]}\t{row["email"]}\t{row["password"]}\t{row["gender"]}\t{row["del_yn"]}\t{row["reg_date"]}\t{row["mod_date"]}")

def user_add(args): # 사용자 추가
    sql = f"insert into team1.user (`name`, `email`, `password`,`gender`) values('{args.name}','{args.email}','{args.password}','{args.gender}')"
    # print(sql)
    save(sql)
    user_list(None)

def user_edit(args): # 사용자 정보 수정 그리고 기입 순서는 main.py에 있는 command argument순서
    sql = f"update team1.user set `name` = '{args.name}', `email` = '{args.email}',`password` = '{args.password}' where `no`= {args.no}"
    # print(sql)
    save(sql)
    user_list(None)

def user_delete(args): # 사용자 삭제표시
    sql = f"update team1.user set `del_yn` = '1' where `no` = {args.no}"
    # print(sql)
    save(sql)
    user_list(None)

def board_list(args):
    sql =  f"""
            SELECT b.no, b.title, u.name
            from team1.user AS u INNER JOIN team1.board AS b
            on(u.no = b.user_no) where b.del_yn  = '0'
            """
    list = findAll(sql)
    print(f"게시물 번호\t제목\t작성자 정보")
    print("-"*100)
    for row in list:
        print(f"{row["no"]}\t{row["title"]}\t{row["name"]}")
  

def board_add(args): # 게시물 등록
    sql = f"insert into team1.board (`title`, `content`,`user_no`) values('{args.title}','{args.content}', {args.user_no})"
    # print(sql)
    save(sql)
    board_list(None)

def board_detail(args): # 게시물 정보 보기
    sql = f""" SELECT b.no, b.title, b.content, b.del_yn, u.name, u.email, u.gender
            from team1.user AS u INNER JOIN team1.board AS b
            on(u.no = b.user_no) where `no` = {args.no} 
            """
    row = findOne(sql)
    print(f"게시물 번호\t제목\t내용\t게시물삭제여부\t작성자 이름\t게시물 이메일\t작성자 성별")
    print("-"*100)
    print(f"{row["no"]}\t{row["title"]}\t{row["content"]}\t{row["del_yn"]}\t{row["name"]}\t{row["email"]}\t{row["gender"]}")

def board_edit(args): # 게시물 수정
    sql = f"update team1.board set `title` = '{args.title}, 'content` = '{args.content}' where `no`= {args.no}"
    # print(sql)
    save(sql)
    board_list(None)

def board_delete(args): # 게시물 삭제표시
    sql = f"update team1.board set `del_yn` = '1' where `no` = {args.no}"
    # print(sql)
    save(sql)
    board_list(None)