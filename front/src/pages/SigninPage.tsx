import { Button, Container, TextField, Typography } from '@mui/material';


export default function SigninPage() {
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
        />
        <TextField
          label="Mot de passe"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Se connecter
        </Button>
      </form>
    </Container>
  )
}
