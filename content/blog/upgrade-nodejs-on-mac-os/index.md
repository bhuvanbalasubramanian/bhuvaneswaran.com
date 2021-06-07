---
title: Upgrade Node.js to the latest version on Mac OS
date: "2021-06-04T00:00:00.000Z"
description: "Upgrade the node.js version using NPM on macOS"
---

There are several ways to upgrade the node.js version. Easiest way is to through NPM package.

Open the terminal in macOS and run the following command.

To check the current version of the node.js

```shell
$ node -v
v10.15.3
```

Clean the npm cache:

```shell
$ sudo npm cache clean -f
```

Install the **n** node version management package:

```shell
$ sudo npm install -g n
/usr/local/bin/n -> /usr/local/lib/node_modules/n/bin/n
+ n@7.2.2
added 1 package from 2 contributors in 1.433s
```

Upgrade to the current stable version

```shell
$ sudo n stable
  installing : node-v14.17.0
       mkdir : /usr/local/n/versions/node/14.17.0
       fetch : https://nodejs.org/dist/v14.17.0/node-v14.17.0-darwin-x64.tar.xz
   installed : v14.17.0 (with npm 6.14.13)
```

Verify the version of the node.js

```shell
$ node -v
v14.17.0
```

Node.js upgraded successfully to the latest version v14.17.0.

Note: `sudo` is optional command. Don't use it unless you don't have permission to upgrade.

Happy Blogging 😃