# STEPS TO RUN MY APP LOCALLY

## 1 - Clone the Repository

####    Open a terminal and run this sequence of commands to clone the repository and to open it on Visual Studio Code. If you use another code editor do not run the second command and open the file in the code editor of your preference.

- Clone the repository, this will create a new folder with the name of your preference
```bash
$ git clone https://github.com/borisbrunop/fultimeforce-test.git 'name of your preference'
```
- Open Visual Studio Code in the folder that you created before
```bash
 $ cd 'name that you assign before' && code .
```

## 2 - Change the Branch and Install all the dependencies 

####    Once you open the folder with your code editor run this commands in the terminal of the cloned respository to change the branch to develop and to install all the dependencies. Please run the commands in the given order

- To change branch
```bash
$ git checkout develop
```

- To install all the dependencies, this will create a new folder called 'node_modules'
```bash
# for npm users
$ npm i -a 

# for yarn users
$ yarn install
```

## 3 - Crate Enviroment Variables

####    Create a new file called '.env' to store all the enviroment variables, copy and paste the next lines inside the file .env file do not forget to save the file before you move on to the next step.

REACT_APP_BACKEND_URL=http://localhost:4000


## 4 - Run the App
####    Run this script the same way you did in step 3 to start the proyect in localhost. Before running this script please make sure that you dont have anything running in the localhost:3000 port and you have the web-server repository running on localhost:4000 locally [link to the web-werver repository](https://github.com/borisbrunop/fultimeforce-test)

```bash
# for npm users
$ npm run start

# for yarn users
 $ yarn run start
```


You are all set to review my technical abilities, thank you for the opportunity, have a nice day!!