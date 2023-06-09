import React, { useEffect, useState } from "react";
import * as datatable from "../../../data/Table/datatable/datatable";
import { Link, NavLink } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByRole, userDelete, userUpdate } from "../../../redux/Action/AuthAction";
import { SimpleModal } from "../../Modal/SimpleModal";
import { WarningModal } from "../../Modal/WarningModal";
import { getCollegeList } from "../../../redux/Action/PropertyAction";
export default function Editors() {
  const dispatch = useDispatch();

  const { users,college,tab_status } = useSelector(state => ({
    users: state?.userAuth?.users,
    college: state?.property?.college,
    tab_status: state?.property?.tab_status,
  }));

console.log(college,"college")

  useEffect(() => {
    dispatch(getCollegeList())
  }, [])

  console.log(college, "affiliate_approve")

  const [show, setShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [editUser, setEditUser] = useState();
  const [deleteId, setDeleteId] = useState();

  const handleClickOpen = (scrollType, row) => () => {
    setEditUser(row)
    setOpen(true);
    setScroll(scrollType);
  };
  const handleStatusUpdate = (row) => () => {
    dispatch(userUpdate(row?._id, {...row,type:"property"}));
    dispatch(getCollegeList())
  };

  const handleClose = () => {
    setOpen(false);
  };

  const userDeleteAction = (id) => {
    dispatch(userDelete(deleteId))
    dispatch(fetchUserByRole(2))
  }

  useEffect(() => {
    dispatch(fetchUserByRole(2))
  }, [])

  const handleShow = (id) => () => {
    setDeleteId(id)
    setShow(true)
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Property List</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Property 
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
            Property List
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <NavLink to="/add-property" className="btn btn-primary btn-icon text-white me-3">
            <span>
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add Property
          </NavLink>
        </div>
      </div>

      <Row className=" row-sm">
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Property List</h3>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <datatable.ProrpertyListTable 
                 handleStatusUpdate={handleStatusUpdate} 
                  handleShow={handleShow}
                   userDeleteAction={userDeleteAction} 
                   handleClickOpen={handleClickOpen} 
                   tab_status={tab_status}
                   college={college} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <SimpleModal role={2} editUser={editUser} open={open} scroll={scroll} handleClose={handleClose} />
      <WarningModal setShow={setShow} userDeleteAction={userDeleteAction} show={show} handleShow={handleShow} />
    </div>
  );
}
