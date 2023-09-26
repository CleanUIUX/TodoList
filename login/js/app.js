const loginInput = document.querySelector("#login-form input"); 
const loginbutton = document.querySelector("#login-form button"); 

 function btnClick(){
    const username = loginInput.value;
    if(value === ""){
        alert("please")
    }else if(username.length){
        alert("too long")
    }
}

loginbutton.addEventListener("click", btnClick); 
