import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Button } from 'react-native-elements';



const App = () => {

  const [input, setInput] = useState('');



  const handlePress = (value) => {

    setInput(input + value);

  };



  const calculateResult = () => {

    try {

      setInput(eval(input).toString());

    } catch {

      setInput('Error');

    }

  };



  const clearInput = () => {

    setInput('');

  };



  return (

    <View style={styles.container}>

      <View style={styles.display}>

        <Text style={styles.displayText}>{input}</Text>

      </View>

      <View style={styles.buttonsContainer}>

        <View style={styles.row}>

          <Button title="7" onPress={() => handlePress('7')} containerStyle={styles.buttonContainer} />

          <Button title="8" onPress={() => handlePress('8')} containerStyle={styles.buttonContainer} />

          <Button title="9" onPress={() => handlePress('9')} containerStyle={styles.buttonContainer} />

          <Button title="/" onPress={() => handlePress('/')} containerStyle={styles.buttonContainer} />

        </View>

        <View style={styles.row}>

          <Button title="4" onPress={() => handlePress('4')} containerStyle={styles.buttonContainer} />

          <Button title="5" onPress={() => handlePress('5')} containerStyle={styles.buttonContainer} />

          <Button title="6" onPress={() => handlePress('6')} containerStyle={styles.buttonContainer} />

          <Button title="*" onPress={() => handlePress('*')} containerStyle={styles.buttonContainer} />

        </View>

        <View style={styles.row}>

          <Button title="1" onPress={() => handlePress('1')} containerStyle={styles.buttonContainer} />

          <Button title="2" onPress={() => handlePress('2')} containerStyle={styles.buttonContainer} />

          <Button title="3" onPress={() => handlePress('3')} containerStyle={styles.buttonContainer} />

          <Button title="-" onPress={() => handlePress('-')} containerStyle={styles.buttonContainer} />

        </View>

        <View style={styles.row}>

          <Button title="C" onPress={clearInput} containerStyle={styles.buttonContainer} />

          <Button title="0" onPress={() => handlePress('0')} containerStyle={styles.buttonContainer} />

          <Button title="=" onPress={calculateResult} containerStyle={styles.buttonContainer} />

          <Button title="+" onPress={() => handlePress('+')} containerStyle={styles.buttonContainer} />

        </View>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#f5f5f5',

  },

  display: {

    width: '100%',

    padding: 20,

    backgroundColor: '#fff',

    borderBottomWidth: 1,

    borderBottomColor: '#ccc',

    alignItems: 'flex-end',

  },

  displayText: {

    fontSize: 40,

  },

  buttonsContainer: {

    width: '100%',

  },

  row: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginVertical: 5,

  },

  buttonContainer: {

    flex: 1,

    margin: 2,

  },

});



export default App;


