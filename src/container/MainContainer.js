import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'
import Navi from '../components/Nav'

class MainContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            logIn: false,
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

    changeLogin=(token = null)=>{
       if(token !== null){
           localStorage.setItem("token", token)
           this.setState({
               logIn: true
           })
       }else{
           localStorage.clear()
            this.setState({
                logIn: false
            })
       }
    }

    render(){
        return(
            <Router>
                <Navi changeLogin={this.changeLogin} logIn={this.state.logIn}/>
                <div>
                    <Route exact path='/'
                    render={routerProps=> <Home products={this.state.products} {...routerProps}/>}/>
                    <Route exact path='/login'
                    render={routerProps=> <Login changeLogin={this.changeLogin} {...routerProps}/>} />
                </div>
            </Router>
        )
    }

}
export default MainContainer