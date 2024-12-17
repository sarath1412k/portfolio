import React from "react"
import { Card, CardSubtitle, CardText, CardTitle } from "reactstrap"
import { homeDetails } from "../utils/Constants"
import { MdEmail } from "react-icons/md";

const SelfIntro: React.FC = () => {
  return (
    <Card className="bg-transparent text-white border-0">
      <CardTitle className="h1 text-decoration-underline">{homeDetails.name}</CardTitle>
      <CardTitle className="fs-4">{homeDetails.position}</CardTitle>
      <CardSubtitle className="d-flex align-items-center">
        <MdEmail className="fs-3 mx-2" />
        <a className="text-dark" href={`mailto:${homeDetails.email}?subject=iInterview&body=`}>{homeDetails.email}</a></CardSubtitle>
        <CardText className="my-3 ls-2" >
          {homeDetails.homePageContent()}
        </CardText>
    </Card>
  )
}

export default SelfIntro
