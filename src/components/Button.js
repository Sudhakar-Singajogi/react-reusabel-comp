import React from 'react'

function Button({title, customClass, onClick}) {
  return (
    <button type='submit' className={customClass} onClick={onClick}>
        {title}
    </button>
    
    
  )
}

export default Button