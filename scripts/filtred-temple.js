 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('open');
	hambutton.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
  
    const currentYear = new Date().getFullYear();

    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = `© ${currentYear}`;

    document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;
});


const temples = [
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States", 
        dedicated: "1888, May, 21",
        dedicatedYear: 1888,
        area: 74792,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        dedicatedYear: 2015,
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        dedicatedYear: 2020,
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        dedicatedYear: 1974,
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        dedicatedYear: 1986,
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        dedicatedYear: 1983,
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Belém Brazil",
        location: "belém, Para", 
        dedicated: "2022, November, 20",
        dedicatedYear: 2022,
        area: 6162,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/1280x800/belem_brazil_temple_exterior.jpg"
    },
    {
        templeName: "Salvador Brazil",
        location: "Salvador, Bahia", 
        dedicated: "2024, October, 20",
        dedicatedYear: 2024,
        area: 5154,
        imageUrl:"https://www.churchofjesuschrist.org/imgs/d4ccb8aa13a611ef9272eeeeac1e210ac288e469/full/320%2C/0/default"
    },
    {
        templeName: " Brasília Brasil",
        location: "Brasilia, Distrito Federal", 
        dedicated: "2023, september, 17",
        dedicatedYear: 2023,
        area: 1562,
        imageUrl:"https://churchofjesuschrist.org/imgs/95f3f3abdd4811ed920ceeeeac1e15db91037802/full/320%2C/0/default"
    }
]

const main = document.querySelector("main");
const galery = document.querySelector("#galery");

creteTempleCard(temples)



function createelement(element)
{   
    
    const para = document.createElement("figure");
        
    const img = document.createElement("img");
    img.src = element.imageUrl; // Add the image source URL here
    img.alt = element.templeName;
    img.loading= "lazy" // Add the alt text here

    const name = document.createElement("h3");
    name.innerText = element.location; // Add the caption text here
    
    const location = document.createElement("span");
    location.innerHTML = `<strong>Location: </strong> ${element.location}`; 
    
    const dedication = document.createElement("span");
    dedication.innerHTML = `<strong>Dedication: </strong> ${element.dedicated}`; 
    
    const size = document.createElement("span");
    size.innerHTML = `<strong>Size: </strong> ${element.area} sq ft`; 

    
    para.appendChild(name);
    para.appendChild(location);
    para.appendChild(dedication);
    para.appendChild(size);

    para.appendChild(img);

    galery.appendChild(para);
}

const old = document.getElementById("old");
const newt = document.getElementById("new");
const large = document.getElementById("large");
const small = document.getElementById('small');
const home = document.getElementById("home");



old.addEventListener('click', () => {
    
    let filter = temples.filter( (element)  => element.dedicatedYear < 1900 )
    creteTempleCard(filter);

})

newt.addEventListener('click', () => {
    let filter = temples.filter( (element) => element.dedicatedYear > 2000) 
    creteTempleCard(filter);
})

large.addEventListener('click', () => {
    let filter = temples.filter( (element) => element.area > 90000) 
    creteTempleCard(filter);
})

small.addEventListener('click', () => {
    let filter = temples.filter( (element) => element.area < 10000) 
    creteTempleCard(filter);
})

home.addEventListener('click', () => {
    creteTempleCard(temples)
})


function creteTempleCard(filter)
{
    galery.innerHTML = "";
    filter.forEach(element => {
        
        let para = document.createElement("figure");
        
        const img = document.createElement("img");
        img.src = element.imageUrl; // Add the image source URL here
        img.alt = element.templeName;
        img.loading= "lazy" // Add the alt text here

        const name = document.createElement("h3");
        name.innerText = element.location; // Add the caption text here
        
        const location = document.createElement("span");
        location.innerHTML = `<strong>Location: </strong> ${element.location}`; 
        
        const dedication = document.createElement("span");
        dedication.innerHTML = `<strong>Dedication: </strong> ${element.dedicated}`; 
        
        const size = document.createElement("span");
        size.innerHTML = `<strong>Size: </strong> ${element.area} sq ft`; 

        
        para.appendChild(name);
        para.appendChild(location);
        para.appendChild(dedication);
        para.appendChild(size);

        para.appendChild(img);

        galery.appendChild(para);
            
    });
    
}