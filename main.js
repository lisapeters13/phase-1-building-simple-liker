// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Find the empty heart element
const emptyHeart = document.querySelector('.like-glyph');

// Find the full heart element
const fullHeart = document.querySelector('.like-glyph.activated-heart');

// Add an event listener to the empty heart element
emptyHeart.addEventListener('click', function() {
  // Invoke mimicServerCall to simulate making a server request
  mimicServerCall()
    .then(function(response) {
      // Handle the successful response here
      emptyHeart.textContent = FULL_HEART; // Change the heart to a full heart
      emptyHeart.classList.add('activated-heart'); // Add the .activated-heart class
    })
    .catch(function(error) {
      // Handle the error response here
      const errorModal = document.getElementById('modal');
      const modalMessage = document.getElementById('modal-message');
modalMessage.textContent = error.message;
      errorModal.classList.remove('hidden');

      setTimeout(function() {
        errorModal.classList.add('hidden');
      }, 3000);
    });

    });

// Add an event listener to the full heart element
fullHeart.addEventListener('click', function() {
  emptyHeart.textContent = EMPTY_HEART; // Change the heart back to an empty heart
  emptyHeart.classList.remove('activated-heart'); // Remove the .activated-heart class
})

    // Function to simulate server call
function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    // Simulating a server response with a random success or failure
    setTimeout(function() {
      const random = Math.random();
      if (random < 0.5) {
        resolve('success');
      } else {
        reject(new Error('Server error occurred'));
      }
    }, 1000);
  });
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
