
// Function to handle window expand and resize
function toggleExpand(windowId) {
    const windowElement = document.getElementById(windowId);
    const expandButton = document.getElementById(`expand-button-${windowId}`);
    const resizeButton = document.getElementById(`resize-button-${windowId}`);

    if (windowElement.classList.contains('expanded')) {
        // If already expanded, resize back to original
        windowElement.style.width = '800px';
        windowElement.style.height = '92%';

        // Center the window
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const windowWidth = windowElement.offsetWidth;
        const windowHeight = windowElement.offsetHeight;

        windowElement.style.left = `${((viewportWidth - windowWidth) / 2) + 500}px`;
        windowElement.style.top = `${((viewportHeight - windowHeight) / 2) + 30}px`;

        windowElement.classList.remove('expanded');

        expandButton.style.display = 'inline-block';
        resizeButton.style.display = 'none';
    } else {
        // Expand the window to fullscreen
        windowElement.style.width = '100%';
        windowElement.style.height = '100%';
        windowElement.style.left = '0';
        windowElement.style.top = '0';
        windowElement.classList.add('expanded');

        expandButton.style.display = 'none';
        resizeButton.style.display = 'inline-block';
        resizeButton.style.marginTop = '0px';
        resizeButton.style.paddingTop = '-10px';
    }
    }
    // Example to open a window and initialize controls
    window.onload = function() {
        setupWindowControls('window0');
    };

window.onload = function() {
    setupWindowControls('window1');
};

window.onload = function() {
    setupWindowControls('window2');
};

window.onload = function() {
    setupWindowControls('window3');
};

window.onload = function() {
    setupWindowControls('window4');
};

window.onload = function() {
    setupWindowControls('window5');
};

window.onload = function() {
    setupWindowControls('window6');
};



// Initialize the window controls
function setupWindowControls(windowId) {
    const expandButton = document.getElementById(`expand-button-${windowId}`);
    const resizeButton = document.getElementById(`resize-button-${windowId}`);
    
    // Add event listeners to buttons
    expandButton.addEventListener('click', () => toggleExpand(windowId));
    resizeButton.addEventListener('click', () => toggleExpand(windowId));
}
// Function to open a window
function openWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    const taskbarIcons = document.getElementById('taskbar-button');

    // Display the window
    windowElement.style.display = 'block';
    windowElement.style.width = '800px';
    windowElement.style.height = '92%';
    windowElement.style.zIndex = 100; 
    windowElement.style.yIndex = 90;

    // Center the window
    const windowWidth = windowElement.offsetWidth;
    const windowHeight = windowElement.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    windowElement.style.left = `${(viewportWidth - windowWidth) / 2}px`;
    windowElement.style.top = `${((viewportHeight - windowHeight) / 2) - 23}px`;

    // Check if the taskbar icon already exists
    if (!document.getElementById(`taskbar-${windowId}`)) {
        // Create a new taskbar icon for the window
        const taskbarIcon = document.createElement('div');
        taskbarIcon.className = 'taskbar-icon';
        taskbarIcon.id = `taskbar-${windowId}`;

        // Create the text element
        const iconText = document.createElement('span');
        iconText.innerText = windowElement.querySelector('.window-titlebar span').innerText;

        // Create the image element
        const iconImage = document.createElement('img');
        iconImage.src = 'icons/directory_open_cool-3.png'; // Replace with your image path
        iconImage.className = 'taskbar-icon-image';

        // Append the image before the text
        taskbarIcon.appendChild(iconImage);
        taskbarIcon.appendChild(iconText);

        // On click, toggle the window's visibility
        taskbarIcon.onclick = function() { toggleWindow(windowId); };

        // Insert the new icon at the beginning of the taskbar button area
        if (taskbarIcons.firstChild) {
            taskbarIcons.insertBefore(taskbarIcon, taskbarIcons.firstChild);
        } else {
            // If there are no existing children, simply append the new icon
            taskbarIcons.appendChild(taskbarIcon);
        }
    }
}

// Function to minimize a window
function minimizeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'none'; // Hide the window
}

// Function to close a window
function closeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'none';

    // Remove the taskbar icon
    const taskbarIcon = document.getElementById(`taskbar-${windowId}`);
    if (taskbarIcon) {
        taskbarIcon.remove();
    }
}

// Function to toggle the visibility of a window
function toggleWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    if (windowElement.style.display === 'none') {
        windowElement.style.display = 'block'; // Show the window
        windowElement.classList.remove('minimized');
    } else {
        minimizeWindow(windowId); // Minimize the window
    }
}

// Initialize the clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize clock immediately

// function windowclose(){
// window.close();
// }

// Make a window draggable
function makeWindowDraggable(titlebarId, windowId) {
    const titlebar = document.getElementById(titlebarId);
    const windowElement = document.getElementById(windowId);

    let offsetX = 0, offsetY = 0, isDragging = false;

    titlebar.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - windowElement.offsetLeft;
        offsetY = e.clientY - windowElement.offsetTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            windowElement.style.left = (e.clientX - offsetX) + 'px';
            windowElement.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

// Play sounds and set up window behavior on load
window.onload = function() {
    // Play startup sound on page load
    const startupSound = document.getElementById('startup-sound');
    if (startupSound) {
        startupSound.play().catch(error => {
            console.log("Autoplay blocked or other issue:", error);
        });
    }

    // Make the "My Computer" window draggable
    makeWindowDraggable('titlebar0', 'window0');
    makeWindowDraggable('titlebar1', 'window1');
    makeWindowDraggable('titlebar2', 'window2');
    makeWindowDraggable('titlebar3', 'window3');
    makeWindowDraggable('titlebar4', 'window4');
    makeWindowDraggable('titlebar5', 'window5');
    makeWindowDraggable('titlebar6', 'window6');




    // Play click sound on button/icon click
    document.querySelectorAll('.start-button, .icon, .close-button, .expand-button, .resize-button, .minimized, .taskbar-button, .minimize-button, .menu-item').forEach(element => {
        element.addEventListener('click', function() {
            const clickSound = document.getElementById('click-sound');
            if (clickSound) {
                clickSound.play().catch(error => console.log("Autoplay blocked or other issue:", error));
            }
        });
    });

    // Toggle start menu visibility
    document.querySelector('.start-button').addEventListener('click', function() {
        const startMenu = document.getElementById('start-menu');
        startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
        
        // Play click sound on start button click
        const clickSound = document.getElementById('click-sound');
        if (clickSound) {
            clickSound.play().catch(error => console.log("Autoplay blocked or other issue:", error));
        }
    });
};
