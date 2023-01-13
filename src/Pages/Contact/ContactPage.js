import Header from '../../Components/JSX/Header'
import './ContactPage.css'

const Contact = () => { 
    return ( <>
    <Header/>

   
    <div className='ContactPage-outer'>
    {window.location.hostname}
    {window.location.pathname}
    <h1>Contact Us</h1>
        <div className='contact-page-body'>
            <div className='contactBody'>
                
            </div>
            <div className='contactBody'>
                g
            </div>
            <div className='contactBody'>
                g
            </div>
            <div className='contactBody'>
                g
            </div> 

        </div>
    </div> 
    </> )
}

export default Contact