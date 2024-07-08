import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const formChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="reg-container" >
      <h1>REGISTRATION FORM</h1>
      <label htmlFor="username-Input" className="input-label">USERNAME:</label>
      <input type="text" name="username" value={formData.username} onChange={formChange} placeholder="Username"/>
      <label htmlFor="email-Input" className="input-label">EMAIL:</label>
      <input type="email" name="email"   value={formData.email} onChange={formChange} placeholder="Email"/>
      <label htmlFor="password-Input" className="input-label">PASSWORD:</label>
      <input type="password" name="password" value={formData.password} onChange={formChange} placeholder="Password"/>
      <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
}
export default RegistrationForm;