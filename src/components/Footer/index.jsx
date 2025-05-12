import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          Développé par{' '}
          <a href="https://esperluweb.com" target="_blank" rel="noopener noreferrer">
            EsperluWeb
          </a>
          {' · '}
          <a href="https://github.com/esperluweb" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {};
