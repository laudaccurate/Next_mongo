import Link from 'next/link';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Navbar (){

  return(

    <nav className='navbar container'>
      <Link href="/">
        <a className='navbar-brand'> Superhero Identity </a>
      </Link>
      <Link href="/add">
        <MDBBtn> New Identity </MDBBtn>
      </Link>
    </nav>

  )

}