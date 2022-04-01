import { React, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, Snackbar } from '@mui/material';
import useFetch from '../ServiceCall/useFetch';
import axios from 'axios';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});
export default function Login() {

    const [pageSize, setPageSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    const [snackbarState, setSnackbarState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = snackbarState;

    // const [apiResponse] = useFetch("https://jsonplaceholder.typicode.com/todos");
    //     console.log(`api response --> ${JSON.stringify(apiResponse)}`);

    const handleClose = () => {
        setSnackbarState({ ...snackbarState, open: false });
    };

    useEffect(()=>{
        const url = "http://analytics.finradar.in/services/api/auth/authenticate";
        const headers = {
            'X-Authorization': "Bearer undefined"
        }
        const body = JSON.stringify({
            userName: 'prakash',
            password: 'Welcome@123',
        });

        console.log("url ", url)
        console.log("headers ", headers)
        console.log("body ", body)

        fetch(url,
                {
                    method: 'POST', 
                    headers: new Headers({
                        'X-Authorization': "Bearer undefined",
                        "Content-Type": "application/json"
                    }),
                    mode: 'no-cors', 
                    body: body
                })
                .then(response => {
                    console.log(" response --. ",response)
                })
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
                .finally(() => {
                    console.log("end...")
                })
    },[])

    const HandleSubmit = (event, newState) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        const body = {
            userName: 'prakash',
            password: 'Welcome@123',
        }
        console.log(`body:  ${JSON.stringify(body)}`);

        if (body.userName === "") {
            setSnackbarState({
                open: true,
                vertical: 'top',
                horizontal: 'center',
            });
        }


        const headers = [
            ["X-Authorization", "Bearer undefined"]
        ]
        //Calling api
        {
            console.log("api call start...", body, headers);
            // await axios.post('http://analytics.finradar.in/services/api/auth/authenticate',
            //     body,
            //     headers
            // )

            fetch('http://analytics.finradar.in/services/api/auth/authenticate',
                {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    withCredentials: true,
                    credentials: 'include',
                    headers: new Headers({
                        'X-Authorization': "Bearer undefined"
                    }),
                    mode: 'no-cors', // no-cors, *cors, same-origin
                    body: JSON.stringify(body)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
                .finally(() => {
                    console.log("end...")
                })

        }

    };

    function resize() {
        const height = window.innerHeight
        const width = window.innerWidth;

        setPageSize({
            ...pageSize,
            height: height,
            width: width
        })
    }

    window.onresize = resize;

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="xs" sx={{
                height: pageSize.height - 200,
                width: '100%',
            }}>


                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    key={vertical + horizontal}
                >
                    <Alert onClose={handleClose} severity="error" sx={{
                        width: '100%',
                        color: "red",
                        bgcolor: "white"
                    }}>
                        Bad Credentials!
                    </Alert>
                </Snackbar>

                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="User Name"
                            name="userName"
                            autoComplete="userName"
                            autoFocus

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button

                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={HandleSubmit}
                        >
                            Sign In
                        </Button>

                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </ThemeProvider>
    );
}