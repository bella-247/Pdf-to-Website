// src/pages/Auth/Signin.tsx
import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../components/Auth/AuthForm";
import SocialLogin from "../../components/Auth/SocialLogin";

export default function Signin() {
  return (
    <AuthForm
      preCard={
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">Sign in to your account</h2>
          <p className="mt-2 text-sm text-[#111827]/60">
            Or {""}
            <Link to="/signup" className="text-[#6C63FF] hover:underline">create a new account</Link>
          </p>
        </div>
      }
      submitLabel="Sign in"
      fields={[
        { name: 'email', label: 'Email address', type: 'email', autoComplete: 'email', placeholder: 'you@example.com' },
        { name: 'password', label: 'Password', type: 'password', autoComplete: 'current-password', placeholder: '••••••••' },
      ]}
      footer={<SocialLogin showGithub={false} />}
    />
  );
}
