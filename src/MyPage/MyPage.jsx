import "../Style/MyPage.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyPage() {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [carList, setCarList] = useState(null);
    const [error, setError] = useState("");
    const [carError, setCarError] = useState("");

    const access_token = sessionStorage.getItem("access_token");
    const refresh_token = sessionStorage.getItem("refresh_token");

    // 토큰 갱신
    const handleRefresh = async () => {
        try {
            const res = await fetch(`http://localhost:5000/refresh?refresh_token=${refresh_token}`);
            const data = await res.json();
            console.log("✅ Refresh Success:", data);

            if (data.access_token) {
                sessionStorage.setItem("access_token", data.access_token);
                alert("Access token 갱신 완료");
                window.location.reload(); // 새 토큰으로 다시 불러오기
            } else {
                alert("토큰 갱신 실패");
            }
        } catch (err) {
            console.error("Refresh Error:", err);
            alert("토큰 갱신 중 오류 발생");
        }
    };

    // 로그아웃 및 토큰 삭제
    const handleDelete = async () => {
        try {
            const res = await fetch(`http://localhost:5000/delete?access_token=${access_token}`);
            const data = await res.json();
            console.log("🧹 Delete Response:", data);

            sessionStorage.removeItem("access_token");
            sessionStorage.removeItem("refresh_token");
            alert("로그아웃 완료");
            navigate("/login");
        } catch (err) {
            console.error("Delete Error:", err);
            alert("로그아웃 중 오류 발생");
        }
    };

    // 프로필 가져오기
    useEffect(() => {
        const fetchProfile = async () => {
            if (!access_token) {
                setError("로그인이 필요합니다.");
                return;
            }

            try {
                const response = await fetch("http://localhost:5000/profile", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${access_token}`,
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "서버 오류");
                }

                setProfile(data);
            } catch (err) {
                console.error("Profile Error:", err);
                setError(err.message);
            }
        };

        fetchProfile();
    }, [access_token]);

    // 차량 목록 가져오기
    useEffect(() => {
        const fetchMyCarList = async () => {
            if (!access_token) return;

            try {
                const res = await fetch("http://localhost:5000/mycarlist", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${access_token}`
                    }
                });

                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(`차량 목록 오류 응답: ${res.status} - ${text}`);
                }

                const json = await res.json();
                setCarList(json);
            } catch (err) {
                console.error("차량 목록 요청 오류:", err);
                setCarError(err.message);
            }
        };

        fetchMyCarList();
    }, [access_token]);

    return (
        <div className="profile-page">
            <div className="page-container">
                <h1 className="page-title">마이페이지</h1>

                <div className="section">
                    <h3 className="section-title">사용자 정보</h3>
                    <div className="info-card">
                        {error ? (
                            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
                        ) : profile ? (
                            <>
                                <p><strong>이메일:</strong> {profile.email}</p>
                                <p><strong>이름:</strong> {profile.name}</p>
                                <p><strong>휴대폰번호:</strong> {profile.mobileNum}</p>
                                <p><strong>생년월일:</strong> {profile.birthdate}</p>
                                <p><strong>언어:</strong> {profile.lang}</p>
                                <p><strong>소셜 로그인:</strong> {profile.social ? "예" : "아니오"}</p>
                            </>
                        ) : (
                            <p className="car-promo-text">로딩 중...</p>
                        )}
                    </div>
                </div>

                <div className="section">
                    <h3 className="section-title">내 차 정보</h3>
                    <div className="info-card">
                        {carError ? (
                            <p style={{ color: "red", textAlign: "center" }}>{carError}</p>
                        ) : carList && carList.cars.length > 0 ? (
                            <div className="car-list-grid">
                                {carList.cars.map((car) => (
                                    <div className="car-card" key={car.carId}>
                                        <div className="car-name">{car.carName}</div>
                                        <div className="car-type">{car.carType}</div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="car-promo-text">믿을 수 있는 중고차를 체인카에서 만나보세요!</p>
                        )}
                    </div>
                </div>

                <div className="section">
                    <h3 className="section-title">토큰 관리</h3>
                    <div className="info-card">
                        <p><strong>Access Token:</strong> {access_token}</p>
                        <p><strong>Refresh Token:</strong> {refresh_token}</p>
                        <div className="token-button-group">
                            <button className="token-refresh-button" onClick={handleRefresh}>🔁 토큰 갱신</button>
                            <button className="token-delete-button" onClick={handleDelete}>🚪 로그아웃</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;