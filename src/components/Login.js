import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class Login extends React.Component{
    state = {
        username: '',
        password: ''
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }

    render(){
        return(
            <div className='login-back'>
                {/* <form>
                    <div>
                        <input onChange={this.handleChange}
                        type="text" 
                        name="username" 
                        placeholder="Enter Username" 
                        value={this.state.username} />
                    </div>
                    <div>
                        <input onChange={this.handleChange}
                        placeholder='Enter Password'
                        name='password'
                        type='password'/>
                    </div>
                    <input type="submit" value='Login' />
                </form> */}

                <Form>
                    <Form.Field>
                        <label>Username</label>
                        <input onChange={this.handleChange}
                        type='text'
                        name='username'
                        placeholder='Enter Username'
                        value={this.state.username}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input onChange={this.handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter Password'
                        value={this.state.password}/>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
    
}
export default Login