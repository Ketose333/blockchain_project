import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../Style/Header.css";

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 로그인 여부 확인
    useEffect(() => {
        const checkToken = () => {
            const token = sessionStorage.getItem("login_token");
            setIsLoggedIn(!!token);
        };

        checkToken();
        window.addEventListener("storage", checkToken);
        window.addEventListener("focus", checkToken); // 브라우저 포커스 시 재확인

        return () => {
            window.removeEventListener("storage", checkToken);
            window.removeEventListener("focus", checkToken);
        };
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('login_token');
        setIsLoggedIn(false);
        alert("로그아웃 되었습니다.");
        navigate('/');
    };

    return (
        <header className="main-header">
            <div className="left-section">
                <div className="logo">
                    <Link to="/" className="logo-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FaCar className="icon" />
                        <span className="logo-text">체인카</span>
                    </Link>
                </div>
                <nav className="nav-links">
                    <Link to="/addcar">내차팔기</Link>
                    <Link to="/list">내차사기</Link>
                </nav>
            </div>

            <div className="login-signup">
                {isLoggedIn ? (
                    <div className="login-area">
                        <button className="login-btn" onClick={handleLogout}>로그아웃</button>
                        <button className="user-btn" onClick={() => navigate('/mypage')}>마이페이지</button>
                    </div>
                ) : (
                    <>
                        <button className="login-btn" onClick={() => navigate('/login')}>로그인</button>
                        <button className="signup-btn" onClick={() => navigate('/signup')}>회원가입</button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
