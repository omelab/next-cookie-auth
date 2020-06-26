import Link from "next/link";
import { logoutUser } from "../lib/auth";

const Layout = ({ title, children, auth }) => {
  const { user = {} } = auth || {};

  return (
    <div className="root">
      <nav className="navbar">
        <span>
          Welcome, <strong>{user.name || "Guest"}</strong>
        </span>

        <div>
          <Link href="/">
            <a>Home</a>
          </Link>

          {user.email ? (
            // Auth Navigation
            <React.Fragment>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
              <button onClick={logoutUser}>Logout</button>
            </React.Fragment>
          ) : (
            // UnAuth Navigation
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}
        </div>
      </nav>

      <h1>{title}</h1>
      {children}

      <style jsx>{`
        .root {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .navbar {
          width: 100%;
          display: flex;
          justify-content: space-around;
        }
        a {
          margin-right: 0.5em;
        }
        button {
          text-decoration: underline;
          padding: 0;
          font: inherit;
          cursor: pointer;
          border-style: none;
          color: rgb(0, 0, 238);
        }
      `}</style>
    </div>
  );
};

export default Layout;
