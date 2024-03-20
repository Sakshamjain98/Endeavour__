
import "./Login.css"
function LoginForm() {
  return (
    <section className="">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box">
        <div className="square" style={{'--i': 0}}></div>
        <div className="square" style={{'--i': 1}}></div>
        <div className="square" style={{'--i': 2}}></div>
        <div className="square" style={{'--i': 3}}></div>
        <div className="square" style={{'--i': 4}}></div>
        <div className="container">
          <div className="form">
            <h2>Login Form</h2>
            <form>
              <div className="inputBox">
                <input type="text" placeholder="E-Mail" />
              </div>
              <div className="inputBox">
                <input type="text" placeholder="Password" />
              </div>
              <div className="inputBox">
                <input type="submit" value="Login" />
              </div>
              {/* <p className="forget">Forget Password ? <a href="#">Click Here</a></p> */}
              <p className="forget">Don`t have an account ? <a href="#">Sign up</a></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;

