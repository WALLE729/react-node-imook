import React from 'react'
import { connect } from 'react-redux'
import { addGUN, removeGUN, addGUNasync} from './index.redux'

@connect(
    //what do you need attribute in state move to props
    state => ({num: state.counter}), 
    //what do you need methods move to props and auto dispatch
    { addGUN, removeGUN, addGUNasync}
)

class App extends React.Component{
    render() {
        return (
            <div>
                <h1>现在有机枪{this.props.num}把</h1> 
                <button onClick={this.props.addGUN}>add</button>
                <button onClick={this.props.removeGUN}>reduce</button>
                <button onClick={this.props.addGUNasync}>add2seconds</button>
            </div>
        )
    } 
}
export default App