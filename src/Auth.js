import React from 'react'
import { connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login, getUserData } from './Auth.redux'
// two reducers and two state
// combine reducers
@connect(
    state => state.auth,
    { login, getUserData }
)
class Auth extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: {}
    //     }
    // }
    componentDidMount() {
        this.props.getUserData()
    }
    render() {
        return (
            <div>
                <h1> Success !!! </h1>
                <h2>My name is {this.props.user}  age: {this.props.age}</h2>
                { this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
                <h2> You need to login </h2>
                <button onClick = {this.props.login}>login</button>
            </div>
        )
    }
}
 
export default Auth
