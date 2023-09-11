import axios from 'axios';
import { setUser } from '../Slices/userSlice';
import { setAddress } from '../Slices/addressSlice';
import { useDispatch } from 'react-redux';

export const fetchUserData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://random-data-api.com/api/v2/users');
      const userData = response.data; 
      dispatch(setUser(userData));
    } catch (error) {
      console.error('Error:', error);
    }
  };
};

export const fetchAddressData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://random-data-api.com/api/v2/addresses');
      const addressData = response.data; 
      dispatch(setAddress(addressData));
    } catch (error) {
      console.error('Error', error);
    }
  };
};
