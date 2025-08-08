from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import psycopg2
import os

app = FastAPI()

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the SkillSprint FastAPI backend!"}

# Replace with your actual Render PostgreSQL connection string
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://niranjan:LStA92QEJthn6eNBucCFQCUHJoI1pD0I@dpg-d29jnqndiees73crc9m0-a/sample_34bg")

def get_db_connection():
    conn = psycopg2.connect(DATABASE_URL, sslmode='require')
    return conn

class Submission(BaseModel):
    challengeId: int
    solution: str

@app.get("/api/challenges")
def get_challenges():
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("SELECT * FROM challenges")
        rows = cur.fetchall()
        cur.close()
        conn.close()
        return {"challenges": rows}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/submit")
def submit_solution(submission: Submission):
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO submissions (challengeId, solution) VALUES (%s, %s) RETURNING id",
            (submission.challengeId, submission.solution)
        )
        submission_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()
        return {"message": "Solution submitted successfully!", "submissionId": submission_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
