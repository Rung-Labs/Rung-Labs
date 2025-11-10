import re
import time
from difflib import SequenceMatcher
from typing import Optional
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel


def extract_emails(url: str, business_name: str = None):
    chrome_options = Options()
    chrome_options.add_argument("--headless=new")
    chrome_options.add_argument("--disable-gpu")c
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")

    driver = webdriver.Chrome(options=chrome_options)

    try:
        driver.get(url)
        time.sleep(3)
        html = driver.page_source
    except Exception as e:
        print(f"[!] Failed to load {url}: {e}")
        driver.quit()
        return []

    driver.quit()

    # --- Regex email extraction ---
    email_regex = re.compile(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+")
    found = set(re.findall(email_regex, html))

    filtered = [
        e for e in found
        if not any(skip in e.lower() for skip in [
            "example.com", "schema.org", "google", "cloudflare", "sentry", "w3.org"
        ])
    ]

    # --- Rank by similarity ---
    ranked = []
    if business_name:
        for e in filtered:
            name_part = e.split("@")[0]
            ratio = SequenceMatcher(None, name_part.lower(), business_name.lower()).ratio()
            ranked.append({"email": e, "similarity": round(ratio, 3)})
        ranked.sort(key=lambda x: x["similarity"], reverse=True)
    else:
        ranked = [{"email": e, "similarity": None} for e in filtered]

    return ranked


app = FastAPI(title="Email Extractor API", version="1.0.0")


class ExtractRequest(BaseModel):
    url: str
    business_name: Optional[str] = None


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/extract")
def extract(req: ExtractRequest):
    try:
        results = extract_emails(req.url, req.business_name)
        return {"results": results}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


