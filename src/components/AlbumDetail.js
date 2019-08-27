import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends Component {
    onBtnBuyNowPress = () => {
        Linking.openURL(this.props.album.url);

    }
    render() {
        const {
            title, 
            artist, 
            thumbnail_image,
            image,
            url
        } = this.props.album;

        const {
            thumbnailContainerStyle,
            thumbnailStyle,
            headerContentStyle,
            headerTextStyle,
            imageStyle,
        } = styles;
        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image 
                            source={{ uri: thumbnail_image }} 
                            style={ thumbnailStyle} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                    {/* <Text>{this.props.album.title}</Text> */}
                </CardSection>
                <CardSection>
                    <Image 
                        style={imageStyle}
                        source={{ uri: image }}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onBtnBuyNowPress}>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1
    }
});

export default AlbumDetail;
