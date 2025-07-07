# StreamNest - Fullstack Angular Firebase SSR App

StreamNest is a fullstack web application built with Angular featuring (SSR) and Firebase integration. This project demonstrates a production-ready setup combining Angular Universal, Express.js backend, Firebase hosting, and CI/CD pipelines to deliver a scalable, performant streaming platform.

---

## 🚀 Project Overview

- **Frontend:** Angular 17 with Angular Universal for SSR
- **Backend:** Express.js server to serve Angular SSR and REST endpoints
- **Authentication & Database:** Firebase (Firebase Auth, Firestore, Firebase Hosting)
- **Styling & UI:** Angular Material & Custom CSS
- **Deployment:** Firebase Hosting & Cloud Functions
- **CI/CD:** GitHub Actions workflows for build, test, and deploy automation

---

## 🛠️ Key Features

- Angular SSR for SEO-friendly, fast initial loads
- Firebase Authentication with Email/Password and Social providers
- Firestore NoSQL database for scalable data management
- Express server integration for SSR and REST APIs
- Responsive UI with Angular Material components
- Production-ready Firebase Hosting configuration
- Automated GitHub Actions workflows for continuous integration and deployment

---

## ⚙️ DevOps & CI/CD Setup

### 1. **GitHub Actions Workflows**

- **firebase-hosting-pull-request.yml**  
  Runs tests and builds the Angular app on every pull request to ensure code quality.

- **firebase-hosting-merge.yml**  
  Deploys the built app to Firebase Hosting on merges to the main branch.

### 2. **Build & Test Automation**

- Angular app build with SSR enabled
- Unit tests run with Karma and Jasmine
- Linting enforced with ESLint

### 3. **Firebase Hosting & Functions Deployment**

- Angular SSR app served via Express deployed as Firebase Cloud Function
- Static assets hosted via Firebase Hosting
- Environment configurations injected during build/deploy

---

## 🔧 Getting Started

### Prerequisites

- Node.js 18.x
- Angular CLI
- Firebase CLI
- Firebase project configured with Hosting & Functions enabled

### Setup

```
git clone https://github.com/ongunakaycom/streamnest-fullstack-angular-firebase-ssr-app.git
cd streamnest-fullstack-angular-firebase-ssr-app/GoogleFlix

npm install
firebase login
firebase use --add  # select your Firebase project

npm run build:ssr
npm run serve:ssr:GoogleFlix
Open http://localhost:4000 to view the app.
```

## ⚡ Deployment
```
firebase deploy --only hosting,functions
This will deploy the Angular SSR app along with any Firebase Functions and Hosting settings.
```

## 🧪 Testing
```
Run unit tests with:
npm test
```

## 📁 Project Structure Highlights
```
GoogleFlix/
├── src/app/            # Angular app source code (components, services, modules)
├── src/main.ts         # Angular client bootstrap
├── src/main.server.ts  # Angular SSR bootstrap
├── server.ts           # Express server to serve SSR and APIs
├── firebase.json       # Firebase Hosting & Functions config
├── angular.json        # Angular CLI config
├── package.json        # Dependencies and scripts
```
## 🤝 Contributing
Contributions and issues are welcome! Please open issues or pull requests on GitHub.

## 📄 License
This project is licensed under the [MIT License](./LICENSE) - see the LICENSE file for details.

## 📬 Author 

Ongun Akay, a Senior Full-Stack Developer with expertise across various technologies.

About Me
👀 I specialize in full-stack development with extensive experience in frontend and backend technologies. 🌱 Currently, I'm sharpening my skills in advanced concepts of web development. 💞️ I’m always open to exciting collaborations and projects that challenge my abilities. 📫 You can reach me at info@ongunakay.com.