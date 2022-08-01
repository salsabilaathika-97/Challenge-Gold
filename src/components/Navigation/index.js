import "./style.css"
import { navList } from "../../const/StaticData";
import { binar_icon } from "../../asset";
import { colors } from "../../utils";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {   
    return (
        <>
        <Navbar collapseOnSelect fixed="top" expand="sm" style={{backgroundColor: colors.bgMainPage01}}> 
            <Container className="flex flex-wrap justify-between">
                <div style={{paddingTop: 25}}>
                    <Nav.Link href="/">
                    <img src={binar_icon} className="mr-3 h-6 sm:h-9" alt="Logo Kosongan" />
                    </Nav.Link>
                </div>
                <div style={{paddingTop: 10, paddingBottom: 10}}>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {navList.map((item) => (
                            <div className="text-gray-900 dark:text-white" style={{marginLeft: 32, marginTop: 25, marginBottom:10}}><Nav.Link href={item.id}>{item.text}</Nav.Link></div>
                        ))}
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
        </> 
    )
}

export default Navigation;
