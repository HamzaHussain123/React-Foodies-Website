import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <>
            <div className="container-fluid Footer py-4">
                <div className="container">
                    <div className="row gx-0 py-4 align-items-center">
                        <div className="col-md-3">
                            <img src={logo} alt="Footer" />
                        </div>
                        <div className="col-md-6 py-4 py-md-0">
                            <ul className="Footer_nav mx-auto d-lg-flex mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Facility</a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div className="Footer_icons text-md-end">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-square-x-twitter"></i>
                                <i className="fa-brands fa-square-instagram"></i>
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                        </div>
                    </div>

                    <div className="row Footer_row">
                        <p className="text-white text-center pt-5">
                            @copright2024 | HamzaHussain
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
