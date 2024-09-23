import React from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'


function FeedbackList({feedback,handleDelete,handleLike}) {

if(!feedback || feedback.length === 0){
 return (<p>No Feedback Items</p>)
}

    console.log(feedback)

  return (
    <div className="feedback-list">
      {feedback.map((item,key)=>(
        <FeedbackItem key = {item.id} item={item} handleDelete={handleDelete} handleLike={handleLike}/>
      ))}
    </div>
  )
}
FeedbackList.propTypes={
feedback: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired
}))
}
export default FeedbackList
