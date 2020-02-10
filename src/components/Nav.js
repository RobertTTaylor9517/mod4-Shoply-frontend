import React from 'react'
import { Menu, Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navi = props =>{
    const logCheck = ()=>{
        if(localStorage["token"] === undefined){
           return(
            <Menu.Menu position='right'>
                <Menu.Item><Link to='/login'><Button>Login</Button></Link></Menu.Item>
                <Menu.Item><Button>Sign up</Button></Menu.Item>
                <Menu.Item><Link to='/cart'><Button>Cart({props.cart.length})</Button></Link></Menu.Item>
            </Menu.Menu>
           )
             
        }else{
           return(
            <Menu.Menu position='right'>
                <Menu.Item><Button color='red' onClick={()=>props.changeLogin()}>Logout</Button></Menu.Item>
                <Menu.Item><Button>My Account</Button></Menu.Item>
                <Menu.Item><Link to='/cart'><Button>Cart({props.cart.length})</Button></Link></Menu.Item>
            </Menu.Menu>
           )
        }
    }


    return(
        <div>
            <Menu inverted>
                 <Menu.Item>
                    <Input action={{type: 'submit', content: 'Search'}}/>
                 </Menu.Item>
                 {logCheck()}
            </Menu>
        </div>
    )

}
export default Navi