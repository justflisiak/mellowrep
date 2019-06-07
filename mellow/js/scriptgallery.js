






let myLink = "http://mieciek.com";
const template = document.querySelector("template").content;
const parent = document.querySelector("section");

function showgallery(){
document.getElementById("gal").setAttribute("display", "block");
}

function loadData(myLink) {
    fetch(myLink+ "/mellow/wp-json/wp/v2/photos").then(e => e.json()).then(data => show(data))
}
function show(data) {
    data.forEach(post => {
        //clone the template
        const clone = template.cloneNode(true);
        //populate it
        const photo = clone.querySelector(".photo");
        photo.src = post.img.guid;

        const id = post.id;

        //append to DOM
        parent.appendChild(clone);
      })
    }


    loadData(myLink);
