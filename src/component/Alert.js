import React from 'react'

function Alert(Props) {
   
  return (
     Props.alert &&  <div className={`alert alert-${Props.alert.type} alert-dismissible fade show`} role="alert">
<strong>{Props.alert.type}</strong>:{Props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

  )
}

export default Alert





  