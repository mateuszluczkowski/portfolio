import { NavLink } from "react-router-dom";

const NavArrows = ({ routes, location }) => {
  const findActiveRouteIndex = () =>
    routes.findIndex((route) => {
      return route.path === location.pathname;
    });
  const activeRouteIndex =
    findActiveRouteIndex() < 0 ? 0 : findActiveRouteIndex();
  const nextRoute = routes[activeRouteIndex + 1]
    ? routes[activeRouteIndex + 1].path
    : "#";
  const prevRoute = routes[activeRouteIndex - 1]
    ? routes[activeRouteIndex - 1].path
    : "#";

  return (
    <div className="NavArrows">
      <NavLink
        to={nextRoute}
        className={`NavArrows__arrow NavArrows__arrow--right${
          nextRoute === "#" ? " NavArrows__arrow--disabled" : ""
        }`}
      >
        {" "}
        <i className="fas fa-chevron-right"></i>
      </NavLink>
      <NavLink
        to={prevRoute}
        className={`NavArrows__arrow NavArrows__arrow--left${
          prevRoute === "#" ? " NavArrows__arrow--disabled" : ""
        }`}
      >
        <i className="fas fa-chevron-left  "></i>
      </NavLink>

      <div className="dots">
        {routes.map((route, index) => {
          return (
            <NavLink key={index} to={route.path} className={"dots__item"}>
              {}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
export default NavArrows;
