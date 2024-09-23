import React from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData';
import {useState} from 'react';
import FeedbackStats from './components/FeedbackStats'
function App(){
  
   const [feedback,setFeedBack] = useState(FeedbackData)

   const deleteFeedBackitem = (id)=>{

        if(window.confirm('Are you sure you want to delete this item')){

            setFeedBack(feedback.filter((item)=> item.id !== id))
        }
       
   }

   const likeFeedbackItem = (id)=>{
        
        setFeedBack(feedback.map((item)=> {
            if(item.id === id){

                
                item.id = item.id
                item.rating = item.rating+1
                item.text = item.text
                return item
            }else{
                return item
            }
            
        }))
   }
    return (
    <>
            <Header/>
            <div className="container">
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedBackitem} handleLike={likeFeedbackItem}/>
            </div>
           
           
    </>)
}

export default App