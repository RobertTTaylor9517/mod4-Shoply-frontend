import React from 'react'
import ProductContainer from '../container/ProductContainer'
import { Header, Grid } from 'semantic-ui-react'

class Search extends React.Component{

    componentDidMount(){
        if(this.props.searchTerm !== ''){
            fetch('https://boiling-escarpment-57210.herokuapp.com/search',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    search: this.props.searchTerm
                })
            })
            .then(res=>res.json())
            .then(products=>{
                this.props.handleSearch(products)

            })
        }
        console.log(window.location.pathname)
    }

    renderResults=()=>{
        if(this.props.results.length === 0){
            return (
                <Header>Search returned no results...</Header>
            )
        }else{
            return(
                <div>
                    <Header>Search returned {this.props.results.length} results!</Header>
                    <ProductContainer products={this.props.results}/>
                </div>
            )
        }
    }

    render(){
        return(
            <Grid padded>
                <Grid.Row>
                    <Grid.Column>
                        {this.renderResults()}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

   
}
export default Search