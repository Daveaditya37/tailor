import "./globals.css";
import { TfiInstagram } from "react-icons/tfi";
export default function Social() {
  return (
    <>
    <div className="social1">
      <div className="social">
        <h1>Follow us on instagram</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
        </div>

        <div className="flex-container">
          <div className="image-container">
            <img
              src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/instra1.png"
              alt="Image 1"
              className="main-image"
            />
            <div className="overlay">
              <i className="fab fa-instagram"><TfiInstagram/></i>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/instra2.png"
              alt="Image 2"
              className="main-image"
            />
            <div className="overlay">
              <i className="fab fa-instagram"><TfiInstagram/></i>
            </div>
          </div>
        </div>
        </div>
      
    </>
  );
}
