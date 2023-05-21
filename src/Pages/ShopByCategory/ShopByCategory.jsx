import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ShopByCategory.css'
import sportsCar1 from '../../assets/Images/sportsCarss (1).jpg'
import sportsCar2 from '../../assets/Images/sportsCarss (2).jpg'
import sportsCar3 from '../../assets/Images/sportsCarss (3).jpg'
import sportsCar5 from '../../assets/Images/sportsCarss (5).jpg'
import toyCar1 from '../../assets/Images/toyTruck (1).jpg'
import toyCar2 from '../../assets/Images/toyTruck (2).jpg'
import toyCar3 from '../../assets/Images/toyTruck (3).jpg'
import toyCar4 from '../../assets/Images/toyTruck (4).jpg'
import toyFireTruck1 from '../../assets/Images/toyFireTruck (1).jpg'
import toyFireTruck2 from '../../assets/Images/toyFireTruck (2).jpg'
import toyFireTruck3 from '../../assets/Images/toyFireTruck (3).jpg'
import toyFireTruck4 from '../../assets/Images/toyFireTruck (4).jpg'
import { Link } from 'react-router-dom';




const ShopByCategory = () => {

    // const [categorys, setCategorys] = useState([]);

    // const url = `http://localhost:5000/addToySubcategory?subcategory=${user?.subcategory}`;

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setCategorys(data))
    // }, []);


    return (
        <div>
            <h1 className='text-center'>View By Categories</h1>
            <Tabs>
                <TabList className="text-center">
                    <Tab><h4>Toy Sports cars</h4></Tab>
                    <Tab><h4>Toy Trucks</h4></Tab>
                    <Tab><h4>Toy Fire Trucks</h4></Tab>

                </TabList>

                <TabPanel>
                    <div className='tab-divs container m-auto'>
                        <h2>Sub Category:Toy Sports Cars</h2>
                        <div className='row'>
                            <div className='catagory-img container grid row mx-auto text-center'>
                                <div className='col col-md-6'>
                                    <img src={sportsCar1} alt="" />
                                </div>
                                <div className='col col-md-6'> 
                                    <img src={sportsCar2} alt="" />
                                </div>
                                <div className='col col-md-6'>
                                    <img src={sportsCar3} alt="" />
                                </div>
                                <div className='col col-md-6'>
                                    <img src={sportsCar5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='tab-divs  m-auto container '>
                        <h2>Sub Category: Toy Trucks</h2>
                        <div className='catagory-img container grid row mx-auto text-center'>
                            <div className='col col-md-6' >
                                <img src={toyCar1} alt="" />
                            </div>
                            <div className='col col-md-6'>
                                <img className='col col-md-6' src={toyCar2} alt="" />
                            </div>
                            <div className='col col-md-6'>
                                <img className='col col-md-6' src={toyCar3} alt="" />
                            </div>
                            <div className='col col-md-6'>
                                <img className='col col-md-6' src={toyCar4} alt="" />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='tab-divs container m-auto'>
                        <h2>Sub Category:Toy Fire Trucks</h2>
                        <div className=' catagory-img container grid row mx-auto text-center'>

                            <div className='col col-md-6'>
                                <img className='row' src={toyFireTruck1} alt="" />
                            </div>
                            <div className='col col-md-6'>
                                <img className='row' src={toyFireTruck2} alt="" />
                            </div>
                            <div className='col col-md-6'>
                                <img className='row' src={toyFireTruck3} alt="" />
                            </div>
                            <div className='col col-md-6'>
                                <img className='row' src={toyFireTruck4} alt="" />
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
            <br />
            <div className='text-center'>
                <Link to='/allToys'><button className='btn-web fs-2'>View All Toys</button></Link>
            </div>
        </div>
    );
};

export default ShopByCategory;