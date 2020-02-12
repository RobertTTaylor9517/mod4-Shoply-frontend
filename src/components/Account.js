import React from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'
import Review from './Review'

class Account extends React.Component{
    state = {
        user: {}
    }

    componentDidMount(){
        fetch('http://localhost:3000/user',{
            headers: {
                Authorization: localStorage['token']
            }
        })
        .then(res=> res.json())
        .then(user=>{
            this.setState({
                user: user
            })
        })
    }

    renderComments(){
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
        fetch(`http://localhost:3000/reviews/${review}`,{
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

    render(){
        return(
            <Grid padded>
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