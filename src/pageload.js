const dommanipulation = (() => {
    let create = (element,type,idappend) => {
        let cell = document.createElement(type);
        cell.id = element;
        document.getElementById(idappend).appendChild(cell);
    }
    let img = (element,src) => {
        let cell = document.getElementById(element);
        cell.src = src;
    }
    let text = (element,text) => {
        let cell = document.getElementById(element);
        cell.textContent = text;
    }
    return {create,img,text}
})();

const pageload = () => {
    dommanipulation.create("title","h1","content");
    dommanipulation.text("title","BBQ World");

    //Create navbar
    dommanipulation.create("nav","div","content");
    dommanipulation.create("navbar","nav","nav");
    dommanipulation.create("ul","ul","navbar");
    dommanipulation.create("about","li","ul");
    dommanipulation.text("about","About");
    dommanipulation.create("menu","li","ul");
    dommanipulation.text("menu","Menu");
    dommanipulation.create("contact","li","ul");
    dommanipulation.text("contact","Contact");
    document.getElementById("navbar").classList.add("page");
    document.getElementById("about").classList.add("page");
    document.getElementById("menu").classList.add("page");
    document.getElementById("contact").classList.add("page");
    //

    dommanipulation.create("div","div","content");
};

const about = () => {
    document.getElementById("about").classList.add("active");
    dommanipulation.create("subtitle","h2","div");
    dommanipulation.text("subtitle","About");
    dommanipulation.create("description","p","div");
    dommanipulation.text("description","Barbecue World has the best meat in the whole universe. Try out specialty the Tomahawk steak. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum vulputate dolor, nec venenatis lectus congue vel. Sed ultricies lacus placerat lectus ultricies, in convallis erat viverra. Sed non congue felis, fringilla efficitur diam. In turpis ipsum, gravida id tincidunt sed, suscipit vitae quam. Fusce consequat, nibh in blandit venenatis, urna ligula faucibus justo, non vehicula ex odio at tellus. Nunc fringilla porta ipsum, tempus ornare orci volutpat sed.");

};

export { dommanipulation, pageload, about }