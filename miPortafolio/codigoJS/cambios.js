const boton1 = document.createElement("button");
const parrafo = document.querySelector("header p");
const header = document.querySelector("header");

boton1.textContent = "Cambiar mensaje";
boton1.addEventListener ('click', () => {
    parrafo.textContent = "Hola, bienvenido a mi portafolio ahora con JS";
});
header.appendChild(boton1);

// SECCION DE HABILIDADES CSS
const seccion_habilidades = document.querySelector('.habilidades');
const boton2 = document.createElement("button");
const boton3 = document.createElement("button");
const div = document.createElement("div");
boton2.textContent = "Cambiar Color";
boton3.textContent = "Cambiar Tipo de Letra";

boton2.addEventListener ('click',() =>{
    seccion_habilidades.style.fontFamily = "Calibri";
})
boton3.addEventListener ('click',() =>{
    seccion_habilidades.style.color = "orange";
})
div.style.display = "flex";
div.style.gap= "10px";
div.style.justifyContent="center";
div.appendChild(boton2);
div.appendChild(boton3);
seccion_habilidades.appendChild(div);

/* Validación de formulario */
const formulario = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    if(nombre.value.trim() === ""){
        alert("Ingresa un nombre");
        return;
    }
    if(email.value === ""){
        alert("Ingresa un email");
        return;
    }
    alert("Los datos se enviaron correctamente");
})