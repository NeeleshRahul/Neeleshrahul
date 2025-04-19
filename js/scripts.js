/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

function openModal(projectCard) {
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');

  // Get data from the clicked project card
  const title = projectCard.getAttribute('data-title');
  const image = projectCard.getAttribute('data-image');
  const description = projectCard.getAttribute('data-description');

  // Populate the modal with project details
  modalTitle.textContent = title;
  modalImage.src = image;
  modalDescription.textContent = description;

  // Show the modal
  modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
      closeModal();
  }
};
