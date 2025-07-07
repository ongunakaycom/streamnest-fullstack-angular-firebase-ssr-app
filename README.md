# StreamNest - Fullstack Angular Firebase SSR App with Golang Backend

**StreamNest** is a fullstack web application combining Angular Universal for SSR, Firebase for authentication and hosting, and a powerful backend built in **Go (Golang)**. This architecture delivers a scalable, SEO-friendly streaming platform with modern DevOps CI/CD practices.

---

## 🚀 Project Overview

- **Frontend:** Angular 17 with Angular Universal (SSR)
- **Backend:** **Golang REST API** deployed via Vercel
- **Authentication & Hosting:** Firebase (Auth, Hosting, Firestore)
- **Styling & UI:** Angular Material & Custom CSS
- **Deployment:** Firebase Hosting (Frontend) + Vercel (Backend)
- **CI/CD:** GitHub Actions for continuous integration and deployment

---

## 🛠️ Key Features

- Server-side rendering (SSR) for SEO optimization and fast performance
- Firebase Authentication (Email/Password and optional social providers)
- Firestore NoSQL database integration
- **Golang API** for movie search and streaming endpoints
- Responsive UI built with Angular Material
- Modern DevOps CI/CD pipeline via GitHub Actions
- Split deployment: Angular SSR served on Firebase, backend API on Vercel

---

## ⚙️ DevOps & CI/CD Setup

### 1. GitHub Actions Workflows

- **firebase-hosting-pull-request.yml**  
  Runs build and test steps on pull requests.

- **firebase-hosting-merge.yml**  
  Deploys Angular SSR app to Firebase Hosting on merge to `main`.

### 2. Build & Test Automation

- SSR-enabled Angular Universal build
- Karma + Jasmine unit testing
- Linting via ESLint
- Optional: Backend tests via `go test`

### 3. Deployment

- **Frontend (Angular + SSR):** Firebase Hosting + Cloud Functions
- **Backend (Go):** Hosted separately via [Vercel](https://vercel.com/) or other Go hosting providers

---

## 🔧 Getting Started

### Prerequisites

- Node.js 18+
- Angular CLI
- Firebase CLI
- Golang 1.21+
- Firebase project setup

### Setup

```bash
git clone https://github.com/ongunakaycom/streamnest-fullstack-angular-firebase-ssr-app.git
cd streamnest-fullstack-angular-firebase-ssr-app/GoogleFlix

npm install
firebase login
firebase use --add  # select your Firebase project

npm run build:ssr
npm run serve:ssr:GoogleFlix
# App runs locally at: http://localhost:4000
````

---

## ⚡ Deployment

### Frontend (Firebase)

```bash
firebase deploy --only hosting,functions
```

### Backend (Golang)

Deploy via [Vercel](https://vercel.com/) or your preferred Go host.

> Example backend endpoint:
> `https://google-flix-backend.vercel.app/api/movies?query=inception`

---

## 🧪 Testing

```bash
# Run Angular unit tests
npm test

# (Optional) Run Golang backend tests
go test ./...
```

---

## 📁 Project Structure Highlights

```
/
├── src/app/             # Angular application
├── src/main.server.ts   # Angular SSR entry point
├── server.ts            # Express SSR + routing
├── firebase.json        # Firebase config
├── angular.json         # Angular CLI config
├── vercel.json          # (Optional) Backend deployment config
├── go-backend/          # (Optional) Golang backend source
```

---

## 🤝 Contributing

Pull requests and issues are welcome! Let's build a better web together.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE) - see the LICENSE file for details.

---

## 📬 Author

**Ongun Akay** is a Senior Full-Stack Developer with expertise across various technologies.

👀 I specialize in full-stack development with extensive experience in frontend and backend technologies. 🌱 Currently, I'm sharpening my skills in advanced concepts of web development. 💞️ I’m always open to exciting collaborations and projects that challenge my abilities. 📫 You can reach me at info@ongunakay.com.