import React, { Component } from 'react';
import { View, Image } from 'react-native';
import axios from 'axios';
// import Card from './Card';


//const stext = "abc xyz 123";

class Homepage extends Component {
    state = { lists: [] };

    componentWillMount() {
        axios.get('https://api.gfycat.com/v1/gfycats/search?search_text=books').then(response => 
            this.setState({ lists: response.data.gfycats })
        );
    }
    renderLists() {
        return this.state.lists.map(
            list => 
            <Image style={{ width: 400, height: 400 }} source={{ uri: list.mobilePosterUrl }} />
            
            );
        // return (<Text>123456</Text>);
    }
    render() {        
            return (
                <View>
                    { this.renderLists() }
                </View>
        );
               
    }
}


export default Homepage;
