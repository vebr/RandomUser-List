# Random User List

## Description

I created this website for the Frontend Engineer test at Qoala, this website able to fetch random user from https://randomuser.me/api/?results=100, there is 2 button on header of desktop, the color button for filtering based on color, the city button for filtering user card based on city A-Z (Ascending), also there is a theme button for switch from light mode to the dark mode.

## Usage
```
Clone this repository
Install Depedency

> yarn add // npm install

after finish installing depedency

> yarn start
```

## Demo
since lighthouse need HTTPS to make perfect score for PWA, I uploaded the website to firebase hosting, you can test it with a lighthohuse there.

Here is a working live demo : https://userlistrandom.web.app/

  
## Folder Structures

```
    ├── App.css
    ├── App.js
    ├── Component
    │   ├── Card
    │   │   └── index.js
    │   ├── Container
    │   │   └── UserContainer.js
    │   ├── Context
    │   │   ├── ThemeContext.js
    │   │   └── UserContext.js
    │   └── Partials
    │       ├── BottomNavigation.js
    │       └── Header.js
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── Template
        └── index.js
```
>  The **context** folder contains file that use context api of react for store data on global state