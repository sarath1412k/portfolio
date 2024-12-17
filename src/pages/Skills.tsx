import React from "react"
import { Card, CardHeader, CardText, CardTitle, Col, Container, Row } from "reactstrap"
import { skillDetails } from "../utils/Constants"
const Skills: React.FC = () => {
  return (
    <Container className="my-5">
      <Row className="my-5">
        <CardHeader className="fw-bold text-white my-1">Frontend Tech</CardHeader>
        {skillDetails.frontend.map((data, idx) => {
          return (
          <Col key={`${idx}+${data.skill}`} xl={3} className="my-3 d-flex align-items-center justify-content-center">
            <Card className="skill-card">
              <div className="skill-image-container border rounded-2">
                <img className="skill-image" src={data.image} alt={`${data.skill}-logo`} />
              </div>
              <CardTitle className="my-1">{data.skill}</CardTitle>
              <CardText className="skill-description text-muted">{data.description}</CardText>
            </Card>
          </Col>)
        })}
      </Row>

      <Row className="my-5">
        <CardHeader className="fw-bold text-white my-1">Backend Tech</CardHeader>
        {skillDetails.backend.map((data, idx) => {
          return (<Col key={`${idx}+${data.skill}`} xl={3} className="my-3 d-flex align-items-center justify-content-center">
            <Card className="skill-card">
              <div className="skill-image-container border rounded-2">
                <img className="skill-image" src={data.image} alt={`${data.skill}-logo`} />
              </div>
              <CardTitle className="my-1">{data.skill}</CardTitle>
              <CardText className="skill-description text-muted">{data.description}</CardText>
            </Card>
          </Col>)
        })}
      </Row>

      <Row className="my-5">
        <CardHeader className="fw-bold text-white my-1">Tools</CardHeader>
        {skillDetails.tools.map((data, idx) => {
          return (<Col key={`${idx}+${data.skill}`} xl={3} className="my-3 d-flex align-items-center justify-content-center">
            <Card className="skill-card">
              <div className="skill-image-container border rounded-2">
                <img className="skill-image" src={data.image} alt={`${data.skill}-logo`} />
              </div>
              <CardTitle className="my-1">{data.skill}</CardTitle>
              <CardText className="skill-description text-muted">{data.description}</CardText>
            </Card>
          </Col>)
        })}
      </Row>
      <Row className="my-5">
        <CardHeader className="fw-bold text-white my-1">Version Control</CardHeader>
        {skillDetails.versionControl.map((data, idx) => {
          return (
            <Col xl={3} key={`${idx}+${data.skill}`} className="my-3 d-flex align-items-center justify-content-center">
              <Card className="skill-card">
                <div className="skill-image-container border rounded-2">
                  <img className="skill-image" src={data.image} alt={`${data.skill}-logo`} />
                </div>
                <CardTitle className="my-1">{data.skill}</CardTitle>
                <CardText className="skill-description text-muted">{data.description}</CardText>
              </Card>
            </Col>)
        })}
      </Row>
    </Container>
  )
}

export default Skills