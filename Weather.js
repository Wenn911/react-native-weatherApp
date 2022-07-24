import React from 'react';
import { StyleSheet, Text, View, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { Fontisto } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Rain: {
        iconName: 'rains',
        gradient: ['#000046', '#1CB5E0'],
        description: 'Дождь'
    },
    Snow: {
        iconName: 'snow',
        gradient: ['#83a4b4', '#b6fbff'],
        description: 'Снег'
    },
    Clear: {
        iconName: 'day-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        description: 'Ясно'
    },
    ThunderStorm: {
        iconName: 'lightning',
        gradient: ['#141E30', '#243B55'],
        description: 'Гроза'
    },
    Mist: {
        iconName: 'fog',
        gradient: ['#606c88', '#3f4c6b'],
        description: 'Туман'
    },
    Clouds: {
        iconName: 'cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        description: 'Облачно'
    },
    Drizzle: {
        iconName: 'rain',
        gradient: ['#3a7bd5', '#3a6073'],
        description: 'Переменная облачность'
    }
}

export default function Weather({temp, condition, city, max, min}) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.halfContainer}>
                <Text style={styles.city}>{city}</Text>
                <Text style={styles.temp}>{`  ${temp}°`}</Text>
                <Text style={styles.condition}>{weatherOptions[condition].description}</Text>
                <Text style={styles.max_min_temp}>{`Макс.: ${max}°, мин.: ${min}°`}</Text>
            </View>
            <View style={styles.halfContainer}>
                <Fontisto name={weatherOptions[condition].iconName} size={90} color='white' />
            </View>

        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["ThunderStorm", "Rain", "Snow", "Mist", "Clear", "Clouds", "Drizzle"]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 80,
        color: 'white',
    },
    city: {
        fontSize: 40,
        color: 'white',
    },
    condition: {
        color: 'white',
        fontSize: 20
    },
    max_min_temp: {
        color: 'white',
        fontSize: 20
    }
})