const menu=document.querySelector("#menu");
 menu.addEventListener('click',function(elem){
    main.style.filter='blur(1.5px)';
    main.style.transform='translateZ,ww(200px) scale(.4) rotate(-6deg)';
    main.style.backgroundColor='red';;
 })