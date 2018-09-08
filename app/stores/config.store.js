 import firebase from 'firebase'
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDUHl0rZYmHgYQAdODOhnLFrhaj0YREPJQ",
    authDomain: "jhautomation-2afb0.firebaseapp.com",
    databaseURL: "https://jhautomation-2afb0.firebaseio.com",
    projectId: "jhautomation-2afb0",
    storageBucket: "jhautomation-2afb0.appspot.com",
    messagingSenderId: "994288531850"
  };
  
export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config);
    this.splashTime = 1000
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require('../../images/login.jpg')
  }
  get SplashImg() {
    return this.splashImg
  }
  get SplashTime() {
    return this.splashTime
  }
  get LoginBG() {
    return this.loginBG
  }
}