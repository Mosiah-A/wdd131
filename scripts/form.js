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
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const product = document.querySelector("#product");

createElement(products);



function createElement(list) {
    list.forEach(element => {
        const option = document.createElement("option");
        option.value = element.id;
        option.innerText = element.name;
        product.appendChild(option);
    });
    
}



