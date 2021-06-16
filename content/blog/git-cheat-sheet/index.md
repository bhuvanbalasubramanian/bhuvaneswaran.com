---
title: Git Cheat Sheet
date: "2021-06-15T00:00:00.000Z"
description: "List of Git commands used in day to day development activities"
---

To initialize git project

```bash
$ git init
```

To clear the .gitignore cache

```bash
$ git rm -r --cached .
$ git add .
$ git commit -m ".gitignore is now working"
```

To remove specific file from git cache

```bash
$ git rm --cached filename
```

To list the remote repos

```bash
$ git remote -v
```

To add the remote repo

```bash
$ git remote add origin <repo_url>
```
