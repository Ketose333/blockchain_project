import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import "../Style/MainPage.css";
import Banner from "../Component/Banner";
import SearchBar from '../Component/SearchBar';
import CarList from '../Data/CarList';
import carLoanImg from "../Image/car-loan.png";
import sellerImg from "../Image/seller.png";
import dealImg from "../Image/deal.png";
import bitcoinImg from "../Image/bitcoin.png";
import partner1 from "../Image/partner1.png"
import partner2 from "../Image/partner2.png"
import partner3 from "../Image/partner3.png"
import partner4 from "../Image/partner4.png"

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className="main-page">
            <div className="ad-banner">
                <Banner />
            </div>
            <div className="triangle-section">
                <div className="search-box">
                    <SearchBar />
                </div>

                <div className="car-list-container">
                    <div
                        className="car-list-header"
                        onClick={() => navigate('/list')}
                    >
                        <h2>차량리스트 더보기 <FaChevronRight className="arrow-icon" /></h2>
                    </div>

                    <div className="car-list">
                        <CarList count={3} />
                    </div>
                </div>
            </div>

            <section className="features">
                <div className="feature-item">
                    <img src={carLoanImg} alt="중고차 견적대기" />
                    <div className="feature-label">중고차 견적대기</div>
                </div>
                <div className="feature-item">
                    <img src={sellerImg} alt="안전한 구매" />
                    <div className="feature-label">안전한 구매</div>
                </div>
                <div className="feature-item">
                    <img src={dealImg} alt="안전한 판매" />
                    <div className="feature-label">안전한 판매</div>
                </div>
                <div className="feature-item">
                    <img src={bitcoinImg} alt="NFT 거래" />
                    <div className="feature-label">NFT 거래</div>
                </div>
            </section>

            <div className="section-divider" />

            <section className="partner-section">
                <div className="partners">
                    <img src={partner1} alt="삼성화재" />
                    <img src={partner2} alt="KB손해보험" />
                    <img src={partner3} alt="DB손해보험" />
                    <img src={partner4} alt="현대해상" />
                </div>
            </section>
        </div>
    );

};

export default MainPage;