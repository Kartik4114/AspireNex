const form =document.querySelector("form");
 
const fullName=document.getElementById("name");
const email=document.getElementById("email");
const subject=document.getElementById("subject");
const mess=document.getElementById("message");

function sendEmail(){

    const bodyMessage=`Full Name: ${fullName.value}<br>
                        Email: ${email.value}<br>
                        Subject: ${subject.value}<br>
                        Message: ${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kartikworld4114@gmail.com",
        Password : "C1A46F4A8B9645104CF29C8624A1A68107F1",
        To : 'kartikworld4114@gmail.com',
        From : "kartikworld4114@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message=="OK"){
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
    
}

function checkInputs() {
    const items=document.querySelectorAll(".formfield");

    for(const item of items){
       if(item.value==""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
       }

       if(items[1].value!=""){
        checkEmail();
       }

       items[1].addEventListener("keyup",()=>{
        checkEmail();
       });

       item.addEventListener("keyup",()=>{
            if(item.value!=""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");

            }
       });
    }
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail=document.querySelector(".error-txt.email");

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value !=""){
            errorTxtEmail.innerHTML=`Enter a valid email address`;
        }
        else {
            errorTxtEmail.innerHTML=`Email Address can't be blank`;

        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");

    }
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !mess.classList.contains("error")){
        // console.log("Ok");
        sendEmail();

        form.reset();
        return false;
    }

});

