import { useState } from "react";
import { createUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    user_email: "",
    user_name: "",
    user_lastname: "",
    user_password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "user_email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        console.error("El email ingresado no es válido");
        return;
      }
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCreateUser = async () => {
    await dispatch(createUser(form));
    navigate("/bluetooth");
  };

  return (
    <div>
      <h1>Esto es crear usuario</h1>
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
          Name:
          <input
            type="text"
            name="user_name"
            value={form.user_name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="user_lastname"
            value={form.user_lastname}
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
        <button type="button" onClick={handleCreateUser}>
          Crear Usuario
        </button>
      </form>
    </div>
  );
}
