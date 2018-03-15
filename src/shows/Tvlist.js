/**
 * @fileOverview
 * @author wb-lyn227583
 */
import React from 'react';
// import Show from './Show';
import {Link} from 'react-router-dom';


class Tvlist extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  componentWillMount(){
    fetch('/showsData.json')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        this.setState({data:data});
      });
  }

  render() {

    let shows=this.state.data.map( (data,index)=>{
      let itemPath={
        pathname: `/tv/${data.showId}`,
        state: this.state.data
      };
      return(
        <li key={index}>
          <Link to={itemPath}>{data.showName}</Link>
        </li>
      );
    });
    return (
      <div className="menu-box">
        <h3 className="menu-title">节目列表</h3>
        <ul className='menu-list'>{shows}</ul>
      </div>
    );
  }
}

export {Tvlist as default}


