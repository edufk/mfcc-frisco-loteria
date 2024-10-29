
import { useEffect, useState, useRef } from "react";

function Jugar() {
    const numTarjetas = 54;
    const path = './imagenes/';
    const [tarjetasMostradas, setTarjetasMostradas] = useState([]);
    const [jugando, setJugando] = useState(false);
    const jugandoRef = useRef(jugando)

    // function handleUserKeyPress(event) {
    //     console.log(`key press: ${event.keyCode}, jugando: ${jugandoRef.current}`)
    //     if (!jugandoRef.current) {
    //         return;
    //     }
    //     if (event.keyCode === 39) {
    //         const n = siguienteTarjeta();
    //         setTarjetasMostradas(prev => [n, ...prev]);
    //     }
    // }

    // useEffect(() => {
    //     jugandoRef.current = jugando
    // }, [jugando])

    // useEffect(()=> {
    //     window.addEventListener("keydown", handleUserKeyPress);
    //     return () => {
    //         window.removeEventListener("keydown", handleUserKeyPress);
    //     };
    // }, [])

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    function siguienteTarjeta() {
        console.log('Obteniendo siguiente tarjeta');
        let numero = getRandomInt(numTarjetas);
        console.log(tarjetasMostradas);
        console.log(tarjetasMostradas, 'numero: ', numero, 'includes: ', tarjetasMostradas.includes(numero))
        if (tarjetasMostradas.includes(numero)) {
            if (tarjetasMostradas.length < numTarjetas) {
                numero = siguienteTarjeta();
            }
        } else {
            setTarjetasMostradas(prev => [numero, ...prev]);
        }
    }

    function aJugar(ev) {
        ev.preventDefault();
        setTarjetasMostradas([]);
        setJugando(true);
        siguienteTarjeta();
    }

    function siguiente(ev) {
        ev.preventDefault();
        siguienteTarjeta();
    }

    function loteria(ev) {
        ev.preventDefault();
        setJugando(false);
    }

    function handleKeyDown(ev) {
        ev.preventDefault();
        siguienteTarjeta();
    }

    let tarjeta;
    let tarjetasAnteriores = [];
    if (tarjetasMostradas.length) {
        tarjetasMostradas.forEach((t, i) => {
            if (i === 0) {
                tarjeta = <div className="tarjeta"><img src={`${path + tarjetasMostradas[i]}.png`} /></div>;
            } else {
                tarjetasAnteriores.push(<img src={`${path + tarjetasMostradas[i]}.png`} key={`imagenes-${i}`} />)
            }
        })
    }

    let links = [];
    if (!jugando) {
        links.push(<li key={`link-a-jugar`}><a href="#" onClick={aJugar}>Iniciar</a></li>);
    } else {
        links.push(<li key={`link-siguiente`}><a href="#" onClick={siguiente}>Siguiente</a></li>);
        links.push(<li key={`link-loteria`}><a href="#" onClick={loteria}>Loteria</a></li>);
    }

    return (
        <div className="jugar" onKeyDown={handleKeyDown} tabIndex="0">
            <header>
                <h1>Lotería MFCC Frisco</h1>
                <img src="./logo.png"/>
            </header>
            {tarjeta}
            <div className="tarjetasAnteriores">{tarjetasAnteriores}</div>
            <div className="acciones">
                <ul>
                    {links}
                </ul>
            </div>
        </div>
    );
}

export default Jugar;
