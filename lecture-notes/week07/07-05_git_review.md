# Terminal and Git/GitHub Basics

## Content

1. Terminal Filesystem Commands
2. Git Basic Workflow
3. .gitignore
4. vim

## 1 - Terminal

* `ls` - list files in a directory
* `ls -a` -  list all files, including hidden files
* `cd` - change to a directory
* `mkdir` - make a directory
* `open .` - open the current directory in Mac Finder application
* `pwd` - complete path to current directory

## 2 - Git/GitHub Basic Workflow

**NOTE:** These instructions are for an existing GitHub repo.

### 2.1 Fork the GitHub repo
1. Navigate to repo on GitHub website
2. Click on the *Fork* button.

### 2.2 Clone the repo to your local machine
1. Copy the **URI** for the directory (e.g. git@github.com:PrimeAcademy/deneb-syllabus.git)
2. Open your Terminal, navigate to your directory for Prime projects.
3. Type `git clone `, then paste the URI you copied and press ENTER/RETURN key
4. Type `cd ` and the name of the directory created for the new project, then press ENTER

### 2.3 Add and commit your work/code to local repo
1. `git add .` - add all files to the git stage
2. `git commit -m "some message"` - commit files with a descriptive message

### 2.4 Push local changes to GitHub remote
`git push -u origin master` - push file to remote GitHub repo

### 2.5 Git status
`git status` gives you info about the current status of your repo

### 2.6 Do more work

Whenever you do more work in your repo, you will repeat

 - **2.3** - make small, frequent commits of working code
 - **2.4** - when ready to submit your work for someone else to see, push your new work/commits
 - **2.5** - status check, can be done as many times as you want

## 3 - .gitignore
Put files you don't want to have available remotely in this file.

1. Create `.gitignore` file in your local repo.
2. Add file names or directories to the file. Each file/directory must be on new line.
3. Add and commit file.

## 4 - vim
The default text editor that you often find yourself in if you

* forgot to add a -m after `git commit`
* have a merge conflict

### Commands
* `i` -  get into INSERT mode
* esc key - exit INSERT mode
* `:wq` - write/save and quit file
