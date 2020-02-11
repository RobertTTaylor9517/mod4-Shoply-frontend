import React from 'react'
import { Segment, Rating, Header } from 'semantic-ui-react'

const Review =({review})=>{
    return(
        <Segment>
            <Header>{review.user.username}</Header>
            <Rating icon='star' defaultRating={review.rating} maxRating={5} clearable={false} disabled />
            <p>{review.comment}</p>
        </Segment>
    )
}
export default Review