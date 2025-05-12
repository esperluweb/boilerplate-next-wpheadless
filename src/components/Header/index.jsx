"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function fetchPages() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?_fields=id,slug,title,menu_order`);
        const pages = await response.json();
        
        // Filtrer les pages avec un menu_order > 0 et les trier
        const sortedPages = pages
          .filter(page => page.menu_order > 0)
          .sort((a, b) => a.menu_order - b.menu_order)
          .map(page => ({
            href: `/page/${page.slug}`,
            label: page.title.rendered
          }));

        setMenuItems(sortedPages);
      } catch (error) {
        console.error('Erreur lors de la récupération des pages:', error);
      }
    }

    fetchPages();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="logo">Mon Site</Link>
          </div>

          {/* Menu desktop */}
          <div className="nav-links">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Bouton hamburger mobile */}
          <div className="mobile-menu-button">
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <span className="sr-only">{isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
