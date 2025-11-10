from fastapi import FastAPI
from app.routes import user

app = FastAPI(title="Digital Immortality Backend")

app.include_router(user.router)

@app.get("/")
async def root():
    return {"message": "Welcome to Digital Immortality API"}
