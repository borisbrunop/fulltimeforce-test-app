# STEPS TO RUN THIS APP LOCALLY

1 - Open a terminal and run this sequence of commands to clone the repository and to open it on Visual Studio Code. 
    If you use another code editor do not run the second command and open the file in the code editor of your preference.

- Copy the repository, this will create a new folder with the name of your preference
### `git clone https://github.com/borisbrunop/fulltimeforce-test-app.git 'name to your preference'`
- Open Visual Studio Code in the folder that you created before
### `cd 'name that you assign before' && code .`

1 - Once you open the folder with your code editor run this commands in the terminal of the cloned respository 
    to change the branch to develop and to install all the dependencies. Please run the commands in the given order

-To change branch
### `git checkout develop`

-To install all the dependencies, this will create a new folder called 'node_modules'
### `npm i -a`
    or 
### `yarn install`

3 - Create a new file called '.env' to store all the enviroment variables and paste the next line inside the file

REACT_APP_BACKEND_URL=http://localhost:4000


4 - Run this script the same way you did in step 3 to start the proyect in localhost. 
    Before running this script please make sure that you dont have anything running 
    in the localhost:3000 port and you have the web-server repository running on localhost:4000 locally
    [link to the web-werver repository](https://github.com/borisbrunop/fultimeforce-test)

### `npm run start`
    or
### `yarn run start`


You are all set to review my technical abilities, thank you for the opportunity, have a nice day!!
