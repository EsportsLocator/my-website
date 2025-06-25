//import './App.css';
//import Sidebar from './components/Sidebar';
//import MainContent from './components/MainContent';
//import Footer from './components/Footer';
//import teams from './data/teams';
//import { useState } from 'react';



//function App() {
  //const [selectedTeam, setSelectedTeam] = useState(teams[0]);

  //return (
    //<div className="App">
      //<div className="dashboard">
        //<Sidebar teams={teams} onSelect={setSelectedTeam} />
        //<div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          //<MainContent team={selectedTeam} />
          //<Footer />
        //</div>
      //</div>
    //</div>
  //);
//}

//export default App;

//import './App.css';
//import Landing from './components/Landing';

//function App() {
  //return <Landing />;
//}

//export default App;


// App.js
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Landing from './components/Landing';
import teams from './data/teams';
import { useState } from 'react';

const LAUNCH_DATE = new Date('2025-07-05T03:30:00Z'); // IST = UTC+5:30


function App() {
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);
  const now = new Date();

  const isBeforeLaunch = now < LAUNCH_DATE;

  if (isBeforeLaunch) {
    return <Landing />;
  }

  return (
    <div className="App">
      <div className="dashboard">
        <Sidebar teams={teams} onSelect={setSelectedTeam} />
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <MainContent team={selectedTeam} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
// Note: The LAUNCH_DATE variable should be set to the actual launch date of your application.
// The Landing component will be displayed until the current date is past the launch date.
// After the launch date, the main dashboard with Sidebar, MainContent, and Footer will be displayed.
// Make sure to adjust the LAUNCH_DATE variable to your desired launch date in the future.
// This code assumes that the Landing component is designed to handle the pre-launch state of your application.
// The Sidebar, MainContent, and Footer components will be used for the post-launch state.
// Ensure that the teams data is correctly imported and structured for the Sidebar and MainContent components to function properly.
// The useState hook is used to manage the selected team state, allowing users to switch between different teams in the dashboard.
// The current date is compared with the launch date to determine which component to render.
// The application is structured to provide a seamless transition from the pre-launch landing page to the post-launch dashboard.
// Make sure to test the application to ensure that the date comparison works correctly and that the components render as expected based on the current date.
// This setup allows for a clean and organized code structure, separating concerns between the landing page and the main dashboard.   