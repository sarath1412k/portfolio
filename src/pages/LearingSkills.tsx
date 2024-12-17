import React from "react"
import { Card, CardText, CardTitle, Col, Container, Row } from "reactstrap"
import { skillDetails } from "../utils/Constants"

const LearningSkills: React.FC = () => {
  return (
    <Container>
      <Row className="my-5">
        {/* <CardHeader className="fw-bold my-1">Frontend Tech</CardHeader> */}
        {skillDetails.learning.map((data, idx) => {
          return (<Col key={`${idx}+${data.skill}`} xl={3} xs={6} md={4} className="my-3 d-flex align-items-center justify-content-center">
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

export default LearningSkills
