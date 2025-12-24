# 📧 Bulk Email - Bulk Email Platform

A powerful, scalable **bulk email management platform** designed for businesses and organizations to send high-volume emails efficiently. Upload contacts via CSV/XLSX, organize them into categories, create targeted campaigns, send quick emails, and process everything asynchronously with reliable delivery tracking.

**Project**: Bulk Email  
**Purpose**: Enterprise-grade bulk email management and campaign orchestration  
**Built With**: TypeScript, Node.js, React, PostgreSQL, Redis, BullMQ

---

## 📑 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Architecture Overview](#-architecture-overview)
4. [Data Flow Diagram](#-data-flow-diagram)
5. [Sequence Diagrams](#-sequence-diagrams)
6. [Getting Started](#-getting-started)
7. [Project Structure](#-project-structure)
8. [Database Schema](#-database-schema)
9. [API Endpoints](#-api-endpoints)
10. [Environment Variables](#-environment-variables)
11. [Contributing](#-contributing)

---

## ✨ Features

- **Bulk Email Campaigns**: Create and schedule professional email campaigns to thousands of recipients with rich tracking
- **Contact Management**: Import contacts from CSV/XLSX files, automatic validation, categorization, and duplicate detection
- **Background Processing**: Asynchronous file processing and email delivery using **BullMQ** queues for reliability and performance
- **Quick Send**: Instantly send individual or small-batch emails without creating a full campaign
- **User Roles & Security**: Role-based access (USER, ADMIN, SUPERADMIN), JWT authentication, and OTP verification
- **Delivery Analytics**: Real-time stats including total sent, delivered, failed, bounced, and delivery rates
- **Responsive Dashboard**: Modern, intuitive Next.js frontend with beautiful UI components (Radix UI, Tailwind CSS, shadcn/ui)
- **File Upload Management**: Secure file uploads to ImageKit with progress tracking
- **Multi-Receiver Campaigns**: Send to single or multiple receiver groups
- **Price Management**: Dynamic pricing configuration for different features
- **Email Templates**: Pre-built and custom email templates with variable substitution
- **Error Handling & Retry Logic**: Automatic retry mechanism for failed emails with exponential backoff
- **Audit Logs**: Complete audit trail of all user actions and email deliveries

---

## 🛠 Tech Stack

### Monorepo Structure (Powered by Turborepo)

```
apps/
├── api                      → Express.js backend (Node.js + TypeScript)
├── web                      → Next.js 16 frontend (React 19 + Tailwind CSS)
├── worker-file-processor    → BullMQ worker for CSV/XLSX parsing & validation
└── worker-send-email        → BullMQ worker for sending emails via Nodemailer

packages/
├── @repo/db                 → Prisma ORM + PostgreSQL schema
├── @repo/config             → Shared config, logger, Redis client
├── @repo/email              → Reusable email service
├── @repo/types              → Shared TypeScript types
├── @repo/ui                 → Shared UI components
└── @repo/eslint-config      → ESLint configuration
```

### Core Technologies

- **Backend**: Express.js, TypeScript, Prisma ORM, BullMQ, Helmet, CORS
- **Frontend**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Radix UI, TanStack Query, Zustand
- **Database**: PostgreSQL (Neon)
- **Message Queue**: Redis + BullMQ for reliable background jobs
- **File Processing**: csv-parser, xlsx
- **Email Sending**: Nodemailer, Nodemailer-express-handlebars
- **Authentication**: JWT, OTP verification
- **File Storage**: ImageKit CDN
- **Logging**: Winston with file rotation
- **Monitoring**: Express Winston
- **Build Tools**: Turborepo, TypeScript, Turbopack
- **Deployment**: Docker & Docker Compose

---

## 🏗 Architecture Overview

### High-Level System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                       CLIENT LAYER                               │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │    Next.js Frontend (React 19 + Tailwind CSS)           │   │
│  │    - Dashboard, Campaigns, Contacts, Analytics          │   │
│  │    - State Management: Zustand                           │   │
│  │    - API Client: Axios with custom interceptors         │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────┬──────────────────────────────────────────────────┘
               │ HTTP/REST (Authenticated)
┌──────────────▼──────────────────────────────────────────────────┐
│                      API LAYER                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │    Express.js API Server (TypeScript)                   │   │
│  │    - Authentication & Authorization (JWT + Roles)       │   │
│  │    - Campaign Management                                │   │
│  │    - Contact Management                                 │   │
│  │    - File Upload Handling & Validation                  │   │
│  │    - Queue Job Submission & Monitoring                  │   │
│  │    - Error Handling & Rate Limiting                     │   │
│  └──────────────────────────────────────────────────────────┘   │
└──┬──────────────────────────────────────┬──────────────────────┬┘
   │                                      │                      │
   │ Queue Jobs                          │ Data               │ Storage
   │ (BullMQ)                            │ (Read/Write)      │
   │                                      │                      │
┌──▼──────────────────┐    ┌────────────▼──────┐    ┌──────────▼─────────┐
│   Redis Queue       │    │   PostgreSQL DB   │    │  ImageKit CDN      │
│  (BullMQ)           │    │  (Neon)           │    │  (File Storage)    │
│                     │    │                   │    │                    │
│ - File Processing   │    │ - Users           │    │ - Uploaded Files   │
│ - Email Sending     │    │ - Campaigns       │    │ - Profile Images   │
│ - Job Scheduling    │    │ - Contacts        │    │ - Email Attachments│
│ - Job Retry         │    │ - Receivers       │    └────────────────────┘
│ - Dead Letter Queue  │    │ - Email Logs      │
└─┬────────────────┬──┘    │ - Categories      │
  │                │       │ - Prices          │
  │                │       │ - Uploads         │
┌─▼──────────┐ ┌──▼────┐   │ - Recipients      │
│ File       │ │ Email │   └───────────────────┘
│ Processor  │ │ Sender│
│ Worker(s)  │ │Worker(s)
│            │ │
│ - Parse    │ │ - Send Emails
│ - Validate │ │ - Track Delivery
│ - Store    │ │ - Retry Failed
│ - Report   │ │ - Update Status
└────────────┘ └───────┘

        ▼                       ▼
┌────────────────┐    ┌────────────────┐
│ SMTP Service   │    │ Event Bus      │
│ (Nodemailer)   │    │ (Redis Pub/Sub)│
│                │    │                │
│ Sends emails   │    │ Broadcast      │
│ to recipients  │    │ job events     │
└────────────────┘    └────────────────┘
```

### System Components

| Component | Purpose | Technology |
|-----------|---------|-----------|
| **Frontend** | User interface for campaign management and analytics | Next.js 16 + React 19 |
| **API Server** | RESTful API for business logic and data management | Express.js + TypeScript |
| **PostgreSQL** | Primary data store for all entities | Neon (PostgreSQL) |
| **Redis Queue** | Job queue and caching layer | BullMQ + Redis |
| **File Processor Worker** | Processes uploaded CSV/XLSX files asynchronously | Node.js Worker |
| **Email Sender Worker** | Sends emails from queue with retry logic | Node.js Worker |
| **ImageKit** | External CDN for file storage and delivery | Cloud Storage |
| **SMTP Service** | Email delivery infrastructure | Nodemailer |

---

## 📊 Data Flow Diagram

### DFD Level 0: System Context

```
         ┌─────────────────────┐
         │   External SMTP     │
         │   Server            │
         │   (Email Provider)  │
         └──────────┬──────────┘
                    │ Sends/Receives Emails
                    │
         ┌──────────▼──────────┐
         │                     │
    ┌────┴─────────────────────┴────┐
    │  Bulk Email System       │
    │  (Bulk Email Platform)        │
    │                               │
    │  - Manages campaigns          │
    │  - Processes files            │
    │  - Tracks email delivery      │
    │  - Generates reports          │
    └──────────────┬────────────────┘
         ┌─────────┴────────────┐
         │                      │
    ┌────▼─────┐        ┌──────▼──────────┐
    │   Users  │        │ File Uploads    │
    │  (Web)   │        │ (CSV/XLSX)      │
    │          │        │ via ImageKit    │
    │ - Create │        │                 │
    │ - Manage │        │ - Contact Lists │
    │ - Track  │        │ - Bulk Data     │
    └──────────┘        └─────────────────┘
```

### DFD Level 1: Main Processes

```
                 ┌──────────────────┐
                 │   Frontend (Web) │
                 │    Next.js       │
                 └────────┬─────────┘
                          │ REST API Calls
          ┌───────────────┼───────────────┐
          │               │               │
    ┌─────▼──────┐  ┌────▼──────┐  ┌─────▼──────┐
    │ 1.0        │  │ 2.0       │  │ 3.0        │
    │ Auth &     │  │ Campaign  │  │ Contact    │
    │ User Mgmt  │  │ Manager   │  │ Manager    │
    │            │  │           │  │            │
    │ - Register │  │ - Create  │  │ - Upload   │
    │ - Login    │  │ - Update  │  │ - Import   │
    │ - Verify   │  │ - Schedule│  │ - Validate │
    │ - Roles    │  │ - Monitor │  │ - Organize │
    └─────┬──────┘  └────┬──────┘  └─────┬──────┘
          │              │              │
          │         ┌────▼──────┐      │
          │         │ 4.0       │      │
          │         │ Email     │      │
          │         │ Sender    │      │
          │         │ (Queue)   │      │
          │         └────┬──────┘      │
          │              │             │
    ┌─────▼──────────────▼─────────────▼─────┐
    │       PostgreSQL Database                │
    │  (User, Campaign, Contact, EmailLog)    │
    └────────────────────────────────────────┘
           │                │           │
           │                │           │
    ┌──────▼───┐    ┌───────▼───┐  ┌───▼────────┐
    │ Logging   │    │ Audit     │  │ Analytics  │
    │ &         │    │ Trails    │  │ Dashboard  │
    │ Monitoring│    │           │  │            │
    └───────────┘    └───────────┘  └────────────┘
```

### DFD Level 2: Email Campaign Workflow

```
                    ┌────────────────────┐
                    │ User Creates       │
                    │ Campaign (Web)     │
                    └────────┬───────────┘
                             │
                  ┌──────────▼──────────┐
                  │ 1. API Validation   │
                  │ - Email template    │
                  │ - Recipients        │
                  │ - Subject           │
                  └──────────┬──────────┘
                             │
                  ┌──────────▼──────────┐
                  │ 2. Store Campaign   │
                  │    in Database      │
                  │ - Set status DRAFT  │
                  └──────────┬──────────┘
                             │
                  ┌──────────▼──────────┐
                  │ 3. Fetch Recipients │
                  │    from Database    │
                  │ - Query Contacts    │
                  │ - Apply Filters     │
                  └──────────┬──────────┘
                             │
                  ┌──────────▼──────────────────┐
                  │ 4. Create & Submit Jobs     │
                  │    to BullMQ Queue          │
                  │ - Batch recipients          │
                  │ - Create job payload        │
                  │ - Set priority/delay        │
                  └──────────┬──────────────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
    ┌────▼────┐         ┌────▼────┐         ┌───▼────┐
    │ Worker  │         │ Worker  │         │ Worker │
    │ Shard 1 │         │ Shard 2 │         │ Shard N│
    │         │         │         │         │        │
    │ Process │         │ Process │         │Process │
    │ Emails  │         │ Emails  │         │Emails  │
    └────┬────┘         └────┬────┘         └───┬────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             │
              ┌──────────────▼───────────────┐
              │ 5. Update in Database        │
              │ - Email log status           │
              │ - Campaign statistics        │
              │ - Mark job complete          │
              └──────────────┬────────────────┘
                             │
              ┌──────────────▼───────────────┐
              │ 6. Display on Dashboard      │
              │ - Real-time analytics        │
              │ - Delivery status            │
              │ - Error reports              │
              └──────────────────────────────┘
```

### DFD Level 3: File Upload Processing

```
          ┌──────────────────────────┐
          │ User Selects File        │
          │ (CSV/XLSX) from Local    │
          └────────────┬─────────────┘
                       │
          ┌────────────▼─────────────┐
          │ Request Upload Token     │
          │ from API (/imagekit/auth)│
          └────────────┬─────────────┘
                       │
          ┌────────────▼─────────────┐
          │ Receive Signature &      │
          │ Upload Auth Parameters   │
          └────────────┬─────────────┘
                       │
          ┌────────────▼─────────────┐
          │ Upload File Directly to  │
          │ ImageKit CDN             │
          └────────────┬─────────────┘
                       │
          ┌────────────▼─────────────┐
          │ Send Upload Details to   │
          │ API (/files/upload)      │
          └────────────┬─────────────┘
                       │
          ┌────────────▼──────────────────┐
          │ Store Upload Record          │
          │ Status: PENDING              │
          │ in Database                  │
          └────────────┬──────────────────┘
                       │
          ┌────────────▼──────────────────┐
          │ Submit Job to BullMQ Queue    │
          │ - File URL                    │
          │ - Upload ID                   │
          │ - User Info                   │
          └────────────┬──────────────────┘
                       │
       ┌───────────────▼────────────────┐
       │ File Processor Worker          │
       │ Starts Processing              │
       │ Status: PROCESSING             │
       │                                │
       │ 1. Download file from ImageKit │
       └───────────────┬────────────────┘
                       │
       ┌───────────────▼────────────────┐
       │ 2. Parse CSV/XLSX              │
       │    - Read headers              │
       │    - Extract records           │
       └───────────────┬────────────────┘
                       │
       ┌───────────────▼────────────────┐
       │ 3. Validate Contacts           │
       │    - Email format              │
       │    - Required fields           │
       │    - Duplicate check           │
       └───────────────┬────────────────┘
                       │
       ┌───────────────┼────────────────┐
       │               │                │
   ┌───▼────────┐ ┌───▼────────┐  ┌────▼─────┐
   │ Valid      │ │ Invalid    │  │ Duplicate │
   │ Contacts   │ │ Records    │  │ Records   │
   └───┬────────┘ └───┬────────┘  └────┬─────┘
       │              │                │
   ┌───▼────────────┐ │           ┌────▼──────┐
   │ Store Valid    │ │           │ Store     │
   │ Contacts in DB │ │           │ Invalid   │
   │ + Create       │ │           │ Records   │
   │   Category     │ │           │ for Review│
   └───┬────────────┘ │           └────┬──────┘
       │              │                │
       │   ┌──────────┴────────────────┘
       │   │
       └───▼──────────────────────┐
           │ Update Upload Record │
           │ Status: UPLOADED     │
           │ - Valid count        │
           │ - Invalid count      │
           │ - Total processed    │
           └──────────┬───────────┘
                      │
           ┌──────────▼───────────┐
           │ Send Notification    │
           │ (Email/Dashboard)    │
           │ Upload Complete      │
           └──────────────────────┘
```

---

## 🔄 Sequence Diagrams

### Sequence 1: User Registration & OTP Verification

```
User          Frontend      API         Database    Email Service
 │              │           │              │            │
 ├─ Register ──>│           │              │            │
 │ (Form)       │           │              │            │
 │              ├─ POST /auth/register ──>│            │
 │              │           │              │            │
 │              │           ├─ Validate Email          │
 │              │           ├─ Hash Password           │
 │              │           ├─ Create User ──────────>│
 │              │           │<──── Created ──────────│
 │              │           │                         │
 │              │           ├─ Generate OTP           │
 │              │           ├─ Send OTP Email ───────>│
 │              │           │              │<─ Sent ─┤
 │              │<─ OTP Sent ─┤            │         │
 │              │             │            │         │
 │ ─ Verify OTP ┤             │            │         │
 │              ├─ POST /verify-otp ─────>│         │
 │              │             ├─ Verify    │         │
 │              │             ├─ Mark OK ──────────>│
 │              │             │<──── OK ──────────┤│
 │              │             ├─ Generate JWT    │
 │              │<─ JWT Token ─┤           │       │
 │<─ Success ───┤             │           │       │
```

### Sequence 2: Campaign Creation & Sending

```
User          Frontend      API       Database    Queue      Worker      SMTP
 │              │           │            │        (Redis)      │        Service
 │              │           │            │          │          │           │
 ├─ Create ────>│           │            │          │          │           │
 │ Campaign     │           │            │          │          │           │
 │              ├─ POST /campaigns ─────>│         │          │           │
 │              │           │            │          │          │           │
 │              │           ├─ Validate  │          │          │           │
 │              │           ├─ Save ────────────────────────────────────────>│
 │              │           │<─ Campaign ID ─┤    │          │           │
 │              │<─ ID ──────┤            │    │          │           │
 │<─ Success ───┤           │            │    │          │           │
 │              │           │            │    │          │           │
 │              │           ├─ Add Jobs to Queue ──>│          │           │
 │              │           │            │    │ Batch Processing          │
 │              │           │            │    └──────────┬──────────────>│
 │              │           │            │          │ Send Emails       │
 │              │           │            │          │<─────────────────┤
 │              │           │ ◄─────────────────────── Update Status    │
 │              │           │ (Email Log)           │                  │
 │              │           │            │          │                  │
 │ ─ Check Stats ┤         │            │          │                  │
 │              ├─ GET /campaigns/:id ─────────────────────────────────>│
 │              │<─ Stats ──┤            │          │                  │
 │<─ Analytics ─┤           │            │          │                  │
```

### Sequence 3: File Upload & Processing

```
User          Frontend      API        DB      ImageKit    Queue     Worker
 │              │           │         │        (Storage)  (Redis)    │
 │              │           │         │           │         │        │
 ├─ Upload ────>│           │         │           │         │        │
 │ CSV          │           │         │           │         │        │
 │              ├─ Get Auth Token ──>│           │         │        │
 │              │<─ Token ───┤        │           │         │        │
 │              ├─ Upload to ImageKit ──────────>│         │        │
 │              │           │        │    │<─ Uploaded    │        │
 │              │           │        │    │(URL)         │        │
 │              │ ─ Register Upload ────────────────────────────────>│
 │              │           │        │    │         │  │        │
 │              │           ├─ Save Record ────────────────────────>│
 │              │           │        │    │         │ │        │
 │              │           ├─ Add Job ─────────────────────>│       │
 │              │<─ Upload ID ─┤      │    │         │ │        │
 │<─ Pending ───┤             │      │    │         │ │        │
 │              │             │      │    │         │ │  ┌──────▼─┐
 │              │             │      │    │         │ │  │ Process│
 │              │             │      │    │         │ │  │ File   │
 │              │ ◄───────────────────────────────── ── ─ ├─Update│
 │              │ (Status: PROCESSING)                 │  │      │
 │              │             │      │    │         │ │  ├─Parse │
 │              │             │      │    │         │ │  │       │
 │              │ ◄─────────────────────────────────────── ├─Store│
 │              │ (Status: UPLOADED, Count: 950)    │  │       │
 │<─ Complete ──┤             │      │    │         │ │  └───────┘
```

### Sequence 4: Quick Email Send

```
User          Frontend      API         Database    Queue      Worker    SMTP
 │              │           │              │      (Redis)      │        │
 │              │           │              │          │        │        │
 ├─ Send ──────>│           │              │          │        │        │
 │ Email        │           │              │          │        │        │
 │              ├─ POST /quick-send ─────>│         │        │        │
 │              │           │              │          │        │        │
 │              │           ├─ Validate    │          │        │        │
 │              │           ├─ Create Log ────────────────────────────>│
 │              │           │ (PENDING)    │          │        │        │
 │              │           ├─ Add to Queue ────────>│        │        │
 │              │<─ Email ID ─┤            │    │    │        │        │
 │<─ Queued ────┤           │            │    │    │        │        │
 │              │           │            │    │    │        │        │
 │              │           │            │    │  ┌──▼──────────────>│
 │              │           │            │    │  │ Send via SMTP   │
 │              │           │            │    │  │<────────────────┤
 │              │           │ ◄──────────────── ─────┤ Update (SENT)
 │              │           │ (Status: SENT)  │  │                │
 │              │           │                 │  │                │
 │ ─ Check Status ┤        │                 │  │                │
 │              ├─ GET /email/:id ──────────────────────────────────>│
 │              │<─ Status ──┤              │  │                │
 │<─ Delivered ─┤           │              │  │                │
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 20
- Docker & Docker Compose
- pnpm (recommended) or npm/yarn
- PostgreSQL database (or use Docker)
- Redis (or use Docker)

### Local Development with Docker

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/Bulk Email.git
cd Bulk Email
```

2. **Set up environment variables**

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```

3. **Start all services**

```bash
docker-compose up --build
```

Services available at:
- Frontend: http://localhost:3000
- API: http://localhost:4000
- PostgreSQL: localhost:5432
- Redis: localhost:6379

4. **Run Prisma migrations**

```bash
cd packages/db
npx prisma migrate dev
npx prisma generate
```

### Manual Setup

1. **Install dependencies**

```bash
pnpm install
```

2. **Setup databases locally**

```bash
# macOS with Homebrew
brew install postgresql redis
brew services start postgresql
brew services start redis
```

3. **Run Prisma migrations**

```bash
cd packages/db
npx prisma migrate dev
npx prisma generate
```

4. **Run services individually**

```bash
# Terminal 1 - API
pnpm dev -w api

# Terminal 2 - Web
pnpm dev -w web

# Terminal 3 - File Processor Worker
pnpm dev -w worker-file-processor

# Terminal 4 - Email Sender Worker
pnpm dev -w worker-send-email
```

---

## 📁 Project Structure

```
Bulk Email/
├── apps/
│   ├── api/                          # Express.js backend
│   │   ├── src/
│   │   │   ├── app.ts
│   │   │   ├── server.ts
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── middleware/
│   │   │   ├── routes/
│   │   │   ├── types/
│   │   │   ├── utils/
│   │   │   └── jobs/
│   │
│   ├── web/                          # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── lib/
│   │   │   └── types/
│   │
│   ├── worker-file-processor/
│   │   └── src/
│   │
│   └── worker-send-email/
│       └── src/
│
├── packages/
│   ├── db/                           # Prisma
│   │   └── prisma/
│   │
│   ├── config/                       # Shared config
│   ├── email/                        # Email service
│   ├── types/                        # Shared types
│   ├── ui/                           # UI components
│   └── eslint-config/
│
└── README.md
```

---

## 💾 Database Schema

Key entities: Users, Campaigns, Contacts, EmailLogs, Uploads, Categories, Prices, Receivers

---

## 🔌 API Endpoints

### Authentication
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/verify-otp`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/refresh-token`

### Campaigns
- `GET /api/v1/campaigns`
- `POST /api/v1/campaigns`
- `GET /api/v1/campaigns/:id`
- `PUT /api/v1/campaigns/:id`
- `GET /api/v1/campaigns/:id/stats`

### Contacts
- `GET /api/v1/contacts`
- `POST /api/v1/contacts`
- `POST /api/v1/contacts/bulk`

### File Upload
- `GET /api/v1/imagekit/auth`
- `POST /api/v1/uploads`
- `GET /api/v1/uploads/:id`

### Quick Send
- `POST /api/v1/quick-send`
- `GET /api/v1/email/:id`

---

## 🔐 Environment Variables

### API (.env)

```bash
DATABASE_URL=postgresql://user:password@host:5432/dbname
REDIS_URL=redis://user:password@host:6379
JWT_SECRET=your_super_secret_key
JWT_EXPIRY=7d
OTP_EXPIRY=30m
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
CLIENT_URL=http://localhost:3000
PORT=4000
NODE_ENV=development
```

### Frontend (.env)

```bash
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_public_key
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is proprietary. All rights reserved © 2025 Bulk Email

---

Built with ❤️ for reliable, large-scale email communication in Nepal and beyond.

**Bulk Email** – Send smarter, not harder.

**Last Updated**: December 24, 2025 | **Version**: 1.0.0
