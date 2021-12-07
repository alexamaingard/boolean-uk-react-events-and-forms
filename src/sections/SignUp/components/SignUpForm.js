import { useState } from "react"

const userDataFormFormat = {
  firstName: '',
  email: '',
  password: '',
  terms: false
};

const SignUpForm = () => {
  const [signUpForm, setSignUpForm] = useState(userDataFormFormat);
  
  const handleSignUpChange = (event) => {
    let { name, type, value, checked } = event.target;
    type === 'checkbox' && (value = checked);
    setSignUpForm({ ...signUpForm, [name]: value });
    
    console.log('change:', signUpForm);
  };

  const handleSignUpSubmit = event => {
    event.preventDefault();
    setSignUpForm(signUpForm);
    
    console.log('submit:', signUpForm);
  }

  return (
    <section className="shadow pad-lg">
      <h2>Sign Up</h2>
      <form className="form-stack" onSubmit={handleSignUpSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          value={signUpForm.firstName}
          onChange={handleSignUpChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={signUpForm.email} 
          onChange={handleSignUpChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={signUpForm.password} 
          onChange={handleSignUpChange}
          required
        />
        <div>
          <input 
            type="checkbox" 
            id="terms" 
            name="terms" 
            onChange={handleSignUpChange}
          />
          <label htmlFor="terms">I accept Terms and Conditons</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </section>
  )
}

export default SignUpForm