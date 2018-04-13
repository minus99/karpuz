import React, {Component} from 'react';
import { View, Text, FlatList } from 'react-native';

import Item from './Item';

  
export default class List extends Component {
    state = {
        data: [
            {
                id: 0,
                name: '2017 stajyer 4.2 Puan toplam',
                typ: 'rating'
            },
            {
                id: 1,
                name: '2017 stajyer 4.2 Puan toplam',
                typ: 'article'
            },
            {
                id: 2,
                name: '2017 stajyer 4.2 Puan toplam',
                typ: 'video'
            },
            {
                id: 3,
                name: '2017 stajyer 4.2 Puan toplam',
                typ: 'advertisement'
            },

        ]
    };

    _keyExtractor = (item, index) => item.id.toString();

    _renderItem = ({item}) => (
        <Item data={ item } />
    );

    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}