import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import ProductContainer from '../container/ProductContainer'

const Home = props => {

    return(
        <div>
            <Grid>
                <Grid.Row><Grid.Column width={12} className="home-header"></Grid.Column></Grid.Row>
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
                        name='general'
                        active={props.filter=== 'general'}
                        onClick={()=>
                            props.filterProducts('general')}/>
                        </Menu></Grid.Column>
                    <Grid.Column width={8}><ProductContainer products={props.products}/></Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default Home