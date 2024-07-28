const navbarDarkCode = `import MKBox from "components/MKBox";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarDark() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "mailto:contact+website@legros-ines.com",
            label: "Nous contacter",
            color: "info",
          }}
          transparent
          relative
        light
        center
        />
      </MKBox>
  );
}

export default NavbarDark;`;

export default navbarDarkCode;
