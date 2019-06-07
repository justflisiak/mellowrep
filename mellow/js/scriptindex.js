
const offset = window.scrollY;
const offset2 = (1/offset);


function scroll(onscroll) {
    const offset = window.scrollY;
    console.log(offset);

    if(offset <= 750){
       document.querySelector('.g1').classList.add('g1x')
   }
   else{
           document.querySelector('.g1').classList.remove('g1x')
   }


     if(offset >= 750 && offset < 2000){
        document.querySelector('.g2').classList.add('g2x')
    }
    else{
            document.querySelector('.g2').classList.remove('g2x')
    }


    if(offset >= 2000 && offset < 2500){
     document.querySelector('.g3').classList.add('g3x')
 }
 else{
         document.querySelector('.g3').classList.remove('g3x')
 }

 if(offset >=2500 ){
  document.querySelector('.g4').classList.add('g4x')
}
else{
      document.querySelector('.g4').classList.remove('g4x')
}



}
