import img from "../assets/about3.jpg"
const About = () => {
    return (
        <>
            <div className="container-fluid py-5 my-2">
                <div className="container">
                    <div className="row gx-0 align-items-center">
                        <div className="col-lg-6">
                            <div className="about_col1" data-aos="fade-right" data-aos-duration="1300"
                                data-aos-easing="ease-in-out">
                                <img src={img} alt="About_img" className="img-fluid About" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about_col2">
                                <h3>overview</h3>
                                <h1>Check Out Our Guest Info Section!</h1>
                                <p className="main-p">Welcome to Foodie's Restaurant, where taste meets quality. Our dishes are crafted with the finest ingredients, ensuring an unforgettable dining experience. From appetizers to desserts, each bite is a delight. With a diverse menu, we cater to every palate. Join us for a culinary journey filled with flavor, quality, and hospitality.</p>
                                <div className="counter py-4">
                                    <div className="row">
                                        <div className="col-md-4 py-3 py-md-0">
                                            <h2>15K+</h2>
                                            <h5>Happy Customers</h5>
                                        </div>
                                        <div className="col-md-4 py-3 py-md-0">
                                            <h2>10+</h2>
                                            <h5>Award Win</h5>
                                        </div>
                                        <div className="col-md-3 py-3 py-md-0">
                                            <h2>30+</h2>
                                            <h5>Food Menu</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
