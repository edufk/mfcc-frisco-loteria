
function Tablas() {

    const numTarjetas = 54;
    const path = './imagenes/tablas-small/';
    const numTablas = 100;
    const tarjetasPorTabla = 16;
  
    function getRandomInt(max) {
      return Math.floor(Math.random() * max) + 1;
    }
  
    function generarTablas() {
      let tablas = [];
      for (let i = 0; i < numTablas; i++) {
        let tarjetas = [];
  
        for (let j = 0; j < tarjetasPorTabla; j++) {
          const numero = getRandomInt(numTarjetas);
          if (tarjetas.includes(numero)) {
            j--;
          } else {
            tarjetas.push(numero);
          }
        }
        tablas.push(tarjetas);
      }
  
      return tablas.map((tabla, i) => {
        let tarjetas = tabla.map((tarjeta, j) => {
          return <div className='tarjeta' key={`tabla-${i}_tarjeta-${j}`}><img src={`${path}${tarjeta}.png`}/></div>
        });
        return <div className='tabla' key={`tabla-${i}`}>
          <h1>TABLA NO.{i + 57}</h1>
          <div className='tarjetas'>{tarjetas}</div>
        </div>
      })
    }
  
    return (
      <div className="tablas">
        {generarTablas()}
      </div>
    );
  }
  
  export default Tablas;