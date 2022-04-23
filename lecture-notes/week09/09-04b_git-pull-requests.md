# Branching with Pull Requests

Git is amazing. Github's Pull Request feature makes merging much easier. Pull Requests allow you to focus on the code changes and helps with the merging.

## Git Branching Refresher

Been a while? See the [Git Branching Cheatsheet](git-branching-cheatsheet.md)


## Instructor Notes

- [use git scorekeeper project](https://github.com/PrimeAcademy/git-branching-score-keeper), 
- fork, set up for collaborators (see notes below)
    

### DO

- clone to local machine, open in editor
- assign each task out
- demonstrate doing a feature
    - co -b feature-branch
    - add, commit
- Make PR, assign reviewer
- Approve PR
- git pull origin master to get new code
    - update work in progress feature-branch
        - co feature-branch
        - git merge --no-ff master (merge new updated master into our working branch)
    - make commit

---

## Git Branching Workflow with Github Pull Requests

GitHub Pull Requests allow others to review our code and approve the changes. It essentially replaces the final `merge` of the feature branch back into `master`.

### The first time (project setup)

On your github project repo. Click the `settings` tab and then click `Manage access` in the left-side menu. Add your team members.

![github-collaborator](../images/github-manage-access.png)


## Overview

Code flows to each developer through **master**. All work is done in branches and pushed up to GitHub and then merged into master only through Pull Requests.

![github-pr-flow](../images/github-pr-flow-chart.png)



## Moving Code to GitHub

### Every time

Make sure the code on your computer is up to the latest version on GitHub by switching to master and pulling down the changes.

```
git checkout master
git pull
```

Create a branch and switch to that branch.

```
git checkout master
git branch feature-NAME
git checkout feature-NAME
```

These three commands are the same as

```
git checkout -b feature-Name master
```

Git add, commit, and push as usual

```
git add .
git commit -m "MESSAGE"
git push origin feature-NAME
```

Repeat this until you are all done with your feature (probably a few commits). When you're done with the feature, it's time to create a Pull Request to merge to `master`.

#### Update your branch w/ changes from master
First, it's important to make sure that your code is up to date with the `master` branch. You will do this by updating your local master branch with what is on GitHub

```
git checkout master
git pull
```

Resolve any conflicts (although, as long as you aren't committing to `master`, you shouldn't have conflicts). Then checkout your own branch and merge master into it with:

```
git checkout feature-NAME
git merge --no-ff master
```

- If there are no conflicts, you will probably be thrown into `ViM` where you can type `esc` then `:wq`. 
- In the event of a merge conflict, look at any impacted files. Make the required changes to make the files look how you would like them to look, and commit them. (the `git commit` without the `-m` here will create a default message which you can accept in `ViM` by typing `esc` then`:wq`)

```
git add .
git commit
git push origin feature-NAME
```

This makes sure your code is all set to be merged into `master` without any conflicts.

Test the application again to make sure the merge did not break any functionality. Make any fixes needed. 

#### GitHub Pull-Request
Now we are ready to merge the feature into the `master` branch. On GitHub, click the `New Pull Request` button. Make sure the `base` is `master` and `compare` is your feature branch.

Click `Create Pull Request` and add a `Reviewer` from your team.

When the reviewer approves the Pull Request, then you may merge the Pull Request into master.

To keep your code up to date on your computer, switch to master and pull down the changes.

```
git checkout master
git pull
```

Repeat.