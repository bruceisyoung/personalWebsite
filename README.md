# personalWebsite
responsive personal website for Sheng Yang (Bruce)

# Tech Stack:
Node & Express(serve static pages and deal with requests to automatically send email to my personal email when someone leave me a message)  

how to use develop in local:
1  git clone
2  cd into the directory  
3  run script "npm install" to install all the dependencies  
4  go to server.js, change the process.env.email & process.env.password into your own gmail address and password  
5  run script "npm run dev", then you can see change the source code in src directory to update the design  
6  if you want to run the server, instead using webpack-dev-server, don't do step 5. You would need to run script "webpack -p" and then "node server.js", to run the server  
7  no matter you choose step 5 or step 6, you can checkout the design by visiting "http://localhost:8080"  

what you would need to pay attention to during deployment  
1  inside heroku, you need to set the environment parameter(email & password), so the leave a message function can run correctly  

images: 