import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
  return (
    <div>
        <h1>CompB</h1>
        <pre>{JSON.stringify(props)}</pre>
        <hr />
        <CompC name={props.ename}/>
    </div>
  )
}

export default CompB