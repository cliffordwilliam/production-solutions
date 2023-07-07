// Toggle menu visibility
function toggleMenu() {
    var navMenu = document.querySelector('.nav-menu');
    var svgBurger = document.querySelector('.svg-burger');
    var svgCross = document.querySelector('.svg-cross');
    
    navMenu.classList.toggle('active');
    svgBurger.classList.toggle('hide');
    svgCross.classList.toggle('hide');
  }

// Get all the dropdown menu items and their corresponding submenus
const dropdownItems = document.querySelectorAll('.drop');
const submenus = document.querySelectorAll('.drop-menu');

// Add event listeners for mouseenter and mouseleave events to each dropdown menu item
dropdownItems.forEach((dropdownItem, index) => {
  const submenu = submenus[index];

  dropdownItem.addEventListener('mouseenter', () => {
    showSubMenu(submenu);
  });

  dropdownItem.addEventListener('mouseleave', () => {
    hideSubMenu(submenu);
  });
});

// Function to show the submenu
function showSubMenu(submenu) {
  submenu.classList.toggle('show');
  // submenu.style.display = 'block';
}

// Function to hide the submenu
function hideSubMenu(submenu) {
  submenu.classList.toggle('show');
  // submenu.style.display = 'none';
}

// // Fades in and out fading images
// const fadingImages = document.querySelectorAll('.fading-img');
// const fadeDuration = 6000; // Duration in milliseconds

// let currentIndex = 0;

// function fadeOut() {
//   fadingImages[currentIndex].style.opacity = '0';
// }

// function fadeIn() {
//   fadingImages[currentIndex].style.opacity = '1';
// }

// function fadeImages() {
//   fadeOut();

//   currentIndex = (currentIndex + 1) % fadingImages.length;

//   fadeIn();
// }

// setInterval(fadeImages, fadeDuration);

// Change nav bg color when scrolling down
window.addEventListener('scroll', function() {
  var element = document.querySelector('header');
  var contactElement = document.querySelector('a.contacts.iconed.start');
  var scrollPosition = window.scrollY;

  // Get the height of the contactElement
  var scrollThreshold = contactElement.offsetHeight;

  if (scrollPosition > scrollThreshold) {
    element.classList.add('solid');
  } else {
    element.classList.remove('solid');
  }
});

