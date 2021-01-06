const url = 'http://localhost:4000/clientes';

//crea un nuevo cliente
export const nuevoCliente = async cliente =>{
    try {
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(cliente),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

//obtener los clientes

export const obtenerClientes= async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
        
    }
}

//elimina un cliente
export const eliminarCliente = async id =>{
    try {
        await fetch(`${url}/${id}`,{
            method: 'DELETE',
        })
    } catch (error) {
        console.log(error);
    }
}

//editar un cliente
export const obtenerCliente = async id =>{
    try {
        const respuesta = await fetch(`${url}/${id}`);
        const cliente = await respuesta.json();
        return cliente;
    } catch (error) {
        console.log(eror);
    }
}

//actuaiza un registro
export const editarCliente = async cliente =>{
    try {
        await fetch(`${url}/${cliente.id}`,{
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers:{
                'Content-Type':'application/json'
            }
        });

        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}