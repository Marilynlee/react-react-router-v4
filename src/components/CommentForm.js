/**
 * @fileOverview
 * @author wb-lyn227583
 */
import React from 'react';

class CommentForm extends React.Component{

  handleSubmit=(e)=>{
    e.preventDefault();
    let author=this.refs.author.value;
    let text=this.refs.text.value;
    // console.info(author,text);
    this.props.onCommentSubmit({author,text,time:'just now'});
    this.refs.author.value="";
    this.refs.text.value="";
  };

  render(){
    return(
      <form action="" className="reply form" onSubmit={this.handleSubmit}>
        <div className="field">
          <input type="text" placeholder="姓名" ref='author'/>
        </div>
        <div className="field">
          <textarea type="text" placeholder="评论" ref='text'></textarea>
        </div>
        <button className="btn">追加评论</button>
      </form>
    )
  }
}
export {CommentForm as default};


