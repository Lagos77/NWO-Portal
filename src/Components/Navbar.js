
import "./Navbar.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">
            <h1>Seek Wisdom</h1>
        </Link>
        <ul>
            <CustomLink to="/information">Information</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/admin">Admin</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}