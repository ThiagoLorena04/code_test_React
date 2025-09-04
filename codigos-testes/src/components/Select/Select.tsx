import React from 'react'

export const Select = ({options}) => {
  return (
    <select value="">
        <option value="" disabled>Selecione</option>
        {options.map((option) => (
            <option key={option} value={option}>{option}</option>
        ))}
    </select>
  )
}
