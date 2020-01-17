import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Akhil', age:19},
        {name: 'prashant', age:19},
        {name: 'ronit', age:19},
        {name: 'Sahyog', age:19},
        {name: 'Digvijay', age:19},
        {name: 'Arnab', age:19},
        {name: 'Athak', age:19},
    ];

    return (
    <FlatList
    /*horizontal
    showsHorizontalScrollIndicator={false}*/
    keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name} is {item.age} years old</Text>;
        }}
    />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;