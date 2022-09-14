import { useNavigate } from "react-router-dom";

function LogOut() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <a
            role="button"
            onClickCapture={handleLogout}
            className="nav-link hand">
            Log Out
        </a>
    );
}

export default LogOut;