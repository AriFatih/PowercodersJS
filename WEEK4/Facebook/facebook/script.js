/** Facebook clone
 * Create a simple web application which clones the basic / core facebook functionalities, like user/password (signup, login), user interaction (likes, comment), posts 
 * 
 * users: password, login, checking user name / password combo, email, user name, registration form, profile picture,  error handling (try again, reset password), friends.
 * => user name / password combination, checking combination 
 * 
 * posts: likes, comments, form for post input, name (identifier), text/paragraphs, pictures, title, date/time, author (connets to the user who wrote the post)
 * => posts with title, text, date/time, author   
 */

/** array / list of users */
let userList = [{
    id: 0,
    userName: "Susanne",
    password: "test123"
}];

/** array / list of posts */
let postList = [{
    id: 0,
    author: "Susanne",
    title: "test title",
    content: "test content",
    dateTime: Date.now()
}]; 

/** object constructor for user */
const user = function(userName,password){
    this.id = userList.length;
    this.userName = userName;
    this.password = password;
    this.createUser = function(){
        userList.push(this);
    }
}

/** object constructor for post */
const post = function(author,title,content){
    this.id = postList.length;
    this.author = author;
    this.title = title;
    this.content = content;
    this.dateTime = Date.now();
    this.createPost = function(){
        postList.push(this);
    }
}

/** how can we store the data more longterm in JavaScript */
new user("Hiba","Hiba123").createUser();
new user("Anil","Anil123").createUser();
new user("Solomon","Solo123").createUser();


new post("Anil","JavaScript rocks","I love JavaScript :)").createPost();
new post("Solom","JavaScript sucks","I hate JavaScript :(").createPost();


/** does this need to be in a function? */
if(isUserValid("Susanne","test123")){
    document.write("Hello. You sucessfully logged-in.");
    /** if logged-in, show all posts */
    /** sort posts by dateTime and display dateTime human readable */
} else {
    alert("Your login credentials are not correct. Please try again.");
    /** if not logged in, prompt for credentials */
}


function isUserValid(user,pwd){
    for(usr of userList){
        if(usr.userName===user && usr.password===pwd){
            return true;
        } else {
            return false;
        }
    }
}