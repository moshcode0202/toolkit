import React from 'react'
import Subchild1 from './Subchild1'

const Child1 = (props) => {
  return (
    <>
    <div>Child1 -</div>
    <Subchild1 subValue={props.value}/>
    </>
  )
}

export default Child1