/*var text = "Hello World";
function add(){
    localStorage.setItem('data',text);
}

function remove(){
localStorage.removeItem('data');
}*/



function addItem(){
    var getFirstName = document.getElementById('fname').value;
    var getLastName = document.getElementById('lname').value;
    var getEmail = document.getElementById('email').value;
    var getPassword = document.getElementById('pswd').value;
    var getAge = document.getElementById('age').value;
    var getNumber = document.getElementById('number').value;
    console.log("add");
    if(getFirstName !== "" && getLastName !== "" && getEmail !== "" && getPassword !== "" && getAge !== "" && getNumber !== ""){
        var Obj = {
            fname:getFirstName,
            lname:getLastName,
            email:getEmail,
            pswd:getPassword,
            age:getAge,
            number:getNumber
        }
        localStorage.setItem('data',JSON.stringify(Obj))
        window.location.href = "loginpage.html";
    }


    
}

function logIn(){
    var registerdEmail = document.getElementById('loginEmail').value;
    var registerdPassword = document.getElementById('loginPswd').value;

    var getData = JSON.parse(localStorage.getItem('data')) ;
    if(getData.email === registerdEmail && getData.pswd === registerdPassword ){
        window.location.href = "quiz.html";
        console.log("Login Successfull!");
    }else{
        console.log("Wrong Email or Password");
    }
    //console.log(getData);
}