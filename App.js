import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/headers';
import AlbumList from './src/components/AlbulList';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText="Albums" />
                <AlbumList />
            </View>
        );
    }
}

export default App;
