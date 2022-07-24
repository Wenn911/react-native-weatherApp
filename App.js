import React from 'react';
import {Alert, StatusBar} from 'react-native';
import * as Location from 'expo-location';
import Loading from "./Loading";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = '5cd0ba939afad29cd495508a1727f0da';

export default class extends React.Component {
    state = {
        isLoading: true,
        temp: null,
        condition: '',
        max_temp: null,
        min_temp: null,
        city: '',
    }

    getWeather = async (latitude, longitude) => {
      const { data: {main: {temp, temp_min, temp_max}, weather} } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      this.setState({isLoading: false, temp: temp, condition: weather[0].main, max_temp: temp_max, min_temp: temp_min})
    }

    getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude } }= await Location.getCurrentPositionAsync();
      const cityName = await Location.reverseGeocodeAsync({
        latitude: latitude,
        longitude: longitude,
      });
      this.setState({ city: cityName[0].city })
      this.getWeather(latitude, longitude)
    }
    catch (e) {
      Alert.alert('Не могу определить местоположение')
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
      const {isLoading, temp, condition, city, max_temp, min_temp} = this.state;
    return (
        isLoading ? <Loading/>: <Weather temp={Math.round(temp)} condition={condition} city={city} max={Math.round(max_temp)} min={Math.round(min_temp)}/>
    );
  }
}

