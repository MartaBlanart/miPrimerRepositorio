
import './App.css';
import logo from "C:\Users\marta\OneDrive\Escritorio\Pagina Web\my-app\src\logo.png";
import './App.css'

function App() {
  return (
    <body>

    <section class="seccion1">
        <nav class="menu">
      
            <div class="menu d-none d-md-block">  
                <div class="logo">
                    <img src={logo} alt="logo"/>
                </div> 
                <ul class="listamenu">
                <li><a href="www.google.es">Vestidos</a></li>
                <li><a href="#">Blusas</a></li>
                <li><a href="#">Jeans</a></li>
                <li><a href="#">Faldas</a></li>
                <li><a href="#">Zapatos</a></li>
                <li><a href="#">Accesorios</a></li>
            </ul>
           
            <div class="busqueda">
                BUSCAR
            </div>
            <div class="sesion">
                Iniciar sesión
            </div>
        </div>
           
        </nav>
    </section>
  
    <section class="seccion2">
        <div class="imagenes1">
            <div class="pantalon">
                <img class= "prenda" src={"C:\Users\marta\OneDrive\Escritorio\Pagina Web\img\jeans1.jpg"} alt="vestido" />
               <span>Jeans 5682F mediun raise blue</span>
                <span class="precio">19,95€</span> </div>
           
            
            <div class="dress">
                <img class= "prenda" src={"C:\Users\marta\OneDrive\Escritorio\Pagina Web\img\vestido.jpg"} alt="vestido" />
                <span class="descripcion">Vestido volantes lazos</span>
                <span class="precio">39,95€</span> </div>
            </div>
            
            </section>

        <div class="imagenes2">
            <div class="blusa">
                <img class= "prenda" src={"C:\Users\marta\OneDrive\Escritorio\Pagina Web\img\blusa.jpg"} alt="vestido"/>
                <span>Blusa oversize azul satín</span>
                <span>29,95€</span>
            </div>
            
            <div class="falda">
                <img class= "prenda" src={"C:\Users\marta\OneDrive\Escritorio\Pagina Web\img\fada.jpg"} alt="vestido" />
                <span>Falda lunares volantes</span>
                <span>25,95€</span>
            </div>
            
        </div>
        </body>
  );
}

export default App;
