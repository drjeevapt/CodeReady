# CodeReady 🩺

> **Practice real-world medical coding. Know when you're job-ready.**

CodeReady is a production-grade healthcare education and job-readiness assessment SaaS designed for medical coding students, freshers, and entry-level coders. It bridges the gap between classroom guidelines and real-world clinical documentation assessments through realistic EHR simulation, objective skill profiling, and educational AI tutoring.

---

## 🌟 Key Features

- **Realistic EHR Clinical Documentation:** Authentic physician notes in ICD-10-CM Orthopedics and Rehabilitation.
- **10-Case Standardized Assessment:** Timed assessment engine with session recovery and refresh persistence.
- **Server-Side Scoring Engine:** Weighted readiness score calculated across:
  - **Coding Accuracy (50%)**
  - **Documentation Interpretation (25%)**
  - **Coding Judgment (15%)**
  - **Speed & Production Pacing (10%)**
- **Objective Readiness Levels:**
  - `0–39`: Needs Foundation
  - `40–59`: Developing
  - `60–74`: Approaching Job Ready
  - `75–89`: Job Ready
  - `90–100`: Assessment Ready
- **Instant Clinical Feedback:** In-depth rationale, guideline citations (e.g. Guideline I.B.4, IV.H, I.C.19, I.C.21), and common misconception callouts.
- **Educational AI Coding Tutor:** Interactive chat guiding the learner to reason from documentation with mandatory compliance disclaimers.
- **Practice Library & Personalized Drills:** Self-paced library filtered by specialty, difficulty, and weakest skill.
- **Secure Razorpay Monetization:** Server-side HMAC-SHA256 signature verification and subscription management.
- **Admin & Editorial Workflow:** Case authoring and review pipeline (`Draft` → `Pending Review` → `Approved` → `Published`).

---

## 🏗️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org) + React 18 + TypeScript
- **Styling:** Tailwind CSS + Custom Design System Tokens (Navy `#12304A`, Teal `#0E9F9A`, Inter typography)
- **Database & Auth:** Supabase (PostgreSQL with Row Level Security & Indexes) + Universal Standalone Persistence
- **Payments:** Razorpay Payments India (UPI, Cards, Netbanking) with server-side HMAC validation
- **AI Abstraction:** Multi-provider architecture (Gemini 1.5, OpenAI GPT-4o-mini, and deterministic educational engine)
- **Testing:** Vitest + React Testing Library + JSDOM

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js `v18.17+` or `v20+`
- npm `v9+` or `v10+`

### 2. Installation
```bash
git clone <repo-url>
cd CodeReady
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your secrets in `.env.local`:
```env
# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase (Optional for local standalone mode, required for cloud production)
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Razorpay Payments
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret

# AI Tutor Provider ('gemini', 'openai', or 'mock')
LLM_PROVIDER=mock
GEMINI_API_KEY=your-gemini-api-key
OPENAI_API_KEY=your-openai-api-key

# Admin Setup
ADMIN_EMAILS=admin@codeready.health
```

### 4. Running the App Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing

CodeReady includes unit, integration, and security test suites covering the scoring engine, readiness levels, entitlements, AI tutor safety, and Razorpay signature verification:

```bash
npm test
```

---

## 🗄️ Database Setup & Migrations

If deploying with Supabase PostgreSQL:
1. Open your Supabase project's **SQL Editor**.
2. Run `database/schema.sql` to generate tables, UUID extensions, performance indexes, and Row Level Security (RLS) policies.
3. Run `database/seed.sql` to populate the 10 initial clinical cases.

---

## 🔒 Security & Data Safety

- **Zero Client-Side Answer Leakage:** Answer keys (`correct_answer`), internal codes, and explanations are stripped from client payloads before submission.
- **Server-Side Scoring Verification:** Readiness scores and speed calculations are validated server-side.
- **Cryptographic Payment Authentication:** Payment authorizations are strictly verified using SHA256 HMAC tokens. Frontend statuses are never trusted alone.
- **Role-Based Authorization:** Learners can only access their own assessments and attempts. Admin routes (`/admin`, `/admin/cases`) are protected.
- **Synthetic EHR Privacy:** All clinical documentation is synthetic, de-identified, and compliant with educational safety guidelines.

---

## 📜 Medical Coding Disclaimer

> **Notice:** CodeReady is an educational simulation platform. All clinical notes are synthetic and de-identified. Content must be reviewed by certified medical coding professionals against applicable ICD-10-CM code sets before production healthcare billing.

---

## 👥 Authors & License

Developed for healthcare education and coding assessment excellence.
© 2026 CodeReady SaaS.
