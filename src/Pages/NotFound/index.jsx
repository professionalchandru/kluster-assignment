import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <img
        src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg"
        alt="NotFound"
      />
      <Link to="/" className="text-xl text-primary underline font-medium">
        Go Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
