import React from 'react'
import { Segment, Rating, Header, Form } from 'semantic-ui-react'
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
        return this.state.reviews.map(review =>{
            return(
                <Review review={review} />
            )
        })
    }

    handleChange=(e)=>{
        if(e.target.name === 'rating'){
            this.setState({
                [e.target.name]: e.target.value
            })
        }else{
            this.setState({
                [e.target.name]: e.target.value
            })
        }
       
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
                    <Form>
                        <Rating icon='star' rating={this.state.rating} maxRating={5} name='rating'/>
                        <Form.Field>
                        <label>Comment</label>
                            <input onChange={this.handleChange}
                            type='text'
                            name='comment'
                            placeholder='What do you think about this product?'
                            value={this.state.comment}/>
                        </Form.Field>
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