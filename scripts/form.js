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


const products = [
    'product 1',
    'product 2',
    'product 3',
    'product 4',
    'product 5',
    'product 6',
    'product 7'
];

const product = document.querySelector("#product");

createElement(products);



function createElement(list) {
    list.forEach(element => {
        const option = document.createElement("option");
        option.value = element;
        option.innerText = element;
        product.appendChild(option);
    });
    
}
