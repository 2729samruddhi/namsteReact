import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component {

  constructor (props){
    super(props)
   // console.log("parent contructor called");
  }
  componentDidMount(){
   // console.log("parent mount called");
    
  }
  render(){
   // console.log("parent render called");
    
    return(
      <div className='about'>
      <h1>About us page..</h1>
      <UserClass name= {"first (class)"} location={"pune(class)"} />
      {/* <UserClass name= {"second (class)"} location={"pune(class)"} /> */}
       
    </div>
    )
  }
}


// const About = () => {
//   return (
//     <div className='about'>
//       <h1>About us page..</h1>
//       <User name ={"samruddhi patil (function)"}/>  <br/>
//       <UserClass name= {"samruddhi pation (class)"} location={"pune(class)"} />
//     </div>
//   )
// }

export default About
