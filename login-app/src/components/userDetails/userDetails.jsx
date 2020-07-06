import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Card, Grid, Button} from '@material-ui/core';

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           userData: this.props.data,
           filterData: null
        }
    }
    resetData = () =>{
        this.setState({
            filterData: null
        })
    }
    filterData = () =>{
        let userData = this.state.userData;
        let tmpArr = [];
        userData.map((data,index) =>{
            let fullName = data.firstName + data.lastName;
            if(data.age >= 20 && data.age < 30 && fullName.length >= 10){
                tmpArr.push(data);
            }
        });
        let filteredData = this.getUserData(tmpArr);
        this.setState({
            filterData: filteredData
        });
    }
    getUserData = (userDetails) =>{
        let displayData = [];
        userDetails.map((data,index)=>{
            let value = JSON.stringify(data,null,1);
            let cardData = <Card style={{width:'156px', height:'200px', backgroundColor:'pink', justifyContent:'center', margin:'0 10px 10px 10px'}} key={index}>
               {value}
            </Card>;
            displayData.push(cardData);
        });
        return displayData;
    }
    render(){
        let userDetails = this.getUserData(this.state.userData);
        return (
            <div>
                <Link to="/user">
                <Grid> 
                   <Button onClick={this.filterData}>Filter</Button>
                   <Button onClick={this.resetData}>Reset</Button>
                </Grid>
                {
                    this.state.filterData == null ?(
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            {userDetails}
                        </Grid>
                    ): (
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            {this.state.filterData}
                        </Grid>
                    )
                }
                
                </Link>
               
            </div>
        )
    }
}
export default withRouter(User);
