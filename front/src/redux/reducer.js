import { AGREGAR_PERSONAJE, ELIMINAR_PERSONAJE, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites:[],
    allCharacters:[]
}

const rootReducer =(state=initialState, action)=>{
    switch (action.type) {
        case AGREGAR_PERSONAJE:
            return {...state, myFavorites: state.myFavorites.concat(action.payload),
                            allCharacters: state.allCharacters.concat(action.payload)}
        case ELIMINAR_PERSONAJE:
            return {...state, myFavorites: state.myFavorites.filter((e)=>(e.id!==action.payload)),
                            allCharacters: state.allCharacters.filter((e)=>(e.id!==action.payload))}
        case FILTER:
            const copiaAllCharacters = [...state.allCharacters];
            const filtrocopiaAllCharacters = copiaAllCharacters.filter((e)=>(e.gender===action.payload))
            return {...state, myFavorites: filtrocopiaAllCharacters}
        case ORDER:
            const copiaAllCharacters2 = [...state.allCharacters];
            const ordenCopiaAllCharacters = copiaAllCharacters2.sort((a,b)=>{
                if (action.payload === "Ascendente"){
                    if (a.id>b.id){
                        return 1;
                    }
                    if (a.id<b.id){
                        return -1;
                    }
                    return 0;
                }else{
                    if (a.id>b.id){
                        return -1;
                    }
                    if (a.id<b.id){
                        return 1;
                    }
                    return 0;
                }
            })
            return {...state, myFavorites: ordenCopiaAllCharacters}
        default:
            return state;
    }
}

export default rootReducer;