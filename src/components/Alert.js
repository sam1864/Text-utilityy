import React from 'react'

export default function Alert(props) {
  return (
  props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <b></b><strong>{props.alert.type} : {props.alert.message}</strong>
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}