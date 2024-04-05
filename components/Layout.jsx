const React = require("react");
const NavBar = require("./ui/NavBar");

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/Navbar.css" />
        <link rel="stylesheet" href="/styles/Auth.css" />
        <script defer src='/scripts/auth.js' />
      </head>
      <body>
        <NavBar user={user}/>
        <body>{children}</body>
      </body>
    </html>
  );
};
