import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const Signup = () => {
  const [inputText, setInputText] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputText({ ...inputText, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    if (!inputText.username || !inputText.email || !inputText.password) {
      return setError("Please fill in all fields");
    }

    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputText),
      });

      const data = await res.json();
      if (data.success === false) {
        return setError(data.message);
      }
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Trident
            </span>{" "}
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-2">
            <div>
              <Label
                value="Your username"
                className="z-10 relative top-2.5 left-4 bg-white p-1 text-gray-500 rounded-md dark:bg-[rgba(20,27,45,0.3)]"
              />
              <TextInput
                type="text"
                id="username"
                onChange={handleChange}
                value={inputText.username}
                color="gray"
              />
            </div>
            <div>
              <Label
                value="Your email"
                className="z-10 relative top-2.5 left-4 bg-white p-1 text-gray-500  rounded-md dark:bg-[rgba(20,27,45,0.3)]"
              />
              <TextInput
                type="email"
                id="email"
                onChange={handleChange}
                value={inputText.email}
                color="gray"
              />
            </div>
            <div>
              <Label
                value="Your password"
                className="z-10 relative top-2.5 left-4 bg-white p-1 text-gray-500  rounded-md dark:bg-[rgba(20,27,45,0.3)]"
              />
              <TextInput
                type="password"
                id="password"
                onChange={handleChange}
                value={inputText.password}
                color="gray"
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              className="mt-4"
              onClick={handleSubmitButton}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in">Sign In</Link>
          </div>
          {error && (
            <Alert className="mt-5" color="failure">
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
