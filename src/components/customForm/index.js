import React from 'react'

function Form({onSbmit, children, formStyles}) {
  return (
    <form onSubmit={onSbmit} className={formStyles}>
        {children}
    </form>
  )
}

export default Form