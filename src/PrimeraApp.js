import PropTypes from 'prop-types';

// Functional Components

const PrimeraApp = ( {saludo, subtitulo } ) => {

   return (
      <>
         <h1> { saludo } </h1>
         {/* <pre> { JSON.stringify(saludo) } </pre> */}
         <p>{subtitulo}</p>
      </>
   )   

}

PrimeraApp.propTypes = {
   saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
   subtitulo: 'Soy un subtitulo loco'
}

export default PrimeraApp;