import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap"
import './styles.css'
const Layout: React.FC<any> = ({ children }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const cLoc = pathname.split('/')[1] || "home"
  
  const [openSidebar, setOpenSidebar] = useState(false)
  const [activeScreen, setActiveScreen] = useState<any>({
    home: true,
  })

  const bg:any = {
    "home": "home",
    "skills": "skill",
    "projects": "project",
    "experience": "experience",
    "interests&learning": "learning"
  }

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
    <div  className={`gradient-box-${bg[cLoc]} rounded-0 d-flex flex-column justify-content-center align-items-center  py-3 layout-container border border-black`}>
      <Navbar expand="md" className="bg-white rounded-3 py-3 py-sm-2 position-fixed top-0 m-3 z-2 navbar-container">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={openSidebar} navbar>
          <Nav navbar card className="mt-2 my-sm-0">
            {screens.map((screen: any, idx: number) =>
              <NavItem className="nav-item mx-2" key={`${idx}+${screen.path}`}>
                <NavLink className="nav-link background-move" active={activeScreen[screen.path]} onClick={() => handleNavigate(screen.path)}>
                  {screen.label}
                </NavLink>
              </NavItem>)
            }
          </Nav>
        </Collapse>
      </Navbar>
      <div className="main-container d-flex flex-column flex-grow-1 mx-2 mx-md-5">
        {children}
      </div>
    </div>
  )
}

export default Layout
