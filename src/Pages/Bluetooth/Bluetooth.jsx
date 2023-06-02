import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestBluetoothDevice, connectBluetoothDevice, writeBluetoothCharacteristic } from "../../redux/actions";

export default function Bluetooth() {
  const dispatch = useDispatch();
  const bluetoothConnected = useSelector((state) => state.bluetoothConnected);

  const handleRequestDevice = () => {
    dispatch(requestBluetoothDevice());
  };

  console.log(bluetoothConnected);

  return (
    <div>
      {!bluetoothConnected && (
        <div>
          <h1>Esperando conexión...</h1>
          <button onClick={handleRequestDevice}>Conectar</button>
        </div>
      )}
      {bluetoothConnected && <div>¡Estás conectado!</div>}
    </div>
  );
}


