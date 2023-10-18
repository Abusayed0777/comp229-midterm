// src/SignUpUser.js
import React from 'react';
import { useForm } from 'react-hook-form';

function SignUpUser() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    console.log(data);
  };

  return (
    <div>
      <h2>Sign Up User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input {...register("firstName", { required: true })} />
          {errors.firstName && <p>This field is required</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input {...register("lastName", { required: true })} />
          {errors.lastName && <p>This field is required</p>}
        </div>
        <div>
          <label>Username:</label>
          <input {...register("userName", { required: true })} />
          {errors.userName && <p>This field is required</p>}
        </div>
        <div>
          <label>Email:</label>
          <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <p>This field is required</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" {...register("password", { required: true })} />
          {errors.password && <p>This field is required</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" {...register("confirmPassword", { required: true, validate: value => value === watch('password') })} />
          {errors.confirmPassword && <p>Passwords do not match</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpUser;
