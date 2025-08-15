import React from "react";

class UserClass extends React.Component {

    constructor (props){
        super(props)
        //console.log(props);

        this.state={
          userInfo: {
             name : "dummy",
             location: "kolhapur"
          }
        }

       // console.log(this.props.name+"child constructor  called"); 
    }

    async componentDidMount(){
      // console.log(this.props.name+"child mount called");
      const data = await fetch("https://api.github.com/users/2729samruddhi")
      const json= await data.json();
      console.log(json);

        this.setState({
       userInfo :json
      })
      
    }

    componentDidUpdate(){
     console.log("update");
     
    }
  render() {
    //console.log(this.props.name+"child render");
    
    const {name,location} = this.state.userInfo;
    
    return (
      <div className="user-card"> 
      <img src={this.state.userInfo.avatar_url}/>      
          <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>contact: sam@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
