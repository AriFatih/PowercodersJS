
  let database= [
    {username: "fatih",
     password:"1234"
    },
    {username:"bahar",
     password: "1234"
    }
  ];
  
  //Check if user login is correct then assign to index.html
  
  let usr = prompt("what is your username?");
  let pw = prompt("what is your password?");  
  let button = document.querySelector("button");  
 
  button.addEventListener("click", signIn); 
  
  
  function signIn (){         
      if(isUserValid()) {
        console.log("inside SignIn if");
        window.location.assign("index.html")            
      }else {
        alert("Please check the inputs you have given!")
      }
  }  
  
  function isUserValid(){    
    for(let i=0; i<database.length; i++){
        if(usr=== database[i].username && pw=== database[i].password){            
          return true;
        }else{
        return false;
        } 
     }
  }