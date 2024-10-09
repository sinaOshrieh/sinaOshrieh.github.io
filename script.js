document.addEventListener('DOMContentLoaded', () => {
    const nameButton = document.getElementById('nameButton');
    const displayName = document.getElementById('displayName');

    nameButton.addEventListener('click', () => {
        const userName = prompt("Please enter your name:");
        displayName.textContent = userName ? `Hello, ${userName}! My name is Sina! Welcome to my website.` : "Hello! My name is Sina! Welcome to my website.";
    });

    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#00695c'; 
        });

        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '';
        });
    });

    const profileImage = document.getElementById('profileImage');
    
    profileImage.addEventListener('click', enlargeImage);
    
    function enlargeImage() {
        if (profileImage.style.width === "100%") {
            profileImage.style.width = "200px"; 
        } else {
            profileImage.style.width = "100%"; 
        }
    }
});
