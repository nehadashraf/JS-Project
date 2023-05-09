jQuery("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });
wow = new WOW(
    {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();


//hide read more button
let paragraph = document.getElementById("rent");
document.getElementsByTagName('button')[2].textContent='READ MORE';

function show() {
var element = document.body;
element.classList.toggle("hide");

var button = document.getElementsByTagName('button')[2];
if (paragraph.style.height == '0px'&& button.textContent == 'READ MORE') {
    paragraph.style.height = '105px';
    button.textContent='READ LESS';
  }
else{
  paragraph.style.height = '0px';
  button.textContent='READ MORE';
}
}

//print
function printPage(){
  window.print();
}
//dark mode
document.getElementsByTagName('i')[0];

function modeicon() {
    var element = document.body;
    element.classList.toggle("darkicon");

} 
/////////////Sign up and Login Validation////////////////////////

const form =document.querySelectorAll('#form');
console.log(form[0]);
const submit=document.querySelectorAll('#submit');
const userName =document.querySelectorAll("#userName");
const email =document.querySelectorAll('#email');
const password =document.querySelectorAll('#password');
const password2 =document.querySelectorAll('#password2');


form[0].addEventListener('submit',(e)=>{
    //prevent form submiting
    e.preventDefault();
    signUpValidateInputs();
        const successInputs =document.querySelectorAll('.success').length;
        if(successInputs == 4){
        document.getElementById('id0').style.display='none';
        const done= document.getElementById('done');
        done.style.display='block';
        setTimeout(() => {
            const box = document.getElementById('done');
            box.style.display = 'none';
        }, 1000); 
    }}
);
form[1].addEventListener('submit',(e)=>{
    //prevent form submiting
    e.preventDefault();
    logInValidateInputs();
    const successInputs =document.querySelectorAll('.success').length;
    console.log(successInputs);
        if(successInputs == 2){
        document.getElementById('id1').style.display='none';}

});
 const setErrors =(element,errorMessage)=>{
    const inputControl = element.parentElement; 
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = errorMessage;
    errorDisplay.style.display="block";
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    console.log(inputControl.classList);

 };
 const setSuccess = (element)=>{
    const inputControl = element.parentElement; 
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    errorDisplay.style.display="none";
    inputControl.classList.remove('error');
    inputControl.classList.add('success');

 };
 const isValidEmail = (email )=> {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const signUpValidateInputs=()=>{
    //trim()-> remove white spaces
 const userNameValue= userName[0].value.trim();
 const emailValue= email[0].value.trim();
 const passwordValue= password[0].value.trim();
 const password2Value= password2[0].value.trim();
 console.log(userNameValue.length);

 if(userNameValue === ''){
    setErrors(userName[0],'User Name is Required');
 }
 else if (userNameValue.length <3) {
    setErrors(userName[0],'User Name  must be more than 3 characters');
 }
 else{
    setSuccess (userName[0]);
 }

 if(emailValue === ''){
    setErrors(email[0],'Email is Required');
 }
 else if (!isValidEmail(emailValue)) {
    setErrors(email[0],'Please Enter a valid Email');
 }
 else{
    setSuccess (email[0]);
 }

 if(passwordValue === ''){
    setErrors(password[0],'Password is Required');
 }
 else if (passwordValue.length <8) {
    setErrors(password[0],'password must  be more characters');
 }
 else{
    setSuccess (password[0]);
 }

 if(password2Value === ''){
    setErrors(password2[0],'Password confirm is Required');
 }
 else if (password2Value!== passwordValue) {
    setErrors(password2[0],"passwords Doesn't match");
 }
 else{
    setSuccess (password2[0]);
 }
};
console.log(userName[1]);
const logInValidateInputs=()=>{
    //trim()-> remove white spaces
 const emailValue= email[1].value.trim();
 const passwordValue= password[1].value.trim();

 if(emailValue === ''){
    setErrors(email[1],'Email is Required');
 }
 else if (!isValidEmail(emailValue)) {
    setErrors(email[1],'Please Enter a valid Email');
 }
 else{
    setSuccess (email[1]);
 }

 if(passwordValue === ''){
    setErrors(password[1],'Password is Required');
 }
 else if (passwordValue.length <8) {
    setErrors(password[1],'password must  be more characters');
 }
 else{
    setSuccess (password[1]);
 }
 
};
const signupButton=document.querySelector('.account');
signupButton.addEventListener('click',()=>{
   document.getElementById('id1').style.display='none';
   document.getElementById('id0').style.display='block';
})

