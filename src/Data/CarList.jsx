import CarCard from '../Component/CarCard';
import car1 from '../Image/exterior1.png';
import car2 from '../Image/exterior2.png';
import car3 from '../Image/kia_mohave_black_2023.png';

const defaultCars = [
    {
        name: "현대 i30 가솔린 1.6 터보 2WD 5인승 인스퍼레이션",
        image: car1,
        price: "6,974 만원",
        badges: ['diagnose', 'trust'],
    },
    {
        name: "현대 더 뉴 그랜저 IG 2.5 프리미엄",
        image: car2,
        price: "1,960 만원",
        badges: ['diagnose', 'trust'],
    },
    {
        name: "현대 쏘나타 하이브리드 (DN8) 인스퍼레이션",
        image: car3,
        price: "2,230 만원",
        badges: ['diagnose', 'trust'],
    },
];

const CarList = ({
    count = 3,
    showBadges = true,
    showPrice = true,
}) => {
    const cars = Array.from({ length: count }, (_, i) => {
        return defaultCars[i % defaultCars.length];
    });

    return (
        <>
            {cars.map((car, index) => (
                <CarCard
                    key={index}
                    image={car.image}
                    name={car.name}
                    price={car.price}
                    badges={car.badges}
                    showBadges={showBadges}
                    showPrice={showPrice}
                />
            ))}
        </>
    );
};

export default CarList;