import axios from "axios";
import React, { useState } from "react";
import apiUrl from "../../../redux/services/api";
import authActions from "../../../redux/actions/auth";
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
const { fetchSignup } = authActions;
import API from "../../API/API";

// import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

export default function SignupPage({ setState, toast }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const router = useRouter();
    const { ref } = router.query;
    const [refferal, setRefferal] = useState(ref);

    const notify = () => toast.success("Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyError = () => toast.error("Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const register = (e) => {
        e.preventDefault();

        fetchSignup(
            {
                username: username,
                password: password,
            },
            "/register"
        ).then((x) => console.log(x));
    };

    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright ©investit.store'}

                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
    const defaultTheme = createTheme();

    const handleSubmit = (event) => {
        event.preventDefault();

        API.fetchPost(
            {
                username: username,
                password: password,
                refferal_code: ref || refferal
            },
            "/register"
        ).then((x) => {
            x.data == "User Registered Successfully" ? (toast.success(x.data, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }), setTimeout(() => {
                setState(4);
                setTimeout(() => {
                    setState(1);
                }, 1000);
            }, 0)) : toast.error(x.data, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

        });
    };
    console.log({ ref, router }, "<== check kro isay")

    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/* <img className="bg-primary rounded-md" src="images/smart(1).png" height={100} width={100} /> */}
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Username"
                                        label="Username"
                                        name="Username"
                                        autoComplete="Username"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Grid>
                                {ref == null ? <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="Refferal"
                                        label="Refferal ID"
                                        type="Refferal"
                                        id="Refferal"
                                        autoComplete="new-Refferal"
                                        onChange={(e) => setRefferal(e.target.value)}
                                    />
                                </Grid> :
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            disabled
                                            placeholder={`${ref}`}
                                        />
                                    </Grid>
                                }

                            </Grid>

                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="bg-primary w-full p-3 mb-2 mt-2 white-texting hover:bg-primary hover:white-texting hover:font-bold rounded-lg"
                            >
                                Sign Up
                            </button>
                            <Grid container justifyContent="flex">
                                <Grid item>
                                    <div className="flex sm:gap-4 gap-2 text-xs sm:text-base" >
                                        Already have an account?.. <p onClick={() => setState(1)} className="bg-bgprimary text-primary px-2 hover:font-bold cursor-pointer">Sign In</p>
                                    </div>

                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>

        </div>
    );
}
