function Title(props){
  return(
    <div className="title_contain">
      <div className="title_sub">
        <h1 className="title_section">{props.title}</h1>
        <a className="" href={props.linkdir}>{props.link}</a>
        <div className="sub" style={{width: props.width}}></div>
      </div>
    </div>
  )
}

export default Title