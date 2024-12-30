import React from 'react'; 
import data from '../restApi.json'; // Import the JSON data
import "../styles/WhoAreWe.css";

const WhoAreWe = () => {
  // Ensure data and data.who_we_are are defined before rendering
  const whoWeAreData = data?.who_we_are;

  if (!whoWeAreData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className='who_are_we' id='who_are_we'>
        <div className="container">
          <div className="text_banner">
            {
              // Use slice and map only if data exists
              whoWeAreData.slice(0, 2).map(element => (
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{ fontWeight: "300" }}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
          <div className="image_banner">
            <img className='gradient_bg' src="/img/center.svg" alt="gradientBg" />
            <img src="/img/whoweare.png" alt="food" />
          </div>
          <div className="text_banner">
            {
              whoWeAreData.slice(2).map(element => (
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{ fontWeight: "300" }}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section> 
    </>
  );
}

export default WhoAreWe;