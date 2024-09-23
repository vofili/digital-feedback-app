import PropTypes from 'prop-types';

function FeedbackStats({feedback}) {

  let average = feedback.reduce((acc,curr)=> acc+curr.rating,0) / feedback.length
  average = average.toFixed(1)
  return (
    <div className="feedback-stats">
       <h4>Feedback items: {feedback.length}</h4> 
       <h4>Average Rating: {isNaN(average) ? 0:average}</h4>
    </div>
  )
}

FeedbackStats.PropTtypes = {
  feedback: PropTypes.array.isRequired
}
export default FeedbackStats