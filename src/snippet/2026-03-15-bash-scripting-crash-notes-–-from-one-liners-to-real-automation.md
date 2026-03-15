---
title: " Bash Scripting Crash Notes – From One-Liners to Real Automation"
author: Kunal Singh
description: Notes for self when working with bash commands
tags:
  - snippet
  - bash
  - linux
  - produtivity
date: 2026-03-15T19:20:47.561Z
image: /img/post/download-5-.png
imageAlt: "Bash Commands "
---
### Why Bash Still Matters

Bash is still the **default glue** on Linux/macOS (and WSL on Windows).  
You use it when you need:

- **Fast automation** for servers and CLIs.
- **Simple glue** around tools like Python, Ansible, Docker, kubectl, etc.
- **One-off utilities** and repeatable commands you don’t want to retype.

---

### 1. Commands vs Arguments (and `echo`/`cat`)

Bash commands are usually:

- **Command** + **arguments** (separated by spaces).
- Positional arguments: `$1`, `$2`, … (we’ll use them soon).

```bash
# Command + argument
echo "Hello"          # command: echo, argument: "Hello"

# View file contents
cat file.txt
```

Use case: **quick checks / debugging**, printing values in scripts.

---

### 2. Editing with `vim` (Enough to Survive)

Minimal vim workflow used in the course:

```bash
vim file.txt   # open

# inside vim:
i              # insert mode
# type your text
Esc            # back to command mode
:wq            # write + quit
:q!            # quit without saving
```

Use case: **edit scripts on remote servers** over SSH.

---

### 3. First Script: Shebang, Run, and Permissions

Write a simple script:

```bash
vim hello.sh
```

```bash
#!/usr/bin/bash
echo "Hello World"
```

```bash
chmod u+x hello.sh   # make it executable
./hello.sh           # run
```

Key ideas:

- **Shebang** (`#!/usr/bin/bash`) tells the OS which interpreter to use.
- **Executables need permission** (`chmod u+x`) even if you’re already in a Bash shell.

Use case: **wrap frequently used command sequences** into a single script.

---

### 4. Variables and User Input

Variables are just `NAME=value` (no spaces). Access with `$NAME`.

```bash
first_name="Herbert"
last_name="Lindemans"

echo "Hello $first_name $last_name"
```

Interactive script:

```bash
#!/usr/bin/bash

echo "What is your first name?"
read first_name

echo "What is your last name?"
read last_name

echo "Hello $first_name $last_name"
```

Use case: **simple CLIs** that ask for input before running actions.

---

### 5. Positional Arguments (`$1`, `$2`, …)

Scripts can take arguments from the command line:

```bash
#!/usr/bin/bash
echo "Hello $1 $2"
```

```bash
./pos_arg.sh "Kunal" "Singh"
# -> Hello Kunal Singh
```

Use case: **parameterized scripts** (e.g., `backup.sh /path/to/dir /backup/target`).

---

### 6. Pipes and Redirection (`|`, `>`, `>>`, `<`)

**Pipes**: send output of one command into another.

```bash
ls -l /usr/bin | grep bash
```

**Redirect output to file**:

```bash
echo "Hello World" > hello.txt    # overwrite
echo "Good day"   >> hello.txt    # append
```

**Redirect file into command**:

```bash
wc -w < hello.txt                 # count words, no filename in output
```

Use cases:

- **Filter long outputs** (e.g., `ps aux | grep node`).
- **Logging** (`your_script.sh >> script.log`).
- **Clean numeric outputs** (e.g., `wc`, `sort`, etc.).

---

### 7. Here-Docs and Here-Strings (`<<`, `<<<`)

Feed multiple lines into a command:

```bash
cat <<EOF
line one
line two
EOF
```

Feed a single string:

```bash
wc -w <<< "hello there word count"
# -> 4
```

Use case: **inline config/templates** in scripts without creating temporary files.

---

### 8. Testing and Exit Codes (`[ ]`, `test`)

`[ expression ]` evaluates to true/false and sets an **exit code**:

```bash
[ "hello" = "hello" ]
echo $?    # 0 (success)

[ 1 -eq 2 ]
echo $?    # 1 (failure)
```

Common numeric operators: `-eq` (equal), `-ne` (not equal), `-gt`, `-lt`, `-ge`, `-le`.

Use case: **conditions in `if`/`while` blocks**.

---

### 9. `if`, `elif`, `else` and `case`

Basic `if`:

```bash
#!/usr/bin/bash

if [ "$1" = "herbert" ]; then
  echo "Oh, you're the boss here. Welcome."
elif [ "$1" = "help" ]; then
  echo "Just enter your username as the first argument."
else
  echo "I don't know who you are, but you're not the boss of me."
fi
```

`case` is cleaner for multiple options:

```bash
#!/usr/bin/bash

case "${1,,}" in
  herbert|administrator)
    echo "Oh, you're the boss here. Welcome."
    ;;
  help)
    echo "Just enter your username as the first argument."
    ;;
  *)
    echo "Hello there, but you're not the boss of me."
    ;;
esac
```

Use case: **mode switches / subcommands** in a script (`backup`, `restore`, `help`, …).

---

### 10. Arrays and `for` Loops

Define an array:

```bash
my_list=(one two three)

echo "${my_list[0]}"      # first element
echo "${my_list[@]}"      # all elements
```

Loop over it:

```bash
for item in "${my_list[@]}"; do
  echo "$item"
done
```

Slightly more interesting example (count chars using `wc -c`):

```bash
for item in "${my_list[@]}"; do
  echo -n "$item" | wc -c
done
```

Use case: **iterate over files, hosts, or arguments** and perform the same action.

---

### 11. Functions and Local Scope

Define and call a function:

```bash
#!/usr/bin/bash

show_uptime() {
  local up since
  up=$(uptime -p | cut -c 4-)
  since=$(uptime -s)

  cat <<EOF
------------------------------
This machine has been up for: $up
It has been running since:   $since
------------------------------
EOF
}

show_uptime
```

Key points:

- `function_name() { ... }`
- `local` keeps variables **scoped to the function**, avoiding collisions.
- Functions can take positional args (`$1`, `$2`, …) just like scripts.

Use case: **reuse logic** (e.g., repeated logging, validations, formatting).

---

### 12. `awk`: Quick Structured Filtering

`awk` treats input as **fields** (default separator: space).

```bash
# First word from each line in file.txt
awk '{ print $1 }' file.txt

# Use a different separator (CSV)
awk -F',' '{ print $2 }' data.csv
```

Combine with pipes:

```bash
echo "just get this word: hello" | awk '{ print $5 }'          # hello
echo "key:value" | awk -F':' '{ print $2 }'                    # value
```

Use case: **extract specific columns** from logs, CSV, command output.

---

### 13. `sed`: In-Place Text Replacement

Simple substitution:

```bash
sed 's/fly/grasshopper/g' input.txt
```

With backup and in-place edit:

```bash
sed -i'.original' 's/fly/grasshopper/g' sed-test.txt
# creates sed-test.txt.original as backup
```

Pattern:

- `s/old/new/g`
  - `s` = substitute
  - `g` = global (all occurrences per line)

Use case: **batch-edit configs or generated files** (e.g., change URLs, feature flags, versions).

---

### Closing Thought

Bash isn’t a full-blown application language, but it’s:

- **Perfect for glue and automation**, especially on Linux servers.
- **Stronger when combined** with tools like Python, Ansible, `awk`, and `sed`.

If you can confidently use **variables, arguments, pipes, redirects, conditionals, loops, functions, `awk`, and `sed`**, you can automate **most** day-to-day DevOps and CLI workflows with small, maintainable Bash scripts.

