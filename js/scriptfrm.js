    var dni = document.querySelector("input[type='number']");
    dni.addEventListener('focus',function(evento){
        evento.target.style.color = "blue";
    });

    var nombre = document.querySelector("input[type='text']");
    nombre.addEventListener('focus',function(evento){
        evento.target.style.color = "blue";
    });

    var correo = document.querySelector("input[type='email']");
    correo.addEventListener('focus',function(evento){
        evento.target.style.color = "blue";
    });

    var fono = document.querySelector("input[type='tel']");
    fono.addEventListener('focus',function(evento){
        evento.target.style.color = "blue";
    });

    document.querySelector("input[name='txtdni']").addEventListener("keypress", function(event){
        var longitud = document.querySelector("input[name='txtdni']").value.length;
        if(longitud >= 8){
            alert("Estimado Usuario, usted a ingresado 8 digitos");
            window.event.preventDefault();
            return;
        }
        
        var ascii = event.keyCode || event.which; 
        if(ascii<48 || ascii>57){
            alert("Estimado Usuario, usted ha ingresado un caracter no numerico");
            window.event.preventDefault();
            return;
        }
    });

    document.querySelector("input[name='txtnombre']").addEventListener("keypress", function(event){
        var ascii = event.keyCode || event.which;
        if(ascii>=48 && ascii<=57){
            alert("Estimado Usuario, usted ha ingresado un valor que no es un caracter");
            window.event.preventDefault();
            return;
        }
    });

    function nuevo(frm){
        let test = /^\d{8}$/;
        if(!test.test(frm.txtdni.value)){
            window.event.preventDefault();
            alert("Estimado Usuario, su DNI es incorrecto"); return;
        }
        
        test =  /^\s*$/;
        if(test.test(frm.txtnombre.value)){
            window.event.preventDefault();
            alert("Estimado Usuario, ingrese su Nombre");return;
        }

        test = /^([a-zA-Z0-9])+[@]([a-z])+[.][a-z]{2,3}$/;
        if(!test.test(frm.txtemail.value)){
            window.event.preventDefault();
            alert("Estimado Usuario, el formato de Email es incorrecto"); return;
        }

        test = /^[2-9][0-9]{7,9}$/;
        if(!test.test(frm.txtfono.value)){
            window.event.preventDefault();
            alert("Estimado Usuario,su telefono debe de tener entre 7 a 10 dígitos");return;
        }

        alert("Sus datos fueron ingresados correctamente :)");
    }