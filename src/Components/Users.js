import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            users:[]
        }
    }
    componentDidMount (){
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res =>{
            console.log(res)
            this.setState({
                users:res.data
            })
        })
    }
    render() { 
        return ( 
            <div className="listes">
                {this.state.users.map(el=>{
                    return(
                        <div key={el.id} className="list">
                             <h4>{el.name}</h4>
                            <Link to={`/Posts/${el.id}`}>  
                                <Button variant="outlined" color="primary">
                                    Consulter Posts
                                </Button>
                            </Link> 
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Users;
