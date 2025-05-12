import React from 'react';

export default function Home() {
    return (
        <div>
            <h1>Page d&apos;accueil</h1>
            <ul>    
                <li><a href="/blog">Voir le blog</a></li>
                <li><a href="/page/page-d-exemple">Voir la page exemple</a></li>
                <li><a href="/page/ceci-est-une-page">Voir la page ceci-est-une-page</a></li>
            </ul>
        </div>
    );
}