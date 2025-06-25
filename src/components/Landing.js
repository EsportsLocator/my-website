import { useEffect, useState } from 'react';

const LAUNCH_DATE = new Date('2025-07-10T00:00:00'); // set your target launch date

function getTimeRemaining() {
  const now = new Date();
  const total = LAUNCH_DATE - now;

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}

function FlipUnit({ value, label }) {
  return (
    <div style={styles.unit}>
      <div style={styles.flipCard}>
        <span style={styles.digit}>{String(value).padStart(2, '0')}</span>
      </div>
      <span style={styles.label}>{label}</span>
    </div>
  );
}

function Landing() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining();
      if (remaining.total <= 0) {
        clearInterval(timer);
      }
      setTimeLeft(remaining);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img
          src="/logo21.png"
          alt="Esports Locator Logo"
          style={styles.logo}
          onError={(e) => {
            e.target.onerror = null;
            e.target.replaceWith(Object.assign(document.createElement('div'), {
              textContent: 'EL',
              style: 'width: 200px; height: 200px; background: #111; color: white; display: flex; align-items: center; justify-content: center; font-size: 48px; font-weight: bold; border-radius: 8px;',
            }));
          }}
        />
        <h1 style={styles.title}>Esports Locator</h1>
        <p style={styles.slogan}>Connected by the Game</p>
      </div>

      <div style={styles.comingSoon}>COMING SOON! Rendering the Site</div>

      <div style={styles.countdown}>
        <FlipUnit value={timeLeft.days} label="Days" />
        <FlipUnit value={timeLeft.hours} label="Hours" />
        <FlipUnit value={timeLeft.minutes} label="Minutes" />
        <FlipUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    paddingTop: '300px',
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  logoContainer: {
    marginBottom: '3rem',
  },
  logo: {
    width: '200px',
    height: '200px',
    objectFit: 'contain',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
  slogan: {
    fontSize: '1.2rem',
    color: '#aaa',
    marginBottom: '3rem',
  },
  comingSoon: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  countdown: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    fontSize: '2rem',
  },
  unit: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flipCard: {
    backgroundColor: '#111',
    border: '2px solid #333',
    padding: '20px 30px',
    borderRadius: '10px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 15px rgba(255,255,255,0.1)',
    minWidth: '80px',
  },
  digit: {
    display: 'inline-block',
  },
  label: {
    fontSize: '0.9rem',
    marginTop: '0.5rem',
    color: '#bbb',
  },
};

export default Landing;
