
   /* var moon_icon =document.getElementById("moon-icon");
    var sun_icon=document.getElementById("sun-icon");

    moon_icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
           moon_icon.getElementById("sun_icon");
        }
    }*/


    const checkbox=document.getElementById('checkbox');
    checkbox.addEventListener('change', () =>{

        document.body.classList.toggle("dark-theme");
    });
