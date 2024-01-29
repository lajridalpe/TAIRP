let contacts = document.querySelector("#contact");
let bloges = document.querySelector   ("#bloges");
let reviews = document.querySelector ("#review");
let kapde = document.querySelector   ("#clothes");



contacts.addEventListener("click", ()=>{
    contacts.style.color="red";
    bloges.style.color="black";
    reviews.style.color="black";
    kapde.style.color="black";  
})

bloges.addEventListener("click", ()=>{
    bloges.style.color="red";
    contacts.style.color="black";
    reviews.style.color="black";
    kapde.style.color="black";  
})

reviews.addEventListener("click", ()=>{
    reviews.style.color="red";
    bloges.style.color="black";
    contacts.style.color="black";
    kapde.style.color="black"; 
})

kapde.addEventListener("click", ()=>{
    kapde.style.color="red";
    bloges.style.color="black";
    contacts.style.color="black";
    reviews.style.color="black";  
})


let login= document.getElementById("loginbtn");

login.addEventListener("click", ()=>{
    document.querySelector(".loginPage").style.display="block";
})



let logedd=document.getElementById("logine");
logedd.addEventListener("click",()=>{
    let emaill=document.getElementById("email");
    let passs=document.getElementById("pass");
    if(emaill.value=="" || passs.value ==""){
        alert("Please enter email and password");
    }
    else{
        alert("Youe logged in");
    }
    document.querySelector(".loginPage").style.display="none";
})




let submitbtn=document.getElementById("submit");
submitbtn.addEventListener("click", ()=>{
     let names= document.getElementById("name");
     let num= document.getElementById("number");


     if(names.value == "" || num.value ==""){
        alert("wrong input");
     }
     else{
        alert("Welcome");
     }
})