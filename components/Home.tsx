import { StyleSheet, Text, Image, Pressable, View } from 'react-native';
import Header from './Header';


export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Welcome to</Text>
      <Text style={styles.title}>My Weather</Text>
      <Text style={styles.text}>Here you can see the weather in your city and cities around the world!</Text>
      <Image
        style={styles.image}
        source={require('../assets/images/man_with_smartphone.png')}
        resizeMode="contain"
      />
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#027efa' : '#52a6fa',
          },
          styles.button,
        ]}
        onPress={() => navigation.navigate('Weather')}
      >
        <Text style={styles.buttonText}>Lets go!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    fontWeight: '700',
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    height: 200,
    width: 200,
    margin: 20,
  },
  button: {
    width: '50%',
    borderWidth: 2,
    borderColor: '#00004d',
    borderRadius: 25,
    padding: 12,
    margin: 30,
  },
  changedButton: {
    backgroundColor: '#52a6fa',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
