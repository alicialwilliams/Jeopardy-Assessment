import React from 'react';//package we are importing is lower case

function Home(props) {
    return (
      <div className="Home">
        <h2> Hello!!!!</h2>
      
      </div>
      

    );
    
  }

/*class Welcome extends React.Component{
  render(){
    console.log(this.props);
    
  return(
    <h2>Welcome,({this.props.match.params.name})!</h2>
    );
  }
}*/
export default Home;