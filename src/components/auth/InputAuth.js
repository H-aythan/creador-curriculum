import React from 'react'
import '../Form/simple-input/SimpleInput.scss'
const InputAuth = ({title,value,setValue,type}) => {
  return (
    <div className="simpleInput">
      <span className="inputTitle">{title}</span>
      <input 
        value={value} 
        onChange={(e)=>setValue(e.target.value)}
        type={type?type:""}
      />
      <span className="border"></span>
    </div>
  )
}

export default InputAuth