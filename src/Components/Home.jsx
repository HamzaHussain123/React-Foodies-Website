import heroimg from "../assets/foodie-home.png"
const Home = () => {
    return (
        <>
            <div className="container-fluid Hero_main">
                <div className="container">
                    <div className="row align-items-lg-center">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000"
                            data-aos-easing="ease-in-out" >
                            <div className="hero_col1">
                                <h1>The taste of tradition's with a modern  twist.</h1>
                                <p className="py-3">Step into our restaurant and experience the best of both worlds: classic flavors with a modern touch. Our dishes combine the familiar tastes of tradition with exciting new twists. From beloved favorites to exciting innovations, every bite is a journey through time and taste. Come join us and enjoy the perfect blend of old and new!</p>
                                <div className="hero_btns">
                                    <button className="btn1 mx-2 fs-5 btn0 my-2 my-md-0">Get Started</button>
                                    <button className="btn1 mx-lg-4 fs-5 btn00 my-2 my-md-0">See Our Menu</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-down" data-aos-duration="1000"
                            data-aos-easing="ease-in-out" >
                            <div className="hero_col2">

                                <img src={heroimg} alt="heroimg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
