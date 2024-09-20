import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import ChakraPhases from './components/ChakraPhases';
import Footer from './components/Footer';
import SectionComponent from './components/section';
import './App.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function App() {
  const [userData, setUserData] = useState({
    marganumber: '',
    first_chakra: '',
    chakra_title_0_27: '',
    chakra_description_0_27: '',
    chakra_image_0_27: '',
    second_chakra: '',
    chakra_title_27_54: '',
    chakra_description_27_54: '',
    chakra_image_27_54: '',
    third_chakra: '',
    chakra_title_54_81: '',
    chakra_description_54_81: '',
    chakra_image_54_81: '',
    name: '',
    rulechakra:''
  });

  const query = useQuery(); // Assuming you are using something like `useLocation` or similar

  useEffect(() => {
    // Only update userData if the query parameters have actually changed
    const updatedUserData = {};
    let hasChanges = false;

    // Loop through the query parameters and build an updated state object
    for (const [key, value] of query.entries()) {
      const newValue = value || '';
      if (userData[key] !== newValue) {
        updatedUserData[key] = newValue;
        hasChanges = true; // Mark that a change has occurred
      }
    }

    // If there are changes, update the state
    if (hasChanges) {
      setUserData(prevData => ({ ...prevData, ...updatedUserData }));
    }
    
  }, [query, userData]); // Add userData as dependency to compare against query changes

  
  return (
    <div className="App">
      <Header userData={userData}/>
      <div>
        <SectionComponent
          imageSrc="https://storage.mlcdn.com/account_image/1013434/wdtb04jVMOxZicf1KTkYVGU2Jvsi19o7hMkn3XqM.png"
          title="Chaturashrama: The Grand Divisions of Human Life"
          text={`<b>In Hindu culture, life is divided into four stages, known as Āśrama in Sanskrit.</b><br /><br /> We are each influenced by one chakra energy that becomes more open within us in each stage, shaping our lives and personalities as we grow. <br /><br /><b>The fourth stage is our Marga Dharma, or life path number, which becomes activated when we step onto our spiritual path or begin to realize our life's purpose.</b><br /><br /> Understanding the chakra energies that shape these stages helps you align with the natural rhythms of your life.`}
        />
      </div>    
      <section className="chakra-section">
        <ChakraPhases userData={userData} />
      </section>
      <div>
        <SectionComponent
          imageSrc="https://storage.mlcdn.com/account_image/1013434/DSTGSv7sxSLwl2CYyYYBwCL9q719tiNqG55oYgak.png"
          title="Integrating Your Marga Dharma"
          text={`<b>Combining your Marga Dharma number with these three chakra phases provides a comprehensive understanding of your life's direction.</b><br/><br/> By aligning with these energies, you can navigate through key life stages with greater clarity and purpose, making informed decisions that resonate with your personal energy flow.<br/><br/><b> You will gain a profound understanding of your energy at any moment in your life - past, present, and future.</b><br/><br/> The more you align with your energy field, the more your life becomes a natural flow, filled with synchronicities.`}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
