import React from "react";

const Footer = () => {
  const containerStyle = {
    display: "flex",
    displayDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };
  const linkStyle = {
    textDecoration: "underline",
  };

  return (
    <footer
      className="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0 text-center w-full"
      style={containerStyle}
    >
      <div>
        <p className="dark:text-white text-black">
          Made with ❤️ in Virginia by{" "}
          <a
            href="https://www.garretthughes.com/"
            target="_blank"
            style={linkStyle}
          >
            Garrett
          </a>{" "}
          &{" "}
          <a target="_blank" href="https://adamhughes.dev" style={linkStyle}>
            Adam
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;