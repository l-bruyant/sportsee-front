# Sportsee (front end part)

## 1. Project status
Waiting for review

## 2. Project pitch
Prototype of a web app that lets you track your fitness data.  
Main feature : display user data in graphs. 

## 3. Main technologies
- REACT    
- [RECHARTS](https://recharts.org/en-US/) (react charts library)  
- JS  
- CSS  

## 4. Useful Resources
- [Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?t=DHOqyie0gq1Vml4W-0)  
- [Project backend (needed to run the project)](https://github.com/l-bruyant/sportsee-back)

## 5. How to launch the project 

### 5.1 What you need first 
- Node.js
- Git 

### 5.2 Installing the project 
- Fork the repository
- Clone it on your computer
### 5.3 Install all dependencies (see package.json for list of dependencies)  
    npm install 

### 5.4 Launch the front-end app
Make sure to be in the project folder  

    npm start dev

### 5.5 How to test ? 
First, make sure to laucnh the front-end app (see step above)  

#### 5.5.1 With mocked data
If you don't want to run the back-end, you can use mocked data.  
- To activate mocked data mode, go to src/utils/api/api.js and set  
  
        const useMockData = true  
- Then, go to 'http://localhost:3000/dashboard/100' to display the mocked data. 

#### 5.5.2 With data from the back-end
- First, you need to install the back-end and start the back-end app (check instructions on the back-end directory)
- To activate back-end data, go to src/utils/api/api.js and set  
  
        const useMockData = false    
- Then, go to 'http://localhost:3000/dashboard/12' or 'http://localhost:3000/dashboard/18'

## 6. Author
Luc Bruyant
