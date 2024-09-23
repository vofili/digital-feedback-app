import React from 'react'
import {useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimesCircle,FaShare,FaRegThumbsUp} from 'react-icons/fa'


function FeedbackItem({item, handleDelete,handleLike}) {

    //const [ratingCount,setRatingCount] = useState(item.rating)
    // const [fbText, setFbText] = useState("This is the text of a feedback item")

    // const handleClick = ()=>{
    //         setRatingCount((prev)=>{
    //                 prev += 1
    //                 return prev
    //         })
    // }
   
  

  return (
   <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
        <button className="close" onClick={()=>handleDelete(item.id)}>
            <FaTimesCircle color="purple"/>
        </button>
      <div className="text-display">{item.text}</div>
      <button className="btn btn-primary" onClick={()=>handleLike(item.id)}><FaRegThumbsUp /></button>
      </Card>
  )
}

FeedbackItem.propTypes={
    item: PropTypes.object.isRequired
}
export default FeedbackItem
