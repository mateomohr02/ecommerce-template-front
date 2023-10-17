import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux"

import { createUser } from '../../redux/actions/user/createUser';

import CustomAlert from '../CustomAlert/CustomAlert';

import validate from './validate';

const RegisterForm = () => {

  const dispatch = useDispatch()

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);



  const [form, setForm] = useState({
    email: '',
    password: '',
    repeat: ''
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    repeat: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({}); // Esto restablecerá el estado de errores a un objeto vacío
      if (recaptchaRef.current.getValue()) {
        dispatch(createUser(form));
        setShowAlert(false);
      } else {
        setAlertMessage("Por favor, completa el captcha.");
        setShowAlert(true);
      }
    }
  }

  const recaptchaRef = React.createRef();

  return (
    <div>
      {showAlert && <CustomAlert message={alertMessage} />}
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Correo electrónico:</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        {errors.email && <span >{errors.email}</span>}
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type={showPassword ? "text" : "password"} 
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        {errors.password && <span >{errors.password}</span>}
        </div>
        <div>
          <label>Repita la contraseña:</label>
          <input
            type={showPassword ? "text" : "password"} 
            name="repeat"
            value={form.repeat}
            onChange={handleChange}
          />
          {errors.repeat && <span >{errors.repeat}</span>}
        </div>
        <button type="button" onClick={togglePasswordVisibility}>
            Mostrar Contraseña
          </button>
        <div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LebeYUoAAAAAC-eqacfSv6dREJnKbg02cRffK9k"
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}

export default RegisterForm;
