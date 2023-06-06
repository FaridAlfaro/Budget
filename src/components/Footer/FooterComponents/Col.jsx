function Col({ title, items }) {
  return (
    <div className="col">
      <h2 className="footer_title">{title}</h2>
      <ul className="footer_ul">
        {items.map((item, index) => (
          <li className="footer_li" key={item.id}>
            <a className="footer_a" href={item.url}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Col;
