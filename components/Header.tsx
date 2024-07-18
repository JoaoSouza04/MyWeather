import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/logo.png')}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginTop: 10,
        marginBottom: 20,
        width: 85,
        height: 85,
    }
});
