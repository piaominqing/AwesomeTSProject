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
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

let number = Math.round(Math.random() * 100);
let count = 0;

const App = () => {
  console.log(number);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  };
  // 组件第一次加载的时候 执行一次
  React.useEffect(() => {
    initNumber();
  }, []);
  const [text, setText] = React.useState('');
  function doGuess() {
    count++;
    const numberValue = parseInt(text, 10);
    if (numberValue === number) {
      Alert.alert(`猜中了,${count}`);
    } else if (numberValue < number) {
      Alert.alert('猜小了');
    } else {
      Alert.alert('猜大了');
    }
  }
  function initNumber() {
    number = Math.round(Math.random() * 100);
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={backgroundStyle}>
        <TextInput style={styles.input} value={text} onChangeText={setText} />
        <Button title="猜" onPress={doGuess}></Button>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 30,
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default App;
