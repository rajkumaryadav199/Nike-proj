import { GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from "./actionsType"

const initState = {
    isAuth : false,  // For Indentifying that User has been Authenticated or not, if isAuth is true then user has Authenticated else no...
    isLoading : false,
    isError : false,
    token : ""  // For Storing The Token From The Reqres
}

export const reducer = (state=initState, {type,payload}) => {
    switch(type) {
        case GET_LOGIN_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }
        case GET_LOGIN_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        case GET_LOGIN_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                token : payload
            }
        }
        default : return state
    }
}