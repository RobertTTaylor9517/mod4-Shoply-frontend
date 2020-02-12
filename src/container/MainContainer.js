import React from 'react'
import { BrowserRouter as Router, Route, useHistory, Redirect } from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'
import Navi from '../components/Nav'
import ProductPage from '../components/ProductPage'
import Cart from '../components/Cart'
import Signup from '../components/Signup'
import Search from '../components/Search'
import Account from '../components/Account'

class MainContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            logIn: false,
            products: [],
            filter: 'all',
            cart: [],
            wallet: 0,
            searchTerm: '',
            results: []
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
           console.log(token)
           localStorage.setItem("token", token.auth_token)
           this.setState({
               logIn: true,
               wallet: token.wallet
           })
       }else{
           localStorage.clear()
            this.setState({
                logIn: false,
                wallet: 0
            })
       }
    }

    filterProducts=(category)=>{
        fetch(`http://localhost:3000/category/${category}`)
        .then(res=> res.json())
        .then(products=>{
            this.setState({
                filter: category,
                products: products
            })
        })
        
    }

    addToCart=(product)=>{
        this.setState({
            cart: [...this.state.cart, product]
        })
    }

    removeFromCart=(product)=>{
        let tempCart = [...this.state.cart]
        let newCart = tempCart.filter(prod=> prod.id !== product.id)
        this.setState({
            cart: newCart
        })
    }

    makePurchase=(total)=>{
        fetch('http://localhost:3000/purchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage['token']
            },
            body: JSON.stringify({
                cost: total
            })
        })
        .then(res=>res.json())
        .then(user => {
            this.setState({
                wallet: user.wallet,
                cart: []
            })
        })
        .catch(err=>{
            alert('Purchase Error')
        })
    }


    changeSearchTerm=(e)=>{
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSearch=(results)=>{
        this.setState({
            results: results
        })
        
    }

    secondarySearch=()=>{
        if(this.state.searchTerm !== ''){
            fetch('http://localhost:3000/search',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    search: this.state.searchTerm
                })
            })
            .then(res=>res.json())
            .then(products=>{
                this.handleSearch(products)

            })
        }
    }

    render(){
        return(
            <Router history={useHistory}>
                <Navi secondarySearch={this.secondarySearch} searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm} changeLogin={this.changeLogin} logIn={this.state.logIn} cart={this.state.cart}/>
                <div>
                    <Route exact path='/'
                    render={routerProps=> <Home addToCart={this.addToCart}filter={this.state.filter} filterProducts={this.filterProducts} products={this.state.products} {...routerProps}/>}/>
                    <Route exact path='/login'
                    render={routerProps=> <Login changeLogin={this.changeLogin} {...routerProps}/>} />
                    <Route exact path='/signup'
                    render={routerProps=> <Signup changeLogin={this.changeLogin} {...routerProps}/>}/>
                    <Route exact path={`/products/:productId`} render={routerProps=> <ProductPage addToCart={this.addToCart} products={this.state.products} {...routerProps}/>}/>
                    <Route exact path='/cart' 
                    render={routerProps=> <Cart wallet={this.state.wallet} makePurchase={this.makePurchase} cart={this.state.cart} removeFromCart={this.removeFromCart} {...routerProps}/>}/>
                    <Route exact path='/search'
                    render={routerProps=> <Search handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} results={this.state.results} {...routerProps}/>}/>
                    <Route exact path='/account'
                    render={routerProps=> <Account changeLogin={this.changeLogin} {...routerProps}/>}/>
                </div>
            </Router>
        )
    }

}
export default MainContainer