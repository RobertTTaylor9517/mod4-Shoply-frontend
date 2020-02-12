import React from 'react'
import { Segment, Rating, Header, Form, Button } from 'semantic-ui-react'
import Review from './Review'


class Reviews extends React.Component{
    state={
        reviews: [],
        rating: 0,
        comment: ''
    }

    componentDidMount(){
        fetch(`http://localhost:3000/reviews/${this.props.productId}`)
        .then(res => res.json())
        .then(reviews => {
            this.setState({
                reviews: reviews
            })
        })
    }

    renderReviews=()=>{
        this.props.getRating(this.state.averageRates)
        return this.state.reviews.map(review =>{
            return(
                <Review review={review} />
            )
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
       
    }

    handleRating=(e, {rating})=>{
        this.setState({
            rating: rating
        })
    }

    addReview=(e)=>{
        e.preventDefault()

        let newRev ={
            comment: this.state.comment,
            rating: this.state.rating,
            product_id: this.props.productId
        }

        fetch('http://localhost:3000/reviews/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage['token']
            },
            body: JSON.stringify(newRev)
        })
        .then(res => res.json())
        .then(review => {
            this.setState({
                reviews: [...this.state.reviews, review],
                rating: 0,
                comment: ''
            })
        })
        .catch(err => alert('Did not Upload'))
    }

    renderForm=()=>{
        if(localStorage['token'] === undefined){
            return(
                <Segment>
                    <Header>Please Login to Leave a Comment.</Header>
                </Segment>
            )
        }else{
            return(
                <Segment>
                    <Form onSubmit={this.addReview}>
                        <Rating onRate={this.handleRating} icon='star' rating={this.state.rating} maxRating={5} name='rating'/>
                        <Form.Field>
                        <label>Comment</label>
                            <input onChange={this.handleChange}
                            type='text'
                            name='comment'
                            placeholder='What do you think about this product?'
                            value={this.state.comment}/>
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>
            )
        }
    }

    render(){
        return(
            <div>
                <Segment.Group>
                    {this.renderReviews()}
                </Segment.Group>
                {this.renderForm()}
            </div>
        )
    }

}
export default Reviews