import { Button } from "flowbite-react";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className=" flex-1 flex flex-col justify-center">
        <h2 className="text-2xl">Visit these resources to see my portfolio</h2>{" "}
        <p className="text-gray=500 my-2">
          Explore these links to view my portfolio and other projects
        </p>
        <Button gradientDuoTone="purpleToPink">
          <a
            href="https://hamzshaa.github.io/Personal-Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-tl-xl rounded-bl-none"
          >
            Visit my portfolio
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://www.shutterstock.com/image-photo/digital-technology-software-development-concept-600nw-2111828198.jpg" />
      </div>
    </div>
  );
};

export default CallToAction;
