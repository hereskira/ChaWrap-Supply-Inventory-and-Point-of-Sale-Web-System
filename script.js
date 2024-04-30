document.addEventListener('DOMContentLoaded', () => {
   
    const sidebar = document.querySelector('.sidebar-menu');
    const menuLines = document.querySelectorAll('.menu-line');
    const exitButton = document.querySelector('.exit-button');
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    console.log('Sidebar:', sidebar);
    console.log('Menu Lines:', menuLines);
    console.log('Exit Button:', exitButton);
    console.log('Sidebar Items:', sidebarItems);

    menuLines.forEach(line => {
        line.addEventListener('click', () => {
            console.log('Menu line clicked');
            sidebar.classList.toggle('visible');
        });
    });

    exitButton.addEventListener('click', () => {
        console.log('Exit button clicked');
        sidebar.classList.remove('visible');
    });

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const url = item.getAttribute('data-url');
            console.log('Navigating to:', url);
            window.location.href = url;
        });
    });
});

document.querySelector('.modify-item').addEventListener('click', function() {
    window.location.href = 'add-item.html';
});
