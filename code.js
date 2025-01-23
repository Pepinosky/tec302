let menuList = document.getElementById("menu-list")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    console.log(menuList)
    if(menuList.style.maxHeight == "0px")   // iwhen the user press menu and height is 0px make the height 300px
    {
        menuList.style.maxHeight = "300px";
    }
    else{  
        menuList.style.maxHeight = "0px";
    }
}

function emailValidation(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    return emailPattern.test(email);
}

function isChecked(checkbox){  //receive all checkbox elements and check which one is checked
    let values = [];
    for (let i = 0; i < checkbox.length; i++) {  //if checkbox is checked the value will be stored in values array
       if (checkbox[i].checked) {
        console.log(checkbox[i].value + "is checked")
        values[i] = checkbox[i].value;
       
       }
    }
    return values;
}

function suscription(){
   let email = document.getElementById("email").value;
   let name = document.getElementById("name").value;
   let checkbox = document.getElementsByClassName("checkbox"); // get all checkbox elements
   

   if (emailValidation(email)) {
    alert("Thanks " + name + "! we will send you an email to: "+ email + " you selected :  " + isChecked(checkbox));
   }else{
    alert("enter a valid email adress")
   }
}