function redirectToPage(url) {
    window.open(url, '_blank');
}

function goToArea(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" , inline: "end"});
}

function confirmSent() {
  alert("Your message has been sent!");
}

// Function to check the window size and make an element visible
function checkWindowSize() {
  const elementToMakeVisible = document.getElementById("menu-items"); // Replace with the actual element ID

  // Define the screen width threshold at which you want to make the element visible
  const screenSizeThreshold = 850; // Adjust this value to your desired screen size

  // Get the current window width
  const windowWidth = window.innerWidth;

  // Check if the window width is less than or equal to the threshold
  if (windowWidth <= screenSizeThreshold) {
    // If the window width is less than or equal to the threshold, make the element visible
    elementToMakeVisible.style.display = "none"; // You can use any appropriate display property
  } else {
    // If the window width is greater than the threshold, hide the element
    elementToMakeVisible.style.display = "flex";
  }
}

// Attach the checkWindowSize function to the window's resize event
window.addEventListener("resize", checkWindowSize);

// Call the function initially to set the initial state
checkWindowSize();


const content = document.getElementById('overview-me-section');
const about_section = document.getElementById('about-me-section');
const technologies_section = document.getElementById('technologies-section');
const projects_section = document.getElementById('projects-section');
const contact_section = document.getElementById('contact-me-section');

const menuButton = document.getElementById("menu-button");
const menuItems = document.getElementById("menu-items");

menuButton.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click event from propagating further
  toggleMenu(); // Toggle the menu
});

// Function to toggle the menu
function toggleMenu() {
  if (menuItems.style.display === "none" || menuItems.style.display === "") {
    menuItems.style.display = "block"; // Show the menu items
  } else {
    menuItems.style.display = "none"; // Hide the menu items
  }
}

// Event listener to close the menu when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideMenu = menuItems.contains(event.target);
  const isClickOnMenuButton = menuButton.contains(event.target);

  if (window.innerWidth < 850) {
    if (!isClickInsideMenu && !isClickOnMenuButton) {
      menuItems.style.display = "none"; // Close the menu
    }
  }
});

window.addEventListener('load', () => {
    const contentTop = content.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (contentTop < windowHeight) {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }
});

window.addEventListener('scroll', () => {
  const contentTop = about_section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (contentTop < windowHeight - 600) {
      about_section.style.opacity = '1';
      about_section.style.transform = 'translateY(0)';
  }
});

window.addEventListener('scroll', () => {
  const contentTop = technologies_section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (contentTop < windowHeight - 600) {
      technologies_section.style.opacity = '1';
      technologies_section.style.transform = 'translateY(0)';
  }
});

window.addEventListener('scroll', () => {
  const contentTop = projects_section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (contentTop < windowHeight - 600) {
      projects_section.style.opacity = '1';
      projects_section.style.transform = 'translateY(0)';
  }
});

window.addEventListener('scroll', () => {
  const contentTop = contact_section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (contentTop < windowHeight - 600) {
      contact_section.style.opacity = '1';
      contact_section.style.transform = 'translateY(0)';
  }
});

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });