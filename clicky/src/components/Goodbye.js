import React, {Component} from 'react'

class Goodbye extends Component {
    constructor(props){
        super(props)
        this.state = {
            myName: "Huy"
        }
    }
    render(){
        console.log("This is state obj", this.state)
        console.log("This is props obj", this.props)
        return(
            <div>
            
            <h1>Goodbye {this.props.name2} and {this.state.myName}</h1>
            </div>
        )
    }
}

export default Goodbye
 


