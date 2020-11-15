import { pageload, about } from './pageload'
import { menu } from './menu'
import { contact } from './contact'


//Initial pageload
pageload();
about();

//Page switch logic
const switchLogic = (() => {
    const aboutdom = document.getElementById("about");
    const menudom = document.getElementById("menu");
    const contactdom = document.getElementById("contact");
    const div = document.getElementById("div");

    aboutdom.addEventListener("click", () => {switchPage("about")});
    menudom.addEventListener("click", () => {switchPage("menu")});
    contactdom.addEventListener("click", () => {switchPage("contact")});

    function switchPage(page) {
        setTimeout(()=> {
            
            if (document.querySelector('.active').id != page) { //Check if the active page is not the one being seleceted
                document.getElementById("div").textContent = ''; //Removes previous page
                document.querySelectorAll('.active').forEach(el => el.classList.remove('active')); //Removes active page class
                div.classList.add("w3-animate-opacity");
                if (page === "about") { 
                    about();
                }
                else if (page === "menu") { 
                    menu();
                }
                else if (page === "contact") { 
                    contact();
                }
                setTimeout(()=> {div.classList.remove("w3-animate-opacity"); div.style.animation = "";}, 300);
            }
        }, 100);
    }

})();