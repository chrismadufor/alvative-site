import React from 'react'

function Button({color, title, link}) {
  return (
    <div>
        <button className={`${color ? "btn-bg text-white" : 'border-blue-900 border-2 text-blue-900'} w-32 sm:w-40 h-12 rounded md`}>{title}</button>
    </div>
  )
}

export default Button