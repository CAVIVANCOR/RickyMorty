export const AGREGAR_PERSONAJE = 'AGREGAR_PERSONAJE';
export const ELIMINAR_PERSONAJE = 'ELIMINAR_PERSONAJE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const agregarPersonaje =(personaje)=>{
    return {
        type: AGREGAR_PERSONAJE,
        payload: personaje
    }
}

export const eliminarPersonaje = (id)=>{
    return {
        type: ELIMINAR_PERSONAJE,
        payload: id
    }
}

export const filterCards = (status)=>{
    return {
        type: FILTER,
        payload: status
    }
}

export const orderCards = (orden)=>{
    return {
        type: ORDER,
        payload: orden
    }
}

