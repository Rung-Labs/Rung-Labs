#!/bin/bash

# Run the email extractor API with uvicorn
uvicorn email_extractor:app --host 0.0.0.0 --port 8000 --reload


