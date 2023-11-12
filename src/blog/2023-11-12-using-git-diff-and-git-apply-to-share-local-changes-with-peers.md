---
title: Using git diff and git apply to Share Local Changes with Peers
author: Kunal Singh
description: "git diff and git apply are two powerful Git commands that can be
  used to share changes with peers in a way that is easy for them to apply
  locally. "
tags:
  - post
  - git
  - productivity
  - software_engeneering
  - dev
date: 2023-11-12T08:22:12.334Z
image: /img/post/git_diff.png
imageAlt: Using git diff and git apply to Share Local Changes with Peers
readTime: 2 Minutes ⌚
---
`git diff` and `git apply` are two powerful Git commands that can be used to share changes with peers in a way that is easy for them to apply locally. This can be useful for a variety of tasks, such as getting feedback on proposed changes, collaborating on a shared project, or submitting a patch to a Git repository.

### Benefits of Sharing Git Patch Files:

* **Avoiding merge conflicts:**  When sharing changes with peers, it is important to do so in a way that minimizes the risk of merge conflicts. By sharing a Git patch file, you can ensure that your peers are able to apply your changes without having to worry about merge conflicts.
* **Making it easier for peers to review changes:**  Git patch files are easy for peers to read and understand. This makes it easier for them to review your changes and provide feedback.
* **Streamlining the development workflow:**  By using Git patch files to share changes, you can streamline your development workflow and collaborate more effectively with your peers.

### How to Create a Git Patch File:

1. Make your changes to the file(s) you want to share.
2. Stage your changes:  `git add <file(s)>`
3. Create a patch file:  `git diff > patch.txt`

   * To create a patch file for a specific file or directory, use the following command:  `git diff -- <file>/<directory> > patch.txt`

### How to Apply a Git Patch File:

1. Save the patch file to the directory where you want to apply the changes.
2. Apply the patch:  `git apply patch.txt`

### Example**:**

```shell
# Create a patch file for the `README.md` file
git diff -- README.md > readme.patch

# Share the patch file with your peers

# On your peer's machine
git apply readme.patch
```

### Conclusion**:**

`git diff` and `git apply` are powerful tools that can make it easy to share changes with peers and collaborate on projects. By understanding how to use these commands, you can streamline your development workflow and improve the quality of your code.

Connect with me on [LinkedIn](//linkedin.com/in/singhkunal2050) | Tweet me at [Twitter](//twitter.com/singhkunal2050) 

Happy Coding!!