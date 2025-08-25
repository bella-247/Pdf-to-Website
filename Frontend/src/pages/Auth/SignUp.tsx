// src/pages/Auth/Signup.tsx
import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../components/Auth/AuthForm";
import SocialLogin from "../../components/Auth/SocialLogin";

export default function Signup() {
  return (
    <AuthForm
      preCard={
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">Create Your Account</h2>
          <p className="mt-2 text-sm text-[#111827]/60">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#6C63FF] hover:underline">Sign in</Link>
          </p>
        </div>
      }
      submitLabel="Sign Up"
      fields={[
        { name: 'name', label: 'Full Name', autoComplete: 'name', placeholder: 'Your full name' },
        { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', placeholder: 'you@example.com' },
        { name: 'password', label: 'Password', type: 'password', autoComplete: 'new-password', placeholder: '••••••••' },
        { name: 'confirmPassword', label: 'Confirm Password', type: 'password', autoComplete: 'new-password', placeholder: '••••••••' },
      ]}
      footer={<SocialLogin />}
    />
  );
}
