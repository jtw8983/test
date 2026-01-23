import mariadb
from dotenv import load_dotenv
load_dotenv()
import os

def getConn() :
    try:
        return mariadb.connect(
            user=os.getenv('USER'),
            password=os.getenv('PASSWORD'),
            host=os.getenv('HOST'),
            port=int(os.getenv('PORT')),
            database=os.getenv('DATABASE')
        )
    except mariadb.Error as e:
            print(f"MariaDB Error : {e}")
            return None

def findOne(sql):
    result = None
    try:
        conn = getConn()
        if conn:
            cur = conn.cursor() # sql 에 연결
            cur.execute(sql) # sql문 실행
            row = cur.fetchone() 
            columns = [desc[0] for desc in cur.description] # 내용중에 첫번째가 열의 내용 이므로 0번째 인덱스 지정해서 뽑음
            cur.close() # transaction관련해서 commit이나 rollback이 있으므로 연결 제거 역순부터 제거하므로 cur 먼저 제거
            conn.close() # 연결 종료
            result = dict(zip(columns, row)) if row else None # 하나의 딕셔너리값으로 합성 시킴 => 행,열 객체화
    except mariadb.Error as e:
            print(f"MariaDB Error : {e}")
    return result

def findAll(sql):
    result = []
    try:
        conn = getConn()
        if conn:
            cur = conn.cursor() # sql 에 연결
            cur.execute(sql) # sql문 실행
            rows = cur.fetchall() 
            columns = [desc[0] for desc in cur.description] # 내용중에 첫번째가 열의 내용 이므로 0번째 인덱스 지정해서 뽑음
            cur.close() # transaction관련해서 commit이나 rollback이 있으므로 연결 제거 역순부터 제거하므로 cur 먼저 제거
            conn.close() # 연결 종료
            result = [dict(zip(columns, row)) for row in rows] # 하나의 딕셔너리값으로 합성 시킴 => 행,열 객체화
    except mariadb.Error as e:
            print(f"MariaDB Error : {e}")
    return result

def save(sql):
    result = False
    try:
        conn = getConn()
        if conn:
            cur = conn.cursor() # sql 에 연결
            cur.execute(sql) # sql문 실행
            conn.commit()
            cur.close() # transaction관련해서 commit이나 rollback이 있으므로 연결 제거 역순부터 제거하므로 cur 먼저 제거
            conn.close() # 연결 종료
            result = True
    except mariadb.Error as e:
            print(f"MariaDB Error : {e}")
    return result


deptNo1 = "d001"
deptNo2 = "d002"
deptNo3 = "d009"
arr = [deptNo1,deptNo2,deptNo3]
deptNos= tuple(arr)
sql = f"""
       SELECT dept_no, COUNT(emp_no) AS cnt
	    FROM edu.dept_emp
	    WHERE dept_no IN {tuple(arr)}
	    GROUP BY dept_no
	    ORDER BY 2 DESC;
        """
# print(sql)
# # print( findOne(sql))
# print( findAll(sql))

sql1 = "SELECT * FROM edu.test"
# print(findAll(sql))

name = "남달리"
sql2 = f'''
        INSERT INTO edu.test 
	        (`name`,`regDate`) 
        VALUE 
            ('{name}', NOW())
        '''
print( save(sql2) )
print( findAll(sql1))