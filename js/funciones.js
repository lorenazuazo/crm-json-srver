export function imprimirAlerta(mensaje){
    const alertaPrevia = document.querySelector('.bg-red-100');

    if(!alertaPrevia){
        const mensajeAlerta = document.createElement('p');
        mensajeAlerta.className = 'bg-red-100 border-red-400 text-red-700 px-4 py-3 border text-center rounded max-w-lg mx-auto mt-6';
        mensajeAlerta.innerHTML = `
            <srtong class="font-bold">Error!</srtong>
            <span class="block">${mensaje}</span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 3000);
    }
}

//vaidar el cliente
export function validar(obj){
    return !Object.values(obj).every(input => input !== '');
}
