import { imprimirAlerta,validar } from './funciones.js';
import { nuevoCliente } from './API.js'
//IIFE
(function(){
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit',validarFormulario);

    function validarFormulario(e){
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }
        
        if(validar(cliente)){
            imprimirAlerta('Todos los campos son obligatorios');
            return
        }

        nuevoCliente(cliente);
    }
})();