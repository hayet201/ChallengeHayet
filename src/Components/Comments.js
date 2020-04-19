import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            comments:[]
        }
    }
    componentDidMount (){
        Axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + this.props.match.params.postId)
        .then(res =>{
            this.setState({
                comments:res.data
            })
        })
    }
    componentDidUpdate =(PrevProps, PrevState)=> {
  
        Axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + this.props.match.params.postId)
        .then(res =>{
            this.setState({
                comments:res.data
            })
        }).catch(err=> console.log(err))
      
    }
    render() { 
        return ( 
            <div className="listes">
            {this.state.comments.map(el=>{
                return(
                    <div className="posts-lists">
                    <table>
                        <tr className="ligne">
                            <td>title du post {el.id}</td>
                            <td></td>
                        </tr>
                        <tr  className="recent-post">
                            <td> body du post</td>
                            <td></td>
                        </tr>
                        <tr className="ligne">
                            <td>Comments:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                      <p><span>ID:</span>{el.id}</p>
                                      <p><span>Name:</span>{el.name}</p>
                                      <p><span>Email:</span>{el.email}</p>
                                      <p><span>Body:</span>{el.body}</p>
                            </td>
                            <td><Link to={`/Posts/${el.id}`}>
                                    <Button variant="outlined" color="primary" className="btn-retour">
                                        retour
                                    </Button>
                                </Link></td>
                        </tr>
                        
                    </table>
                 </div>






                
                )
            })}
          </div> );
    }
}
 
export default Comments;
