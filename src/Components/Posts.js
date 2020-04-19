import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:[],
            date:new Date().toLocaleString()
         }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + this.props.match.params.userId)
        .then(res=>{
            this.setState({

                posts:res.data
            })
        })
    }
    componentDidUpdate =(PrevProps, PrevState)=> {
  
        Axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + this.props.match.params.userId)
        .then(res=>{
            this.setState({

                posts:res.data
            })
        }).catch(err=> console.log(err))
      
    }
    render() { 
        return ( 
            <div className="listes">
                {this.state.posts.map(el=>{
                    return(
                        <div className="posts-lists">
                           <table>
                               <tr className="ligne">
                                   <td></td>
                                   <td className="welcome"><p>Welcome User{el.userId}</p>
                                       Your ID {el.id}
                                   </td>
                               </tr>
                               <tr  className="recent-post">
                                   <td> <Link to={`/Comments/${el.id}`}>Recent posts:</Link></td>
                                   <td></td>
                               </tr>
                               <tr>
                                   <td>
                                   Title: <span>{el.title}</span> du post <span>{el.id}</span><br/>
                                       La premiere phrase du <span>{el.body}</span>
                                   </td>
                               </tr>
                               <tr className="date-list">
                                   <td></td>
                                   <td>{this.state.date}</td>
                               </tr>
                           </table>
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Posts;
