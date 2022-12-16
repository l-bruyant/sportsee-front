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

### Launch the app
    npm start dev

### How to test ? 

#### With mocked data
If you don't want to run the back-end, you can use mocked data.  
To activate mocked data, go to src/utils/api/api.js and set useMockData to true.  
Then, go to 'http://localhost:3000/dashboard/100' to display the mocked data. 

## Author
Luc Bruyant
