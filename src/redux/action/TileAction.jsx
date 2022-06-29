import { ADD_TILE, REMOVE_TILE } from "../constant/tileConstant";

export function addTile(color){
    return{
        type: ADD_TILE,
        color
    }
}

export function removeTile(id){
    return {
        type:REMOVE_TILE,
        id
    }
}

