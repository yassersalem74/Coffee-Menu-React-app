import React from "react";
import { Roll } from "react-awesome-reveal";
import { Row, Col, Button } from "react-bootstrap";
import NoData from "./noData";

// to filter by category
const Categories = ({ filterByCategory, allCategory }) => {
  const onFilter = (cat) => {
    filterByCategory(cat);
  };

  return (
    <Row className="my-2 m-5">
      <Col sm="12" className="d-flex justify-content-center scroll-menu">
        <Roll>
          {allCategory.length >= 1 ? (
            allCategory.map((cat) => {
              return (
                <div>
                  <Button
                    onClick={() => onFilter(cat)}
                    variant="outline-dark"
                    className="btn-menu  mx-2"
                  >
                    {cat}
                  </Button>
                </div>
              );
            })
          ) : (
            <div className="d-flex justify-content-center">
            <NoData />
          </div>
          )}
        </Roll>
      </Col>
    </Row>
  );
};

export default Categories;
