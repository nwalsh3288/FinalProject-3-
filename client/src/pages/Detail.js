import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [tenant, setTenant] = useState({})

  // When this component mounts, grab the tenant with the _id of props.match.params.id
  // e.g. localhost:3000/tenants/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getTenant(id)
      .then(res => setTenant(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Name: {tenant.name}
              </h1>
              <h1>
                Unit Number: {tenant.unit}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <br/>
        <br/>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h3>Tenant Details</h3>
              <h6>
                Rent is: {tenant.rent}
              </h6>
              <h6>
                Move in Date: {tenant.moveInDate}
                </h6>
              <h6>
                Move out Date: {tenant.moveOutDate}
              </h6>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Names</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
