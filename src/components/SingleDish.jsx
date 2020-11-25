import React from "react"
import { Row, Col, Image, Badge, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"

const SingleDish = (props) => (
  <>
    <Row>
      <Col md={8} className="ml-auto mr-auto">
        <Row>
          <Col md={4}>
            {props.dish.id ? (
              <Link to={"/details/" + props.dish.id}>
                {" "}
                {props.dish.image ? (
                  <Image src={props.dish.image} className="my-2 w-100 h-auto" />
                ) : (
                  <Alert variant="danger" className="mt-5 ">
                    Missing dish image prop
                  </Alert>
                )}
              </Link>
            ) : (
              <Alert variant="danger" className="mt-5 ">
                missing dish id
              </Alert>
            )}
          </Col>
          <Col md={8} className="mt-auto mb-auto">
            <h4>
              {props.dish.name}
              {props.dish.price ? (
                <Badge variant="warning" className="ml-2">
                  {props.dish.price}
                </Badge>
              ) : (
                <Alert variant="danger" className="mt-5 ">
                  Missing dish price
                </Alert>
              )}

              <Badge variant="danger">{props.dish.label}</Badge>
            </h4>
            {props.dish.description}
          </Col>
        </Row>
      </Col>
    </Row>
  </>
)

export default SingleDish
