import React from "react";
import { Card, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { projectDetails } from "../utils/Constants";

const Projects: React.FC = () => {
  return (
    <Container fluid={"md"} className="my-5">
      <Row className="my-4 justify-content-center mx-auto">
        {projectDetails.map((project,idx) => {
          return (
            <Col key={`${idx}+${project.name}`} xl={4} className="d-flex justify-content-center">
              <Card className="project-card my-3 d-flex align-items-center p-4">
                <CardTitle className="project-name text-center">
                  {project.name}
                </CardTitle>
                <CardTitle className="technologies border p-2 rounded-2">
                  {
                    project.technologies.map((tech,idx) => {
                      return (
                        <tech.icon key={`${idx}+${tech.style}`} className={`${tech.style} mx-1 fs-3`} />
                      )
                    })
                  }
                </CardTitle>
                <CardText className="project-description text-muted my-3">
                  {project.description}
                </CardText>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Projects;
