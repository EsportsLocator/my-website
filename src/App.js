import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import teams from './data/teams';
import { useState } from 'react';



function App() {
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);

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
