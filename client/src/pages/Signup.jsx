import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Signup = () => {
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
                className="z-10 relative top-3 left-4 bg-white p-1 text-gray-700"
              />
              <TextInput type="text" id="username" />
            </div>
            <div>
              <Label
                value="Your email"
                className="z-10 relative top-3 left-4 bg-white p-1 text-gray-700"
              />
              <TextInput type="text" id="email" />
            </div>
            <div>
              <Label
                value="Your password"
                className="z-10 relative top-3 left-4 bg-white p-1 text-gray-700"
              />
              <TextInput type="text" id="password" />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              className="mt-4"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
