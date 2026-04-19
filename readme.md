# AI Learning Dashboard

A React + Vite dashboard with a Gmail login tab (demo simulation) and a course syllabus overview for:
- Machine Learning
- GenAI
- Agentic AI

## Run locally without Docker

### Prerequisites
- Node.js 20+
- npm

### Steps
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (typically `http://localhost:5173`).

## Containerize and run with Docker

### Prerequisites
- Docker Desktop (Windows/macOS) or Docker Engine (Linux)

### Option 1: Build and run with Docker commands
```bash
docker build -t ai-app-dashboard:latest .
docker run --rm -p 8080:80 --name ai-app-dashboard ai-app-dashboard:latest
```
Open `http://localhost:8080`.

### Option 2: Run with Docker Compose
```bash
docker compose up --build
```
Open `http://localhost:8080`.

Run detached:
```bash
docker compose up -d --build
```

Stop:
```bash
docker compose down
```

## Ways to deploy on your machine

1. **Node dev mode** (`npm run dev`)
   - Best for development and fast UI iteration.

2. **Static production preview** (`npm run build && npm run preview`)
   - Uses Vite preview server for testing production artifacts.

3. **Docker container (recommended for consistency)**
   - Runs Nginx serving built static files.
   - Works similarly across Windows, macOS, and Linux.

4. **System service with Docker Compose**
   - Keep the app always up using `restart: unless-stopped`.
   - Great for personal homelab/laptop setups.

## Troubleshooting: files are missing locally or on GitHub

If you do not see files like `Dockerfile`, `src/App.jsx`, or `package.json`, use this recovery flow.

### Fast answer: how to get these exact 12 files from this environment

If the files exist here but not on your laptop, create a zip in one command:
```bash
bash scripts/export_project.sh
```

This produces `AI-App-files.zip` with these 12 files:
- `.dockerignore`
- `.gitignore`
- `Dockerfile`
- `docker-compose.yml`
- `index.html`
- `package-lock.json`
- `package.json`
- `readme.md`
- `src/App.jsx`
- `src/main.jsx`
- `src/styles.css`
- `vite.config.js`

Copy that zip to your laptop and extract it.

If you want them on GitHub instead, from this project folder:
```bash
git init
git add .
git commit -m "Initial commit: AI-App files"
git branch -M main
git remote add origin https://github.com/<your-username>/AI-App.git
git push -u origin main
```

### 1) Confirm you are in the correct folder
```bash
pwd
ls -la
```

You should be inside the project directory (example: `AI-App`).

### 2) Check git status and branch
```bash
git status -sb
git branch --show-current
git log --oneline -n 5
```

### 3) Verify the repository actually contains the expected files
```bash
git ls-tree --name-only -r HEAD
```

### 4) If the files exist only locally, push them to GitHub
Create an empty repository on GitHub first, then run:

```bash
git remote add origin https://github.com/<your-username>/AI-App.git
git push -u origin work
```

If your branch is `main` instead of `work`, push `main`:

```bash
git push -u origin main
```

### 5) If files are missing locally, re-download the repository
```bash
git clone https://github.com/<your-username>/AI-App.git
cd AI-App
```

Then verify:
```bash
ls -la
```
