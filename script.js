document.addEventListener('DOMContentLoaded', () => {
  
    const nameButton = document.getElementById('nameButton');
    const displayName = document.getElementById('displayName');

    nameButton.addEventListener('click', () => {
        const userName = prompt("Please enter your name:");
        if (userName) {
            displayName.textContent = `Hello, ${userName}! Welcome to my website.`;
        } else {
            displayName.textContent = "Hello! Welcome to my website.";
        }
    });

    })

    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            
            item.style.backgroundColor = '#00695c'; 
        });

        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '';
        });
    });
});
function enlargeImage() {
    var img = document.getElementById("profileImage");
    
    if (img.style.width === "100%") {
        img.style.width = "200px"; 
    } else {
        img.style.width = "300px"; 
    }
}

