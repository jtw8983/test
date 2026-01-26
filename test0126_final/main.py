from fastapi import FastAPI
from controller import root, user, board
import os
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.include_router(root.router)
app.include_router(user.router)
app.include_router(board.router)


static_dir = os.path.join(os.path.dirname(__file__),"update")
app.mount("/update",StaticFiles(directory=static_dir), name="update")