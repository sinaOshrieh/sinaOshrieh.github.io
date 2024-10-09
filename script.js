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

    const profileImage = document.getElementById('profileImage');

    profileImage.addEventListener('click', (event) => {
        
        profileImage.classList.toggle('enlarged');

        if (profileImage.classList.contains('enlarged')) {
            
            event.stopPropagation();

            document.addEventListener('click', closeEnlargedImage);
        } else {
            document.removeEventListener('click', closeEnlargedImage);
        }
    });

    function closeEnlargedImage(event) {
        if (!profileImage.contains(event.target)) {
            profileImage.classList.remove('enlarged');
            document.removeEventListener('click', closeEnlargedImage);
        }
    }

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

