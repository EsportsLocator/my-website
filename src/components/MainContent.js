function MainContent({ team }) {
    return (
      <div
        className="main-glass"
        style={{
          flexGrow: 1,
          margin: 0,
          padding: 0,
          backgroundColor: '#000',
          overflowY: 'auto',
          minHeight: '100vh'
        }}
      >
        {/* Full-width Banner */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '300px',
            overflow: 'hidden'
          }}
        >
          <img
            src={team.banner}
            alt={`${team.name} Banner`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(0,123,255,0.3), rgba(255,0,255,0.2))',
              pointerEvents: 'none'
            }}
          />
        </div>
  
        {/* Main Content with spacing */}
        <div
          style={{
            paddingLeft: '300px',
            paddingRight: '4rem',
            paddingBottom: '4rem',
            maxWidth: '100%'
          }}
        >
          {/* Logo + Name */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              marginTop: '-50px',
              paddingBottom: '50px'
            }}
          >
            <img
              src={team.logo}
              alt="Logo"
              style={{
                width: '120px',
                height: '120px',
                objectFit: 'contain',
                borderRadius: '10px',
                backgroundColor: '#111',
                border: '2px solid #222',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            />
            <h2 style={{ color: 'white', fontSize: '2rem', margin: 0 }}>{team.name}</h2>
          </div>
  
          <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem 2rem',
  margin: '1.5rem 0',
  fontSize: '0.95rem',
  color: '#ccc'
}}>
  <div><strong style={{ color: '#fff' }}>Profile</strong></div>
  <div>Location: <span style={{ color: '#eee' }}>{team.location}</span></div>
  <div>Estd: <span style={{ color: '#eee' }}>{team.founded}</span></div>
  <div>Size: <span style={{ color: '#eee' }}>{team.size}</span></div>
  <div>
    <a
      href={team.contact}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#7fbfff', textDecoration: 'none' }}
    >
      Contact
    </a>
  </div>
</div>

          {/* Bio */}
          <div style={{ maxWidth: '750px' }}>
            <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Bio</h3>
            <p style={{ color: '#bbb', lineHeight: 1.7 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec varius velit. Sed
              sit amet dolor et eros vehicula elementum. Vivamus ut elit vitae nisl malesuada
              volutpat. In iaculis, ex ac eleifend hendrerit. Nullam vel neque vitae ipsum fermentum
              volutpat. Vestibulum in ligula suscipit, dapibus elit sit amet, posuere ex.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default MainContent;
  