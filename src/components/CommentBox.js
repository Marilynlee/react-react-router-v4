/**
 * @fileOverview
 * @author wb-lyn227583
 */
import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }

  handleCommentSubmit=(comment)=>{
    console.info(comment);
    let preComments=this.state.data;
    let newComments=preComments.concat(comment);
    this.setState({data:newComments});
  };

  componentWillMount(){
    fetch('/commentData.json')
      .then(res=>{
        // console.dir(res);
        return res.json();
      })
      .then(data=>{
        // console.table(data);
        // console.dir(this);
        this.setState({data:data});
      });
  }

  render(){
    return(
      <div className="comments">
        <h1>评论</h1>
        <div className="divider"></div>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    )
  }
}

export {CommentBox as default};









