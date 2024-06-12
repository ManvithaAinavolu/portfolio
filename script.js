// Function to open modal
function openModal(projectId) {
  var modal = document.getElementById(projectId + 'Modal');
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(projectId) {
  var modal = document.getElementById(projectId + 'Modal');
  modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  var modals = document.getElementsByClassName('modal');
  for (var i = 0; i < modals.length; i++) {
      var modal = modals[i];
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
}
