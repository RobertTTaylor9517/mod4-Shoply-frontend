import React from 'react'
import { Menu, Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navi = props =>{
    const logCheck = ()=>{
        if(localStorage["token"] === undefined){
           return(
            <Menu.Menu position='right'>
                <Menu.Item><Link to='/login'><Button>Login</Button></Link></Menu.Item>
                <Menu.Item><Link to='/signup'><Button>Sign up</Button></Link></Menu.Item>
                <Menu.Item><Link to='/cart'><Button>Cart({props.cart.length})</Button></Link></Menu.Item>
            </Menu.Menu>
           )
             
        }else{
           return(
            <Menu.Menu position='right'>
                <Menu.Item><Button color='red' onClick={()=>props.changeLogin()}>Logout</Button></Menu.Item>
                <Menu.Item><Link to='/account'><Button>My Account</Button></Link></Menu.Item>
                <Menu.Item><Link to='/cart'><Button>Cart ({props.cart.length})</Button></Link></Menu.Item>
            </Menu.Menu>
           )
        }
    }

    const searchRender=()=>{
        if(window.location.pathname === '/search'){
            return <Button onClick={props.secondarySearch} type='submit'>Search</Button>
        }else{
            return <Link to='/search'> <Button type='submit'>Search</Button></Link>
        }
    }


    return(
        <div>
            <Menu inverted>
                 <Menu.Item>
                    <Input onChange={props.changeSearchTerm} type='text' placeholder='Search...' value={props.searchTerm} action>
                        <input />
                        {searchRender()}
                    </Input>
                 </Menu.Item>
                 {logCheck()}
            </Menu>
        </div>
    )

}
export default Navi