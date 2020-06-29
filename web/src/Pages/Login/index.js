import React from 'react'
import './styles.css'
import {Link, useHistory} from 'react-router-dom'
import fundo from '../../assets/fundo.png'
import logo from '../../assets/logo.png'

export default function Login(){
    return(
        <section className='container'>
              <img className='logo'src={logo} alt='Netflix' />
            <div className="backLogin">
               <img src={fundo} />
            </div>
            <div className="boxLogin">
            <div className="main-login">
                    <form>
                        <h1>Entrar</h1>
                        <input placeholder='Email'type="email" className="email"/>
                        <input placeholder='password' type="password" className="password" />

                        <Link className='login' to='/browse'>Entrar</Link>
                    
                    </form>
            </div>
            </div>
        </section>
    )
}