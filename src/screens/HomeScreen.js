import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  
  return <View>
    <Text style={styles.title}>HomeScreen</Text>
    <Button title="Go to Components Demo"
      onPress={() => navigation.navigate('Components')}
    />
    <Text>      </Text>
    <Button
     title='Go to List'
     onPress={() => navigation.navigate('List')}
    />
    <Text>      </Text>
    <Button
     title='Go to Image Screen'
     onPress={() => navigation.navigate('Image')}
    />
    <Text>      </Text>
    <Button
       title="Go to Counter Screen"
       onPress={() => navigation.navigate('Counter')}
    />

    <Text>      </Text>
    <Button
       title="Go to Color Screen"
       onPress={() => navigation.navigate('Color')}
    />
    <Text>      </Text>
    <Button
       title="Go to Square Screen"
       onPress={() => navigation.navigate('Square')}
    />
  </View>

};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    marginVertical:10
  },
  text: {
    fontSize: 20
  }
});

export default HomeScreen;
