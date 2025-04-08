// import the navagation component to generate the nav bar
import Nav from '../components/Nav';
// export the header function to be imported elsewhere
export default function Header() {
    // return the header code
    return (
        <header>
            <h1>Nic Blaize</h1>
            <Nav />
        </header>
    );
}