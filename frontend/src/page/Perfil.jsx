import { Navbar } from "../components/Navbar.jsx";
import usuariofoto from "../public/images/usuariofoto.jpg";
import { Footer } from "../components/Footer.jsx";

export default function Servicios() {
    return (
        <>
            <Navbar />
            <section className="section_services">
                <div className="grid-container">
                    <div className="grid-columns">
                        <div className="img-styleBox">
                            <div className="styleBox-border">
                                <img
                                    style={{ borderRadius: "10px" }}
                                    src={usuariofoto}
                                    alt="imagenwiki"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid-columns">
                        <div className="section-intro">
                            <h4 className="intro-title">Perfil</h4>
                            <h3 className="wiki-title">Nombre</h3>
                            <div>
                                PROFESIONAL VERIFICADO ✓
                            </div>
                        </div>
                        <p className="paragraph-services">
                            NOMBRE y APELLIDO
                        </p>
                        <p className="paragraph-services">
                            EMAIL
                        </p>
                        <p className="paragraph-services">
                            NUMERO DE TELEFONO
                        </p>
                        <p className="paragraph-services"> </p>
                        <button type="button">EDITAR</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
