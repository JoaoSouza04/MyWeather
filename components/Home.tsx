import { StyleSheet, Text, Image, Pressable, View } from 'react-native';
import Header from './Header'

export default function App() {
    return (
      <View style={styles.container}>
        <Header/>
        <Text style={styles.text}>Bem vindo a</Text>
        <Text style={styles.title}>My Weather</Text>
        <Text style={styles.text}>Aqui você poderá ver o clima presente na sua ou em mais cidades!</Text>
        <Image 
          style={styles.image}
          source={require('../assets/images/standing.png')}
          resizeMode='contain'
        />
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#027efa' : '#52a6fa'
            },
            styles.button]}
          >
          <Text style={styles.buttonText} >Vamos lá!</Text>
        </Pressable>
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
    },
    title: {
      fontWeight: '700',
      color: 'white',
      fontSize: 40,
      marginBottom: 20,
      textAlign: 'center',
    },
    text: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
    image: {
      height: 250,
      width: 250,
      marginBottom: 20
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
    }
  });  
