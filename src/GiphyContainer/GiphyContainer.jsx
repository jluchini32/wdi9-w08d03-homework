import React, { Component } from 'react';
import GiphySearchForm from '../GiphySearchForm/GiphySearchForm';


class GiphyContainer extends Component{
    constructor(){
        super();
        this.state = {
            giphy: []
        }
    }

 

    searchGiphys = async (formData) => {
        const searchURL = `https://api.giphy.com/v1/gifs/search?q=${formData.search}&key=on08AtR2nyW3u4GyKMKOG4ddbuj8AsnG`
        const result = await fetch(searchURL);
        const parsedResult = await result.json()
        await this.setState({
            giphy: parsedResult.data
        
        })
    }
    

    render(){
        console.log(this.state, "this is this.state in render")

        const giphyList = this.state.giphy.map((gif, i)=>{
            return(
                <div key={i}>
                    <img src={gif.images.downsized_medium.url} alt="New Gif"/>

                </div>
            )
        })

        return <div>
            <h2>Giphy Container</h2>
            <GiphySearchForm searchGiphys={this.searchGiphys}></GiphySearchForm>
            {giphyList}
            
        </div>
        }
    
}




export default GiphyContainer;

