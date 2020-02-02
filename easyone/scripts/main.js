let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'imgs/yl.jpg') {
      myImage.setAttribute('src', 'imgs/fml.jpg');
    } else {
      myImage.setAttribute('src', 'imgs/yl.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = myName+'，你酷毙了!' ;;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = storedName+'，你酷毙了!' ;
}

myButton.onclick = function() {
   setUserName();
}