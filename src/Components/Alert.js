import React from 'react'

export default function Alert(props) {
  const lowwer = (word)=>{
    const lowwe = word.toLowerCase();
    return lowwe.charAt(0).toUpperCase() + lowwe.slice(1)
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show m-0 p-0" role="alert`}>
         <strong>{lowwer(props.alert.typ)}</strong>{props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}
