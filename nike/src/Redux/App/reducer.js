import { getShoesDataFailure, getShoesDataLoading, getShoesDataSuccess } from "./actionsType"

const initState = {
    shoes : [],
    shoesLoading : false,
    shoesError  : false
}

export const reducer = (state=initState,{type,payload}) => {
    switch(type) {
        case getShoesDataLoading : {
            return {
                ...state,
                shoesLoading : true,
                shoesError : false
            }
        }

        case getShoesDataFailure : {
            return {
                ...state,
                shoesLoading : false,
                shoesError : true
            }
        }

         case getShoesDataSuccess : {
            return {
                ...state,
                shoesLoading : false,
                shoesError : false,
                shoes : [...payload]
            }
         }

         default : return state
    }
}