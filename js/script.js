var contador=1;

    /*function animaciones(){
        document.querySelector("#banner-img").style.opacity="0";
        document.querySelector("#banner-img").style.transition="all 2s";
        setTimeout("carrusel()",1000);
    }*/

    function carrusel(){
        contador++;
        if(contador>5) contador=1;
        document.querySelector("#banner-img").setAttribute("src", "img/banner"+ contador + ".jpg");
        document.querySelector("#banner-img").style.opacity="3";
        document.querySelector("#banner-img").style.transition="all 3s";
        setTimeout("carrusel()",2000);
    }

    

    document.body.setAttribute("onload","carrusel()");