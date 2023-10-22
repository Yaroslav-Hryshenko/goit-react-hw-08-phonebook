import { Box, Button, Container, TextField } from '@mui/material';
import css from './FormLogin.module.css';
import RandomImg from 'components/RandomImg';

const FormLogin = ({ submitForm }) => {
  return (
    <Container>
      <div className={css.container}>
        <RandomImg />
        <form onSubmit={submitForm}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& .MuiTextField-root': { width: '35ch' },
            }}
          >
            <TextField
              label={'Email'}
              type="email"
              name="emailUser"
              required
              helperText="Please enter your email"
              autoComplete="username"
              margin="normal"
              className={css.input}
            />
            <TextField
              label={'Password'}
              type="password"
              name="passwordUser"
              required
              helperText="Please enter your password"
              autoComplete="username"
              margin="normal"
              className={css.input}
            />

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </div>
    </Container>
  );
};

export default FormLogin;
