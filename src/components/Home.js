import React from 'react'
import { Grid, Menu, Image, Header } from 'semantic-ui-react'
import ProductContainer from '../container/ProductContainer'

const Home = props => {

    return(
        <div>
            <Grid padded>
                <Grid.Row><Grid.Column width={16}><Image src="../shoply-background.jpg" fluid/></Grid.Column></Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}><Menu text vertical>
                        <Menu.Item header>Categories</Menu.Item>
                        <Menu.Item
                        name = 'all'
                        active={props.filter=== 'all'}
                        onClick={()=>
                            props.filterProducts('all')}/>
                        <Menu.Item
                        name='food'
                        active={props.filter=== 'food'}
                        onClick={()=>
                            props.filterProducts('food')}/>
                        <Menu.Item
                        name='clothing'
                        active={props.filter=== 'clothing'}
                        onClick={()=>
                        props.filterProducts('clothing')}/>
                        <Menu.Item
                        name='electronics'
                        active={props.filter=== 'electronics'}
                        onClick={()=>
                        props.filterProducts('electronics')}/>
                        <Menu.Item
                        name='toys'
                        active={props.filter=== 'toys'}
                        onClick={()=>
                        props.filterProducts('toys')}/>
                        </Menu></Grid.Column>
                    <Grid.Column width={11}><ProductContainer addToCart={props.addToCart} products={props.products}/></Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default Home