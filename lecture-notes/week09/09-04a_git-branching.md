# Git Branching

This lecture is intended to set students up for the first group project where they will divide tasks and collaborate with GitHub Pull Requests and merging changes.

## Objectives

- review git init, add, commit flow
- introduce git branching with context of mater branch and teamwork
- demonstrate mechanics of branching locally and merging changes using CLI
- demonstrate setting-up a project on GitHub with collaborators
    - demonstrate working on this project using branches and Pull Requests with Reviewers
    - demonstrate pulling updated master code back into a work-in-progress branch

## Instructor Notes

### Overview

We've been using a branch all along, called **master**. the intention is for managing production code. We never want to be working in and making changes to **master**

- Facebook example: users are using the code from master (aka production). developers are making changes in branches so it does not break what users see.

Git provides a way to manage different versions of our code at the same time. This is called `branching`. Branching allows us to collaborate on projects and help keep our code base stable.


## Demonstrate branching on the CLI as an individual

Make a tiny html project, add git, make some branches and move around.

- create basic folder, index.html project
- git init
- git ignore
- commit to master
- show git log to prove we have 1 commit
- branch feature-list
- add, commit
- demonstrate checkout of master, that it's different
- show updated git log, we see all commits, even the original from master
- merge to master
- branch feature-style
- demonstrate co of master, it's different
- co feature-style
- make more commits
- merge to master
- start making changes on master
    - co to feature


## Demonstrate Git with Others using GitHub Pull Requests

[See lecture notes](09-04b_git-branching-with-pull-requests.md)


## Git Branching Common Commands

See the [Git Branching Cheatsheet](git-branching-cheatsheet.md)


## Common Branches

### master

The **master** branch generally contains fully tested code that can be deployed. This is generally used as the starting point for individual projects. The **master** branch is what you have been working with to date, it's created by default.

### feature_NAME

When working on a task, you will want to create a branch for the feature that you are working on. The feature will be created using the branch you're currently on as a starting point. Let's assume we're on the master branch and creating a feature of **feature-login-html**.

**Create the feature-login-html branch**

```
git branch feature-login-html
```


```
⍟ master
|
|\
| o feature-login-html
```

**Switch to the feature-login-html branch**

```
git checkout feature-login-html
```

```
o master
|
|\
| ⍟ feature-login-html
```

**Make some changes and commit them**

Update the code in your files.

```
git add .
git commit -m "COMMIT MESSAGE"
git push origin feature-login-html
```

```
o master
|
|\
| o feature-login-html
| |
| ⍟ commit "COMMIT MESSAGE" (still on feature-login-html)
```

> At this point you can continue making commits.

**Merge your changes back into master (happy path)**

Go back to master

```
git checkout master
```

```
⍟ master
|
|\
| o feature-login-html
| |
| o commit "COMMIT MESSAGE" (still on feature-login-html)
```

Merge from feature-login-html into master

```
git merge --no-ff feature-login-html
```

```
o master
|
|\
| o feature-login-html
| |
| o commit "COMMIT MESSAGE" (still on feature-login-html)
|/
⍟ <- We are now here
```

### develop

The **develop** branch gives us a safety net when working with teams. This is generally used as the starting point for group projects but for now we'll stick with **master**.

## VIM

To exit VIM, press `shift` and `:`, type `wq` and press `enter`.

You can configure git to use a different Terminal text editor if you get tired of this arcane editor.

`$ git config --global core.editor your-editor-here`

## Practice: No more commits on `master`!

Going forward, try not to make any commits directly on the `master` branch. Your general flow should be:

- Checkout a new feature branch, eg. `feature/setup-server`
- Make several commits as you're working, eg. `create express server`, `setup static files`, `add body parser`, etc.
- When you get to a point where your task is _complete_ and _tested_, merge your branch into `master`. 
- Start over again with a new feature branch (eg. `feature/get-endpoint`)! 
