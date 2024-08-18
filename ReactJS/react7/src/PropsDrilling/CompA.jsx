import React from 'react'
import CompB from './CompB'

const CompA = () => {
    let ename="Rahul Gandhi"
    let esal=45000
  return (
    <div>
        <h1>CompA</h1>
        <hr />
        <CompB one={1} two={2} ename={ename} esal={esal}/>

    </div>
  )
}

export default CompA