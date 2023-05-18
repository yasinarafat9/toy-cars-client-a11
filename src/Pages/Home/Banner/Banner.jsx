import './Banner.css'
import { Carousel } from 'react-bootstrap';
import img1 from '../../../assets/Images/img (1).jpg'
import img2 from '../../../assets/Images/img (2).jpg'
import img3 from '../../../assets/Images/img (3).jpg'
import img4 from '../../../assets/Images/img (4).webp'
import img5 from '../../../assets/Images/img (5).jpg'

const Banner = () => {
    return (
        <div className='banner mx-auto'>
            <h2>Banner </h2>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Blue Rc Truck Car</h1>
                        <p>USD $ 166 IN STOCK</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>Top Gears Top 9 Iconic Blue Toy Car</h1>
                        <p>USD 80.99 In Stock</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>welly 1:18 Lamborghini LP700-4 Orange alloy car model simulation car decoration collection gift toy Die casting model boy toy</h3>
                        <p>
                        $73.99 USD*· Out of stock·Brand: Welly
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Fire fighter Truck</h1>
                        <p>
                        ₹378.00 INR*· In stock·Brand: Premratna
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Toy Police car</h1>
                        <p>
                        $11.00 USD*· In stock
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;