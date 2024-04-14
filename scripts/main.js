const img = document.querySelector('img');
const imgAlt = img.querySelector('alt');

// img.addEventListener('click', () => {
//   const curSrc = img.getAttribute('src');
//   if (curSrc === 'images/firefox-icon.png') {
//     img.setAttribute('src', 'images/firefox-icon2.png');
//   } else {
//     img.setAttribute('src', 'images/firefox-icon.png');
//   }
// });

img.onclick = () => {
  const curSrc = img.getAttribute('src');

  console.log('1', curSrc);
  if (curSrc === 'images/firefox-icon.png') {
    img.setAttribute('src', 'images/firefox-icon2.png');
  } else if (curSrc === 'images/firefox-icon2.png') {
    img.setAttribute('src', 'images/firefox-icon3.png');
  } else {
    img.setAttribute('src', 'images/firefox-icon.png');
  }
};

const myBtn = document.querySelector('button');
const myH1 = document.querySelector('h1');

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  setContent(storedName);
}

function setUserName() {
  const myName = prompt('Please enter your name');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    setContent(myName);
  }
}

function setContent(_name) {
  myH1.textContent = `Mozila is cool!, ${_name}`;
}

myBtn.onclick = () => setUserName();
