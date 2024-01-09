import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
import NoData from "./noData";

const CardDetails = ({ itemsData }) => {
  return (
    <Zoom>
      <Row className="d-flex">
        {itemsData.length >= 1 ? (
          itemsData.map((items) => {
            return (
              <Col sm="6" md="4" lg="3" key={items.id}>
                <Card className="m-2 main-card">
                  <Card.Img variant="top" src={items.img} className="card-img" />
                  <Card.Body className="text-center">
                    <Card.Title>
                      <div className="item-title">{items.title}</div>
                    </Card.Title>
                    <Card.Text>
                      <div className="item-description">
                        {items.description}
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between card-footer">
                    <div>Items price </div>
                    <div> {items.price}</div>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })
        ) : (
          <div className="d-flex justify-content-center">
            <NoData />
          </div>
        )}
      </Row>
    </Zoom>
  );
};

export default CardDetails;
