import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to='parrafo1' smooth={true}>parrafo1</Link>
          <Link to='parrafo2' smooth={true}>parrafo2</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
