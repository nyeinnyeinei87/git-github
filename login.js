var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("Welcome From ELUX!", "Login successfully");
    document.getElementById("demo").innerHTML = res;
    //alert ("Login successfully");
    window.location = "home_admim_panel.html"; // Redirecting to other page.
    window.localStorage.setItem('username', JSON.stringify(username));//localstroage
    window.localStorage.setItem('password', JSON.stringify(password));//localstroage
    return false;
}
/*else if(username == "" || password == "" || username != "Formget" || password != "formget#123"){
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("Welcome From ELUX!", "You have left to fill correctly for complete");
    document.getElementById("demo").innerHTML = res;
   // return false;
    
}*/

else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
var str = document.getElementById("demo").innerHTML; 
var res = str.replace("Welcome From ELUX!", "You have left to fill correctly for complete");
document.getElementById("demo").innerHTML = res;
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}