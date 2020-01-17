import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
    const myname = "Divesh"
    return (
    <View>
        <Text style={styles.headerStyle}>Getting started with react native!</Text>
        <Text style={styles.subHeaderStyle}>My name is {myname}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentScreen;