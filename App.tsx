import { StyleSheet, View } from 'react-native';
import Home from './components/Home'

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00004d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }});
