import React from 'react'
import FeedbackItem from './FeedbackItem'
function FeedbackList({feedback}) {

if(!feedback || feedback.length === 0){
 return (<p>No Feedback Items</p>)
}

    console.log(feedback)

  return (
    <div className="feedback-list">
      {feedback.map((item,key)=>(
        <FeedbackItem key = {item.id} item={item}/>
      ))}
    </div>
  )
}

export default FeedbackList
