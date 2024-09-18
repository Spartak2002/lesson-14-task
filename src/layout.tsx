import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
        </nav>
        <div style={{ padding: 10, background: 'yellow', height: 1000, width: 1000 }}>
            <Outlet />
        </div>
    </div>
}