import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
  ScrollView, // se usa para el scroll
  FlatList, // se reemplaza para una lista mejorada
} from 'react-native';


import GoalItem from './components/goal.item' ;

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  const goalInputHandler = (inputText) => {
    setEnteredGoal(inputText);
  };

  const addGoalHandler = () => {
    setCourseGoals(courseGoals => [...courseGoals, { key: Math.random().toString(), value: enteredGoal}]);
    setEnteredGoal('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputView}>
        <TextInput placeholder="Course  dGoal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <Button title="Click Me"

          onPress={addGoalHandler}
        />
      </View>

      <FlatList 
        keyExtractor = {(item,index)=> item.key}
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem title={itemData.item.value}  />

        } />
    </View>
  );
}


// style JS
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 3
  },
  button: {
    height: '100%',
    color: 'red',
    width: '20%'
  },


});