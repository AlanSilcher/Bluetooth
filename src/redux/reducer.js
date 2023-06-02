import { LOGIN_USER, LOGOUT_USER, BLUETOOTH_CONNECTED, BLUETOOTH_DEVICE, BLUETOOTH_WRITE, BLUETOOTH_READ } from "./actions";

const initialState = {
  logIn: false,
  bluetoothDevice: null,
  bluetoothConnected: false,
  bluetoothWritten: false,
  bluetoothRead: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, logIn: action.payload };

    case LOGOUT_USER:
      return { ...state, logIn: false };

    case BLUETOOTH_DEVICE:
      return { ...state, bluetoothDevice: action.payload };

    case BLUETOOTH_CONNECTED:
      return { ...state, bluetoothConnected: true };

    case BLUETOOTH_WRITE:
      return { ...state, bluetoothWritten: true };

    case BLUETOOTH_READ:
      return { ...state, bluetoothRead: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
