
function AdPanel() {
    return (
      <div className="adpanel-glass" style={{
        width: '200px',
        padding: '1rem',
        margin: '1rem',
        color: '#aaa'
      }}>
        <h4 style={{ color: '#ff8c00' }}>Sponsored</h4>
        <div style={{
          marginTop: '1rem',
          background: '#2a2a2a',
          padding: '1rem',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p>Ad Space</p>
          <small>Your esports ad here</small>
        </div>
      </div>
    );
  }
  
  export default AdPanel;
  