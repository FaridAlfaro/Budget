import Col from "./FooterComponents/Col";
import Socials from "./FooterComponents/Socials";
import SucribeB from "./FooterComponents/SucribeB";

function Footer() {
  return (
    <div className="footer">
      <div className="contain">
        <Col
          title="Tienda"
          items={[
            { id: 1, name: "Categorias", url: "#" },
            { id: 2, name: "Ofertas", url: "#" },
            { id: 3, name: "Outlet", url: "#" },
            { id: 4, name: "Ayuda", url: "#" },
            { id: 5, name: "Pagos", url: "#" },
          ]}
        />
        <Col
          title="Información útil"
          items={[
            { id: 6, name: "Preguntas frecuentes", url: "#" },
            { id: 7, name: "Formas de pago", url: "#" },
            { id: 8, name: "Garantías", url: "#" },
            { id: 9, name: "Garantías", url: "#" }
          ]}
        />
        <Col
          title="Pickup pointsT"
          items={[
            { id: 10, name: "Zona norte", url: "#" },
            { id: 11, name: "Zona sur", url: "#" },
            { id: 12, name: "Mapa", url: "#" }
          ]}
        />
        <SucribeB />
        <Socials />
      </div>
    </div>
  );
}

export default Footer;
