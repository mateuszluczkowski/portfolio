const NavArrows = ({ routes }) => {
  const findActiveRouteIndex = () =>
    routes.findIndex((route) => {
      return route.path === window.location.pathname;
    });
  const activeRouteIndex = findActiveRouteIndex();
  const nextRoute = routes[activeRouteIndex + 1]
    ? routes[activeRouteIndex + 1].path
    : null;
  const prevRoute = routes[activeRouteIndex - 1]
    ? routes[activeRouteIndex - 1].path
    : null;

  return (
    <div className="NavArrows">
      <a
        href={nextRoute}
        className={`NavArrows__arrow NavArrows__arrow--right${
          nextRoute ? "" : " NavArrows__arrow--disabled"
        }`}
      >
        {" "}
        <i className="fas fa-chevron-right"></i>
      </a>
      <a
        href={prevRoute}
        className={`NavArrows__arrow NavArrows__arrow--left${
          prevRoute ? "" : " NavArrows__arrow--disabled"
        }`}
      >
        <i className="fas fa-chevron-left  "></i>
      </a>

      <div className="dots">
        {routes.map((route, index) => {
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
