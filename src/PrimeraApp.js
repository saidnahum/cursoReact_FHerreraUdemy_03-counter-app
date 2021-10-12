// Functional Components
const PrimeraApp = () => {

   const saludo = 'Hola mundo';
   // const saludo = 333;
   // const saludo = true; No imprime booleanos
   // const saludo = [1,2,3,4,5, 6];
   // const saludo = {nombre: 'Said', edad: 32}; No se puede imprimir asi el objeto

   return (
      <>
         <h1> { saludo } </h1>
         {/* <pre> { JSON.stringify(saludo) } </pre> */}
         <p>Párrafo</p>
      </>
   )   

}

export default PrimeraApp;