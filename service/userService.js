import { useState } from "react";
import axios from "axios";

//import axios from "axios"
class userService {
  // Created fuction


  async Login(username,password) {
    // the data comes from save after signup
 
 
    return axios({  
       
   
          //  url: "http://192.168.0.21:8080/signup", // the address of API with end point
          url: ('http://localhost:8080/login?username='+username+'&password='+password), // the address of API with end point
          method: "GET",// using post because we are creating a data
          timeout: 5000,
          username: username, //will send the data from login
          password: password,
          headers:{
              Accept: 'application/json' //type of call Json
          }
  
        }).then((response) =>{
        //  console.log(response.data); //token
       
                return Promise.resolve(response);
                
            })
            .catch((error)=>{
        
                return Promise.reject(error)
            })
  }
 
  async addExpense(Username, expense, expensePrice, tripLabel, Token) {
    return axios({
      
      url: ('http://localhost:8080/'+tripLabel+'/expense'), // the address of API with end point
          method: "POST",// using post because we are creating a data
          timeout: 5000,
          data: {
            username: Username,
            name: expense,
            price: expensePrice,
           
          },
          headers:{
              Accept: 'application/json', //type of call Json
              Authorization: 'Bearer '+Token
          } 
  
        }).then((response) =>{
         
                return Promise.resolve(response)
                
            })
            .catch((error)=>{
        
                return Promise.reject(error)
            })

  }
  async viewExpense(username, tripLabel, Token) {
    return axios({
      url: ('http://localhost:8080/'+tripLabel), // the address of API with end point
          method: "GET",// using post because we are creating a data
          timeout: 5000,

          headers:{
            Accept: 'application/json', //type of call Json
            Authorization: 'Bearer '+Token
        } 
  
        }).then((response) =>{
         
                return Promise.resolve(response)
                
            })
            .catch((error)=>{
        
                return Promise.reject(error)

            })
  
  }

  async closetrip(Username, tripLabel, Token) {
    return axios({
      
      url: ('http://localhost:8080/'+tripLabel+'/close'), // the address of API with end point
          method: "POST",// using post because we are creating a data
          timeout: 5000,
          data: {
            username: Username,
          },
          headers:{
              Accept: 'application/json', //type of call Json
              Authorization: 'Bearer '+Token
          } 
  
        }).then((response) =>{
         
                return Promise.resolve(response)
                
            })
            .catch((error)=>{
        
                return Promise.reject(error)
            })

  }
  async summary(username, tripLabel, Token) {
    return axios({
      url: ('http://localhost:8080/'+tripLabel+'/summary'), // the address of API with end point
          method: "GET",// using post because we are creating a data
          timeout: 5000,

          headers:{
            Accept: 'application/json', //type of call Json
            Authorization: 'Bearer '+Token
        } 
  
        }).then((response) =>{
         
                return Promise.resolve(response)
                
            })
            .catch((error)=>{
        
                return Promise.reject(error)

            })
  
  }
}

const userServices = new userService(); // creating the object
export default userServices; // export  because i want to use the data after press save buttom
