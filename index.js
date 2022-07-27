//Write the code to access element which is having id as "text"

let text = document.getElementById('text');
console.log(text.innerText);


//Write the code to access element which is having tag as "h1"

let h1 = document.getElementsByTagName('h1');
console.log(h1[0].innerText);


//Write the code to access element which is having class as "box"

let box = document.getElementsByClassName('box');
console.log(box);



//Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
function change_text() {
    document.getElementById("textOne").innerHTML = "Hello World";
    document.getElementById("hello").innerText = "Welcome to academy"
    document.getElementById("hello").style.color = "blue";


};
console.log(textOne);


//Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.


function change_flex() {
    document.getElementById("container").style.flexDirection= "column";
};


//What’s the difference between window vs document?









//"<h1>Hello </h1>

//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

let elmnt1 = document.getElementById("heading");
elmnt1.innerText= "heading";
elmnt1.style.color = "red";


//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
function change_text() {
document.getElementById("hello").innerText = "Welcome to Elevation academy"
    document.getElementById("hello").style.color = "blue";
};


//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function displayTime (){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

if(hrs >= 12){
    session.innerHTML = 'PM';
}
else{
    session.innerHTML = 'AM';
}

if(hrs > 12){
    hrs = hrs - 12;
   }
document.getElementById('hour').innerHTML = hrs +" <br>hours";
document.getElementById('minute').innerHTML = min + "<br>mins";
document.getElementById('second').innerHTML = sec + "<br>secs";

}
setInterval(displayTime,1000);


//Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected
let a1 = document.getElementById("year");

var text1 = a1.options[year.selectedIndex].text;

function giveOption (){
    text1 = a1.options[year.selectedIndex].text;
    document.getElementById("select_text").innerText = text1;
}


// //"Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95"
var age = document.getElementById("age").value;
var minyear = "1995";
var x = document.getElementById("mail").value;
var y =x.substring(x.indexOf('@') + 1);
function validateform (){
   age = document.getElementById("age").value;
   minyear = "1995";
   x = document.getElementById("mail").value;

    if(age >= minyear && x.includes("prepbytes.com")){
        return true;
    }else{
        alert("validation failed (Pls check your email, phone and birth year)");
        return false;
    }
    
};