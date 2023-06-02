import axios from "axios";
/* import { requestDevice } from 'web-bluetooth'; */

export const CREATE_USER = "CREATE_USER";
export const createUser = (form) => {
  return async function (dispatch) {
    await axios.post("http://localhost:3001/user", form);
    dispatch(logInUser(form));
  };
};

export const LOGIN_USER = "LOGIN_USER";
export const logInUser = (form) => {
  return async function (dispatch) {
    const apiData = await axios.post("http://localhost:3001/login", form);
    const logInData = apiData.data;
    dispatch({ type: LOGIN_USER, payload: logInData });
  };
};

export const LOGOUT_USER = "LOGOUT_USER";
export const logOutUser = () => {
  return async function (dispatch) {
    dispatch({ type: LOGOUT_USER });
  };
};

export const BLUETOOTH_DEVICE = "BLUETOOTH_DEVICE";
export const requestBluetoothDevice = () => {
  return async (dispatch) => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ services: ['battery_service'] }],
      });
      dispatch({ type: BLUETOOTH_DEVICE, payload: device });
    } catch (error) {
      console.error('Error requesting Bluetooth device:', error);
    }
  };
};

export const BLUETOOTH_CONNECTED = "BLUETOOTH_CONNECTED";
export const connectBluetoothDevice = (device) => {
  return async (dispatch) => {
    try {
      const server = await device.gatt.connect();
      dispatch({ type: BLUETOOTH_CONNECTED, payload: server });
    } catch (error) {
      console.error('Error connecting to Bluetooth device:', error);
    }
  };
};

export const BLUETOOTH_READ = "BLUETOOTH_READ";
export const readBluetoothCharacteristic = (characteristic) => {
  return async (dispatch) => {
    try {
      const descriptor = await characteristic.getDescriptor('gatt.characteristic_user_description');
      const value = await descriptor.readValue();
      dispatch({ type: BLUETOOTH_READ, payload: value });
    } catch (error) {
      console.error('Error reading Bluetooth characteristic:', error);
    }
  };
};

export const BLUETOOTH_WRITE = "BLUETOOTH_WRITE";
export const writeBluetoothCharacteristic = (characteristic, value) => {
  return async (dispatch) => {
    try {
      const descriptor = await characteristic.getDescriptor('gatt.characteristic_user_description');
      await descriptor.writeValue(value);
      dispatch({ type: BLUETOOTH_WRITE });
    } catch (error) {
      console.error('Error writing to Bluetooth characteristic:', error);
    }
  };
};
