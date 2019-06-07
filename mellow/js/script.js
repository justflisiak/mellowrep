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
        //append to DOM
        parent.appendChild(clone);
      })
    }
    loadData(myLink);

    let xs = []
    for (var i = 0; i <= 500; i++) {
      xs.push(i)
    }

    let t = 0

    function animate() {

      let points = xs.map(x => {

        let y = 200 + 20 * Math.sin((x + t) / 10)

        return [x, y]
      })

      let path = "M" + points.map(p => {
        return p[0] + "," + p[1]
      }).join(" L")

      document.querySelector("path").setAttribute("d", path)

      t += 0.5

      requestAnimationFrame(animate)
    }

    animate()
