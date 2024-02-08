import React from "react";
import { Button, Col, Form, Navbar, Row } from "react-bootstrap";
import { getPokemonDetails } from "../../services/apiServices";

function Searchbar(props) {
  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      className="bg-body-tertiary justify-content-center p-3"
    >
      <div>
        <Row>
          <h3 className="text-light fs-5">Name or Number</h3>
        </Row>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(e) => {
                props.setQuery(e.target.value);
                if (e.target.value === "") {
                  props.setSearchedData(null);
                }
              }}
            />
          </Col>
          <Col xs="auto">
            <Button
              onClick={async () => {
                const data = await getPokemonDetails(
                  `https://pokeapi.co/api/v2/pokemon/${props.query}`
                );
                props.setSearchedData(data);
              }}
              type="button"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    </Navbar>
  );
}

export default Searchbar;
