#!/usr/bin/env python3
"""
Run script for the Email Extractor API
"""
import uvicorn
from email_extractor import app

if __name__ == "__main__":
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000,
        reload=True,  # Auto-reload on code changes
        log_level="info"
    )


