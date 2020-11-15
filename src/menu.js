import { dommanipulation } from './pageload'


const menu = () => {
    document.getElementById("menu").classList.add("active");
    dommanipulation.create("subtitle","h2","div");
    dommanipulation.text("subtitle","Menu");
    
    dommanipulation.create("list","div","div");

    dommanipulation.create("salads","div","list");
    dommanipulation.create("saladstitle","h3","salads");
    dommanipulation.text("saladstitle","Salads");
    dommanipulation.create("ulsalad","ul","salads");
    dommanipulation.create("lisalad1","li","ulsalad");
    dommanipulation.text("lisalad1","Caesar salad");
    dommanipulation.create("lisalad2","li","ulsalad");
    dommanipulation.text("lisalad2","Fresh garden salad");
    dommanipulation.create("lisalad3","li","ulsalad");
    dommanipulation.text("lisalad3","Tomato Salad");

    dommanipulation.create("starters","div","list");
    dommanipulation.create("starterstitle","h3","starters");
    dommanipulation.text("starterstitle","Starters");
    dommanipulation.create("ulstarters","ul","starters");
    dommanipulation.create("listarters1","li","ulstarters");
    dommanipulation.text("listarters1","Smoked Bacon");
    dommanipulation.create("listarters2","li","ulstarters");
    dommanipulation.text("listarters2","Goat cheese");
    dommanipulation.create("listarters3","li","ulstarters");
    dommanipulation.text("listarters3","Garlic Bread");

    dommanipulation.create("sides","div","list");
    dommanipulation.create("sidestitle","h3","sides");
    dommanipulation.text("sidestitle","Sides");
    dommanipulation.create("ulsides","ul","sides");
    dommanipulation.create("lisides1","li","ulsides");
    dommanipulation.text("lisides1","French Fries");
    dommanipulation.create("lisides2","li","ulsides");
    dommanipulation.text("lisides2","Onion Rings");

    dommanipulation.create("specialties","div","list");
    dommanipulation.create("specialtiestitle","h3","specialties");
    dommanipulation.text("specialtiestitle","Specialties");
    dommanipulation.create("ulspecialties","ul","specialties");
    dommanipulation.create("lispecialties1","li","ulspecialties");
    dommanipulation.text("lispecialties1","Tomahawk Steak");
    dommanipulation.create("lispecialties2","li","ulspecialties");
    dommanipulation.text("lispecialties2","Picanha");
    dommanipulation.create("lispecialties3","li","ulspecialties");
    dommanipulation.text("lispecialties3","T-Bone Steak");
    dommanipulation.create("lispecialties4","li","ulspecialties");
    dommanipulation.text("lispecialties4","Hamburger");
    dommanipulation.create("lispecialties5","li","ulspecialties");
    dommanipulation.text("lispecialties5","Pork belly slices");

};


export { menu }