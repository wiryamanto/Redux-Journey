import { ADD_TILE, REMOVE_TILE } from "../constant/tileConstant";

const initialstate = [];

function TileReducer(state = initialstate, action){
    switch(action.type){
        case ADD_TILE:
            const nextId = state.length + 1
            const newTile ={id: nextId, color:action.color}
            if(nextId <= 4){
                return [...state, newTile]

            }
        case REMOVE_TILE:
            return state.filter((title)=>title.id !== action.id)
        default:
            return state    
    }
}
export default TileReducer