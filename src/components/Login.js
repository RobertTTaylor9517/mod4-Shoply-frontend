import React from 'react'
import { Button, Form, Message, Grid, Segment } from 'semantic-ui-react'
import { Animated } from 'react-animated-css'

class Login extends React.Component{
    state = {
        username: '',
        password: '',
        login_fail: false
    }

    handleChange =(e)=>{
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })

    }

    handleSubmit=(e)=>{
        fetch("http://localhost:3000/authenticate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(tkn => {
            if(tkn.auth_token !== undefined){
                console.log(tkn.wallet)
                this.props.changeLogin(tkn.auth_token)
                this.props.history.push('/')
            }else{
                this.setState({
                    login_fail: !this.state.login_fail
                })
            }
           
        })
    }

    errorRender=()=>{
        if(this.state.login_fail !== false){
            return(
                <Message color='red'>Invalid Login</Message>
            )
        }
    }

    render(){
        return(
            <div className='login-back main-on-page'>
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column></Grid.Column>
                        <Grid.Column></Grid.Column>
                        <Grid.Column></Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column className='tocenter'><Animated animationIn='fadeIn' animationInDuration={500} isVisible={true}><Segment>
                    <div align='middle'>
                        <Form onSubmit={this.handleSubmit}>
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
                        {this.errorRender()}
                    </div>
            </Segment></Animated></Grid.Column>
                    <Grid.Column></Grid.Column>
                    </Grid.Row>
                </Grid>
                
            </div>
        )
    }
    
}
export default Login