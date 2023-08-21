import { Container, Typography, Box, Button, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { logout } from '../services/authService';

export default function HomePage() {

  const handleLogout = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await logout();
    } catch (error: any) {
      const { message } = JSON.parse(error.response.request.response)
      console.log(message)
    }
  };

  return (
    <Container maxWidth="md" style={{ overflow: 'hidden' }}>
      <AppBar position="fixed" style={{ width: '100vw' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Mon Site
          </Typography>
          <div>
            <Button onClick={handleLogout} color="inherit" style={{ marginRight: '16px' }}>
              Déconnexion
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 64px)" flexDirection="column">
        <Typography variant="h4" align="center" gutterBottom>
          Bienvenue sur mon site !
        </Typography>
        <Typography variant="body1" align="center">
          Bravo vous avez réussi à vous connecter au site de manière sécurisée.
        </Typography>
      </Box>
    </Container>
  )
}
