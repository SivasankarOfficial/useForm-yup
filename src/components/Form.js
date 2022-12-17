import { useForm } from "react-hook-form";
import './Form.css'
import * as yup  from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'


const Form = () => {

  const schema = yup.object().shape({
    FirstName:yup.string().required('First name is required').min(4,'Name length should be at least minimum 4 characters').max(10,'Name length should be maximum 10 characters'),

    LastName:yup.string().required('Lastname is required').min(4,'Name length should be at least minimum 4 characters').max(10,'Name length should be maximum 10 characters'),

    email:yup.string().email('Please Enter valid Email').required("Enter Email"),

    age:yup.number("age must be an number").required('age is required').positive("age must be positive number"),

    password:yup.string().required("Password Reqiured").min(4, "Password length should be at least 4 characters").max(10, "Password must be more than 8 characters"),

    Confirmpassword:yup.string().required("Password Reqiured").oneOf([yup.ref("password"),"Passwords do not match"]).min(4, "Password length should be at least 4 characters").max(10, "Password must be more than 8 characters"),

    checkbox:yup.bool().oneOf([true],"you must Accept the terms and conditions")
  })
    const { register, handleSubmit,formState:{errors} } = useForm(

      {resolver:yupResolver(schema)}
      
      );
      console.log(errors);
const handleRegistration = (data) => {
        console.log(data);
    }
 

return(
    <div className="formvalidation">
  <form className="form" onSubmit={handleSubmit(handleRegistration)}>
        <input type="text" name="FirstName" className="input" placeholder="FirstName" {...register('FirstName')} />
        <p>{ errors.FirstName?.message}</p>
        
        <input type="text" name="LastName" className="input"  placeholder="LastName" {...register('LastName')} />
        <p>{ errors.LastName?.message}</p>
    
        <input type="email" name="fname" className="input"  placeholder="Email" {...register('email')} />
        <p>{ errors.email?.message}</p>
        
        <input   placeholder="Age" className="input"  name="age"  {...register('age')} />
        <p>{ errors.age?.message}</p>
      
        <input  type='password' className="input"  placeholder="password" name="password" {...register('password',)}  />
        <p>{ errors.password?.message}</p>
        
        <input  type='Confirmpassword' className="input"  placeholder="ConfirmPassword" {...register('Confirmpassword')} />
        <p>{ errors.Confirmpassword?.message}</p>
  
        <input  type='checkbox'  {...register('checkbox')}/>
        <label className="label">I agree to the Terms and Conditions</label>
        <p>{ errors.checkbox?.message}</p>
  
        <button type='submit' id='submit' value='submit'>submit</button>
  </form>
 
    
  
  </div>
  )
  }
  export default Form;
