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
                        </Menu></Grid.Column>
                    <Grid.Column width={8}><ProductContainer products={props.products}/></Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default Home