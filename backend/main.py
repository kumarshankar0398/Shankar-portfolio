from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from datetime import datetime
import uvicorn
from typing import Optional

app = FastAPI(
    title="Shankar Kumar Portfolio API",
    description="Backend API for portfolio contact form and analytics",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data Models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: Optional[str] = "Portfolio Contact"
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str
    timestamp: str

class HealthCheck(BaseModel):
    status: str
    timestamp: str
    version: str

# In-memory storage (replace with DB in production)
contact_submissions = []

@app.get("/", tags=["Root"])
async def root():
    return {
        "message": "Shankar Kumar Portfolio API",
        "docs": "/docs",
        "version": "1.0.0"
    }

@app.get("/health", response_model=HealthCheck, tags=["Health"])
async def health_check():
    return HealthCheck(
        status="healthy",
        timestamp=datetime.now().isoformat(),
        version="1.0.0"
    )

@app.post("/api/contact", response_model=ContactResponse, tags=["Contact"])
async def submit_contact(form_data: ContactForm):
    try:
        submission = {
            "id": len(contact_submissions) + 1,
            "name": form_data.name,
            "email": form_data.email,
            "subject": form_data.subject,
            "message": form_data.message,
            "timestamp": datetime.now().isoformat()
        }
        contact_submissions.append(submission)

        # Here you can add email notification logic
        # e.g., send_email(to="shankarkm1707@gmail.com", ...)

        return ContactResponse(
            success=True,
            message="Thank you for reaching out! I will get back to you soon.",
            timestamp=datetime.now().isoformat()
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/contact/submissions", tags=["Admin"])
async def get_submissions():
    return {"submissions": contact_submissions, "count": len(contact_submissions)}

@app.get("/api/stats", tags=["Analytics"])
async def get_stats():
    return {
        "total_submissions": len(contact_submissions),
        "api_version": "1.0.0",
        "status": "active"
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
