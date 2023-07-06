import React from 'react'

function Checkbox({title, onChange, state}) {
  return (
    <div>
    <input type='checkbox' onChange={onChange} checked={state} />
    <label>{title}</label>
    </div>
  )
}

export default Checkbox