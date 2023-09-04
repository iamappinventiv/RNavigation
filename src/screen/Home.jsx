import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Colors} from '../constants/color';

const Home = ({navigation}) => {
  const Time = new Date().getHours();
  const text =
    Time < 12 ? 'Good Morning' : Time < 17 ? 'Good Afternoon' : 'Good Evening ';
  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>{text} </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Map')}>
          <Text style={styles.buttonText}>Start Exploring</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.blue,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Home;
