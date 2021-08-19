import React from "react";
import QuoteCard from "./QuoteCard";
import {useDispatch, useSelector}from "react-redux"
import { downVote, removQuote, upVote } from "./quotesSlice";
function Quotes() {
  const state=useSelector(state=>state.quotes)
   return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {state.map((item,i)=>(
              <QuoteCard quote={item}key={i} 
              
            />))}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
