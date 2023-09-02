//userName -- msg
const user_input = document.querySelector(".user-input");
const username_msg = document.querySelector(".username-msg");
//password -- msg
const pass_input = document.querySelector(".pass-input");
const password_msg = document.querySelector(".password-msg");
//submit -- msg
const signin_button = document.querySelector(".signin-button");
const signin_status = document.querySelector(".signin-status");

signin_button.addEventListener("click" , submitRegister);

function submitRegister(e){
    e.preventDefault();
    const user_input_val = user_input.value;
    const pass_input_val = pass_input.value;
    username_msg.innerText = "";
    password_msg.innerText = "";
    let is_check = true;

    if(user_input_val.length === 0 || user_input_val.indexOf("@") === -1 || user_input_val.indexOf(".") === -1){
        username_msg.innerText ="Please enter a valid email";
        is_check = false;
    }
    if(pass_input_val.length == 0){
        password_msg.innerText = "Please enter your password";
        is_check = false;
    }
    else if(pass_input_val.length <= 8){
        password_msg.innerText = "Please choose a password with more than 8 characters";
        is_check = false;
    }

    if(is_check){
        fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    use_name: user_input_val,
    password: pass_input_val,
   }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => {
         if(response.ok){
        //signin_status.innerText = "";
        signin_button.innerHTML = `You signid in successfully`
       
    }
  })
    }
}