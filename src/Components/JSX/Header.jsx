import '../CSS/Header.css'
import logo from '../../Assets/logo.svg' 
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Header = () => {
    const [mobile,
        setMobile] = useState(true)
    return ( <> <div className='HeaderOuter'>

        <div className='HeaderMain'>
            <div className='HeaderLogo'>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <div className='HeaderNav'>
             {/* style={!mobile ? {display:"none"}: {display:"none"}}  */}
               <div className='HeaderNavMenu'> 
                    <Link to='/'>Home</Link>
                    <Link to='/Products'>Products</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/Blog'>Blog</Link>
                    <div className='NavSocailLinks'>
                        <a href='mailto:muhammadalimandela01@gmail.com'>
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                        <a href=''> <i class="fa-brands fa-square-instagram"></i> </a>\watch
                       <a href="tel:+919682184658">
                        <i class="fa-solid fa-phone"></i> 
                        </a>
                    </div>
                </div>
                <div className='HeaderNavCart'>
                    <button>Login</button>
                    <i className="fa-solid fa-cart-shopping"></i>

                </div>
                <div className='HeaderNavCart mobileMenu'>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <button>Login</button>
                    <i
                        className={mobile
                        ? "fa-solid fa-bars menuMobile"
                        : "fa-solid fa-xmark menuMobile"}
                        onClick={() => {
                        setMobile(!mobile)
                    }}/>

                </div>
            </div>

        </div>

    </div> </>)
}
 
export default Header