import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import logo from '../../assets/logopc.png'
import backgroundimg from '../../assets/fundo.jpg'
import tv from '../../assets/tv.png'
import mobile from '../../assets/mobile-0819.jpg'
import devices from '../../assets/device-pile.png'

import './styles.css'

export default function Welcome(){
    return(
            <section className="comeToNetflix">
                <div className="enterOn">
                    <img src={logo} alt='Netflix' />
                    <Link className='log' to="/browse">Entrar</Link>
                </div>
                <div className="backgroundNetflix">
                 <img src={backgroundimg} alt='Netflix' />
                 <div className="firstMonth">
                    <h2>Sua próxima história, agora.</h2>
                    <p>ASSISTA ONDE QUISER. CANCELE QUANDO QUISER</p>
                    <Link className="month">Assista o mês grátis</Link>
                 </div>
                </div>
                <section className='aboutUs'>
                    <div className="informations">
                        <h1 className='titleLeft'>Aproveite na TV</h1>
                        <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros aparelhos.</p>
                        <img className='tv' src={tv} alt='TV' />
                    </div>
                    <div className="informations">
                        <h1 className="title2">Baixe séries para assistir offline.</h1>
                        <p className="text2">Salve seus títulos favoritos e sempre tenha algo para assistir.</p>
                        <img className='mobile' src={mobile} alt='mobile' />
                    </div>
                    <div className="informations">
                        <h1 className='titleLeft'>Assista quando quiser.</h1>
                        <p>Assista no celular, tablet, smart TV ou notebook sem pagar a mais por isso.</p>
                        <img className='devices' src={devices} alt='TV' />
                    </div>
                </section>
             
            </section>
           
    )
}