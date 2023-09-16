import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

const Login = (props) => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        dispatch(loginWithEmailPassword(data, props.history, props.loadCart))
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    useEffect(() => {

    }, [])

    return (
        <main className='main'>
            <Breadcrumb current='Login' />
            <div className='login-page pb-8 pb-md-12 pt-lg-17 pb-lg-17'>
                <div className='container'>
                    <div className='form-box'>
                        <div className='form-tab'>
                            <h1 className='text-center'>Login</h1>
                            <div className='tab-content'>
                                <div
                                    className='tab-pane fade show active'
                                    id='otp_login'
                                    role='tabpanel'
                                    aria-labelledby='otp_login-tab'
                                >

                                    <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
                                        <div className='form-group'>
                                            <label htmlFor='phone'>
                                                Email <span className='text-danger'>*</span>
                                            </label>
                                            <input
                                                type='email'
                                                className='form-control'
                                                id='email'
                                                required={true}
                                                placeholder='Enter your email'
                                                {...register("email", {
                                                    required: "Email Address is required",
                                                    pattern: {
                                                        value:
                                                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: "Please enter a valid email",
                                                    },
                                                })}
                                                aria-invalid={errors.email ? "true" : "false"}
                                            />
                                            {errors.email && (
                                                <p className='text-danger mb-0' role='alert'>
                                                    {errors.email?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='password'>
                                                Password <span className='text-danger'>*</span>
                                            </label>
                                            <input
                                                type='password'
                                                className='form-control'
                                                id='password'
                                                required={true}
                                                placeholder='Enter your password'
                                                {...register("password", {
                                                    required: "Password is required",
                                                    minLength: {
                                                        value: 6,
                                                        message: "Min 6 Characters",
                                                    },
                                                })}
                                                aria-invalid={errors.password ? "true" : "false"}
                                            />
                                            {errors.password && (
                                                <p className='text-danger mb-0' role='alert'>
                                                    {errors.password?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className='form-footer mb-0'>
                                            <button type='submit' className='btn py-2 btn-block btn-default'>
                                                <span>SUBMIT</span>
                                                <i className='icon-long-arrow-right' />
                                            </button>
                                        </div>

                                        <p
                                            className='text-right hi-color'
                                            style={{ textDecoration: "underline", cursor: "pointer" }}
                                            onClick={() => handleOpenModal()}
                                        >
                                            Forgot password?
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login