const NavArrows = (props) => {
  return (
    <div className="NavArrows">
      <button className="fas fa-chevron-right NavArrows__arrow NavArrows__arrow--right"></button>
      <button className="fas fa-chevron-left  NavArrows__arrow NavArrows__arrow--left"></button>
      <div className="dots">
        {props.routes.map((route, index) => {
          return (
            <a
              key={index}
              href={route.path}
              className={
                window.location.pathname === route.path
                  ? "dots__item active"
                  : "dots__item"
              }
            >
              {}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default NavArrows;
