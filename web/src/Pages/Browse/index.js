import React,{useState,useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'


import logo from '../../assets/logo.png'

import './browse.css'

import movies from '../../services/movies.js'

const mainMovie = movies[0].itens[7]
const items = movies[0].itens





export default function Browse(){

    const[x, setX] = useState(0)
    const goLeft = () =>{
       x === 0 ? setX(x) : setX(x + 110)
    }
    const goRight = () =>{
        console.log(x)
       x=== -110*(items.length-5)?setX(x):setX(x-110)
    }

    return(
    <section className="watchInNetflix">
        <div className="menu">
            <div className="contents">
            <img src={logo} alt="Netflix" className="netflix"/>
        </div>
        <div className="biggerBanner">
             <img src={mainMovie.banner} alt="Main" className="mainBanner"/>
             <div className="logoContainer">
             <img src={mainMovie.logo} alt="EndGame" className="movieLogotype"/>
             </div>
             <p>{mainMovie.synopsis}</p>
             <Link className='toWatch'>Assistir</Link>
             <Link className='toInformations'>Mais informações</Link> 
        </div>
        <section className="watchList">
        <div className="row-header">
                 <p>{movies[0].title}</p>
        </div>
            <ol className='container' >
            <MdKeyboardArrowLeft className="toLeft" onClick={goLeft}/>
                {items.map(item=>(
                    <li className='item' style={{transform:`translate(${x}%)`}}>
                     <div className='slideContainer' >
                        <img className='imgContainer' src={item.miniature}/>
                    </div>
                </li>
                ))}
                <MdKeyboardArrowRight className="toRight" onClick={goRight} />
            </ol>
        </section>
        </div>

    </section>
    )
}