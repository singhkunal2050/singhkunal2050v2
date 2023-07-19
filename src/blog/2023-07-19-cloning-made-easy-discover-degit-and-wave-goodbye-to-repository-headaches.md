---
title: "Cloning Made Easy: Discover degit and Wave Goodbye to Repository Headaches!"
author: Kunal Singh
description: Have you ever faced the dilemma of wanting just a small portion of
  a repository, but ended up cloning the whole thing? Well, worry no more!
  Today, I'm here to share an exciting solution that will save you time and disk
  space.
tags:
  - post
  - git
  - productivit
date: 2023-07-19T15:25:26.206Z
image: /img/post/degit-cover.png
imageAlt: "Cloning Made Easy: Discover degit and Wave Goodbye to Repository Headaches!"
readTime: 2 Minutes ⌚
---
Have you ever faced the dilemma of wanting just a small portion of a repository, but ended up cloning the whole thing? Well, worry no more! Today, I'm here to share an exciting solution that will save you time and disk space. Let's dive into the world of degit, an incredible npm package that will revolutionize the way you work with repositories!

### The Dilemma: Cloning vs. Snippet Hunting

Have you ever tried cloning an entire repository when you only needed a specific subdirectory or file? It can be frustrating, right? You end up with a bunch of unnecessary code cluttering your workspace and wasting precious time. But fear not, degit is here to rescue you!

### Meet degit: The Subdirectory Magician

degit is a lightweight, powerful tool that allows you to download just the parts of a repository you truly need. With degit, you can say goodbye to tedious cloning and hello to selective downloading!

### How does it work?

Using degit is as easy as pie! Simply install it globally with npm:

```shell
npm install -g degit
```

Once you have degit at your fingertips, it's time to work some magic! To download a specific subdirectory from a repository, use the following command:

```shell
# Command Format
degit <repo> <destination> [--branch <branch>] [--force]

# these commands are equivalent
degit github:user/repo
degit git@github.com:user/repo
degit https://github.com/user/repo

# download from GitLab
degit gitlab:user/repo
degit git@gitlab.com:user/repo
degit https://gitlab.com/user/repo

# download from BitBucket
degit bitbucket:user/repo
degit git@bitbucket.org:user/repo
degit https://bitbucket.org/user/repo
```

* `<repo>`: The URL of the repository you want to download from.
* `<destination>`: The directory where you want to save the subdirectory.
* `[--branch <branch>]` (optional): Specify a particular branch of the repository.
* `[--force]` (optional): Overwrite any existing files in the destination directory.

### Downloading Subdirectories from Git Repos

Imagine you stumble upon a fantastic GitHub repository, but all you need is a tiny piece of it. With degit, your wish is its command! Just grab the URL of the repository, specify the subdirectory you desire, and voilà! degit will fetch it for you in a jiffy.

![](/img/post/degit-subdirectory-example.png)

No more cloning entire repositories, no more wasting precious disk space. degit empowers you to embrace the minimalist approach and download only what you need.

```shell
degit https://github.com/GoogleChrome/chrome-extensions-samples/functional-samples/sample.page-redder
```