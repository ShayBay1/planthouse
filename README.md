<<<<<<< HEAD
## Setup 

1. Clone the repo
2. Rename the folder to your Project, you can use the `mv` command like `mv mern-boilerplate yourprojectname`
3. Delete the `.git` file, when you are in the root of the file, you can press `ls` and you should see a `.git` file, then go ahead and run `rm -rf .git`


#### Setup your git repo

1. go to github and create your github and create a repo (Without a readme or liscense you can add that later!)
2. Then you can run the following commands in the root of your project 

```
git init
git add .
git commit -m "first commit"
git remote add origin git@git.generalassemb.ly:SEI-CC/test.git // this will be whatever your address will be, look at the address in the code github gives you!
git push -u origin main
```

#### Setup the App

```npm install```

*DOTENV*

`touch .env`

add your variables

```
DATABASE_URL=mongodb://localhost:27017/testagramV2
BUCKET_NAME=catcollectorone
SECRET=mysecretforjwt
```

The app is configured, to use those respective key names for the database, jwt secret and aws bucket, of course you'll have your own values
=======
THIS IS PLANTHOUSE
An app that lets plant lovers can come together and help  eachother grow!

<img src="https://i.imgur.com/DWKd0w8.png">
<img src="https://i.imgur.com/ZB6Gham.png">
<img src="blob:https://imgur.com/81438c53-fe81-4e9c-a8ec-e4693ba06c5e">

the wireframe:
<img src="https://i.imgur.com/dLaHkka.png">

For I wanted to create a community for plant lovers to connect.
Users can create an account, post their picture and get input from others.

Planthouse is a full stack MERN app meaning that it uses MongoDB, Express, React, and Node.Js.

Go ahead annd join today! 
<"link">

Git repo:
https://github.com/ShayBay1/planthouse
>>>>>>> working
