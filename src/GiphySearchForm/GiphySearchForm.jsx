import React, { Component } from 'react';
import GiphyContainer from '../GiphyContainer/GiphyContainer';


class GiphySearchForm extends Component{
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchGiphys(this.state);
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
        What giphy are you looking for? <input onChange = {this.handleChange} type="text" name="search" />
        <input type="submit" />
        </form>
    }
}



export default GiphySearchForm;