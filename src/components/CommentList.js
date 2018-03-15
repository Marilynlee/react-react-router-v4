/**
 * @fileOverview
 * @author wb-lyn227583
 */
import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component{
  render(){
    let comments=this.props.data.map( (data,index)=>{
      return(
        <Comment author={data.author} time={data.time} key={index}>
         {data.text}
        </Comment>
      );
    });
    return(
      <div className="list-box">{comments}</div>
    )
  }
}

export {CommentList as default};



