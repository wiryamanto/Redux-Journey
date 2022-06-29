import React from 'react'
import {string, func} from 'prop-types'

const ButtonTile = ({color, onClick}) => {
    const style ={
        backgroundColor: color
    }
    console.log(color);
  return (
      <div className='mt-5'>
    <div className={`w-1/5 py-4`} style={style} onClick={onClick}>ButtonTile</div>
    </div>
  )
}

ButtonTile.propTypes={
    color:string,
    onClick: func.isRequired
}

export default ButtonTile