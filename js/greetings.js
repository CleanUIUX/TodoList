const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input"); 
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
// const link = document.querySelector("a");


 function onLoginSubmit(e){
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // console.log(username); 
    localStorage.setItem("USERNAME_KEY", username)
    paintGreetings();
    // greeting.innerText = "Hello " + username; 
    // greeting.innerText = `Hello ${username}`; //string과 변수를 함께 사용 시 백틱으로 표기
    
}

// s. 버튼 url 이동
// function handleLinkClick(e){
//     e.preventDefault();
//     console.log(e)
//     alert("clicked!")
// }
// e. 버튼 url 이동

// link.addEventListener("click", handleLinkClick);

function paintGreetings(){
    const username = localStorage.getItem("USERNAME_KEY");
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem("USERNAME_KEY");

if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings()
}
