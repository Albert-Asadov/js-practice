 
 
 let butt = document.querySelector(".btn5");
 
butt.onclick = function(){

    elementFirst = userName();
    elementSecond = userSurname();
    elementThird = userEmail();
    elementFor = userPassword();

    if(elementFirst==true && elementSecond==true && elementThird==true && elementFor==true){
        window.location.href="https://www.google.com"
    }

}

function userName(){
    let name = document.getElementById("#name").value;
    let elementFirst = name.lenght;
    let p;
    if(elementFirst>3){
        return true;
    }
    else{
        p = "write 3 or more symbols"
        document.getElementById("#first").innerHTML = p;
        return false;
    }
}

function userSurname(){
    let surname = document.getElementById("#surname").value;
    let elementSecond = surname.lenght;
    let p;
    if(elementSecond>3){
        return true;
    }
    else{
        p = "write 3 or more symbols"
        document.getElementById("#second").innerHTML = p;
        return false;
    }
}

function userEmail(){
    let email = document.getElementById("#email").value;
    let elementThird = email.includes("@");
    let p;
    if(elementThird== true){
        return true;
    }
    else{
        p = "write sybol @"
        document.getElementById("#third").innerHTML = p;
        return false;
    }
}

function userPassword(){
    let pass = document.getElementById("#password").value;
    let elementFor = pass.lenght;
    let p;
    if(elementFor >7){
        return true;
    }
    else{
        p = "write password more than 7 elements"
        document.getElementById("#forth").innerHTML = p
        return false;
    }
}