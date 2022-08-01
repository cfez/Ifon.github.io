let myImage = document.querySelector('img');

myImage.addEventListener('click', () => {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/wireless.jpg'){
    myImage.setAttribute('src', 'images/images.jpg');
  }else{
    myImage.setAttribute('src', 'images/wireless.jpg');
  }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');





function setUserName() {
  let myName = prompt('Please enter your name');
  if(!myName) {
    setUserName();
  } else{
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}


myButton.addEventListener('click', setUserName);