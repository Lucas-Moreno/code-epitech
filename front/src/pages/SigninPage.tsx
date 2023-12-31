import React, { useState } from 'react';
import { Container, Typography, Button, TextField, AlertColor } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../services/authService';
import AlertMessage from '../components/Alertmessage';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SigninPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await signin(formData);
      setAlertSeverity('success');
      setAlertMessage('Connexion réussie !');
      setShowAlert(true);
      if (data.token) navigate('/');
    } catch (error: any) {
      const { message } = JSON.parse(error.response.request.response)
      setAlertSeverity('error');
      setAlertMessage(message);
      setShowAlert(true);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '100px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Connexion
      </Typography>
      <form>
        <TextField
          label="Adresse email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          name="email"
          onChange={handleChange}
        />
        <TextField
          label="Mot de passe"
          variant="outlined"
          fullWidth
          margin="normal"
          type={showPassword ? 'text' : 'password'}
          name="password"
          required
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '16px' }}
          onClick={handleSignin}
        >
          Se connecter
        </Button>
      </form>
      <Typography align="center" style={{ marginTop: '16px' }}>
        Pas encore de compte ?{' '}
        <Link to="/signup">
          S'inscrire
        </Link>
      </Typography>
      <AlertMessage
        open={showAlert}
        onClose={() => setShowAlert(false)}
        message={alertMessage}
        severity={alertSeverity}
      />
    </Container>
  )
}
