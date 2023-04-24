import Col from "./FooterComponents/Col";
import Socials from "./FooterComponents/Socials";
import SucribeB from "./FooterComponents/SucribeB"
function Footer() {
  return (
    <div className="footer">
      <div className="contain">
        <Col title = "Tienda" items={[
            { name: "Categorias", url: "#" },
            { name: "Ofertas", url: "#" },
            { name: "Outlet", url: "#" },
            { name: "Ayuda", url: "#" },
            { name: "Pagos", url: "#" },
        ]}/>
        <Col title = "Información útil" items={[
            { name: "Preguntas frecuentes", url: "#" },
            { name: "Formas de pago", url: "#" },
            { name: "Garantías", url: "#" },
            { name: "Garantías", url: "#" }
        ]}/>
        <Col title = "Pickup pointsT" items={[
            { name: "Zona norte", url: "#" },
            { name: "Zona sur", url: "#" },
            { name: "Mapa", url: "#" }
        ]}/>
        <SucribeB />
        <Socials />
      </div>
      
    </div>
  );
}

export default Footer;