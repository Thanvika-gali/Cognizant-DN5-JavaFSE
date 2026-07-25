# Git Hands-on Lab

## Objective

This hands-on demonstrates the basic Git workflow, including configuring Git, initializing a repository, creating and tracking files, committing changes, and pushing the project to GitHub.

---

# Step 1: Check Git Installation

### Command

```bash
git --version
```

### Output

 <img width="845" height="368" alt="Screenshot 2026-07-25 124242" src="https://github.com/user-attachments/assets/af6de48e-65a6-4c14-a5d5-1436eb915a2e" />

---

# Step 2: Configure Git Username and Email

### Commands

```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@gmail.com"
git config --global --list
```

### Output

<img width="937" height="717" alt="Screenshot 2026-07-25 124605" src="https://github.com/user-attachments/assets/712f5511-fd0d-42c8-87d7-81aa0b5b2e31" />

---

# Step 3: Create a New Git Repository

### Commands

```bash
mkdir GitDemo
cd GitDemo
git init
```

### Output

<img width="1312" height="451" alt="Screenshot 2026-07-25 124707" src="https://github.com/user-attachments/assets/4981cde6-5bc4-40ae-87c4-13f13fa0e9ff" />


---

# Step 4: Verify Repository

### Command

```bash
ls -la
```

### Output

<img width="1545" height="830" alt="Screenshot 2026-07-25 125110" src="https://github.com/user-attachments/assets/c80aa47e-ba32-4ac9-8c54-e5a39a1257c3" />


---

# Step 5: Create a Text File

### Commands

```bash
echo "Welcome to the version control" > welcome.txt
cat welcome.txt
```

### Output

> *(Insert Screenshot 5 Here)*

![Welcome File](05-welcome-file.png)

---

# Step 6: Check Git Status

### Command

```bash
git status
```

### Output

> *(Insert Screenshot 6 Here)*

![Git Status](06-git-status.png)

---

# Step 7: Stage the File

### Commands

```bash
git add welcome.txt
git status
```

### Output

> *(Insert Screenshot 7 Here)*

![Git Add](07-git-add.png)

---

# Step 8: Commit Changes

### Command

```bash
git commit -m "Initial Commit"
```

### Output

> *(Insert Screenshot 8 Here)*

![Git Commit](08-git-commit.png)

---

# Step 9: Verify Working Tree

### Command

```bash
git status
```

### Output

> *(Insert Screenshot 9 Here)*

![Working Tree Clean](09-working-tree-clean.png)

---

# Step 10: Push Repository to GitHub

### Commands

```bash
git remote add origin https://github.com/yourusername/GitDemo.git

git branch -M main

git push -u origin main
```

### Output

> *(Insert Screenshot 10 Here)*

![GitHub Repository](10-github.png)

---

# Repository Structure

```text
GitDemo/
│── README.md
└── welcome.txt
```

---

# Git Commands Used

| Command | Description |
|---------|-------------|
| `git --version` | Displays the installed Git version |
| `git config --global user.name` | Configures the Git username |
| `git config --global user.email` | Configures the Git email |
| `git init` | Initializes a new Git repository |
| `ls -la` | Lists all files including hidden files |
| `git status` | Displays the current repository status |
| `git add welcome.txt` | Stages the file for commit |
| `git commit -m "Initial Commit"` | Commits the staged changes |
| `git remote add origin` | Connects the local repository to GitHub |
| `git push -u origin main` | Pushes the repository to GitHub |

---

# Conclusion

Successfully completed the Git Hands-on by configuring Git, initializing a local repository, creating and tracking files, committing changes, and pushing the project to GitHub.
