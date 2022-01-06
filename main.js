// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector('div#modal');
//modal.hidden = true;
modal.className = 'hidden';
let modalMessage = document.getElementById('modal-message');


const heart = document.querySelectorAll('.like-glyph');

heart.forEach(heart => {
  heart.addEventListener('click', handleClick)
});


function handleClick(e) {
  mimicServerCall()
  .then((res) => changeHeart(e.target))
  .catch((e) => errorMessage(e))
} 

function changeHeart(heart) {
  if(heart.innerText === EMPTY_HEART) {
    heart.innerText = FULL_HEART
    heart.className = 'activated-heart';
  }else if(heart.innerText === FULL_HEART) {
    heart.innerText = EMPTY_HEART
    heart.className = '';
  }
}

function errorMessage(e) {
  //modal.hidden = false;
  modal.className = '';
  modalMessage.innerText = e;
  setTimeout(() => {modal.className = 'hidden'}, 3000)
}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
