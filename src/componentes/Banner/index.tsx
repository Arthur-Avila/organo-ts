import './Banner.css'
import React from 'react';

interface BannerProps {
    fonteImagem: string
    fonteAlternativa: string
}

const Banner = ({fonteAlternativa, fonteImagem}: BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={fonteImagem} alt={fonteAlternativa}/>
        </header>
    )
}

export default Banner;