# 🧩 JS JSON Response Analyzer

JS JSON Response Analyzer is a simple Node.js script that parses
real API JSON responses and highlights sensitive fields.

It is designed to help developers and security learners
understand what data is exposed in API responses.

---

## Overview

API responses often contain sensitive information such as:
- Tokens
- Authentication flags
- Internal endpoints

This tool allows you to paste any JSON response
and instantly analyze its contents.

---

## What This Tool Does

- Accepts a JSON response as input
- Parses the response into a JavaScript object
- Accesses common fields
- Iterates through all keys
- Flags sensitive fields like `token` and `auth`

---

## Why This Is Useful

In real applications:
- Tokens should not be logged
- Auth flags reveal logic
- Sensitive data leaks lead to vulnerabilities

This tool helps you spot those issues early.

---

## Usage

Run the script using Node.js  
node analyzer.js

Paste a valid JSON response when prompted.

Example input:
```json
{
  "status": "success",
  "token": "abc123",
  "url": "https://example.com",
  "api": "/v1/login",
  "auth": true
}
