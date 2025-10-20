---
title: "Understanding CRDTs: The Magic Behind Collaborative Editing"
description: "A friendly deep dive into CRDTs and how they power real-time collaborative applications like Google Docs, Figma, and Notion."
tags:
  - CRDT
  - Collaborative Editing
  - Distributed Systems
  - Real-time
  - Tech Explained
  - post
date: 2025-10-20T05:06:20.158Z
---
# Understanding CRDTs: The Magic Behind Collaborative Editing

You know that moment when you're in a Google Doc with your team and everyone's cursors are moving around, and somehow nothing breaks? I was curious about how that actually works, so I went down a rabbit hole learning about CRDTs.

Let me walk you through it.

## The Core Problem

Imagine you and a friend are both editing a shared shopping list. You're both offline at different stores.

You add "milk" at position 3. Your friend adds "bread" at position 3.

When you both reconnect, what should happen?

![Confused math lady meme](https://media.giphy.com/media/WRQBXSCnEFJIuxktnw/giphy.gif)

Most traditional systems would freak out here. One person's change gets lost, or you get a conflict error asking you to manually fix it. Not great when you're just trying to make a shopping list.

## What Are CRDTs?

CRDT stands for Conflict-free Replicated Data Types. Basically, they're data structures designed so that concurrent changes can always be merged automatically, no matter what.

The key idea: no matter what order users receive updates, everyone eventually sees the same final state. Like how 3+5 and 5+3 both equal 8 regardless of order.

## A Simple Example: Counters

Let's say we're both tracking how many people showed up to a party.

We both start at 5. Then the WiFi goes out (as it does).

You see 2 more people arrive, so you think it's 7. I see 1 person arrive, so I think it's 6.

When we reconnect:
- Traditional approach: "Conflict! Is it 6 or 7?"
- CRDT approach: "You added 2, they added 1, total is 8"

The CRDT doesn't just store the final number. It tracks who incremented by how much, then adds everything up. Pretty clever.

## Text Editing Gets Interesting

Here's where it gets a bit tricky. Let's say we're editing a document that says "hello _____"

You type: "hello world"
I type: "hello Kunal"
We're both typing at the same spot, at the same time.

The result? Something like:

"hello worldKunal" or "hello Kunalworld"

![Wait what gif](https://media.giphy.com/media/ukGm72ZLZvYfS/giphy.gif)

## That Seems... Wrong?

Yeah, this is where CRDTs show their limitation. They guarantee that everyone will see the same result (convergence), but not that the result will make semantic sense.

The CRDT just merges the operations in a deterministic way. It doesn't understand that "world" and "Kunal" are both trying to complete the same sentence.

## So Why Does Google Docs Work Fine?

Good question. Google Docs and similar apps don't just use CRDTs on their own. They combine them with other strategies:

**Real-time character streaming:** Changes are sent letter by letter as you type, not as complete words. So you'd see the weird merge happening live ("hello wKourlnadl") and fix it immediately.

**Cursor awareness:** Those colored cursors showing where everyone's typing? They help you naturally avoid collisions. When you see someone else's cursor at the same spot, you move somewhere else.

**Smart identifiers:** Instead of tracking positions (which shift around), CRDTs give each character a unique ID based on its neighbors. This makes merging more predictable.

![Typing gif](https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif)

## Different Types of CRDTs

There are different CRDT variants for different use cases:

**G-Counter** (Grow-Only Counter): Only increments. Simple and efficient.

**PN-Counter** (Positive-Negative Counter): Can increment and decrement. Uses two G-Counters under the hood.

**G-Set** (Grow-Only Set): Elements can be added but never removed.

**LWW-Element-Set** (Last-Write-Wins): Elements can be added and removed. Conflicts are resolved by timestamp—most recent change wins.

**Sequence CRDTs**: The complex ones used for text editing. Libraries like Yjs and Automerge implement these.

## When Should You Use CRDTs?

**Good fit for:**
- Real-time collaborative editing (documents, code, whiteboards)
- Offline-first applications
- Chat apps and comment systems
- Anything where multiple people need to edit simultaneously

**Not ideal for:**
- Financial transactions (you need strong consistency here)
- Systems where operation order is critical
- Cases requiring ACID guarantees

## The Tradeoffs

**Benefits:**
- Automatic conflict resolution
- Works offline seamlessly
- No single point of failure
- Eventually consistent across all users

**Drawbacks:**
- Additional metadata overhead
- Can produce semantically odd merges
- Implementation complexity
- Some operations (like reordering lists) are surprisingly tricky

## Getting Started

If you want to build something with CRDTs, here are some good libraries:

**Yjs**: Popular and well-tested, especially for text editing
**Automerge**: Clean API with good documentation
**crdt.tech**: Great resource for learning more

Start with something simple like a shared counter or todo list. Once you understand the basics, you can move to more complex scenarios.

## Wrapping Up

CRDTs solve the hard problem of merging concurrent edits without data loss. But they don't automatically make the results sensible—that requires thoughtful UX design on top.

The magic in apps like Google Docs comes from combining CRDTs with real-time updates, visual feedback, and smart design choices that help users avoid conflicts in the first place.

It's a fascinating piece of technology that makes modern collaborative tools possible. Worth understanding if you're building anything where multiple people work together.

![Thumbs up gif](https://media.giphy.com/media/111ebonMs90YLu/giphy.gif)

---

*If you end up building something with CRDTs, I'd love to hear about it. Feel free to reach out!*
