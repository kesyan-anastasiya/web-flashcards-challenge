const React = require("react");
const NavBar = require("./ui/NavBar");

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src='/scripts/auth.js' />
      </head>
      <body>
        <NavBar/>
        <body>{children}</body>
      </body>
    </html>
  );
};
