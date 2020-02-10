import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'
import Navi from '../components/Nav'

class MainContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(products => {
            this.setState({
                products: products
            })
        })
    }

    render(){
        return(
            <Router>
                <Navi/>
                <div>
                    <Route exact path='/'
                    render={routerProps=> <Home products={this.state.products} {...routerProps}/>}/>
                    <Route exact path='/login' component={Login} />
                </div>
            </Router>
        )
    }

}
export default MainContainer