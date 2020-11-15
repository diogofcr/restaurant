import { dommanipulation } from './pageload'


const contact = () => {
    document.getElementById("contact").classList.add("active");
    dommanipulation.create("subtitle","h2","div");
    dommanipulation.text("subtitle","Contact information");

    dommanipulation.create("contactpagediv","div","div");

    dommanipulation.create("infodiv","div","contactpagediv");

    dommanipulation.create("location","p","infodiv");
    dommanipulation.text("location","You can find us at: 742 Evergreen Terrace, Springfield, Dimension C-137");
    dommanipulation.create("number","p","infodiv");
    dommanipulation.text("number","Our phone number is: 4 8 15 16 23 42");
    dommanipulation.create("imgdiv","div","contactpagediv");

    dommanipulation.create("image","img","imgdiv");
    dommanipulation.img("image","img/tomahawk.png")
};


export { contact }