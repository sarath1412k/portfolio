import React from "react"
import { Card, CardText, CardTitle, Container } from "reactstrap"

const PageNotFound: React.FC = () => {
  return (
    <Container className="container-404 d-flex justify-content-center align-items-center rounded-3">
      <Card className="border-0 bg-transparent text-center">
        <CardTitle className="number-404 fw-bold">404</CardTitle>
          <CardText className="text-404">Page Not found!</CardText>
      </Card>  
      </Container>
  )
}

export default PageNotFound