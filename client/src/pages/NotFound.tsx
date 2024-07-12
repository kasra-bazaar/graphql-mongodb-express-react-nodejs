import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className=" text-danger"  size={100}/>
      <h4>404</h4>
      <p> Sorry this page doesnt Exist</p>
      <Link className=" btn btn-primary" to="/"> Go Back</Link>
    </div>
  );
}
