## MedicalDao MVP

The medical DAO is a decentralized autonomous organization to build a new decentralized medical ecosystem and disrupt the whole industry. People from the whole health industry will self-organized to develop a complete and autonomous decentralized healthcare ecosystem.

---------------

### Start Development :

#### Cloen the repository :

```
git clone https://github.com/MedicalDAO/MedicalDaoMvp.git
```

#### Install dependencies

```
cd MedicalDaoMvp
npm Install
```

#### create new branch and add configurations

```
git checkout -b dev-<name of the developer>
git config user.name <name of the dev>
git config user.email <email of the dev>
```

#### Compile the contract

```
truffle compile
```

#### install and run testrpc in new terminal

```
sudo apt-get update && sudo apt-get -y upgrade
sudo apt-get -y install curl git vim build-essential
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g express
sudo npm install -g truffle
sudo npm install -g ethereumjs-testrpc
testrpc
```

#### migrate the contract on testnet (run this command on old terminal):

```
truffle migrate
```

#### commit your changes

```
git status
git add <filles you want to commits>
git commit -m "<your commit messages>"
git push origin <name of your branch>
enter your credentails :
```

### Merge branch with master

```
git pull origin <name of your branch>
git merger master
git push origin <name of your branch>
```

### Note for developers :

```
.sol Source code is found under node_modules/@daostack/arc/contracts
.json Compiled contracts are found under node_modules/@daostack/arc/build/contracts
```

#### project structure :

* README.md - this file
* contracts/ - Need to write contract in this folder
* migrations/ -  Need to write contract migrations scripts in this folder
( please follow the sequence : 3_deploy_contracts.js , 4_deploy_contracts.js)
* truffle.js - network configuration file


If anybody not familiar with git please email me his code in zip , I will do that :
email : chiragmaliwal1995@gmail.com

Read the documentation to get a better understanding of how to use Arc.
https://daostack.github.io/arc/README/
