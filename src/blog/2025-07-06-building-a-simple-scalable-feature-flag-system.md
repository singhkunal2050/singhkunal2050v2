---
title: Building a Simple, Scalable Feature Flag System
author: Kunal Singh
description: Built a simple yet scalable feature flag system using Next.js API
  routes and Prisma—no Redux, no extra state libraries. It supports global and
  account-level flags and lets us roll out features or toggle them without
  redeploys.
tags:
  - post
  - nextjs
  - prisma
  - feature-flags
  - fullstack
  - backend
  - api-routes
  - clean-architecture
  - scalable-design
  - product-rollout
date: 2025-07-06T14:47:29.405Z
image: /img/post/download-7-.png
imageAlt: Feature Flags
readTime: 5 Minutes ⌚
---

Feature flags are a powerful way to control your application's behavior without needing to redeploy. Recently, I needed to implement a clean, backend-driven feature flag system to enable or disable features globally or per account. Here's how we did it using just **Next.js API routes**, **Prisma**, and a simple frontend fetch approach. No extra libraries or state management layers involved.

---

## 🌐 The Goal

We wanted to:

* Define feature flags that are either **global** or **account-specific**
* Let the backend serve the flags
* Have a simple way to access those flags on the client

---

## 📄 Database Schema (Prisma)

```js
model FeatureFlag {
  id        String   @id @default(uuid())
  flagKey   String
  value     Boolean
  scope     FlagScope
  accountId String?
  updatedAt DateTime @updatedAt
}

enum FlagScope {
  global
  account
}
```

This allows each flag to be:

* Global: applies to everyone
* Account-level: overrides global for a specific account

---

## 🚀 API Endpoint to Fetch Flags

We expose an endpoint at `/api/featureFlags`. It optionally accepts an `accountId`.

If you pass the account ID, it fetches both global and account-specific flags.

```ts
GET /api/featureFlags?accountId=abc123
```

### Example Response

```json
{
  "success": true,
  "flags": {
    "global": {
      "newDashboard": false
    },
    "account": {
      "abc123": {
        "newDashboard": true
      }
    }
  }
}
```

---

## 💪 Using Flags on the Frontend

Just make a `fetch` call during `getServerSideProps` or `useEffect`:

```js
const res = await fetch(`/api/featureFlags?accountId=${accountId}`);
const { flags } = await res.json();

const isNewDashboardEnabled =
  flags.account?.[accountId]?.newDashboard ??
  flags.global?.newDashboard ??
  false;
```

No Redux, no state libraries — just native fetch.

---

## ➕ Adding a New Flag

1. Add a global default:

```sql
INSERT INTO "FeatureFlag" (
  id, flagKey, value, scope, accountId, updatedAt
) VALUES (
  gen_random_uuid(), 'someFeature', false, 'global', NULL, CURRENT_TIMESTAMP
);
```

2. Optionally override for an account:

```sql
INSERT INTO "FeatureFlag" (
  id, flagKey, value, scope, accountId, updatedAt
) VALUES (
  gen_random_uuid(), 'someFeature', true, 'account', 'abc123', CURRENT_TIMESTAMP
);
```

---

## ✨ Final Thoughts

You don’t always need a fancy flag service or state management solution. If you're working with a small team or MVP, this setup can take you very far.

It’s easy to build, debug, and extend — and more importantly, keeps your logic flexible across environments and users.

---

Let me know if you’re implementing something similar or want to share ideas on improving this further!
