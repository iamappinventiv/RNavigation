import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { fetchUserData} from '../../Redux/middleware/thunk';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
   
  }, [dispatch]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatar}>
        <Image source={{uri: user.avatar}} style={styles.avatarImage} />
      </View>
      <View style={styles.info}>
        <Text style={styles.headText}>
          {user.first_name + ' ' + user.last_name}
        </Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.headSubText}>Email:</Text>
          <Text style={styles.dataContainer}> {user.email}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.headSubText}>Phone no:</Text>
          <Text style={styles.dataContainer}> {user.phone_number}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.headSubText}>Username:</Text>
          <Text style={styles.dataContainer}> {user.username}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.headSubText}>Gender:</Text>
          <Text style={styles.dataContainer}> {user.gender}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.headSubText}>Date of Birth:</Text>
          <Text style={styles.dataContainer}> {user.date_of_birth}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AFEEEE',
  },
  avatar: {
    width: '50%',
    aspectRatio: 1,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'teal',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  info: {
    margin: 20,
    alignItems: 'center',
  },
  headText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  detailsContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginTop: 18,
    padding: 5,
    height: 40,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',

    borderRadius: 8,
  },
  headSubText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dataContainer: {
    fontSize: 18,
  },
});

export default ProfileScreen;
