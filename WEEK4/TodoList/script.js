


/* split the big problem in small and solvable problem
1b. add item via enter key
1c. validating input
2. add new item
3. add password protection
4. delete item
5. mark item as done
6. sort the list alphabetically
*/



/* declaring variables */
let ul = document.querySelector("ul");
let input1 = document.getElementById("add");
let input2 = document.getElementById("delete");
//let input = document.querySelector("input");
//let button = document.querySelector("button");
let addbtn = document.getElementById("addbtn");
let deletebtn = document.getElementById("deletebtn");
let errorMessage = "";
let toDoList = [];
let completedList =[];

console.log("input1 " + input1.value);
console.log("input2 " + input2.value);

/*  get input value*/


deletebtn.addEventListener("click", deleteItem);
addbtn.addEventListener("click", addListItem);
input1.addEventListener("keypress", addListItemOnReturn);

function addListItemOnReturn(event){
      if(event.keyCode===13){
          addListItem();
      }
    }


    function isInputValid(){
          input1.value = input1.value.trim();
          if(input1.value !== ""){          
              for(let i=0; i<toDoList.length; i++){        
                  if(input1.value===toDoList[i]){
                    console.log("if "+ toDoList[i])
                    errorMessage= "Your new item is already in the list!";
                    return false;
                  }  
              }  
              return true;           
          }
          errorMessage= "Your new item can not be empty!";
          return false;
      }


    function addListItem(){      
      if(isInputValid()){           
        toDoList.push(input1.value);
        showTheToDoList();
        clearInput();
        
        // let li = document.createElement("li");        
        // li.innerText =input1.value;
        // toDoList.push(input1.value);
        // ul.appendChild(li);        
         
          
      } else{
        alert(errorMessage);
        clearInput();
      }
    }

    function clearInput(){
      input1.value = "";
      input1.focus();
     
    }

/* create a new list element and add it to the ul */




function deleteItem(){ 
    const index=-1;
    var list = document.getElementsByTagName("UL")[1];
    //var listItem=list.getElementsByTagName("LI")[0];   
    var x = list.getElementsByTagName("INPUT").length;
    var y= list.getElementsByTagName("INPUT")[0];
    var z= list.getElementsByTagName("INPUT")[0].checked;
    console.log(x);
    console.log(y);
    console.log(z);
 
    for(let i=0; i<x; i++){
    if(list.getElementsByTagName("INPUT")[i].checked){  
    console.log(index);
    index= i;      
    } 
    }

    if (index> -1){
      var list = document.getElementById("myId");   
      list.removeChild(list.childNodes[index]); 
      console.log("burdayim");
      console.log(index);
      toDoList.splice(index,1);  
      showTheToDoList();        
    }
    else{
    console.log(index);
    alert("There is no element like that!");    
  }
}

function showTheToDoList (){   
    text = "<ul>";    
    for(let i=0; i<toDoList.length; i++){
      toDoList.sort();    
      
      text += "<li><input type=\"checkbox\">" + toDoList[i] + "</li>";
      }
      text += "</ul>";      
      document.getElementById("myId").innerHTML = text;

      // let li = document.createElement("li"); 
      // li.innerText =toDoList[i];       
      // ul.appendChild(li);        
      // clearInput();
    }  
