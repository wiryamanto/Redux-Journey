import React from 'react'
import ButtonTile from './ButtonTile'
import {addTile, removeTile} from '../redux/action/TileAction'
import { useSelector, useDispatch } from 'react-redux'

const Tile = () => {
    let dispatch = useDispatch()
    let tileState = useSelector((state)=> state.tile)
    const color = ['blue', 'red', 'green', 'yellow',]
  return (
      <>
      <div className='flex flex-wrap gap-2 w-full'>
      {tileState.map((tile,index)=>{
          return(
            <div style={{background:`${tile.color}`}}className=' border px-4 py-14 border-black w-1/5' onDoubleClick={()=>{
                dispatch(removeTile(tile.id))
            }}>remove button</div>

          )
      })

      }
        
      </div>
      <div className='flex flex-col'>
        {color.map((color)=>{
            return(
                <ButtonTile color={color} onClick={(_)=>{
                    dispatch(addTile(color))
                }}/>
            )
        })}
      </div>
      </>
  )
}

export default Tile