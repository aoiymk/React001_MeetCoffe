import React from 'react';
// import logo from './logo.svg';
import './App.css';




class Nav extends React.Component{

  render(){
    return(
      <nav className="nav oscuro">
      <ul>
        <li className="icono"><a href="#inicio"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><path d="M11.8 26l-2.2 2.3c-.5-2.9-.7-7.5 2.2-11.2V26zm-.4 4.1c2.7.5 7.2.7 10.6-2.3h-8.5l-2.1 2.3zm5.3-16.2c-.8.2-1.7.5-2.4.9v8.5l2.4-2.6v-6.8zm2.5-.3v4.6l4-4.2c-1.1-.3-2.5-.5-4-.4zM16 25.2h8.1c.4-.8.7-1.7.9-2.6h-6.6L16 25.2zm28-6.1V25c0 4.3-3.3 7.8-7.4 7.8h-1.8v2.9c0 4.6-3.6 8.3-7.9 8.3h-19C3.6 44 0 40.3 0 35.7V0h34.8v11.4h1.8c4.1 0 7.4 3.5 7.4 7.7zm-16.2.9c.1-2.6-.4-5-.8-6.4-.2-.9-.4-1.4-.4-1.4s-.5-.2-1.4-.4c-1.4-.4-3.6-.9-6.1-.8-.8 0-1.7.1-2.5.3-.8.2-1.6.4-2.4.7-.9.4-1.7.8-2.5 1.5-.6.5-1.1 1-1.6 1.6-4.5 5.4-3.4 12.5-2.6 15.5.2.9.4 1.4.4 1.4s.5.2 1.4.4c2.8.8 9.6 2 14.7-2.7.6-.5 1.1-1.1 1.5-1.7.6-.8 1-1.7 1.4-2.6.3-.8.5-1.7.7-2.6.1-1.1.2-1.9.2-2.8zm13.2-.9c0-2.6-2-4.6-4.4-4.6h-1.8v15.1h1.8c2.4 0 4.4-2.1 4.4-4.6v-5.9zM21 20h4.4c0-1.6-.1-3-.4-4.2L21 20z"/></svg></a> </li>
        <li><a href="#ubicacion">Ubicaciación</a></li>
        <li><a href="#proxima-charla">Próxima Charla </a></li>
        <li><a href="#eventos">Eventos anteriores</a></li>
        <li><a href="#contacto">Contacto</a> </li>
      </ul>
      </nav>
    
    );

  }

}


function HeroSection(){
return(
  <header id="inicio" className="hero-section">
      <h1>Descubre lo último en tecnología bebiendo café</h1>
      <h2>Charlas,eventos y simposios sobre tecnología</h2>
  </header>
);

}


function Ubicacion(){
    return(
        <section id="ubicacion">
        <img src={require('./img/we-work.jpg')}/>
        <h2>¿Donde nos juntamos?</h2>
        <p>Todos los martes y viernes, de 19:00 hrs a 22:00 hrs en We Work,
        calle Baker 133, Providencia, Santiago.</p>
        </section>
    );
  }




function ProximaCharla(){
  return(

    <section id="proxima-charla" className="sweet-brown">
    <div className="centrado">
      <img src= {require('./img/speaker.jpg')} alt="speaker" className="charla-speaker"/>
      <div className="charla-texto">
          <h2>Próxima charla</h2>
          <h3>Big Data para Noobs</h3>
          <h4>Rafaela Valdéz</h4>
          <h5>Data Scientist, PhD Theoretical Physics, Carneige Mellon University.</h5>
          <p>En esta charla revisaremos las técnicas y tecnologías que
      hacen que sea económico hacer frente a los datos a una
      escala extrema.</p>
      </div>
    </div>
  </section>


  );
}


function Article(props){
return(
  <article className="evento">
    <img src={require("./img/"+props.image_name+".jpg")}/>
    <h3>{props.title}></h3>
  </article>
);


}

function Eventos(){
  return(

  <section id="eventos">
    <h2>Eventos anteriores</h2>
    <Article title="Simposio VeganDB" image_name="simposio-vegan"/>
    <Article title="Machine learning 101" image_name="machine-learning"/>
    <Article title="Scrum sin scream" image_name="scrum-sin-scream"/>
  
  </section>


  );
}

function Footer(){
return(
<footer id="contacto" className="oscuro">
    <a href="#"><i className="fab fa-github-square fa-5x"></i></a>
    <a href="#"><i className="fab fa-twitter-square fa-5x"></i></a>
    <a href="#"><i className="fab fa-linkedin fa-5x "></i></a>
    <p>Meet & Coffe 2018. Todos los derechos reservados</p></footer>

);
}





function App() {
  return (
    <div className="App">
   
       <Nav/>
       <HeroSection/>
       <Ubicacion/>
       <ProximaCharla/>
       <Eventos/>
       <Footer/>
        

    </div>
  );
}

export default App;
