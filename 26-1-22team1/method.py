from db import findOne, findAll, save

def empty():
  print("함수 정의가 되어 있지 않습니다.")

def user_detail(args): # 사용자 정보 보기
    sql = f"select `no`,`name`, `email`, `password`, `gender`, `del_yn`, `mod_date`,`reg_date` from team1.user where `no` = {args.no} "
    list2 = findOne(sql)
    print(f"번호\t이름\t 이메일\t 비밀번호\t성별\t탈퇴여부\t수정날짜\t생성일자")
    print("-"*100)
    for row in list2:
        print(f"{row["no"]}\t{row["name"]}\t{row["email"]}\t{row["password"]}\t{row["gender"]}\t{row["del_yn"]}\t{row["reg_date"]}\t{row["mod_date"]}")

def user_list(args): # 사용자 목록 가져오기
    sql =   """
            select `no`,`name`, `email`, `password`, `gender`, `del_yn`, `mod_date`,`reg_date`
            from team1.user
            """
    list = findAll(sql)
    print(f"번호\t이름\t 이메일\t 비밀번호\t성별\t탈퇴여부\t수정날짜\t생성일자")
    print("-"*50)
    for row in list:
        print(f"{row["no"]}\t{row["name"]}\t{row["email"]}\t{row["password"]}\t{row["gender"]}\t{row["del_yn"]}\t{row["reg_date"]}\t{row["mod_date"]}")

def user_add(args): # 사용자 추가
    sql = f"insert into team1.user (`name`, `email`, `password`,`gender`,`del_yn`) values('{args.name}','{args.email}','{args.password}','{args.gender}','{args.del_yn}')"
    # print(sql)
    save(sql)
    user_list(None)

def user_edit(args): # 사용자 정보 수정 그리고 기입 순서는 main.py에 있는 command argument순서
    sql = f"update team1.user set `email` = '{args.email}',`password` = '{args.password}' where `no`= {args.no}"
    # print(sql)
    save(sql)
    user_list(None)

def user_delete(args): # 사용자 삭제표시
    sql = f"update team1.user set `del_yn` = '1' where `no` = {args.no}"
    # print(sql)
    save(sql)
    user_list(None)

def board_list(args):
    sql =   """
            SELECT b.content, u.name
            from team1.user AS u INNER JOIN team1.board AS b
            on(u.no = b.user_no)
            """
    list = findAll(sql)
    print(list)
  

def board_add(args): # 게시물 등록
    sql = f"insert into team1.board (`title`, `content`,`del_yn`,`user_no`) values('{args.title}','{args.content}','{args.del_yn}', {args.user_no})"
    # print(sql)
    save(sql)
    board_list(None)

def board_detail(args): # 게시물 정보 보기
    sql = f""" SELECT b.content, u.name 
            from team1.user AS u INNER JOIN team1.board AS b
            on(u.no = b.user_no) where `no` = {args.no} 
            """
    list2 = findAll(sql)
    print(f"선택한 글\t작성자 정보")
    print("-"*100)
    for row in list2:
        print(f"{row["content"]}\t{row["name"]}")

def board_edit(args): # 게시물 수정
    sql = f"update team1.board set `content` = '{args.content}' where `no`= {args.no}"
    # print(sql)
    save(sql)
    board_list(None)

def board_delete(args): # 게시물 삭제표시
    sql = f"update team1.board set `del_yn` = '1' where `no` = {args.no}"
    # print(sql)
    save(sql)
    board_list(None)
    print(board.del_yn)

    