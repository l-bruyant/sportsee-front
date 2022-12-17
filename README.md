# Sportsee (front end part)

## Project status
Waiting for review

## Project pitch
Prototype of a web app that lets you track your fitness data.  
Main feature : display user data in graphs. 

## Main technologies
- REACT    
- [RECHARTS](https://recharts.org/en-US/) (react charts library)  
- JS  
- CSS  

## Useful Resources
- [Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?t=DHOqyie0gq1Vml4W-0)  
- [Project backend (needed to run the project)](https://github.com/l-bruyant/sportsee-back)

## How to launch the project 

### What you need first 
- Node.js
- Git 

### Getting the project on your machine  
    git clone https://github.com/l-bruyant/sportsee-front.git

### Insall all dependencies (see package.json for list of dependencies)  
    npm install 

### Launch the front-end app
Make sure to be in the project folder  

    npm start dev

### How to test ? 
First, make sure to laucnh the front-end app (see step above)  

#### With mocked data
If you don't want to run the back-end, you can use mocked data.  
- To activate mocked data mode, go to src/utils/api/api.js and set  
  
        const useMockData = true  
- Then, go to 'http://localhost:3000/dashboard/100' to display the mocked data. 

#### With data from the back-end
- First, you need to install the back-end and start the back-end app (check instructions on the back-end directory)
- To activate back-end data, go to src/utils/api/api.js and set  
  
        const useMockData = false    
- Then, go to 'http://localhost:3000/dashboard/12' or 'http://localhost:3000/dashboard/18'

## Author
Luc Bruyant
