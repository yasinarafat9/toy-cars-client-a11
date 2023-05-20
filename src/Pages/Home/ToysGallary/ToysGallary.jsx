import './ToysGallary.css'
import img1 from '../../../assets/Images/img-effect (1).jpg'
import img11 from '../../../assets/Images/img-effect (11).jpg'
import img14 from '../../../assets/Images/img-effect (14).jpg'
import img13 from '../../../assets/Images/img-effect (13).jpg'
import img8 from '../../../assets/Images/img-effect (8).jpg'
import img6 from '../../../assets/Images/img-effect (6).jpg'

const ToysGallary = () => {
    return (
        <div className='my-5 mx-auto gallary'>
            <h1>Toy Cars Gallary</h1>
            <p>TOYS Gallery is a Contemporary Art Gallery based in Kyiv, Ukraine. Today we want to expand & we moved part of our collection to Venice, Italy. Most of the artworks from our collection presented at ARTSY already located in EU - so any of these artworks can be easily shipped or hand delivered worldwide. We looking for partners, permanent locations & pop-up locations within EU, UK, USA & UAE. Locations in Asia are also interesting for us, so partners from Asia are very welcome too. Please send your proposals to info@toys-gallery.com</p>
            {/* <div className='gallary-img-container container grid sm-col-1'> */}
            <div className='gallary-img-container container grid row mx-auto text-center '>
                <div className='col col-md-4 '>
                    <img src={img1} alt="" />
                </div>
                <div className='col col-md-4 '>
                    <img src={img11} alt="" />
                </div>
                <div className='col col-md-4 '>
                    <img src={img14} alt="" />
                </div>
                <div className='col col-md-4 '>
                    <img src={img13} alt="" />
                </div>
                <div className='col col-md-4 '>
                    <img src={img8} alt="" />
                </div>
                <div className='col col-md-4 '>
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ToysGallary;