import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return <div>
        <p>404</p>
        <p>Page not found</p>
        <p>Please, return to <Link to='/' >Home Page</Link> </p>
    </div>
}