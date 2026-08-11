# 🐧 Linux Fundamentals Series

## Day 1 - Basic Linux Commands

### Commands Learned

| Command  | Description                         | Example                 |
| -------- | ----------------------------------- | ----------------------- |
| `echo`   | Prints text to the terminal         | `echo "Hello World"`    |
| `whoami` | Displays the current logged-in user | `whoami`                |
| `ls`     | Lists files and directories         | `ls -la`                |
| `cd`     | Changes the current directory       | `cd Documents`          |
| `pwd`    | Shows the current working directory | `pwd`                   |
| `cat`    | Displays file contents              | `cat file.txt`          |
| `find`   | Searches for files                  | `find -name "*.txt"`    |
| `grep`   | Searches text inside files          | `grep "THM" access.log` |

---

## Linux Operators

### 1. `&`
 
Runs a command in the background.

```bash
firefox &
```

---

### 2. `&&`

Runs the second command only if the first succeeds.

```bash
mkdir project && cd project
```

---

### 3. `>`

Redirects output to a file (overwrites).

```bash
echo "Hello" > file.txt
```

---

### 4. `>>`

Appends output to a file.

```bash
echo "Linux" >> notes.txt
```

---

## Summary

Today I learned:

- Basic Linux commands
- File navigation
- Searching files
- Reading files
- Linux operators

---

## Practice Commands

```bash
whoami
pwd
ls -la
cd Desktop
find -name "*.txt"
grep "THM" access.log
```
we added this text using vim
