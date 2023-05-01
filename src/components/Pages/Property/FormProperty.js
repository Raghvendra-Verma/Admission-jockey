import React, { useEffect, useState } from "react";
import * as datatable from "../../../data/Table/datatable/datatable";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  Form,
  FormGroup,
  FormControl,
  ListGroup,
  Breadcrumb,
} from "react-bootstrap";
import * as formwizard from "../../../data/Form/formwizard/formwizard";
import { StatusModal } from "../../Modal/StatusModal";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createStatus } from "../../../redux/Action/Status";
import { getPropertyType } from "../../../redux/Action/PropertyAction";
import { StepForm } from "./StepForm/StepForm";

export default function FormProperty() {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [activeId, setActiveId] = React.useState();
  const [activeChildId, setChildActiveId] = React.useState();
  

  const { property } = useSelector(state => ({
    property: state?.property?.property,
  }));
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getPropertyType())
  }, [])



  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Add Property</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Property
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Add Property
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

      </div>


     
        <Row className=" row-sm">
          <Col lg={12} xl={12} md={12} sm={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Add Property</Card.Title>
              </Card.Header>
              <Card.Body>
                <StepForm />
              </Card.Body>

            </Card>
          </Col>
        </Row>
    
      <StatusModal open={open} scroll={scroll} handleClose={handleClose} />
    </div>
  );
}
