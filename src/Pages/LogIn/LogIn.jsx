import { useState } from "react";
import { logInUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"

export default function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [form, setForm] = useState({
    user_email: "",
    user_password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleLogIn = async () => {
    dispatch(logInUser(form));
    await navigate('/bluetooth')
  };

  return (
    <div>
      <h1>Esto es LogIn</h1>
      <form>
        <label>
          Email:
          <input
            type="text"
            name="user_email"
            value={form.user_email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="user_password"
            value={form.user_password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogIn}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
