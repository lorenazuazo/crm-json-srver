import { obtenerCliente,editarCliente } from './API.js';
import { imprimirAlerta,validar } from './funciones.js'
//IIFE
(function(){
    //campos del formulario 
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');


    document.addEventListener('DOMContentLoaded', async ()=>{
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));
        
        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);

        //submit al formulrio
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit',validarCliente);

    });

    function mostrarCliente(cliente) { 
        const { nombre,email,telefono,empresa,id } = cliente;

        idInput.value = id;
        nombreInput.value = nombre;
        emailInput.value = email;
        empresaInput.value = empresa;
        telefonoInput.value = telefono;

     }

     function validarCliente(e){
         e.preventDefault();

         const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }
        
        if(validar(cliente)){
            imprimirAlerta('Todos los campos son obligatorios');
            return
        }
        //reescribe el objeto
        editarCliente(cliente);

     }

})();