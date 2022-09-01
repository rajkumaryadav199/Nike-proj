import { getShoesDataFailure, getShoesDataLoading, getShoesDataSuccess } from "./actionsType"

export const shoesLoading = () => {
    return {
        type : getShoesDataLoading
    }
}

export const shoesFailure = () => {
    return {
        type : getShoesDataFailure
    }
}

export const shoesSuccess = (payload) => {
    return {
        type : getShoesDataSuccess, payload
    }
}