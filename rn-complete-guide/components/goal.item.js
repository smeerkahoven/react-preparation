import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.goalItem}>
            <Text>{props.title}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    goalItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 1,
        width: '100%'
      }
    
});

export default GoalItem;