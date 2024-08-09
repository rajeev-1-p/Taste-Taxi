import { LOGO_URL } from "../utils/constants"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-logo-container">
                <img className="footer-logo" src={LOGO_URL}
                />
                <h3>©️ Rajeev Technologies Pvt. Ltd </h3>


            </div>
            <div className="footer-content">
                <div className="quick-links">
                    <div>
                    <h2>Comapany</h2>
                    <ul>
                        <li>About</li>
                        <li>Carrer</li>
                        <li>Team</li>
                        
                    
                    </ul>
                    </div>
                  <div>
                  <h2>Contact Us</h2>
                    <ul> 
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>

                    </ul>
                  </div>

                </div>
                <div className="social-links">
                    <h2>Social Links</h2>
                    

                </div>

            </div>

        </div>
    )

}
export default Footer;