import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'

class MainContainer extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <Router>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                </div>
            </Router>
        )
    }

}
export default MainContainer