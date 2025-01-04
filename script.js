document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu a');
  const sections = document.querySelectorAll('section');

  // Function to show the selected section
  function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.classList.add('active');
    }
  }

  // Attach event listeners to menu links
  menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Prevent default anchor behavior
      const sectionId = link.getAttribute('data-section');
      showSection(sectionId);
    });
  });

  // Show the home section by default
  showSection('home');
});
