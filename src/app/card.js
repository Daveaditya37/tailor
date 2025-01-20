import './globals.css';
function Card(){
    return(
        <>
        <div className="card-container">
        <div className="card">
          <img src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/offers1.png" alt="Card Image 3"/>
          <div className="card-content">
          <div id="head">
          <h1>1</h1>
          </div>
            <h3>Tailor Sweing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            
          </div>
        </div>
        <div className="card">
          <img src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/offers2.png" alt="Card Image 3"/>
          <div className="card-content">
            <div id="head">
          <h1>2</h1>
          </div>
            <h3>Measuremnet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            
          </div>
        </div>
        <div className="card">
          <img src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/offers3.png" alt="Card Image 3"/>
          <div className="card-content">
          <div id="head">
          <h1>3</h1>
          </div>
            <h3>Ready-made</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            
          </div>
        </div>
      </div>
      </>
    );
}

export default Card;