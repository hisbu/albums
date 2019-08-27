import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { album: [] }

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((res) => {
            this.setState({ album: res.data });
            console.log(res.data);
        }).catch((err) => {
            console.log(err.response);
        });
    }

    renderAlbums() {
        return this.state.album.map((item, index) => {
            return <AlbumDetail key={index} album={item} />;
        });
    }

    render() {
        return (
            <ScrollView>
                
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
