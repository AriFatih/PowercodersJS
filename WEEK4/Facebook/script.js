
let userList= [
  {username: "fatih",
   password:"1234"
  }
 
];

let postList = [
  { id: 1,
    author:"Fatih",
    title: "Girmeyi basarmissin",
    content: "Cok uzun hikayeydi ozetleyemedim!",
    dateTime: new Date().getDate()
  } 
];

/* Object Constructor for user*/

const user = function(username, password){
  
}
//Check if user login is correct then show newsfeed

let username = prompt("What is your name?");
let password = prompt("What is your password");

signIn(username, password);

function signIn (user,pass){   

    if(isUserValid(user,pass)) {
         console.log(user + " logged in");
         for(let i=0; i<database.length; i++){
          console.log( newsfeed[i].summary);  
         } 
    }else {
      console.log("Please check the inputs you have given!")
    }
}

function isUserValid(usr,pw){
  for(let i=0; i<database.length; i++){
      if(usr=== database[i].username && pw=== database[i].password){
        return true;
      }else{
      return false;
      } 
   }
}







