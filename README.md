# Conservation Heroes Frontend
This is a web application that integrates with your social media accounts and awards you global conservation points for plant friendly posts.

Once you sign up and authorize the app, it uses aws rekognition to classify planet friendly posts.

The project consists of 2 parts:
- The Front end(current repository) implemented in ReactJS.
- [The backend](https://github.com/mfadhili/sparrowTech) implemented in NodeJS.

View the web page, hosted aws [here.](http://44.201.166.62:3000/) 

You should expect to see a page like this:

<img src="https://github.com/ChadGichuki/Conservation-heroes/blob/main/public/readme.png" height="500">


## Getting Started
### Pre-requisites
The following should be installed to run the program locally: nodejs, npm

### Installation
- Fork and clone the repository.
```
git clone https://github.com/ChadGichuki/Conservation-heroes.git   
```

- Cd into the project folder.
```
cd path/to/folder/Conservation-heroes
```

- Open in a code editor.
```
code .
```
 - Install dependencies.
 ```
 npm install
 ```
- Code away!

### Running the program.
Run:
```
`npm start`

```
Visit the address given on the terminal to view the webpage.

## Authentication
The app uses aws cognito for user signup (authentication & authorisation).
You need to create a UserPool on aws console and replace the values in UserPool.js:
```
const poolData= {
    UserPoolId: "",
    ClientId: ""
}
```

## Deployment
The app is currently hosted on aws (EC2 instance).

## Licence
A copy of the General Public License v3.0 can be found [here.](LICENSE)

## Authors
[Mfadhili Gitau](https://github.com/mfadhili)
[Francis Monari](https://github.com/monari1)
[Richard Gichuki](https://github.com/ChadGichuki)

## Acknowledgements
My Moringa School TMs: Grace Umutesi, Anita Kahenya & Silas Silikhe.


