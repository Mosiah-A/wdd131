const username = document.getElementById("name");

username.innerText= "Mosiah-Andrade";

nameset = "Moises";
username.innerText= nameset;
document.querySelector("#name").style.backgroundColor = "darkred";
document.querySelector("#name").style.color = "white";

const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

const para = document.createElement("p");

para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

const text = document.createTextNode(
    " — the premier source for web development knowledge.",
  );

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);

    /*remove ELemente
sect.removeChild(linkPara); 
linkPara.remove();
linkPara.parentNode.removeChild(linkPara);
*/


  /*Add css style
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";
*/

para.setAttribute("class", "highlight");


