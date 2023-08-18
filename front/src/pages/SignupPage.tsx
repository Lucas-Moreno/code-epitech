import { Button, Container, TextField, Typography } from '@mui/material';


export default function SignupPage() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '100px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Créer un compte
      </Typography>
      <form>
        <TextField
          label="Nom d'utilisateur"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
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
          S'inscrire
        </Button>
      </form>
    </Container>
  )
}
