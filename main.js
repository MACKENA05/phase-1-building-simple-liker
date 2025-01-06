// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//DOMContentLoaded Event and Selecting Elements
document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph'); // Select all hearts
  const errorModal = document.getElementById('modal');    // Get error modal
  const errorMessage = document.getElementById('modal-message'); // Get error message element

  // Initially hide the error modal
  errorModal.classList.add('hidden');

  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      // Simulate server request
      mimicServerCall()
        .then(() => {
          // Toggle heart appearance on success
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart'); // Make it red
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove('activated-heart'); // Remove red
          }
        })
        .catch(error => {
          // Show error modal on failure
          errorMessage.textContent = error;
          errorModal.classList.remove('hidden');
          console.log(errorModal);
          // Hide error modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});


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
