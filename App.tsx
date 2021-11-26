/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [text, setText] = React.useState('');
  return (
    <>
      <StatusBar barStyle="dark-content"></StatusBar>
      <SafeAreaView style={backgroundStyle}>
        <TextInput style={styles.input} value={text} onChangeText={setText} ></TextInput>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 30,
    height: 20,
  },
});

export default App;
