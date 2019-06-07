let myLink = "http://mieciek.com";
const template = document.querySelector("template").content;
const parent = document.querySelector("section");


function loadData(myLink) {
    fetch(myLink+ "/mellow/wp-json/wp/v2/news").then(e => e.json()).then(data => show(data))
}
function show(data) {
    data.forEach(post => {
        //clone the template
        const clone = template.cloneNode(true);
        //populate it
        const photo = clone.querySelector(".graphic");
        photo.src = post.graphic.guid;

        const photo2 = clone.querySelector(".graphic2");
        photo2.src = post.graphic2.guid;

        const photo3 = clone.querySelector(".graphic3");
        photo3.src = post.graphic3.guid;



        const p = clone.querySelector(".text");
        p.textContent=post.text;

        const titlee = clone.querySelector(".titlee");
        titlee.textContent=post.titlee;

        const text2 = clone.querySelector(".text2");
        text2.textContent=post.text2;

        const headline = clone.querySelector(".headline");
        headline.textContent=post.headline;

        //append to DOM
        parent.appendChild(clone);
      })
    }
    loadData(myLink);


    const offset = window.scrollY;


    function scroll(onscroll) {
        const offset = window.scrollY;
        console.log(offset);

        if(offset <= 500){
           document.querySelector('.g1').classList.add('g1x')
       }
       else{
               document.querySelector('.g1').classList.remove('g1x')
       }


         if(offset >= 500 && offset < 1000){
            document.querySelector('.g2').classList.add('g2x')
        }
        else{
                document.querySelector('.g2').classList.remove('g2x')
        }


        if(offset >= 1000 && offset < 1500){
         document.querySelector('.g3').classList.add('g3x')
     }
     else{
             document.querySelector('.g3').classList.remove('g3x')
     }


     if(offset >= 1500 && offset < 2200){
      document.querySelector('.g4').classList.add('g4x')
    }
    else{
          document.querySelector('.g4').classList.remove('g4x')
    }



    }
