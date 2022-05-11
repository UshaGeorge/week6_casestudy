function fnValidate(fnCallback){
    let userid= document.getElementById('txtUserName').value;
    let pwd= document.getElementById('txtPassword').value;

    if(userid == "admin" && pwd == "12345"){
        fnCallback();
    }
    else{
        alert("Invalid credential");
    }
}

function fnRedirect(){
    console.log(fnRedirect);
    window.location.href = "todolist.html";
}