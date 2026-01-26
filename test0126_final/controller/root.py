from fastapi import APIRouter
import mariadb
from configs.db import getConn

router = APIRouter(prefix ="/root", tags=["기본"])

@router.get("/")
def root():
    try:
        conn = getConn()
        if conn:
            conn = getConn()
            cur = conn.cursor()
            sql = "select 1 as no"
            cur.execute(sql)
            columns = (desc[0] for desc in cur.description)
            row = cur.fetchone()
            result = dict(zip(columns, row)) if row else None
            return {"status" : True, "result" : result}
    except mariadb.Error as e:
        return {"status" : False}