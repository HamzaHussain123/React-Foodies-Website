import img1 from "../assets/cheif1.png"
import img2 from "../assets/cheif2.png"
import img3 from "../assets/cheif3.png"
import img4 from "../assets/cheif4.png"
const Team = () => {
    return (
        <>
            <div className="container-fluid Team py-3 py-lg-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10 col-6">
                            <h1 className="main-heading">
                                Meet Our<span> Chefs</span>
                            </h1>
                        </div>
                        <div className="col-lg-2 col-6 text-end">
                            <button className="btn1 btn_0 fs-lg-5 fs-6">See All <i className="fa-solid fa-arrow-right ps-2"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row gx-0 py-5 text-center">
                        <div className="col-lg-3" data-aos="fade-down" data-aos-duration="1000"
                            data-aos-easing="ease-in" >
                            <div className="team_col1">
                                <img src={img1} alt="team" />
                                <h5 className="chef_names">Axel James</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos="fade-down" data-aos-duration="1500"
                            data-aos-easing="ease-in">
                            <div className="team_col1">
                                <img src={img2} alt="team" className="chefs" />                    <h5 className="chef_names">Hudson Lee</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos="fade-down" data-aos-duration="2000"
                            data-aos-easing="ease-in">
                            <div className="team_col1">
                                <img src={img3} alt="team" className="chefs" />                    <h5 className="chef_names">Oliver James</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos="fade-down" data-aos-duration="2200"
                            data-aos-easing="ease-in">
                            <div className="team_col1">
                                <img src={img4} alt="team" className="chefs" />                    <h5 className="chef_names">Beau Jack</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
