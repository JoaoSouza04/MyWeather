import { StyleSheet, View, Text, TextInput, ActivityIndicator, Pressable } from "react-native";
import React, { useState } from "react";
import Header from './Header';
import { getWeather } from "../services/WeatherService";

export default function Weather () {
    const [location,  setLocation] = useState('');
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const fetchWeather = async (location: string) => {
        try {
            if(location == '') {
                throw new Error('Please type a valid city!');
            }
            
            const weatherData = await getWeather(location);
            
            if(weatherData?.data) {
                setResult(weatherData!.data);
            } else {
                throw new Error('City not found, please type a valid name!')
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false);
            setLocation('');
        }
    };

    return (
        <View style={styles.container}>
            <Header/>
            <TextInput
                style={styles.input}
                placeholder='Location'
                value={location}
                onChangeText={(text) => {
                    setLocation(text)
                }}
            />
            <Pressable
                style={({pressed}) => [
                    {
                    backgroundColor: pressed ? '#027efa' : '#52a6fa'
                    },
                    styles.button]}
                onPress={() => {
                    fetchWeather(location);
                    setLoading(true);
                }}
            >
                <Text style={styles.buttonText} >Search</Text>
            </Pressable>
            {((loading) && (location != '')) ?  (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : result ? (
                <View style={styles.ViewWeather}>
                    <Text style={styles.cardTitle}>
                        {result.Name}
                    </Text>
                    <Text style={styles.LocationText}>
                        {`${result.State}, ${result.Country}`}
                    </Text>
                    <Text style={styles.cardTemperatura}>
                        {`${result.Temperature}°`}
                    </Text>
                    <Text style={styles.cardDescription}>
                        {result.Description}
                    </Text>
                    <Text style={[styles.text, {color: 'white',}]}>
                        {`${result.Minimum}° / ${result.Maximum}°`}
                    </Text>
                    <Text style={styles.cardSensation}>
                        {`Feels like ${result.Sensation}°`}
                    </Text>
                </View>
            ) : (
                <Text style={styles.text}>No data... Type a city!</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
      backgroundColor: 'white'
    },
    input: {
        width: '50%',
        borderWidth: 2,
        borderColor: '#00004d',
        borderRadius: 30,
        padding: 12,
        textAlign: 'center'
    },
    button: {
        width: '50%',
        borderWidth: 2,
        borderColor: '#00004d',
        borderRadius: 25,
        padding: 12,
        margin: 20,
    },
    changedButton: {
        backgroundColor: '#52a6fa',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 5,
    },
    ViewWeather: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 20,
        borderRadius: 25,
        backgroundColor: '#52a6fa',
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    LocationText: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
    },
    cardTemperatura: {
        textAlign: 'center',
        fontSize: 50,
        marginLeft: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    cardDescription: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'white',
    },
    cardSensation: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    }
});
