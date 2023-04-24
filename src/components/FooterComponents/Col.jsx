
function Col({ title, items}){
    return(
        <div className="col">
        <h1 className="footer_title">{title}</h1>
        <ul className="footer_ul">
          {items.map((item) => (
            <li className="footer_li" key={item.url}>
              <a className="footer_a" href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Col