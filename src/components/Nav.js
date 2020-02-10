import React from 'react'
import { Grid, Button, Form } from 'semantic-ui-react'

const Navi = props =>{
    const logCheck = ()=>{
        if(localStorage.token === undefined){
            return <div>
                <Button>Login</Button><Button>Signup</Button>
            </div>
        }else{
           return <div>
                <Button>Profile</Button><Button>Go To Cart</Button>
            </div>
        }
    }

return(
    <Grid.Row>
    <Grid.Column><Form>
        <div><Form.Input fluid placeholder='search'/>
        <Form.Button>Search</Form.Button></div>
        
        </Form></Grid.Column>
    <Grid.Column><div>{logCheck()}</div></Grid.Column>
</Grid.Row>
)

}
export default Navi