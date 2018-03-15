/**
 * @fileOverview
 * @author wb-lyn227583
 */
import React from 'react';

class Comment extends React.Component{
  render(){
    return(
      <div className="comment-list-item">
        <p className="text">{this.props.children}</p>
        <span className="author">{this.props.author}</span>
        <span className="time">{this.props.time}</span>
      </div>
    )
  }
}

export {Comment as default};




