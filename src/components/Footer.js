import { useState } from 'react';

function FAQ({ question, answer }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        marginBottom: '1.5rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ color: '#fff', fontWeight: 600 }}>{question}</div>
      {hovered && (
        <div style={{ color: '#fff', marginTop: '0.5rem' }}>{answer}</div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer style={{
      background: '#000',
      padding: '3rem',
      color: '#fff',
      borderTop: '1px solid #333',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }}>
      {/* FAQs Section */}
      <div style={{ flex: 1, minWidth: '250px' }}>
        <h3 style={{ marginBottom: '1rem', color: 'gold' }}>FAQs</h3>
        <FAQ
          question="Why join Esports Locator?"
          answer="We provide verified listings, competitive insights, and exposure for rising teams."
        />
        <FAQ
          question="What can users do here?"
          answer="Users can discover top Indian orgs, stay updated, and connect with teams."
        />
      </div>

      {/* CTA Section */}
      <div style={{
        flex: 1,
        minWidth: '250px',
        textAlign: 'center',
        padding: '1rem 2rem'
      }}>
        <h3 style={{ color: 'gold', marginBottom: '1rem' }}>Get Listed</h3>
        <p style={{ color: '#fff', marginBottom: '1rem' }}>
          Are you a gaming org? Submit your profile to be featured on India's most curated esports platform.
        </p>
        <a
          href="#"
          style={{
            color: '#fff',
            backgroundColor: '#222',
            padding: '0.5rem 1rem',
            border: '1px solid #444',
            borderRadius: '4px',
            textDecoration: 'none'
          }}
        >
          Submit Your Org
        </a>
      </div>

      {/* Links Section */}
      <div style={{
        flex: 1,
        minWidth: '250px',
        paddingLeft: '2rem'
      }}>
        <h3 style={{ marginBottom: '1rem', color: 'gold' }}>Connect</h3>
        <p><a href="https://discord.gg/yourdiscord" style={linkStyle}>Discord</a></p>
        <p><a href="https://instagram.com/yourhandle" style={linkStyle}>Instagram</a></p>
        <p><a href="mailto:contact@esportslocator.in" style={linkStyle}>Email Us</a></p>
      </div>
    </footer>
  );
}

// Pure white links
const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
};

export default Footer;
