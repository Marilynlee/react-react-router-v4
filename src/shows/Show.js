/**
 * @fileOverview
 * @author wb-lyn227583
 */
import React from 'react';
import {Link} from 'react-router-dom';


class Show extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:this.props.location.state
    }
  }

  render(){
    const list=this.props.location.state;
    const number=this.props.match.params.number;
    console.info(this.props);
    const res = list.find((val,index)=>{
     return val.showId===Number.parseInt(number);
    });
    if (!res) {
      return <div>Sorry, but the player was not found</div>
    }
    return(
      <div className="menu-item">
        <h3>节目 {res.showName}</h3>
        <p>{res.num}</p>
        <p>{res.showTime}</p>
        <Link className='back' to='/tv'>Back</Link>
      </div>
    );
  }
}

export {Show as default}


