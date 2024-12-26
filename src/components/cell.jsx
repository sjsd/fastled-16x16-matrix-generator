import { useState } from 'react'

function Cell() {
  return (
    <div 
        className="aspect-square border border-gray-300 flex items-center text-center text-gray-300 cursor-pointer transition-all"
        style={{
            backgroundColor: result !== undefined ? 'rgb(' + result.color.r + ',' + result.color.g + ',' + result.color.b + ')' : '#ffffff'
        }}
    >
        {num}
    </div>
  )
}

export default Cell
