import React from "react"
import { Col, Container, Row } from "reactstrap"
import SelfIntro from "../components/SelfIntro"
import Svg from "../assets/images/developer2.svg"
import "./styles.css"

const HomePage: React.FC = () => {
  return (
    <Container fluid className="my-auto border-light rounded-3">
      <Row fluid className="d-flex flex-column-reverse flex-xl-row gradient-box">
        <Col xl={7} className="d-flex justify-content-center align-items-center px-4">
          <SelfIntro />
        </Col>
        <Col xl={5} className="d-flex justify-content-center align-items-center">
          <div className="home-img-container d-flex justify-content-center align-items-center">
            <img
              className="developer-img "
              src={Svg}
              alt="dev img"
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage