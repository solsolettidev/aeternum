import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm"
        >
          <Link to="/" className="flex items-center gap-2 mb-12 group">
            <Camera className="w-5 h-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-serif text-xl tracking-wide text-foreground">Mémoira</span>
          </Link>

          <h1 className="font-serif text-3xl text-foreground mb-2">
            {isSignUp ? "Create your space" : "Welcome back"}
          </h1>
          <p className="font-sans text-sm text-muted-foreground mb-8">
            {isSignUp
              ? "Begin curating your personal archive"
              : "Step into your gallery of memories"}
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {isSignUp && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <label className="text-xs font-sans text-muted-foreground mb-1.5 block">Full name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </motion.div>
            )}

            <div>
              <label className="text-xs font-sans text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-sans text-muted-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {isSignUp && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <label className="text-xs font-sans text-muted-foreground mb-1.5 block">Username</label>
                <input
                  type="text"
                  placeholder="@your.username"
                  className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-sans text-sm py-3.5 rounded-full hover:opacity-90 transition-opacity duration-300 mt-2"
            >
              {isSignUp ? "Create account" : "Sign in"}
            </button>
          </form>

          {!isSignUp && (
            <p className="text-xs font-sans text-muted-foreground text-center mt-4">
              <button className="text-primary hover:text-rose-deep transition-colors">Forgot password?</button>
            </p>
          )}

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs font-sans text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <button className="w-full flex items-center justify-center gap-2 border border-border rounded-full py-3 text-sm font-sans text-foreground hover:bg-muted/50 transition-colors duration-300">
            Continue with Google
          </button>

          <p className="text-sm font-sans text-muted-foreground text-center mt-8">
            {isSignUp ? "Already have an account?" : "New to Mémoira?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:text-rose-deep transition-colors"
            >
              {isSignUp ? "Sign in" : "Create one"}
            </button>
          </p>
        </motion.div>
      </div>

      {/* Right - Visual */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src="/src/assets/gallery-5.jpg"
            alt="Soft petals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/30" />
        </motion.div>
        <div className="absolute bottom-12 left-12 right-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-serif text-2xl text-primary-foreground leading-relaxed"
          >
            "The best thing about photographs is that they don't change, even when the people in them do."
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Login;
