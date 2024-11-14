import { FaFacebook, FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
      <div>
        <h2 className="font-semibold mb-3">Find Us</h2>
        <div className="join flex *:bg-base-100 join-vertical">
          <button className="btn join-item justify-start"><FaFacebook></FaFacebook>Facebook</button>
          
          <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Facebook</button>
          
          <button className="btn join-item justify-start"><FaFacebook></FaFacebook>Facebook</button>
          
        </div>
      </div>
    );
};

export default FindUs;