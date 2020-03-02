import React from 'react'
import { Grid, Segment, Header, Form, Button } from 'semantic-ui-react'
import Review from './Review'

class Account extends React.Component{
    state = {
        user: {},
        username: '',
        wallet: null
    }

    componentDidMount(){
        fetch('https://boiling-escarpment-57210.herokuapp.com/user',{
            headers: {
                Authorization: localStorage['token']
            }
        })
        .then(res=> res.json())
        .then(user=>{
            this.setState({
                user: user,
                username: user.username
            })
        })
    }

    renderComments=()=>{
        console.log(this.state.user)
        if(this.state.user.reviews){
            return this.state.user.reviews.map(review=>{
                return <Review deleteReview={this.deleteReview} review={review} />
            })
        }else{
            return <Header>None</Header>
        }
    }

    deleteReview=(review)=>{
        console.log(review)
        fetch(`https://boiling-escarpment-57210.herokuapp.com/reviews/${review}`,{
            method: "DELETE",
            headers: {
                Authorization: localStorage['token']
            }
        })
        .then(res=>res.json())
        .then(user=>{
            this.setState({
                user: user
            })
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        let newWal = parseInt(this.state.wallet) + this.state.user.wallet

        fetch(`https://boiling-escarpment-57210.herokuapp.com/user/${this.state.user.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage['token']
            },
            body: JSON.stringify({
                username: this.state.username,
                wallet: newWal
            })
        })
        .then(res=>res.json())
        .then(user => {
            this.setState({
                user: user
            })
        })
    }

    handleDelete=()=>{
        fetch(`https://boiling-escarpment-57210.herokuapp.com/user/${this.state.user.id}`,{
            method: 'DELETE',
            headers: {
                Authorization: localStorage['token']
            }
        })
        .then(res=>res.json())
        .then(mess=>{
            this.props.changeLogin()
            this.props.history.push('/')
        })
    }

    render(){
        return(
            <Grid padded>
                <Grid.Row>
                    <Grid.Column width={8}>
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
                                <label>Wallet: ${this.state.user.wallet}</label>
                                <input onChange={this.handleChange}
                                type='text'
                                name='wallet'
                                placeholder='Add Funds: $'
                                value={this.state.wallet}/>
                            </Form.Field>
                            <Button type='submit'>Submit</Button><Button onClick={this.handleDelete} color='red'>Delete User</Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Header>Reviews</Header>
                        <Segment.Group>
                            {this.renderComments()}
                        </Segment.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}
export default Account;