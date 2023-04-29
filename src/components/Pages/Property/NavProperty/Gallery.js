import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getGallery } from "../../../../redux/Action/PropertyAction";
import { GalleryModal } from "../../../Modal/GalleryModal";
import PropertyDetails from "../PropertyDetails";

const images = [
  {
    id: "image1",
    className: "d-block img-fluid br-5",
    src: require("../../../../assets/images/media/1.jpg"),
  },
  {
    id: "image2",
    className: "d-block img-fluid br-5",
    src: require("../../../../assets/images/media/2.jpg"),
  },
  {
    id: "image3",
    className: "d-block img-fluid br-5",
    src: require("../../../../assets/images/media/13.jpg"),
  },
  {
    id: "image4",
    className: "d-block img-fluid br-5",
    src: require("../../../../assets/images/media/12.jpg"),
  },
  {
    id: "image5",
    className: "d-block img-fluid br-5",
    src: require("../../../../assets/images/media/8.jpg"),
  },
  {
    id: "image6",
    className: "d-block img-fluid br-5",
    src: require("../../../../assets/images/media/9.jpg"),
  },
];

//GalleryImageswidgets
function PhotobookImage({ url }) {
  return (
    <div>
      <div>
        <img
          className="d-block img-fluid br-5"
          crossOrigin="annonymous"
          src={url}
          alt=""
        />
      </div>
    </div>
  );
}

const PhotoItem = ({ image, group }) => (
  <div>
    <LightgalleryItem group={group} src={image}>
      <PhotobookImage url={image} />
    </LightgalleryItem>
  </div>
);

const Gallery = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [show, setShow] = useState(false);
  const [editGallery, setEditGallery] = useState(false);

  const { gallery } = useSelector((state) => ({
    gallery: state?.property?.gallery,
  }));

  console.log(gallery, "gallery");
  const handleClickOpen = (scrollType, row) => () => {
    setEditGallery(row);
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getGallery());
  }, []);
  return (
    <>
      <PropertyDetails>
        <div className="ms-auto pageheader-btn">
          <NavLink
            onClick={handleClickOpen("paper")}
            to="#"
            className="btn btn-primary btn-icon text-white me-3"
          >
            <span>
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add Gallery
          </NavLink>
        </div>
        {gallery?.length > 0 &&
          gallery?.map((item, i) => {
            return (
              <>
                <Card className="card">
                  <Card.Header>
                    <h3 className="card-title">{item?.title}</h3>

                    <div className="ms-auto pageheader-btn">
                      <NavLink
                        onClick={handleClickOpen("paper", item)}
                        to="#"
                        className="btn btn-primary btn-icon text-white me-3"
                      >
                        <span>
                          <i className="fe fe-edit"></i>&nbsp;
                        </span>
                        Edit
                      </NavLink>
                    </div>
                  </Card.Header>
                  <Card.Body className=" p-2">
                    <div className="widgetg">
                      <div
                        id="lightgallery"
                        className="row img-gallery"
                        lg-uid="lg0"
                      >
                        <LightgalleryProvider>
                          {item?.gallery_img?.map((image, index) => {
                            return (
                              <div className="col-4" key={index}>
                                <PhotoItem
                                  image="http://localhost:5500/images"
                                  // image={`${process.env.REACT_APP_API_BASE_URL}/${image}`}
                                  className="br-5"
                                  group="group1"
                                />
                              </div>
                            );
                          })}
                        </LightgalleryProvider>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}

        <GalleryModal
          editGallery={editGallery}
          open={open}
          scroll={scroll}
          handleClose={handleClose}
        />
      </PropertyDetails>
    </>
  );
};

export default Gallery;
