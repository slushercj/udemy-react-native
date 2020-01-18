import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {

    return (
        <View>
            <Text> {color} </Text>
            <Button
            onPress={ () => onIncrease()}
            title={`Increase ${color}`} />
            
            <Text></Text>
            
            <Button
            onPress= { () => onDecrease()}
            title={`Decrease ${color}`} />
            
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ColorCounter;