import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { useAccessToken } from './AccessTokenContext';

const Header = () => {
    const { accessResult, user_id, loading, setAccessToken } = useAccessToken();

    function logout() {
        localStorage.removeItem('accessToken');
        setAccessToken(null); // 전역 상태에서 토큰 제거
        window.location.href = '/';
    }

	localStorage.removeItem('accessToken');

    // 로딩 중에는 아무것도 표시하지 않음
    if (loading) {
		
        return null;
    }

    return (
        <div className='headerWrap'>
            <div className="header-area">
                <div className="logo">
                    <Link to="/"><img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="Logo" /></Link>
                </div>
                <div className="nav">
                    <ul className='signUpandlogin'>
                        <li>
                            {
                                accessResult ? (
                                    <ul>
                                        <li className="user-info">{user_id}님 반갑습니다</li>
                                        <li className="logout-box">
                                            <div className="logout" onClick={logout}>로그아웃</div>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul>
                                        <li className="sign-in"><Link to="/login">로그인</Link></li>
                                        <li className="sign-up"><Link to='/signup'>회원가입</Link></li>
                                    </ul>
                                )
                            }
                        </li>
                    </ul>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
