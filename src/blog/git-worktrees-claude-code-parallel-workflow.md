---
title: Supercharge Your Workflow with Git Worktrees and Claude Code
author: Kunal Singh
description: How to run multiple Claude Code agents in parallel on the same
  repository using git worktrees, and why it changes how you build.
tags:
  - git
  - claude-code
  - developer-productivity
  - agentic
  - workflow
  - post
date: 2026-04-06T14:14:43.123Z
image: /img/post/image.png
imageAlt: Git Worktrees
readTime: 6 Minutes ⌚
---
Most developers context-switch. You are mid-way through a feature, a bug comes in, you stash, switch branches, fix the bug, switch back, pop the stash, and try to remember where you were. It is friction. Small, constant, invisible friction that compounds across a day.

Git worktrees combined with Claude Code eliminate this entirely. You can run multiple agents on the same repository in parallel, each working on a different task, without any of them knowing or caring about the others.

- - -

## What is a Git Worktree

A git worktree is an additional working directory linked to the same repository. It shares your `.git` folder, which means it has access to the full history, all branches, and all configuration. But it operates independently — its own branch, its own files on disk, its own terminal context.

You can have as many worktrees as you want. They live in separate directories, and they do not interfere with each other.

- - -

## What This Looks Like in Practice

Your repository lives at `~/projects/my-app`. You add two worktrees:

```shell
~/projects/my-app-auth       → branch: feature/auth
~/projects/my-app-dashboard  → branch: feature/dashboard
~/projects/my-app-bugfix     → branch: fix/api-timeout
```

You open a terminal in each directory, start Claude Code in each one, and assign a task. All three agents work simultaneously. When each is done, you review and merge the branches as normal.

- - -

## Setting It Up

**Step 1 — Create worktrees from your main repo**

```bash
# From your main project directory
git worktree add ../my-app-auth -b feature/auth
git worktree add ../my-app-dashboard -b feature/dashboard
git worktree add ../my-app-bugfix -b fix/api-timeout
```

Each command creates a new directory with the full working tree checked out on the specified branch.

**Step 2 — Open Claude Code in each worktree**

```bash
# Terminal 1
cd ../my-app-auth && claude

# Terminal 2
cd ../my-app-dashboard && claude

# Terminal 3
cd ../my-app-bugfix && claude
```

**Step 3 — Assign tasks and let them run**

Give each Claude Code session its task. You can stay in one terminal, check progress, steer, and come back to others. All three agents run independently with their own full context of the project.

**Step 4 — Clean up when done**

```bash
# After merging a branch, remove the worktree
git worktree remove ../my-app-auth

# List all active worktrees
git worktree list
```

- - -

## Why This Works So Well with Claude Code

A normal Claude Code session has context about one working directory. It reads files, makes edits, runs commands, all scoped to that folder. Worktrees are just folders. Each session gets its own isolated environment with no awareness of what the other sessions are doing.

This matters because:

* **No merge conflicts mid-task.** Each agent works on its own branch.
* **No context bleed.** Session 1 working on auth does not pick up changes from session 2 working on the dashboard.
* **Full parallelism.** You are not waiting. All agents work simultaneously.
* **Easy review.** When each task is done, you get a clean branch and a clean diff.

- - -

## A Real Workflow Example

Say you have three things to do today:

1. Add OAuth login
2. Build a new analytics dashboard
3. Fix a timeout bug in your API

Without worktrees, these are sequential. You work on one, finish or pause, then start the next.

With worktrees and Claude Code, you set all three up in five minutes. You hand off each task to an agent with enough context, then you review output, test, and merge. Your role shifts from writing to steering and reviewing.

The three tasks that would take a full day become a focused few hours.

- - -

## Tips

**Use descriptive directory names.** Name your worktree directories after the branch so you always know what is in each folder at a glance.

**Keep a notes file per session.** Drop a `TASK.md` in each worktree describing what the agent is working on. It helps Claude Code stay on track and helps you remember context when you return.

**Do not share worktrees between sessions.** One Claude Code session per worktree. Sharing a directory between two agents is asking for chaos.

**Use `git worktree list` often.** It gives you a clean overview of everything that is active, what branch it is on, and where it lives on disk.

**Clean up after merging.** Stale worktrees accumulate. Make it a habit to `git worktree remove` after you merge and delete the branch.

- - -

## The Shift in How You Work

The real change is not speed, though you do move faster. The real change is that you stop being blocked. While one agent handles something deep and slow, you are reviewing, testing, or steering another. The bottleneck moves from writing and waiting to thinking and deciding.

That is where you should be spending your time anyway.

- - -

## Quick Reference

```bash
# Add a new worktree on a new branch
git worktree add <path> -b <branch-name>

# Add a worktree on an existing branch
git worktree add <path> <branch-name>

# List all worktrees
git worktree list

# Remove a worktree (after merging)
git worktree remove <path>

# Remove worktree references that no longer exist on disk
git worktree prune
```

- - -

If you have not tried this setup yet, the overhead is two minutes. The payoff starts immediately.