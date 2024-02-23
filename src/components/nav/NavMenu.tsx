import { NavLink as RouterNavLink } from "react-router-dom";

// compound component parent

const NavMenu = () => {
  return (
    <menu className="NavMenu">
      <RouterNavLink
        to="/"
        end
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
        // style={({ isActive, isPending, isTransitioning }) => {
        //   return {
        //     fontWeight: isActive ? "bold" : "",
        //     color: isPending ? "red" : "black",
        //     viewTransitionName: isTransitioning ? "slide" : "",
        //   };
        // }}
      >
        Home
      </RouterNavLink>
      <div>Link 1</div>
      <div>Link 2</div>
      <div>Link 3</div>
      <div>Link 4</div>
    </menu>
  );
};

export default NavMenu;

// compound component child
const NavLink = () => {};
