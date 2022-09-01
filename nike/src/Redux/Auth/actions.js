import { GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from "./actionsType"

export const LoginRequest = () => {
    return {
        type : GET_LOGIN_REQUEST
    }
}

export const LoginFailure = () => {
    return {
        type : GET_LOGIN_FAILURE
    }
}

export const LoginSuccess =(payload) => {
    return {
        type : GET_LOGIN_SUCCESS ,
         payload  // For Stroring the Token From Reqres
    }
}