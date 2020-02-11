import React from 'react'
import { Button, Form, Message, Grid, Segment } from 'semantic-ui-react'
import { Animated } from 'react-animated-css'

class Signup extends React.Component{
    state = {
        username: '',
        password: '',
        wallet: 0,
        login_fail: false
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        fetch("http://localhost:3000/users/new", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                wallet: this.state.wallet
            })
        })
        .then(res => res.json())
        .then(tkn => {
            console.log(tkn)
            if(tkn.token !== undefined){
                this.props.changeLogin(tkn.token)
                this.props.history.push('/')
            }else{
                this.setState({
                    login_fail: !this.state.login_fail
                })
            }
           
        })
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
                                <Form.Field>
                                    <label>Initial Deposit</label>
                                    <input onChange={this.handleChange}
                                    type='text'
                                    name='wallet'
                                    placeholder='Enter your Initial Deposit: $'
                                    value={this.state.wallet}
                                    />
                                </Form.Field>
                                <Button type='submit'>Submit</Button>
                            </Form>
                        </div>
                        </Segment></Animated></Grid.Column>
                    <Grid.Column></Grid.Column>
                    </Grid.Row>
                </Grid>
                
            </div>
        )
    }
}
export default Signup