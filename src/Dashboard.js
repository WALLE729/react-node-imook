import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'
import App from './App'

function Erying(){
    return <h2> Erying </h2>
}
function Qibinglian(){
    return <h2> Qibinglian </h2>
}
@connect(
    state => state.auth,
    { logout }
)
class Dashboard extends React.Component {
    render() {
        const match = this.props.match
        console.log(match)
        console.log(this.props)
        const rediectToLogin = <Redirect to='/login'></Redirect>
        const app = ( <div>
                        <h1>dulituan</h1>
                        { this.props.isAuth ? <button onClick={this.props.logout}>logout</button> : null}
                        <ul>
                            <li>
                                <Link to={`${match.url}`}>yiying</Link>
                            </li>
                            <li>
                                <Link to={`${match.url}/erying`}>erying</Link>
                            </li>
                            <li>
                                <Link to={`${match.url}/qibinglian`}>qibinglian</Link>
                            </li>
                        </ul>
                        <Route path={`${match.url}`} exact component={App}></Route>
                        <Route path={`${match.url}/erying`} exact component={Erying}></Route>
                        <Route path={`${match.url}/qibinglian`} exact component={Qibinglian}></Route>
                      </div>
                    )
        return (
            this.props.isAuth ? app : rediectToLogin
        )
    }
}
 
export default Dashboard
