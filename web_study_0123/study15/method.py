from db import findOne, findAll, save

def empty(a):
    print("함수 정의가 되어 있지 않습니다.")

def select2(args): # 사용자 정보 보기
    sql = f"select * from edu.user where `no` = {args.no} "
    list2 = findOne(sql)
    print(list2)

def select(args): # 사용자 목록 가져오기
    sql =   """
            select `no`,`name`, `email`, `password`, `gender`, `delYn`, `modDate`,`regDate`
            from edu.user
            """
    list = findAll(sql)
    print(f"번호\t이름\t 이메일\t 비밀번호\t성별\t지운년도\t생성날짜\t수정일자")
    print("-"*50)
    for row in list:
        print(f"{row["no"]}\t{row["name"]}\t{row["email"]}\t{row["password"]}\t{row["gender"]}\t{row["delYn"]}\t{row["regDate"]}\t{row["modDate"]}")

def insert(args): # 사용자 등록
    sql = f"insert into edu.user (`name`, `email`, `password`,`gender`,`delYn`) values('{args.name}','{args.email}','{args.password}','{args.gender}','{args.delYn}')"
    # print(sql)
    save(sql)
    select(None)

def update(args): # 사용자 정보 수정 그리고 기입 순서는 main.py에 있는 command argument순서
    sql = f"update edu.user set `email` = '{args.email}',`password` = '{args.password}' where `no`= {args.no}"
    # print(sql)
    save(sql)
    select(None)

def delete(args): # 사용자 탈퇴
    sql = f"delete from edu.user where `no` ={args.no}"
    # print(sql)
    save(sql)
    select(None)