import React from 'react'
import FirstSection from './components/FirstSection'
import BreakLine from './components/BreakLine';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import CardSection from './components/Card/CardSection';
import FifthSection from './components/FifthSection';
import QuestionsSection from './components/QuestionsSection.js';
// import SignInForm from './components/Sigin.js';
 
 
 

function App() {
  return (
    <div >
      <FirstSection />
      <CardSection />
      <BreakLine />
      <SecondSection />
      <BreakLine />
      <ThirdSection />
      <BreakLine />
      <FourthSection />
      <BreakLine />
      <FifthSection />
      <BreakLine />
      <QuestionsSection />
      <BreakLine />
       {/* < SignInForm/> */}
      
    </div>
  );
}

export default App;