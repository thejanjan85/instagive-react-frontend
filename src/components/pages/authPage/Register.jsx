import React, { useState } from 'react';
import axios from 'axios';
import '../../../style/authPage/register.css';
import { Link } from 'react-router-dom';

function Register(props) {
  const [checkPassword, setCheckPassword] = useState({ confirm_pass: '' });
  const [userForm, setUserForm] = useState({
    email: '',
    password: '',
    city: '',
    orgName: '',
    orgAddress: '',

    orgNumber: '',
    repName: '',

    orgDescriptions: '',
  });

  const [files, setFiles] = useState({
    orgPhoto: '',
    orgDocuments: '',
    repId: '',
  });

  const handleChange = (event) => {
    console.log(event.target.value);

    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
  };

  const handlerepId = (file) => {
    setFiles({ ...files, repId: file });
  };

  const handleorgPhoto = (file) => {
    setFiles({ ...files, orgPhoto: file });
  };

  const handleorgDocuments = (multifiles) => {
    setFiles({ ...files, orgDocuments: multifiles });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append('repId', files.repId);
    formdata.append('orgPhoto', files.orgPhoto);

    for (const key in files.orgDocuments) {
      formdata.append('orgDocuments', files.orgDocuments[key]);
    }

    formdata.append('email', userForm.email);
    formdata.append('city', userForm.city);
    formdata.append('password', userForm.password);

    formdata.append('orgName', userForm.orgName);
    formdata.append('orgAddress', userForm.orgAddress);
    formdata.append('orgNumber', userForm.orgNumber);
    formdata.append('repName', userForm.repName);
    formdata.append('orgDescriptions', userForm.orgDescriptions);

    const data = await axios.post('http://localhost:5000/user/register', formdata);
    console.log(data)

    setUserForm({
      email: '',
      password: '',
      city: '',
      orgName: '',
      orgAddress: '',
      orgPhoto: '',
      orgNumber: '',
      repName: '',
      repId: '',
      orgDocuments: [],
      orgDescriptions: ''
    })

    setFiles({
      orgPhoto: '',
      orgDocuments: '',
      repId: '',
    })


    document.getElementById('repId').value = null;
    document.getElementById('orgDocuments').value = null;
    document.getElementById('orgPhoto').value = null;




  };

  return (
    <div className='register-container'>
      <div>
        <h1 className='authTitle'>Account Details</h1>
      </div>
      <form encType='multipart/form-data' action='' onSubmit={handleSubmit}>
        <div className='register-form1'>
          <div className='register-input-container1'>
            <label className='form-label' htmlFor='email'>
              Email
            </label>
            <input
              type='text'
              name='email'
              id='email'
              value={userForm.email}
              placeholder='Email'
              className='register-form-input-text'
              onChange={handleChange}
            />
            <label className='form-label' htmlFor='password'>
              Password
            </label>
            <input
              type='text'
              name='password'
              id='password'
              value={userForm.password}
              placeholder='Password'
              className='register-form-input-text'
              onChange={handleChange}
            />
            <label className='form-label' htmlFor='confirm-pass'>
              Confirm Password
            </label>
            <input
              type='text'
              name='confirm-pass'
              id='confirm-pass'
              placeholder='confirm Password'
              className='register-form-input-text'
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </div>
        </div>
        <div className='register-form2'>
          <div className='register-input-container2'>
            <label className='form-label' htmlFor='orgName'>
              Organization Name
            </label>
            <input
              type='text'
              name='orgName'
              value={userForm.orgName}
              onChange={handleChange}
              id='orgName'
              placeholder='Organization Name'
              className='register-form-input-text'
            />
          </div>
          <div className='register-input-container2'>
            <label className='form-label' htmlFor='orgNumber'>
              Organization No.
            </label>
            <input
              type='text'
              name='orgNumber'
              value={userForm.orgNumber}
              onChange={handleChange}
              id='orgNumber'
              placeholder='Organization No.'
              className='register-form-input-text'
            />
          </div>
          <div className='register-input-container2'>
            <label className='form-label' htmlFor='city'>
              City
            </label>
            <input
              type='text'
              name='city'
              value={userForm.city}
              onChange={handleChange}
              id='city'
              placeholder='City'
              className='register-form-input-text'
            />
          </div>
          <div className='register-input-container2'>
            <label className='form-label' htmlFor='orgAddress'>
              Organization Address
            </label>
            <input
              type='text'
              name='orgAddress'
              value={userForm.orgAddress}
              onChange={handleChange}
              id='orgAddress'
              placeholder='Organization Address'
              className='register-form-input-text'
            />
          </div>
          <div className='register-input-container2'>
            <label className='form-label' htmlFor='repName'>
              Representative Name
            </label>
            <input
              type='text'
              name='repName'
              value={userForm.repName}
              onChange={handleChange}
              id='repName'
              placeholder='Representative Name'
              className='register-form-input-text'
            />
          </div>

          <div className='register-input-container2'>
            <label className='form-label' htmlFor='repId'>
              Representative ID
            </label>
            <input
              type='file'
              id='repId'
              name='repId'
              onChange={(e) => {
                const file = e.target.files[0];
                handlerepId(file);
              }}
              className='form-input-file'
            ></input>
          </div>

          <div className='register-input-container2'>
            <label className='form-label' htmlFor='orgDocuments'>
              Organization Documents
            </label>
            <input
              type='file'
              id='orgDocuments'
              name='orgDocuments'
              onChange={(e) => {
                const multifiles = e.target.files;
                handleorgDocuments(multifiles);
              }}
              multiple
              className='form-input-file'
            ></input>
          </div>
          <div className='register-input-container2'>
            <label className='org-photo' htmlFor='orgPhoto'>
              Organization Photo
            </label>
            <input
              type='file'
              id='orgPhoto'
              name='orgPhoto'
              onChange={(e) => {
                const file = e.target.files[0];
                handleorgPhoto(file);
              }}
              className='form-input-file'
            />
          </div>
        </div>
        <div className='register-org-description-container'>
          <label className='org-photo' htmlFor='orgDescriptions'>
            Organization Description
          </label>
          <textarea
            name='orgDescriptions'
            value={userForm.orgDescriptions}
            onChange={handleChange}
            id='orgDescriptions'
            className='register-form-input-text'
          ></textarea>
        </div>
        <div className='form-button-container'>
          <Link to='/auth/login' className='form-link'>
            Cancel
          </Link>
          <button className='form-button'>Send Registration</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
