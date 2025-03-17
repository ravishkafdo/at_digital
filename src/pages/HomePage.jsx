import React from 'react'
import desktop from '../assets/imageOne.jpg'
import magnification from '../assets/imageTwo.jpg'
import './pageStyling/HomePage.css'
import FAQ from '../components/FAQ/FAQ'
//Inter Font imported here
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>


const HomePage = () => {
  return (
  <>

    <div className="SectionOne">
     <div className="mainText">
      <h1>We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</h1>
      <button className='mainButton'> GET FREE CONSULTATION</button>
     </div>
    </div>


    <div className='containerOne'>

      <img className="desktopImg" src={desktop}/>
      <div className="containerOneText">
        <h1 className='ContainerTextHeading'>Web & Mobile App Development</h1>
        <br/>
        <p className='sampleText'>Your web and Mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online</p>
        <br/>
        <button className='learnMore-btn'>LEARN MORE</button>
      </div>

    </div>



    <div className='containerTwo'>

      <div className="containerTwoText">
        <h1 className='ContainerTextHeading'>Digital Strategy Consulting</h1>
        <br/>
        <p className='sampleText'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
        <br/>
        <button className='learnMore-btn'>LEARN MORE</button>
      </div>   
         <img className="desktopImg" src={magnification}/>

    </div>


    <FAQ/>
  </>
  )
}

export default HomePage