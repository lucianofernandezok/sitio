import React from 'react'
import "./home.css"

function Home() {
    return (
        <div className="home">
            <div className="portada__home">
                <h1>Luciano <strong>Fernandez</strong></h1>
            </div>
            <div className="portada__frase">
                <p>Desarrollador | Tester Manual | Autodidacta</p>
            </div>
            <div className="portada__contenido"></div>

            <div className="contenido__titulo">
                <h2>Proyectos</h2>
            </div>

            <div className="contenido__cluster">
                <div>
                    <a href="https://github.com/lucianofernandezok/loginconphpmysql" target="_blanck">
                        <h3>Login con php</h3>
                    </a>
                </div>

                <div>
                    <a href="https://github.com/lucianofernandezok/botselenium" target="_blanck">
                        <h3>Bot de Whatsapp con Selenium</h3>
                    </a>
                </div>

                <div>
                    <a href="https://github.com/lucianofernandezok/miprimerawebconreact" target="_blanck">
                        <h3>Primera web con React JS</h3>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Home
