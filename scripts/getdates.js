document.addEventListener('DOMContentLoaded', () => {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Get the last modified date
    const lastModified = document.lastModified;

    // Output the current year in the first paragraph of the footer
    document.getElementById('currentYear').textContent = `© ${currentYear}`;

    // Output the last modified date in the second paragraph of the footer
    document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;
});
