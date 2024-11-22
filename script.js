// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Script to toggle text sections
document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;  // Find the content to show/hide
            content.classList.toggle('hidden');  // Toggle the 'hidden' class

            // Update the button text based on visibility
            if (content.classList.contains('hidden')) {
                this.textContent = 'Pokaż więcej';
            } else {
                this.textContent = 'Pokaż mniej';
            }
        });
    });
});
