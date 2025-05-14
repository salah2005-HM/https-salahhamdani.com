
function login_validation(){

let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();
let p=document.getElementById("emaiil")

p.innerHTML=''


if(email === ""){
    alert("Enter your email")
	
p.innerHTML='8 caracters'

    return false;
}
else if(password === ""){
  alert("Enter your password")
  return false;
}
return true;
}


function infos_validation(){

    let name=document.getElementById("First Name").value.trim();
    let lastname=document.getElementById("LN").value.trim();
    let adrress=document.getElementById("address").value.trim();
    let email=document.getElementById("email").value.trim();
    let age=document.getElementById("age").value.trim();
    let phonenumber=document.getElementById("tel").value.trim();
    let password=document.getElementById("Pass").value.trim();
    let confirmpassword=document.getElementById("CPass").value.trim();
    let gender=document.querySelector('input[name="male"]').value;
    let wilaya=document.getElementById("wilaya").value.trim();

  if(name === ""){
    alert("your name field should not be empty!");
    return false;
  }
  else if(lastname === ""){
    alert("your lastname field should not be empty!");
    return false;
  }
  else if(email === ""){
    alert(" your email field should not be empty!");
    return false;
  }
  else if(adrress === ""){
    alert(" your adrress field should not be empty!");
    return false;
  }
//Age
    age=parseInt(age,10);// تحويل النص الى رقم
if( isNaN(age) || age <17 || age>100){
    alert("your age must be between 17 and 100 only!");
return false;
}

//<-phone number->
if(phonenumber.length !==10 && phonenumber.length!==9){
    alert("phone number must contain 9 or 10 digits!!");
return false;
}
//password field
if(password ===""){
    alert("password must not be empty!")
    return false;
}
else if(password && confirmpassword.length < 8){
    alert("password must contains at least 8 caracters!")
return false;
}
if(password !== confirmpassword){
alert("password and confirmation password are not identical")
  return false;
}
  if(gender && wilaya){
    alert("you selected:\nwilaya:"+wilaya+"\n gender:" +gender.value);
  }
  else{
    alert("please select gender and wilaya")
  }
return true;
}


function Validation_order(){
  let Color=document.querySelector('input[name="color"]').value;
  let Quantity=document.getElementById("Q").value.trim();
 
  if(Color && Quantity){
    alert("you selected:\nColor:"+Color+"\n Quantity:" +Quantity.value);
  }
  else{
    alert("please select Quantity and color")
  }
return true;
}
