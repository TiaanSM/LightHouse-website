import React from 'react'

const WorkCard = (props) => {
  return (
    <div>
        <img src="" alt="" />
        <div>
            <h4>{props.title}</h4>
            <span>{props.type}</span>
        </div>
    </div>
  )
}

export default WorkCard