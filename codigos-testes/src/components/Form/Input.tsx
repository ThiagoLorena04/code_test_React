import React from 'react'

export const Input = ({id, label}) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} name={id}/>
    </div>
  )
}
