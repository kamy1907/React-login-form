import './App.css'

export const Login = () => {
  return (
    <div className='container'>
        <div className='wrapper'>
            <form >
                <h1>Login</h1>
                <div className='inputBox'>
                    <input type='text' placeholder='Username' required/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className='inputBox'>
                    <input type='password' placeholder='Password' required/>
                    <i className='bx bxs-lock-alt'></i> 
                </div>
            <div className='remember-forgot'>
                <label><input type='checkbox'/>Remember me</label>
               <a href='http://' >Forgot Password?</a>
            </div>
            <button type='submit' className='btn'>Login</button>
            <div className='reg-link'>
                <p>Dont have an account?<a href="http://">Register</a></p>
            </div>
            </form>
        </div>
    </div>
  )
}
