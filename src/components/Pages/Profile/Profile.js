import React, { useEffect, useState } from "react";
import * as profiledata from "../../../data/Pages/profiledata/profiledata";
import user8 from "../../../assets/images/profile__.png";
import { Tabs, Tab, Breadcrumb, Card, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { SimpleModal } from "../../Modal/SimpleModal";
import { fetchUserByRole, userUpdate } from "../../../redux/Action/AuthAction";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [editUser, setEditUser] = useState();

  const dispatch = useDispatch();

  const { users } = useSelector(state => ({
    users: state?.userAuth?.users,
  }));

  //console.log("Users",users);
  //console.log("UserName",users.users[0].name);

  const handleClickOpen = (scrollType, row) => () => {
    setEditUser({
      "_id": sessionStorage.getItem("_id") || "",
      "name": sessionStorage.getItem("name") || "",
      "email": sessionStorage.getItem("email") || "",
      "contact_no": sessionStorage.getItem("contact_no") || "",
      "description": sessionStorage.getItem("description") || "",
       "alt_contact": sessionStorage.getItem("alt_contact") || "",
      "cafename": sessionStorage.getItem("name") || "",
      "cafecity": sessionStorage.getItem("name") || "",
      "role": sessionStorage.getItem("role"),
    })
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchUserByRole(sessionStorage.getItem("role")))
  }, [])

//console.log("pro",users?.users);
  //const profileData = users?.users?.filter((item, i) => item?._id );
  //console.log("id",sessionStorage.getItem("userId"));
  const profileData = users?.users?.filter((item, i) => item?._id == sessionStorage.getItem("userId"))

  console.log("profileData",profileData);

  const handleUpdateProfile = (profileData) =>{
    let formData = new FormData();
    for (let value in profileData) {
      formData.append(value, profileData[value]);
    }

    console.log("formData",formData);

    dispatch(userUpdate(profileData?._id, formData)).then((data)=>{

      if(data!=undefined){

        console.log(data,"jooooooooooooooo")

        sessionStorage.setItem("image",data?.image)
        window.location.reload()
        dispatch(fetchUserByRole(profileData?.role))
      }
    });
   
  }

  

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Profile</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Profile
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <Row id="user-profile">
        <Col lg={12}>
          <Card className=" bg-transparent shadow-none border-0">
            <Card.Body className=" bg-white">
              <div className="wideget-user">
                <Row>
                  <Col lg={12} md={12} xl={6}>
                    <div className="wideget-user-desc d-sm-flex">
                      <div style={{position:"relative"}} className="wideget-user-img">
                      <input 
                      type="file" 
                      onChange={(e)=>handleUpdateProfile(profileData && {...profileData[0],image:e.currentTarget.files[0]})} 
                      className="input-file-up profile_img_hover" 
                      name="image"
                      />
                      {
                        profileData && profileData[0]?.image != undefined ?
                        <img className="profileImgMain" crossorigin="anonymous" src="http://localhost:5500/images/1682767874495-JSS_Logo.png" alt="img" /> :
                        <img className="" src={user8} alt="img" />
                        // <img className="profileImgMain" crossorigin="anonymous" src={`${process.env.REACT_APP_IMG_URL}${profileData[0]?.image}`} alt="img" /> :
                        // <img className="" src={user8} alt="img" />
                      }
                       
                      </div>
                      <div className="user-wrap">
                        <h4>{profileData && profileData[0]?.name}</h4>
                        <h6 className="text-muted mb-3">
                          Member Since: {moment(profileData && profileData[0]?.createdAt).format("MMM Do YY")}
                        </h6>

                      </div>
                    </div>
                  </Col>
                  <Col lg={12} md={12} xl={6}>
                    <div className="text-xl-right mt-4 mt-xl-0">
                      {/* <Link
                        to={`${process.env.PUBLIC_URL}/pages/mailInbox/`}
                        className="btn btn-white me-1"
                      >
                        Message
                      </Link> */}
                      <Link
                        onClick={handleClickOpen("paper", profileData && profileData[0])}
                        // to={`${process.env.PUBLIC_URL}/pages/editProfile/`}
                        className="btn btn-primary me-1"
                      >
                        Edit Profile
                      </Link>
                    </div>

                  </Col>
                </Row>
              </div>
            </Card.Body>
            <div className="border-top ">
              <div className="wideget-user-tab">
                <div className="tab-menu-heading">
                  <div className="tabs-menu1 profiletabs">
                    <Tabs
                      variant="Tabs"
                      defaultActiveKey="Profile"
                      id=" tab-51"
                      className="tab-content tabesbody "
                    >
                      <Tab eventKey="Profile" title="Profile">
                        <div className="tab-pane profiletab show">
                          <div id="profile-log-switch">
                            <Card>
                              <Card.Body className="bg-white">
                                <div className="media-heading">
                                  <h5>
                                    <strong>Personal Information</strong>
                                  </h5>
                                </div>
                                <div className="table-responsive p-1">
                                  <Table className="table row table-borderless">
                                    <tbody className="col-lg-12 col-xl-6 p-0">
                                      <tr>
                                        <td>
                                          <strong>Full Name :</strong>
                                          {profileData && profileData[0]?.name}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Location :</strong> USA
                                        </td>
                                      </tr>

                                    </tbody>
                                    <tbody className="col-lg-12 col-xl-6 p-0">

                                      <tr>
                                        <td>
                                          <strong>Email :</strong>
                                          {profileData && profileData[0]?.email}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Phone :</strong> {profileData && profileData[0]?.contact_no}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                                <Row className="row profie-img">
                                  <Col md={12}>
                                    <div className="media-heading">
                                      <h5>
                                        <strong>Biography</strong>
                                      </h5>
                                    </div>
                                    <p>
                                    {profileData && profileData[0]?.description}
                                    </p>
                                 
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </div>
                        </div>
                      </Tab>

                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <SimpleModal profile="profile" role={sessionStorage.getItem("role")} editUser={profileData && profileData[0]} open={open} scroll={scroll} handleClose={handleClose} />
    </div>
  );
}
