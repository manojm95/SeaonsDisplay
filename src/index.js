
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component
{
    // constructor(props)
    //     {
    //         console.log("Constructor"); 
    //         super(props);

    //         this.state={lat:null, err:' '};
    //         console.log("KKKK");
    //     } the above code (or)

    state = {lat:null,err:''};



        componentDidMount()
        {
            window.navigator.geolocation.getCurrentPosition(
                (position) => this.setState({lat:position.coords.latitude}),
                    (err) => this.setState({err:err.message})
                );
        }


render() {

    if(this.state.lat && !this.state.err)
    {
        return <SeasonDisplay lat ={this.state.lat}/>;
    }

    if(this.state.err && !this.state.lat)
    {
        return <div>ErrorMessage: {this.state.err} </div>;
    }

return  <div>Loading</div>;
}

}
ReactDOM.render(<App/>,document.querySelector('#root'));