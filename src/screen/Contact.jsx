import React, {useState, useRef, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import {fetchAddressData} from '../Redux/Middleware/thunk';
import {useDispatch, useSelector} from 'react-redux';
const App = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const address = useSelector(state => state.address);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );
        setUsers(response.data);
        console.log('response ====>', response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  useEffect(() => {
    dispatch(fetchAddressData());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.userContainer}>
            <Text style={styles.userName}>Name: {item.name}</Text>
            <Text style={styles.userEmail}>Phone: {item.phone}</Text>
            <Text style={styles.userEmail}>
              Streetname: {address.street_name}
            </Text>
            <Text style={styles.userEmail}>Community: {address.community}</Text>
            <Text style={styles.userEmail}>State: {address.state}</Text>
            <Text style={styles.userEmail}>Country: {address.country}</Text>
            <Text style={styles.userEmail}>Time Zone: {address.time_zone}</Text>
            <Text style={styles.userEmail}>Zip Code: {address.zip_code}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 19,
    backgroundColor: '#F5F5F5',
    flexDirection: 'column-reverse',
  },
  userContainer: {
    marginVertical: 8,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    textAlign: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    height: '8%',
    width: '50%',
    backgroundColor: '#5783db',
    shadowOpacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  buttonref: {
    position: 'absolute',
    width: '22%',
    height: '5%',
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 30,
  },
  arrow: {
    fontSize: 8,
  },
});

export default App;
