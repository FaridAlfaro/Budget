function Card(props) {
    return (
      <div className="Container_card">
        <p className="Card_num">{props.cardNum}</p>
        <img src={props.img} alt="" className="Card_img" />
        <div className="Continer_info">
          <h3 className="Card_title">{props.title}</h3>
          <p className="Card_p">{props.copy}</p>
          <div className="Card_b">
            <a href="#">{props.btn}</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  