import React, { useState, useEffect } from 'react';

function ChakraPhases({ userData }) {
  const [showChakraData, setShowChakraData] = useState(false);

  // Add delay before displaying the chakra phases
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChakraData(true);
    }, 3000); // 3 seconds delay

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);


  function getChakraSuffix(chakraNumber) {
    if (chakraNumber === 1) return `${chakraNumber}st`;
    if (chakraNumber === 2) return `${chakraNumber}nd`;
    if (chakraNumber === 3) return `${chakraNumber}rd`;
    return `${chakraNumber}th`;
  }



  return (
    <section className="chakra-phases">
      <h2>Your Personal Chakra Phases:</h2>
      <img
        src={'https://storage.mlcdn.com/account_image/1013434/aoFfhrlSt6aMo2SPKDxEuWuajxBcVRrpN0bzu0rI.png'}
        className="chakra-image-main"
        alt="Main Chakra Image"
      />
      <p>To recap our last email;<br /> <u className='bold'>Your Marga Dharma Number is {userData.marganumber}</u>- <br />Ruled by {userData.rulechakra}</p>
      <p>Below are 3 Chakra energies that influence the 3 grand divisions of your life.</p>

      {/* Only show the chakra phases after the delay */}
      {showChakraData ? (
        <div className="chakra-grid">
          <div className="chakra-phase">
            <h3 className='chakra-head'>
              0-27 Years Old - {getChakraSuffix(userData.first_chakra)} Chakra - {userData.chakra_title_0_27}
            </h3>
            <div className='chakra-sec'>
              <img
                src={userData.chakra_image_0_27}
                alt={`Chakra Image ${userData.chakra_title_0_27}`}
                className="chakra-image"
              />
              <div>
                <p>{userData.chakra_description_0_27}</p>
              </div>
            </div>
          </div>

          {/* Second Chakra Phase */}
          <div className="chakra-phase">
            <h3 className='chakra-head'>
              27-54 Years Old - {getChakraSuffix(userData.second_chakra)} Chakra - {userData.chakra_title_27_54}
            </h3>
            <div className='chakra-sec'>
              <img
                src={userData.chakra_image_27_54}
                alt={`Chakra Image ${userData.chakra_title_27_54}`}
                className="chakra-image"
              />
              <div>
                <p>{userData.chakra_description_27_54}</p>
              </div>
            </div>
          </div>

          {/* Third Chakra Phase */}
          <div className="chakra-phase">
            <h3 className='chakra-head'>
              54-81+ Years Old - {getChakraSuffix(userData.third_chakra)} Chakra - {userData.chakra_title_54_81}
            </h3>
            <div className='chakra-sec'>
              <img
                src={userData.chakra_image_54_81}
                alt={`Chakra Image ${userData.chakra_title_54_81}`}
                className="chakra-image"
              />
              <div>
                <p>{userData.chakra_description_54_81}</p>
              </div>
            </div>
          </div>
          <div>
            {/* <hr style={{ border: '8px dotted #727272', width: '20%', margin: '20px auto' }} /> */}
            <p  style={{ fontWeight: 900 }}> -------</p>
            <p style={{ fontWeight: 400, color: '#000000' }}>
              It is worth noting that these are very brief snapshots of each life phase and chakra energy!
            </p>
            <p  style={{ fontWeight: 900 }}> -------</p>
          </div>


        </div>
      ) : (
        <p>Loading chakra phases...</p> // Message to display during the wait
      )}
    </section>
  );
}

export default ChakraPhases;
