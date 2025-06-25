import { useState } from 'react';

function Sidebar({ teams, onSelect }) {
  const [hovered, setHovered] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedTeams = filteredTeams.reduce((acc, team) => {
    const letter = team.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(team);
    return acc;
  }, {});

  const sortedLetters = Object.keys(groupedTeams).sort();

  return (
    <div
      className="sidebar-glass"
      style={{
        width: '360px',
        height: '100vh',
        backgroundColor: '#000',
        padding: '50px 1.5rem 2rem',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Esports_vector_logo_sample.svg"
          alt="Esports Locator Logo"
          style={{ width: '100px', height: '100px', objectFit: 'contain' }}
        />
      </div>

      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{
          color: '#fff',
          fontSize: '1.8rem',
          marginBottom: '0.25rem'
        }}>Esports Locator</h1>
        <p style={{
          color: '#888',
          fontSize: '0.95rem',
          letterSpacing: '0.5px',
          margin: 0
        }}>Connected by the Game</p>
      </div>

      {/* Search Bar */}
      <div style={{
        marginBottom: '50px',
        position: 'relative',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        paddingBottom: '0.5rem'
      }}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#ccc',
            fontSize: '1rem'
          }}
        />
      </div>

      {/* Scrollable Team List */}
      <div
        style={{
          flexGrow: 1,
          overflowY: 'auto',
          paddingRight: '0.5rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
        className="hide-scrollbar"
      >
        {sortedLetters.map(letter => (
          <div key={letter} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{
              color: '#777',
              fontSize: '0.9rem',
              margin: '1rem 0 0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>{letter}</h3>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {groupedTeams[letter].map((team, index) => (
                <li
                  key={team.id}
                  onClick={() => onSelect(team)}
                  onMouseEnter={() => setHovered(`${letter}-${index}`)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.6rem 0.2rem',
                    color: hovered === `${letter}-${index}` ? '#fff' : '#aaa',
                    backgroundColor: hovered === `${letter}-${index}` ? '#111' : 'transparent',
                    cursor: 'pointer',
                    transition: '0.2s ease',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    gap: '10px'
                  }}
                >
                  <img
                    src={team.logo}
                    alt={team.name}
                    style={{
                      width: '28px',
                      height: '28px',
                      objectFit: 'contain',
                      borderRadius: '4px',
                      backgroundColor: '#111'
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.95rem',
                      whiteSpace: 'nowrap',
                      fontWeight: 'bold'
                    }}
                  >
                    {team.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
