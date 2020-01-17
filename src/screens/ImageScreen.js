import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImageDetail from './components/ImageDetails';

const ImageScreen = () => {

    return <View>
        <ImageDetail title="Forest" imageScore={9} imageSource={require('../../assets/forest.jpg')} />
        <ImageDetail title="Beach" imageScore={8} imageSource={require('../../assets/beach.jpg')} />
        <ImageDetail title="Mountain" imageScore={10} imageSource={require('../../assets/mountain.jpg')} />
    </View>
};

const styles = StyleSheet.create({

});

export default ImageScreen;