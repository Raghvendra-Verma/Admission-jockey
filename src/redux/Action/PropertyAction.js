import API from "../../service/API";
import { FAILURE_ADMISSION_PROCESS_LIST, FAILURE_AFFILIATE_APPROVE, FAILURE_ANNOUNCEMENT_LIST, FAILURE_COLLEGE_LIST, FAILURE_FAQS_LIST, FAILURE_GALLERY_LIST, FAILURE_LOAN_LIST, FAILURE_PLACEMENT_LIST, FAILURE_SCHOLARSHIP_LIST, FAILURE_TEAM_LIST, GET_ADMISSION_PROCESS_LIST, GET_AFFILIATE_APPROVE, GET_ANNOUNCEMENT_LIST, GET_COLLEGE_LIST, GET_FAQS_LIST, GET_GALLERY_LIST, GET_LOAN_LIST, GET_PLACEMENT_LIST, GET_SCHOLARSHIP_LIST, GET_TEAM_LIST, PROPERTY_ADMISSION_PROCESS_ADD_FAILURE, PROPERTY_ADMISSION_PROCESS_ADD_REQUEST, PROPERTY_ADMISSION_PROCESS_ADD_SUCCESS, PROPERTY_ADMISSION_PROCESS_UPDATE_FAILURE, PROPERTY_ADMISSION_PROCESS_UPDATE_REQUEST, PROPERTY_ADMISSION_PROCESS_UPDATE_SUCCESS, PROPERTY_ANNOUNCEMENT_ADD_FAILURE, PROPERTY_ANNOUNCEMENT_ADD_REQUEST, PROPERTY_ANNOUNCEMENT_ADD_SUCCESS, PROPERTY_ANNOUNCEMENT_UPDATE_FAILURE, PROPERTY_ANNOUNCEMENT_UPDATE_REQUEST, PROPERTY_ANNOUNCEMENT_UPDATE_SUCCESS, PROPERTY_FAQS_ADD_FAILURE, PROPERTY_FAQS_ADD_REQUEST, PROPERTY_FAQS_ADD_SUCCESS, PROPERTY_FAQS_UPDATE_FAILURE, PROPERTY_FAQS_UPDATE_REQUEST, PROPERTY_FAQS_UPDATE_SUCCESS, PROPERTY_FORM_FAILURE, PROPERTY_FORM_REQUEST, PROPERTY_FORM_SUCCESS, PROPERTY_GALLERY_ADD_FAILURE, PROPERTY_GALLERY_ADD_REQUEST, PROPERTY_GALLERY_ADD_SUCCESS, PROPERTY_LOAN_ADD_FAILURE, PROPERTY_LOAN_ADD_REQUEST, PROPERTY_LOAN_ADD_SUCCESS, PROPERTY_LOAN_UPDATE_FAILURE, PROPERTY_LOAN_UPDATE_REQUEST, PROPERTY_LOAN_UPDATE_SUCCESS, PROPERTY_PLACEMENT_ADD_FAILURE, PROPERTY_PLACEMENT_ADD_REQUEST, PROPERTY_PLACEMENT_ADD_SUCCESS, PROPERTY_PLACEMENT_UPDATE_FAILURE, PROPERTY_PLACEMENT_UPDATE_REQUEST, PROPERTY_PLACEMENT_UPDATE_SUCCESS, PROPERTY_SCHOLARSHIP_ADD_FAILURE, PROPERTY_SCHOLARSHIP_ADD_REQUEST, PROPERTY_SCHOLARSHIP_ADD_SUCCESS, PROPERTY_SCHOLARSHIP_UPDATE_FAILURE, PROPERTY_SCHOLARSHIP_UPDATE_REQUEST, PROPERTY_SCHOLARSHIP_UPDATE_SUCCESS, PROPERTY_TEAM_ADD_FAILURE, PROPERTY_TEAM_ADD_REQUEST, PROPERTY_TEAM_ADD_SUCCESS, PROPERTY_TEAM_UPDATE_FAILURE, PROPERTY_TEAM_UPDATE_REQUEST, PROPERTY_TEAM_UPDATE_SUCCESS, PROPERTY_TYPE_ADD_FAILURE, PROPERTY_TYPE_ADD_REQUEST, PROPERTY_TYPE_ADD_SUCCESS, PROPERTY_TYPE_GET_FAILURE, PROPERTY_TYPE_GET_REQUEST, PROPERTY_TYPE_GET_SUCCESS,PROPERTY_TYPE_UPDATE_REQUEST,
  PROPERTY_TYPE_UPDATE_SUCCESS,PROPERTY_TYPE_UPDATE_FAILURE,PROPERTY_TYPE_DELETE_REQUEST,PROPERTY_TYPE_DELETE_SUCCESS,PROPERTY_TYPE_DELETE_FAILURE, SUCCESS_ADMISSION_PROCESS_LIST, SUCCESS_AFFILIATE_APPROVE, SUCCESS_ANNOUNCEMENT_LIST, SUCCESS_COLLEGE_LIST, SUCCESS_FAQS_LIST, SUCCESS_GALLERY_LIST, SUCCESS_LOAN_LIST, SUCCESS_PLACEMENT_LIST, SUCCESS_SCHOLARSHIP_LIST, SUCCESS_TEAM_LIST } from "../Constants/Constants";
import { ToastContainer, toast } from 'react-toastify';

//Add Property action
export const createPropertyType = (property) => async (dispatch) => {
  try {
    //console.log("api",API);
    dispatch({ type: PROPERTY_TYPE_ADD_REQUEST });
    const { data } = await API.post(`/createPropertyType`, property);

    console.log("PROPERTY_TYPE_ADD_REQUEST",data)

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_TYPE_ADD_SUCCESS, payload: data?.propertyCreated });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_TYPE_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};


export const getPropertyType = () => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_TYPE_GET_REQUEST });
    const { data } = await API.get(`/getPropertyType`);

    console.log(data, "getPropertyType")

    dispatch({ type: PROPERTY_TYPE_GET_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: PROPERTY_TYPE_GET_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};

export const updatePropertyType = (id,property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_TYPE_UPDATE_REQUEST });
    const { data } = await API.put(`/updatePropertyType?id=${id}`, property);
console.log(data,"llllllooooo")
    dispatch({ type: PROPERTY_TYPE_UPDATE_SUCCESS, payload:data });

        toast.success("Property updated successfully.")

  } catch (error) {
    dispatch({
      type: PROPERTY_TYPE_UPDATE_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};

export const deletePropertyType = (id) => async (dispatch) => {
  try {
    console.log("delete",id);
    dispatch({ type: PROPERTY_TYPE_DELETE_REQUEST });
    const { data } = await API.delete(`/deletePropertyType?id=${id}`);
console.log(data,"llllllooooo")
    dispatch({ type: PROPERTY_TYPE_DELETE_SUCCESS, payload:data });

    toast.success("Property deleted successfully.")

  } catch (error) {
    dispatch({
      type: PROPERTY_TYPE_DELETE_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};


//PROPERTY FORMS
export const preopertyForm = (property, navigate) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_FORM_REQUEST });
    const { data } = await API.post(`/collegeCreate`, property);

    console.log("PROPERTY_FORM_REQUEST",data);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_FORM_SUCCESS, payload: data?.college });
      navigate("/property-list");
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_FORM_FAILURE
    });
    toast.error(error?.message)
  }
};




export const getCollegeAffliateApprove = () => async (dispatch) => {
  try {
    dispatch({ type: GET_AFFILIATE_APPROVE });
    const { data } = await API.get(`/getCollegeAffliateApprove`);

    console.log("getCollegeAffliateApprove",data);

    dispatch({ type: SUCCESS_AFFILIATE_APPROVE, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_AFFILIATE_APPROVE
    });
    toast.error(error?.message)
  }
};



export const getCollegeList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_COLLEGE_LIST });
    const { data } = await API.get(`/getCollegeList`);

    console.log("getCollegeAffliateApprove", data);

    dispatch({ type: SUCCESS_COLLEGE_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_COLLEGE_LIST
    });
    toast.error(error?.message)
  }
};




//Add createGallery action
export const createGallery = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_GALLERY_ADD_REQUEST });
    const { data } = await API.post(`/createGallery`, property);
    console.log(data, "PROPERTY_GALLERY_ADD_REQUEST")

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_GALLERY_ADD_SUCCESS, payload: data?.gallery });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_GALLERY_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};



export const getGallery = () => async (dispatch) => {
  try {
    dispatch({ type: GET_GALLERY_LIST });
    const { data } = await API.get(`/getGallery`);
    console.log(data, "getGallery")

    dispatch({ type: SUCCESS_GALLERY_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_GALLERY_LIST
    });
    toast.error(error?.message)
  }
};



//Add createTeamLeader action
export const createTeamLeader = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_TEAM_ADD_REQUEST });
    const { data } = await API.post(`/createTeamLeader`, property);

    console.log("PROPERTY_TEAM_ADD_REQUEST", data);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_TEAM_ADD_SUCCESS, payload: data?.team_lead });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_TEAM_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};

//Add updateTeamLeader action
export const updateTeamLeader = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_TEAM_UPDATE_REQUEST });
    const { data } = await API.post(`/updateTeamLeader`, property);

    console.log("PROPERTY_TEAM_UPDATE_REQUEST", data);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_TEAM_UPDATE_SUCCESS, payload: data?.team_lead });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_TEAM_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};


//Get TeamLeader action
export const getTeamLead = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TEAM_LIST });
    const { data } = await API.get(`/getTeamLead`);

    console.log("getGallery", data);

    dispatch({ type: SUCCESS_TEAM_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_TEAM_LIST
    });
    toast.error(error?.message)
  }
};


//Add createPlacement action
export const createPlacement = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_PLACEMENT_ADD_REQUEST });
    const { data } = await API.post(`/createPlacement`, property);

    console.log("PROPERTY_PLACEMENT_ADD_REQUEST", data);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_PLACEMENT_ADD_SUCCESS, payload: data?.placement });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_PLACEMENT_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};

//Add updatePlacement action
export const updatePlacement = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_PLACEMENT_UPDATE_REQUEST });
    const { data } = await API.post(`/updatePlacement`, property);

    console.log("PROPERTY_PLACEMENT_UPDATE_REQUEST", data);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_PLACEMENT_UPDATE_SUCCESS, payload: data?.placement });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_PLACEMENT_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};



//Get placement action
export const getPlacement = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PLACEMENT_LIST });
    const { data } = await API.get(`/getPlacement`);

    console.log("getPlacement", data);

    dispatch({ type: SUCCESS_PLACEMENT_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_PLACEMENT_LIST
    });
    toast.error(error?.message)
  }
};


//Add createLoan action
export const createLoan = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_LOAN_ADD_REQUEST });
    const { data } = await API.post(`/createLoan`, property);

    console.log("PROPERTY_LOAN_ADD_REQUEST", data);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_LOAN_ADD_SUCCESS, payload: data?.loan });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_LOAN_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};



//Add updateTeamLeader action
export const updateLoan = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_LOAN_UPDATE_REQUEST });
    const { data } = await API.post(`/updateLoan`, property);

    console.log("PROPERTY_LOAN_UPDATE_REQUEST", data);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_LOAN_UPDATE_SUCCESS, payload: data?.loan });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_LOAN_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};


//get Loan Action
export const getLoan = () => async (dispatch) => {
  try {
    dispatch({ type: GET_LOAN_LIST });
    const { data } = await API.get(`/getLoan`);

    console.log(data, "getLoan")

    dispatch({ type: SUCCESS_LOAN_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_LOAN_LIST
    });
    toast.error(error?.message)
  }
};



//Add createScholarship action
export const createScholarship = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_SCHOLARSHIP_ADD_REQUEST });
    const { data } = await API.post(`/createScholarship`, property);
    console.log(data, "PROPERTY_SCHOLARSHIP_ADD_REQUEST")

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_SCHOLARSHIP_ADD_SUCCESS, payload: data?.scholarship });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_SCHOLARSHIP_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};

//Add updateTeamLeader action
export const updateScholarship = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_SCHOLARSHIP_UPDATE_REQUEST });
    const { data } = await API.post(`/updateScholarship`, property);
    console.log(data, "PROPERTY_SCHOLARSHIP_UPDATE_REQUEST")

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_SCHOLARSHIP_UPDATE_SUCCESS, payload: data?.scholarship });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_SCHOLARSHIP_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};

export const getScholarship = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SCHOLARSHIP_LIST });
    const { data } = await API.get(`/getScholarship`);
    console.log(data, "getGallery")

    dispatch({ type: SUCCESS_SCHOLARSHIP_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_SCHOLARSHIP_LIST
    });
    toast.error(error?.message)
  }
};
//Add createTeamLeader action
export const createAdmission_process = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_ADMISSION_PROCESS_ADD_REQUEST });
    const { data } = await API.post(`/createAdmission_process`, property);
    console.log(data, "PROPERTY_ADMISSION_PROCESS_ADD_REQUEST")

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_ADMISSION_PROCESS_ADD_SUCCESS, payload: data?.admission_process });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_ADMISSION_PROCESS_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};

//Add updateTeamLeader action
export const updateAdmission_process = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_ADMISSION_PROCESS_UPDATE_REQUEST });
    const { data } = await API.post(`/updateAdmission_process`, property);
    console.log(data, "PROPERTY_ADMISSION_PROCESS_UPDATE_REQUEST")

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_ADMISSION_PROCESS_UPDATE_SUCCESS, payload: data?.admission_process });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_ADMISSION_PROCESS_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};

export const getAdmission_process = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ADMISSION_PROCESS_LIST });
    const { data } = await API.get(`/getAdmission_process`);
    console.log(data, "getGallery")

    dispatch({ type: SUCCESS_ADMISSION_PROCESS_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_ADMISSION_PROCESS_LIST
    });
    toast.error(error?.message)
  }
};
//Add createTeamLeader action
export const createAnnouncement = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_ANNOUNCEMENT_ADD_REQUEST });
    const { data } = await API.post(`/createAnnouncement`, property);
    console.log(data, "PROPERTY_ANNOUNCEMENT_ADD_REQUEST")

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_ANNOUNCEMENT_ADD_SUCCESS, payload: data?.announcement });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_ANNOUNCEMENT_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};

//Add updateTeamLeader action
export const updateAnnouncement = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_ANNOUNCEMENT_UPDATE_REQUEST });
    const { data } = await API.post(`/updateAnnouncement`, property);
    console.log(data, "PROPERTY_ANNOUNCEMENT_UPDATE_REQUEST")

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_ANNOUNCEMENT_UPDATE_SUCCESS, payload: data?.announcement });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_ANNOUNCEMENT_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};

export const getAnnouncement = () => async (dispatch) => {
  try {

    dispatch({ type: GET_ANNOUNCEMENT_LIST });
    const { data } = await API.get(`/getAnnouncement`);
    console.log(data, "getGallery")

    dispatch({ type: SUCCESS_ANNOUNCEMENT_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_ANNOUNCEMENT_LIST
    });
    toast.error(error?.message)
  }
};

//Add createTeamLeader action
export const createFaqs = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_FAQS_ADD_REQUEST });
    const { data } = await API.post(`/createFaqs`, property);
    console.log(data, "PROPERTY_FAQS_ADD_REQUEST")

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_FAQS_ADD_SUCCESS, payload: data?.faqs });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_FAQS_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};

//Add updateTeamLeader action
export const updateFaqs = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_FAQS_UPDATE_REQUEST });
    const { data } = await API.post(`/updateFaqs`, property);
    console.log(data, "PROPERTY_FAQS_UPDATE_REQUEST")

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_FAQS_UPDATE_SUCCESS, payload: data?.faqs });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_FAQS_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};

export const getFaqs = () => async (dispatch) => {
  try {
    dispatch({ type: GET_FAQS_LIST });
    const { data } = await API.get(`/getFaqs`);
    console.log(data, "getGallery")

    dispatch({ type: SUCCESS_FAQS_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_FAQS_LIST
    });
    toast.error(error?.message)
  }
};

// export const statusCreate = (status) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_STATUS_CREATE_REQUEST });
//     const { data } = await API.post(`/statusCreate`, status);
// console.log(data,"llllllooooo")
//     dispatch({ type: USER_STATUS_CREATE_SUCCESS, payload:data });

//         toast.success("Status created successfully.")

//   } catch (error) {
//     dispatch({
//       type: USER_STATUS_CREATE_FAILURE,
//       // payload: error.message && error.message ? error.message : '',
//     });
//   }
// };

// export const statusFetch = () => async (dispatch) => {
//   try {
//     dispatch({ type: USER_STATUS_REQUEST });
//     const { data } = await API.get(`/statusGet`);

//     dispatch({ type: USER_STATUS_SUCCESS, payload:data });

//   } catch (error) {
//     dispatch({
//       type: USER_STATUS_FAILURE,
//       // payload: error.message && error.message ? error.message : '',
//     });
//   }
// };

// export const statusUpdate = (id,status) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_STATUS_UPDATE_REQUEST });
//     const { data } = await API.put(`/statusUpdate?id=${id}`, status);
// console.log(data,"llllllooooo")
//     dispatch({ type: USER_STATUS_UPDATE_SUCCESS, payload:data });

//         toast.success("Status updated successfully.")

//   } catch (error) {
//     dispatch({
//       type: USER_STATUS_UPDATE_FAILURE,
//       // payload: error.message && error.message ? error.message : '',
//     });
//   }
// };

// export const statusDelete = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_STATUS_DELETE_REQUEST });
//     const { data } = await API.delete(`/statusDelete?id=${id}`);
// console.log(data,"llllllooooo")
//     dispatch({ type: USER_STATUS_DELETE_SUCCESS, payload:data });

//     toast.success("Status deleted successfully.")

//   } catch (error) {
//     dispatch({
//       type: USER_STATUS_DELETE_FAILURE,
//       // payload: error.message && error.message ? error.message : '',
//     });
//   }
// };

