/* import { useEffect } from "react"; */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestBluetoothDevice, writeBluetoothCharacteristic, readBluetoothCharacteristic } from "../../redux/actions";

export default function Bluetooth() {
  const dispatch = useDispatch();
  const bluetoothDevice = useSelector((state) => state.bluetoothDevice);
  const bluetoothConnected = useSelector((state) => state.bluetoothConnected);
  const bluetoothRead = useSelector((state) => state.bluetoothRead);

  const [inputValue, setInputValue] = useState("");

  const handleRequestDevice = () => {
    dispatch(requestBluetoothDevice());
  };

  const handleWriteCharacteristic = () => {
    if (bluetoothConnected) {
      dispatch(writeBluetoothCharacteristic(bluetoothDevice.characteristic, inputValue));
    }
  };

  const handleReadCharacteristic = () => {
    if (bluetoothConnected) {
      dispatch(readBluetoothCharacteristic(bluetoothDevice.characteristic));
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {!bluetoothConnected && (
        <div>
          <h1>Esperando conexión...</h1>
          <button onClick={handleRequestDevice}>Conectar</button>
        </div>
      )}
      {bluetoothConnected && (
        <div>
          <h1>¡Estás conectado!</h1>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleWriteCharacteristic}>Enviar</button>
          <button onClick={handleReadCharacteristic}>Recibir</button>
          <p>Dato enviado: {inputValue}</p>
          <p>Dato recibido: {bluetoothRead}</p>
        </div>
      )}
    </div>
  );
}
