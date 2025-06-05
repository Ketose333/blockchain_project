import { useNavigate } from 'react-router-dom';
import '../Style/CarCard.css';

const badgeLabels = {
    diagnose: '진단 +',
    trust: '믿고',
};

const CarCard = ({
    image,
    name,
    price,
    badges = [],
    showBadges = true,
    showPrice = true,
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/carinfo');
    };

    return (
        <div className="car-card" onClick={handleClick}>
            {showBadges && badges.length > 0 && (
                <div className="badges">
                    {badges.map((badge) => (
                        <span key={badge} className={`badge ${badge}`}>
                            {badgeLabels[badge] || badge}
                        </span>
                    ))}
                </div>
            )}
            <img src={image} alt={name} />
            <div className="car-name">{name}</div>
            {showPrice && price && <div className="car-price">{price}</div>}
        </div>
    );
};

export default CarCard;