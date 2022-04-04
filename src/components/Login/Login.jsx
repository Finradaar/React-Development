import { React, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
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


import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';


import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router';
import { height, width } from '@mui/system';


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

    const [buttonvalue, setButtonValue] = useState(true)

    const [helperText, setHelperText] = useState({
        userName: "Required*",
        password: "Required*"
    })

    const [values, setValues] = useState({
        userName: '',
        password: '',
        showPassword: false,
    });

    const navigate = useNavigate()

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        if ((values.userName != '') && (values.password != '')) {
            setButtonValue(false)
        }
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const [snackbarState, setSnackbarState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        match: true
    });

    const { vertical, horizontal, open } = snackbarState;

    // const [apiResponse] = useFetch("https://jsonplaceholder.typicode.com/todos");
    //     console.log(`api response --> ${JSON.stringify(apiResponse)}`);

    const handleClose = () => {
        setSnackbarState({ ...snackbarState, open: false });
    };

    // useEffect(() => {
    //     const url = "http://analytics.finradar.in/services/api/auth/authenticate";
    //     const headers = {
    //         'X-Authorization': "Bearer undefined"
    //     }
    //     const body = JSON.stringify({
    //         userName: 'prakash',
    //         password: 'Welcome@123',
    //     });

    //     console.log("url ", url)
    //     console.log("headers ", headers)
    //     console.log("body ", body)

    //     fetch(url,
    //         {
    //             method: 'POST',
    //             headers: new Headers({
    //                 'X-Authorization': "Bearer undefined",
    //                 "Content-Type": "application/json"
    //             }),
    //             mode: 'no-cors',
    //             body: body
    //         })
    //         .then(response => {
    //             console.log(" response --. ", response)
    //         })
    //         .then(data => {
    //             console.log('Success:', data);
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         })
    //         .finally(() => {
    //             console.log("end...")
    //         })
    // }, [])

    const HandleSubmit = (event, newState) => {

        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        const body = {
            userName: 'prakash',
            password: 'Welcome@123',
        }
        console.log(`body:  ${JSON.stringify(body)}`);

        if (values.userName != body.userName && values.password != body.password) {
            setSnackbarState({
                open: true,
                vertical: 'top',
                horizontal: 'center',
                match: true
            });

        }
        else {
            setSnackbarState({
                match: false
            })
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
                    console.log("end...", snackbarState.match)
                    if (!snackbarState.match) { navigate("/stocks"); }
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
                        bgcolor: '#424242',

                    }}
                >

                    <Avatar sx={{ m: 3, bgcolor: 'green' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color="white">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1, width: '80%' }}>
                        {/* <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="User Name"
                            name="userName"
                            autoComplete="user-name"
                            helperText={helperText.userName}
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
                            helperText={helperText.password}
                        /> */}

                        <FormControl sx={{ m: 1, }}
                            fullWidth
                            variant="outlined">
                            <InputLabel fullWidth>User Name*</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-username"
                                type='TextField'
                                value={values.userName}
                                onChange={handleChange('userName')}
                                fullWidth
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                        >
                                            <PersonIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="userName"
                            />
                            {values.userName === '' ?
                                <Typography sx={{ color: "#ef5350" }}>{helperText.userName}</Typography> : <>{' '} </>}
                        </FormControl>



                        <FormControl sx={{ m: 1 }}
                            fullWidth
                            variant="outlined"
                        >
                            <InputLabel htmlFor="outlined-adornment-password" fullWidth>Password*</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                fullWidth
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                            {values.password === '' ? <Typography sx={{ color: '#ef5350' }}>{helperText.password}</Typography> : <>{' '}</>}
                        </FormControl>

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3, mb: 2, float: 'right',
                                width: "auto",
                                alignItems: 'center',
                                alignSelf: 'left'
                            }}
                            onClick={HandleSubmit}
                            disabled={buttonvalue}
                        >
                            Sign In
                        </Button>
                        <Typography sx={{ color: '#ef5350' }}>{buttonvalue}</Typography>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </ThemeProvider>
    );
}