import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

import Table from "../components/Table"

function Tenants() {
  // Setting our component's initial state
  const [tenants, setTenants] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all tenants and store them with settenants
  useEffect(() => {
    loadTenants()
  }, [])

  // Loads all tenants and sets them to tenants
  function loadTenants() {
    API.getTenants()
      .then(res => 
        setTenants(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a tenant from the database with a given id, then reloads tenants from the db
  function deleteTenant(id) {
    API.deleteTenant(id)
      .then(res => loadTenants())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.savetenant method to save the tenant data
  // Then reload tenants from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.unit && formObject.name) {
      API.saveTenant({
        unit: formObject.unit,
        name: formObject.name,
        rent: formObject.rent,
        moveInDate: formObject.moveInDate,
        moveOutDate: formObject.moveOutDate
      })
        .then(res => loadTenants())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <h3>Tenant Form</h3>
            <form>
              <Input
                onChange={handleInputChange}
                name="unit"
                placeholder="Unit (required)"
              />
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="rent"
                placeholder="Rent (required)"
              />
              <Input
                onChange={handleInputChange}
                name="moveInDate"
                placeholder="Move In Date (required)"
              />
                <Input
                onChange={handleInputChange}
                name="moveOutDate"
                placeholder="Move Out Date (required)"
              />
              
              <FormBtn
                disabled={!(formObject.name && formObject.unit)}
                onClick={handleFormSubmit}
              >
                Submit Tenant
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <h3>Tenant Details</h3>
            {tenants.length ? (
              <List>
                {tenants.map(tenant => (
                  <ListItem key={tenant._id}>
                    <Link to={"/tenants/" + tenant._id}>
                      <strong>
                        {tenant.unit} by {tenant.name}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteTenant(tenant._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <hr/>
      <Row>
      <Col size="md-6 sm-12">
            {tenants.length ? (
            <Table tenants = {tenants} key={tenants}> 
           

        </Table>
        ) : (
          <h3>No Results to Display</h3>
        )}
          </Col>
          <Col size="md-6 sm-12">
            <h3>
            {"This month's revenue is : " + tenants.reduce((total, next) => total + next.rent, 0)}
            </h3>
          </Col>
        

      </Row>

      </Container>
    );
  }


export default Tenants;
