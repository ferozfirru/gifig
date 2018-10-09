import React, { Component } from 'react';
import { View } from 'react-native';
import PhotoGrid from 'react-native-image-grid';
import axios from 'axios';

import { Image, TouchableOpacity, Text } from 'react-native';

// import Card from './Card';


//const stext = "abc xyz 123";

class Homepage extends Component {
    constructor() {
        super();
        this.state = { lists: [] };
      }

    componentWillMount() {
        axios.get('https://api.gfycat.com/v1/gfycats/search?search_text=cars').then(response => 
            this.setState({ lists: response.data.gfycats })
        );
    }
    renderLists() {
        return this.state.lists.map(list => { 
            return { id: list.gfyNumber, src: list.gif100px, title: lists.title }
         });
    }
    render() {        
            return (
                <PhotoGrid
                data = { this.state.lists }
                itemsPerRow = { 3 }
                itemMargin = { 1 }
                itemPaddingHorizontal={1}
               renderHeader = { this.renderHeader }
                renderItem = { this.renderItem }
              />
                // <View>
                //     { this.renderLists() }
                // </View>
        );
               
    }

    renderHeader() {
        return(
          <Text>Headinh</Text>
        );
      }

    renderItem(item, itemSize, itemPaddingHorizontal) {
        return(
          <TouchableOpacity
            key = { item.id }
            style = {{ width: '200px', height: '200px', paddingHorizontal: itemPaddingHorizontal }}
            onPress = { () => {
              // Do Something
            }}>
            <Image
              resizeMode = "cover"
              style = {{ flex: 1 }}
              source = {{ uri: item.src }}
            />
          </TouchableOpacity>
        )
      }
}


export default Homepage;
