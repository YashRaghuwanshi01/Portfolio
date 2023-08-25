function openProject(projectId) {
    let projectLinks = {
        1: 'https://link-to-project-1.com',
        2: 'https://link-to-project-2.com',
        // Add more as necessary
    };
    window.location.href = projectLinks[projectId] || alert('Project link not available.');
}
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  