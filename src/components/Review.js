import React from 'react'
import { Segment, Rating, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Review =(props)=>{

    const renderUser=()=>{
        if(window.location.pathname === '/account'){
            console.log(props.review)
            return(
                <Segment>
                    <div><Link key={props.review.product.id} to={`/products/${props.review.product.id}`}>{props.review.product.name}</Link></div>
                    <Rating icon='star' defaultRating={props.review.rating} maxRating={5} clearable={false} disabled />
                    <p>{props.review.comment}</p>
                    <Button onClick={()=>props.deleteReview(props.review.id)} size='small' color='red'>Delete Review</Button>
                </Segment>
            )
        }else{
            return(
                <Segment>
                    <Header>{props.review.user.username}</Header>
                    <Rating icon='star' defaultRating={props.review.rating} maxRating={5} clearable={false} disabled />
                    <p>{props.review.comment}</p>
                </Segment>
            )
        }
    }

    return(
        <div>
            {renderUser()}
        </div>
    )
}
export default Review