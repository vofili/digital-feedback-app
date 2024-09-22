import React from 'react'
import {useState} from 'react'


function FeedbackItem({item}) {

    const [ratingCount,setRatingCount] = useState(item.rating)
    // const [fbText, setFbText] = useState("This is the text of a feedback item")

    const handleClick = ()=>{
            setRatingCount((prev)=>{
                    prev += 1
                    return prev
            })
    }

  return (
    <div className='card'>
      <div className="num-display">{ratingCount}</div>
      <div className="text-display">{item.text}</div>
      <button className="btn btn-primary" onClick={handleClick}>Like</button>
    </div>
  )
}

export default FeedbackItem
