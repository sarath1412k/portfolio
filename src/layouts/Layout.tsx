import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Collapse, Container, Nav, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap"
import './styles.css'
const Layout: React.FC<any> = ({ children }) => {
  const navigate = useNavigate()
  const [openSidebar, setOpenSidebar] = useState(false)
  const [activeScreen, setActiveScreen] = useState<any>({
    home: true,
  })

  const screens = [
    { label: "Home", path: "home" },
    { label: "Skills", path: "skills" },
    { label: "Projects", path: "projects" },
    // { label: "Experience", path: "experience" },
    { label: "Learning", path: "interests&learning" },
  ]

  const toggle = () => setOpenSidebar(!openSidebar)

  const handleNavigate = (to: string) => {
    navigate(`/${to}`)
    setActiveScreen({ [to]: true })
  }

  return (
    <Container fluid className="bg-primary gradient-box rounded-0 d-flex flex-column justify-content-center py-3 px-2 layout-container">
      <Navbar expand="md" className="bg-white rounded-3">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={openSidebar} navbar>
          <Nav navbar card>
            {screens.map((screen: any, idx: number) =>
              <NavItem className="nav-item mx-2 rounded-3 border" key={`${idx}+${screen.path}`}>
                <NavLink className="nav-link background-move" active={activeScreen[screen.path]} onClick={() => handleNavigate(screen.path)}>
                  {screen.label}
                </NavLink>
              </NavItem>)
            }
          </Nav>
        </Collapse>
      </Navbar>
      <div className="main-container d-flex flex-column flex-grow-1 mx-5">
        {children}
      </div>
    </Container>
  )
}

export default Layout
