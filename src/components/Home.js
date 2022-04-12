import React from 'react';
// import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
// import GroupIcon from '@mui/icons-material/Group';
import '../App.css'

const homeComponentStyle = {
    textAlign : 'center',
    paddingTop : '4rem'
}

// current data
const todayDate = new Date().toLocaleDateString();

// current Time
const currentTime = new Date().toLocaleTimeString();

const Home = () => {
  return (
    <>
      <div class="home_component" style={homeComponentStyle}> {/* inline styling */}
         <div className="userIcon">
            {/* <GroupIcon /> */}
         </div>
         <h1>Welcome</h1> 
         <p><span className="date_span">{todayDate}</span> | <span className="time_span">{currentTime}</span></p>
         <div className="coutUsers">
             Total Users : <span>100</span>
         </div>
      </div>        
    </>
  )
}

export default Home;
