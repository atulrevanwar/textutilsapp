import React from 'react'

export default function Alerts(props) {
  return (
    <div style={{height: '52px'}}>
      {
          props.alerts && <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
          {props.alerts.type} : {props.alerts.msg} 
          {/* <button type="button" className="btn-close mx-3" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
          </button> */}
        </div>
        }
    </div>
    
  )
}
