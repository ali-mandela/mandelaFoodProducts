import { NavLink } from 'react-router-dom'
import '../CSS/Hero.css'

const Hero = (p) => {
  return (<>
    <div className='heroOuter'>
        <div className='heroBody'>
        <div className='heroBody1'> 
        <h6>Welcome to</h6>
        <h1>{p.props.title}</h1>
        <h2>{p.props.text}</h2>
        <p>{p.props.body}</p>
        <NavLink to="/products">
            <button>Shop now</button>
        </NavLink>
        </div>
        <div className='heroBody2'>
          <img src="https://fakeimg.pl/450x340/?text=World&font=lobster" alt='i dont know'></img>
            
            </div>

        </div>
    </div>
  </>)
}

export default Hero