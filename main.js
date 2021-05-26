//  Get model element
var modal = document.getElementById('simpleModal');
//  Get open modal button
var modalBtn = document.getElementById('modalBtn');
//  Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
//  Listen for outside click
window.addEventListener('click', outsideClick);

//Function to open modal
function openModal(){
    modal.style.display = 'block';
}

//Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//Function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
    modal.style.display = 'none';
}
}

(function changeTitle() {
    // var title = document.getElementById("title").innerText;
    var screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
      // Load mobile image
      document.getElementById("title").innerText = "Mobile";
    } else {
      // desktop image
      document.getElementById("title").innerText = "Desktop";
    }
  })();