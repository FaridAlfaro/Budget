import { Link } from "react-router-dom"
function Title(props){
  return(
    <div>
      <div className="title_contain">
        <div className="title_sub">
          <h2 className="title_section">{props.title}</h2>
          <Link to={props.linkdir} className="a_nav nav-row-list-link">{props.link}</Link>
          <div className="sub" style={{width: props.width}}></div>
        </div>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Title