import React from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData';
import {useState} from 'react';
function App(){
  
   const [feedback,setFeedBack] = useState(FeedbackData)
    return (
    <>
            <Header/>
            <div className="container">
            <FeedbackList feedback={feedback}/>
            </div>
           
           
    </>)
}

export default App