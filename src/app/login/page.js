
"use client";

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      router.push("/");
    } catch (err) {
      const errors = {
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/invalid-credential": "Incorrect email or password.",
        "auth/user-not-found": "Incorrect email or password.",
        "auth/wrong-password": "Incorrect email or password.",
        "auth/too-many-requests":
          "Too many attempts. Please try again later.",
        "auth/network-request-failed":
          "Network error. Please check your connection.",
        "auth/user-disabled":
          "This account has been disabled.",
      };

      setError(
        errors[err.code] ||
          "Unable to sign in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setError("");
    setMessage("");

    if (!email.trim()) {
      setError("Enter your email address first.");
      return;
    }

    setResetLoading(true);

    try {
      await sendPasswordResetEmail(auth, email.trim());
      setMessage(
        "If an account exists for this email, a password reset email will be sent."
      );
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError(
          "Unable to send the reset email. Please try again."
        );
      }
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-visual">
        <div className="visual-overlay" />

        <div className="visual-brand">
          <span className="visual-logo">L.</span>
          <span className="visual-brand-name">LUMORA.</span>
        </div>

        <div className="visual-copy">
          <span className="eyebrow">YOUR SKINCARE RITUAL</span>
          <h1>
            A little care.
            <br />
            A lasting glow.
          </h1>
          <p>
            Thoughtful skincare for your everyday glow.
            Discover the beauty of taking time for yourself.
          </p>
        </div>

        <span className="visual-caption">
          SKINCARE STUDIO · EST. WITH CARE
        </span>
      </section>

      <section className="login-panel">
        <div className="login-form-wrap">
          <Link href="/" className="back-link">
            ← Back to home
          </Link>

          <div className="mobile-brand">LUMORA.</div>

          <span className="form-eyebrow">YOUR PERSONAL SPACE</span>
          <h2>Welcome back</h2>
          <p className="form-description">
            Sign in to continue your skincare journey.
          </p>

          {error && (
            <div className="notice error-notice" role="alert">
              {error}
            </div>
          )}

          {message && (
            <div className="notice success-notice" role="status">
              {message}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>

              <div className="password-wrap">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-option">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-link"
                onClick={handleForgotPassword}
                disabled={resetLoading}
              >
                {resetLoading ? "Sending..." : "Forgot password?"}
              </button>
            </div>

            <button
              type="submit"
              className="sign-in-button"
              disabled={loading}
            >
              {loading ? "SIGNING IN..." : "SIGN IN"}
              {!loading && <span>↗</span>}
            </button>
          </form>

          <div className="signup-prompt">
            New to LUMORA?
            <Link href="/signup"> Create an account</Link>
          </div>

          <div className="form-footer">
            THOUGHTFUL SKINCARE. EVERYDAY GLOW.
          </div>
        </div>
      </section>

      <style jsx global>{`
        .login-page {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 690px;
          background: #fcfaf6;
          color: #39352f;
        }

        .login-visual {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 690px;
          padding: 42px 8%;
          overflow: hidden;
          background-color: #d8c6ad;
          background-image:
            linear-gradient(
              180deg,
              rgba(45, 36, 26, 0.12),
              rgba(45, 36, 26, 0.1) 35%,
              rgba(45, 36, 26, 0.66)
            ),
            url("https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1400&q=85");
          background-size: cover;
          background-position: center;
          color: #fffaf2;
        }

        .visual-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            rgba(46, 37, 27, 0.08),
            transparent
          );
        }

        .visual-brand,
        .visual-copy,
        .visual-caption {
          position: relative;
          z-index: 1;
        }

        .visual-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .visual-logo {
          display: grid;
          place-items: center;
          width: 43px;
          height: 43px;
          border: 1px solid rgba(255, 250, 242, 0.8);
          border-radius: 50%;
          font-family: Georgia, serif;
          font-size: 25px;
        }

        .visual-brand-name {
          font-family: Georgia, serif;
          font-size: 18px;
          letter-spacing: 3px;
        }

        .visual-copy {
          max-width: 430px;
          margin: auto 0;
          padding: 60px 0;
        }

        .eyebrow,
        .form-eyebrow {
          font-size: 10px;
          letter-spacing: 2.4px;
          line-height: 1.8;
        }

        .visual-copy h1 {
          margin: 22px 0 18px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 4.2vw, 61px);
          font-weight: 400;
          line-height: 1.13;
        }

        .visual-copy p {
          max-width: 340px;
          font-size: 14px;
          line-height: 1.9;
          color: #fff6e9;
        }

        .visual-caption {
          font-size: 9px;
          letter-spacing: 2px;
        }

        .login-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 56px 10%;
        }

        .login-form-wrap {
          width: 100%;
          max-width: 410px;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 64px;
          color: #796c5c;
          font-size: 12px;
          text-decoration: none;
        }

        .mobile-brand {
          display: none;
        }

        .form-eyebrow {
          color: #967b59;
        }

        .login-form-wrap h2 {
          margin: 15px 0 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 3vw, 43px);
          font-weight: 400;
          letter-spacing: -0.8px;
        }

        .form-description {
          margin: 0 0 34px;
          color: #84796b;
          font-size: 13px;
          line-height: 1.8;
        }

        .field {
          margin-bottom: 22px;
        }

        .field > label {
          display: block;
          margin-bottom: 9px;
          font-size: 12px;
          font-weight: 500;
        }

        .field input {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
          height: 49px;
          padding: 0 14px;
          border: 1px solid #e0d7c9;
          border-radius: 2px;
          outline: none;
          background: #fffefa;
          color: #39352f;
          font-family: inherit;
          font-size: 13px;
          transition: border-color 0.2s;
        }

        .field input:focus {
          border-color: #8b7455;
        }

        .field input::placeholder {
          color: #b0a69a;
        }

        .password-wrap {
          position: relative;
        }

        .password-wrap input {
          padding-right: 68px;
        }

        .show-password {
          position: absolute;
          top: 50%;
          right: 13px;
          transform: translateY(-50%);
          padding: 6px 0;
          border: 0;
          background: transparent;
          color: #796c5c;
          cursor: pointer;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .form-options {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin: 2px 0 28px;
        }

        .remember-option {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #756b5f;
          font-size: 11px;
        }

        .remember-option input {
          accent-color: #514331;
        }

        .forgot-link {
          padding: 0;
          border: 0;
          background: transparent;
          color: #806746;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
        }

        .forgot-link:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .sign-in-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-height: 51px;
          padding: 0 19px;
          border: 1px solid #514331;
          border-radius: 2px;
          background: #514331;
          color: #fffaf2;
          cursor: pointer;
          font-family: inherit;
          font-size: 10px;
          letter-spacing: 1.8px;
          transition: background 0.2s;
        }

        .sign-in-button:hover {
          background: #79644d;
        }

        .sign-in-button:disabled {
          opacity: 0.7;
          cursor: wait;
        }

        .notice {
          margin-bottom: 20px;
          padding: 12px;
          border-radius: 2px;
          font-size: 12px;
          line-height: 1.6;
        }

        .error-notice {
          border: 1px solid #e7c5be;
          background: #fff5f3;
          color: #a33427;
        }

        .success-notice {
          border: 1px solid #cbd9c5;
          background: #f4f8f0;
          color: #42613b;
        }

        .signup-prompt {
          margin-top: 26px;
          text-align: center;
          color: #84796b;
          font-size: 12px;
        }

        .signup-prompt a {
          color: #765b3d;
          font-weight: 600;
          text-decoration: none;
        }

        .form-footer {
          margin-top: 65px;
          padding-top: 20px;
          border-top: 1px solid #e9e2d7;
          color: #a19688;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-align: center;
        }

        @media (max-width: 760px) {
          .login-page {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .login-visual {
            min-height: 300px;
            padding: 25px 7%;
            background-position: center 55%;
          }

          .visual-logo {
            width: 35px;
            height: 35px;
            font-size: 21px;
          }

          .visual-brand-name {
            font-size: 15px;
          }

          .visual-copy {
            padding: 38px 0 25px;
          }

          .visual-copy h1 {
            margin: 12px 0;
            font-size: 37px;
          }

          .visual-copy p {
            max-width: 310px;
            font-size: 12px;
          }

          .visual-caption {
            font-size: 8px;
          }

          .login-panel {
            padding: 35px 7% 45px;
          }

          .back-link {
            margin-bottom: 30px;
          }

          .form-footer {
            margin-top: 40px;
          }
        }

        @media (max-width: 380px) {
          .form-options {
            align-items: flex-start;
          }

          .remember-option,
          .forgot-link {
            font-size: 10px;
          }
        }
      `}</style>
    </main>
  );
}
