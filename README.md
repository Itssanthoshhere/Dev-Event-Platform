<div align="center">

  <a href="https://github.com/Itssanthoshhere/Dev-Event-Platform" target="_blank">
    <img src="public/readme/readme-hero.webp" alt="Project Banner" />
  </a>

  <!-- Tech Stack Badges -->
  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=Next.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" /><br/>
    <img src="https://img.shields.io/badge/-Cloudinary-002C73?style=for-the-badge&logo=cloudinary&logoColor=white" />
    <img src="https://img.shields.io/badge/-PostHog-EB9D2A?style=for-the-badge&logo=posthog&logoColor=white" />
    <img src="https://img.shields.io/badge/-CodeRabbit-F88B83?style=for-the-badge&logo=coderabbitai&logoColor=white" />
    <img src="https://img.shields.io/badge/-Warp-000000?style=for-the-badge&logo=warp&logoColor=white" />
  </div>

  <h3>🚀 Dev Event Platform – Full-Stack Event Management App</h3>
  <b>Next.js 16 powered event management and analytics platform</b> that simplifies event creation, booking, and tracking.<br/>
  Built with <b>Next.js, TypeScript, MongoDB, Cloudinary, and PostHog</b> for a production-ready experience.<br/><br/>

</div>

---

## 📋 Table of Contents

- [📋 Table of Contents](#-table-of-contents)
- [✨ Introduction](#-introduction)
- [⚙️ Tech Stack](#️-tech-stack)
  - [🧩 Frontend](#-frontend)
  - [🗄️ Backend](#️-backend)
- [🔋 Core Features](#-core-features)
- [🤸 Quick Start](#-quick-start)
  - [Prerequisites](#prerequisites)
  - [1️⃣ Clone Repository](#1️⃣-clone-repository)
  - [2️⃣ Install Dependencies](#2️⃣-install-dependencies)
  - [3️⃣ Set Up Environment Variables](#3️⃣-set-up-environment-variables)
  - [4️⃣ Run the Project](#4️⃣-run-the-project)
- [🧱 Project Structure](#-project-structure)
- [🧠 Architecture Overview](#-architecture-overview)
  - [🧩 Frontend (Next.js 16)](#-frontend-nextjs-16)
  - [⚙️ Backend (API Routes)](#️-backend-api-routes)
  - [📊 Analytics Layer](#-analytics-layer)
- [🚀 Future Enhancements](#-future-enhancements)
- [🤝 Contribution](#-contribution)
- [🔗 Contacts](#-contacts)
- [📄 License](#-license)
- [🙏 Acknowledgements](#-acknowledgements)
- [⭐ Show Your Support](#-show-your-support)

---

## ✨ Introduction

**Dev Event Platform** is a modern **event management and discovery platform** designed to help users **create, manage, and explore developer events** effortlessly.

It features:

- Dynamic home page for upcoming events
- Secure event creation and booking
- Image uploads with Cloudinary
- Analytics and tracking powered by PostHog
- Reusable, scalable architecture with Next.js 16 App Router

Whether you’re hosting or attending, this platform delivers a smooth experience across both frontend and backend.

---

## ⚙️ Tech Stack

### 🧩 Frontend

- **Next.js 16** – Modern React framework with server actions and caching
- **TypeScript** – Type-safe, maintainable codebase
- **Tailwind CSS** – Utility-first styling for fast, responsive UIs

### 🗄️ Backend

- **MongoDB + Mongoose** – NoSQL database for event and booking storage
- **Next.js API Routes** – Secure serverless endpoints for CRUD operations
- **Cloudinary** – Media upload and optimization
- **PostHog** – Event tracking and analytics integration
- **CodeRabbit** – AI-powered code review and scaffolding
- **Warp** – Fast, collaborative terminal for efficient development

---

## 🔋 Core Features

👉 **Home Page** – Displays upcoming and featured events dynamically  
👉 **Event Creation** – Secure form-based event creation via MongoDB  
👉 **Event Details Page** – Includes agendas, images, and similar events  
👉 **Booking System** – Allows users to register for events  
👉 **Cloudinary Uploads** – Easy, optimized media handling  
👉 **PostHog Analytics** – Track user actions, engagement, and conversions  
👉 **Next.js 16 Caching** – Improved performance with built-in revalidation  
👉 **Reusable Components** – Modular and maintainable UI system

---

## 🤸 Quick Start

### Prerequisites

Make sure you have:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Itssanthoshhere/Dev-Event-Platform.git
cd Dev-Event-Platform
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in your root directory and add:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000/

MONGODB_URI=

CLOUDINARY_URL=

NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
```

> Replace placeholders with your actual credentials from **Cloudinary**, **MongoDB Atlas**, and **PostHog**.

### 4️⃣ Run the Project

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🧱 Project Structure

```
Dev-Event-Platform/
├── app/
│   ├── api/
│   │   └── events/
│   │       └── route.ts
│   ├── (root)/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   └── event/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── EventCard.tsx
│   ├── BookEvent.tsx
│   └── ...
├── lib/
│   ├── mongodb.ts
│   └── actions/
│       └── event.actions.ts
├── database/
│   └── event.model.ts
├── public/
│   └── readme/
│       └── readme-hero.webp
└── package.json
```

---

## 🧠 Architecture Overview

### 🧩 Frontend (Next.js 16)

- Uses **App Router** with **server actions** and **React Server Components**
- Leverages **cache tagging** and **ISR** for optimized performance
- Client-side event registration with smooth transitions

### ⚙️ Backend (API Routes)

- RESTful endpoints for creating and fetching events
- Mongoose-based schema validation and CRUD operations
- Serverless architecture hosted seamlessly with Next.js

### 📊 Analytics Layer

- Integrated **PostHog** for tracking:

  - Event creation rates
  - Page visits and user engagement
  - Booking conversions

---

## 🚀 Future Enhancements

- ✅ Implement authentication with **NextAuth.js**
- 🔔 Add email notifications for registrations
- 📱 Create an admin dashboard for event management
- 🌍 Enable global event discovery with filters and maps
- 🧠 Integrate AI recommendations for personalized events

---

## 🤝 Contribution

Contributions are always welcome!

1. Fork the repo
2. Create a feature branch:

   ```bash
   git checkout -b feature/my-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "feat: add my feature"
   ```

4. Push and open a Pull Request 🎉

---

## 🔗 Contacts

- **GitHub:** [Itssanthoshhere](https://github.com/Itssanthoshhere)
- **LinkedIn:** [Santhosh VS](https://www.linkedin.com/in/thesanthoshvs/)

---

## 📄 License

This project is for **educational and portfolio purposes only**.
All images, logos, and assets belong to their respective owners.

---

## 🙏 Acknowledgements

- [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) – Project inspiration
- [Next.js](https://nextjs.org/) – Full-stack React framework
- [Cloudinary](https://cloudinary.com/) – Image hosting
- [MongoDB Atlas](https://www.mongodb.com/) – Database platform
- [PostHog](https://posthog.com/) – Product analytics
- [TailwindCSS](https://tailwindcss.com/) – Styling framework

---

## ⭐ Show Your Support

If you like this project, **give it a ⭐** on GitHub and share it with others!
Let’s build together 🚀

---
