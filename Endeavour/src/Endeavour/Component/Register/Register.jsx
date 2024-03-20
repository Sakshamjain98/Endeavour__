import { useState } from 'react'; // Import useState hook if needed

// Import CSS styles if necessary
import './Register.css';

const SignInSignUpForm = () => {
    // Use state if needed to manage the sign-in/sign-up toggling
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="container" id="container">
            <div className={`form-container ${signIn ? "sign-in-container" : "sign-up-container"}`}>
                <form action="#">
                    <h1>{signIn ? "Sign in" : "Create Account"}</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>{signIn ? "or use your account" : "or use your email for registration"}</span>
                    <div className="infield">
                        <input type="text" placeholder="Name" />
                        <label></label>
                    </div>
                    <div className="infield">
                        <input type="email" placeholder="Email" name="email" />
                        <label></label>
                    </div>
                    <div className="infield">
                        <input type="password" placeholder="Password" />
                        <label></label>
                    </div>
                    {signIn && <a href="#" className="forgot">Forgot your password?</a>}
                    <button>{signIn ? "Sign In" : "Sign Up"}</button>
                </form>
            </div>
            <div className="overlay-container" id="overlayCon">
                <div className="overlay">
                    <div className={`overlay-panel ${signIn ? "overlay-left" : "overlay-right"}`}>
                        {signIn ? (
                            <>
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button onClick={() => setSignIn(false)}>Sign Up</button>
                            </>
                        ) : (
                            <>
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button onClick={() => setSignIn(true)}>Sign In</button>
                            </>
                        )}
                    </div>
                </div>
                <button id="overlayBtn"></button>
            </div>
        </div>
    );
}

export default SignInSignUpForm;
