import React from 'react';
import { withRouter,Link} from 'react-router-dom';
import { TextField,Button} from '@material-ui/core';
import ApiCalls from '../../_services/api';
import User from '../userDetails';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            userDetails:[],
        }
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }
    getLogin = () =>{
        let apiUrl = "https://apertum-interview.herokuapp.com/api/user/login";
        let params ={
            "accountId":"admin",
            "pswd":"123456"
        };
        const data = ApiCalls.postApi(apiUrl,params)
        .then(data => {
            if(data.token != null ){
                let authToken = data.token;
                this.getUserList(authToken);
                this.props.history.push('/user');
            }
            else{
                this.props.history.push('/login');
            }
        });
    }

    getUserList = (successToken) =>{
        let apiUrl = "https://apertum-interview.herokuapp.com/api/users";
        const data = ApiCalls.getApi(apiUrl, successToken)
        .then(data => this.setState({
            userDetails: data
        }));
    }

    display = () =>{
       if(this.state.userDetails.length > 0){
            return (
                <User data = {this.state.userDetails}/>
            )
       }
    }
    render(){
        let user = this.display();
        return (
            <div>
                <h2>Hello! Login here</h2>
                {
                    this.state.userDetails.length > 0 ?(user): (
                        <form>
                        <div className='form-group'>
                            <TextField id="outlined-basic" 
                                onChange={this.handleChange} 
                                name="email" value={this.state.email} label="Email" variant="outlined" />
                        </div>
                        <div className='form-group' style={{margin:"auto"}}>
                            <TextField id="outlined-basic" 
                            onChange={this.handleChange} name="password" type="password"
                            value={this.state.password}  label="Password" variant="outlined" />
                        </div> 
                        <Button type="button" color="primary" className="btn btn-primary" onClick={this.getLogin}>Login</Button> 
                    </form>
                    )
                }
            </div>
            
        )
    }
}
//export default Login;
export default withRouter(Login);
