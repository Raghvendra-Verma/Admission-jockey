import API from "../../service/API";
import { USER_STATUS_FAILURE, USER_STATUS_REQUEST, USER_STATUS_SUCCESS, USER_CHANGE_PASS_FAILURE, USER_CHANGE_PASS_REQUEST, USER_CHANGE_PASS_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_MAIL_FAILURE, USER_MAIL_REQUEST, USER_MAIL_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_RESET_FAILURE, USER_RESET_REQUEST, USER_RESET_SUCCESS, USER_STATUS_FOR_REQUEST, USER_STATUS_FOR_SUCCESS, USER_STATUS_FOR_FAILURE, USER_STATUS_CREATE_REQUEST, USER_STATUS_CREATE_SUCCESS, USER_STATUS_CREATE_FAILURE, USER_STATUS_UPDATE_REQUEST, USER_STATUS_UPDATE_SUCCESS, USER_STATUS_UPDATE_FAILURE, USER_STATUS_DELETE_SUCCESS, USER_STATUS_DELETE_REQUEST, USER_STATUS_DELETE_FAILURE } from "../Constants/Constants";
import { ToastContainer, toast } from 'react-toastify';

//Add Status action
export const createStatus = (status) => async (dispatch) => {
  try {
    dispatch({ type: USER_STATUS_FOR_REQUEST });
    const { data } = await API.post(`/createStatus`, status);

    dispatch({ type: USER_STATUS_FOR_SUCCESS });
    
    if(data.status_code == 200){
        toast.success(data?.message)
     
    }else{
      toast.error(data?.message)
    }
  } catch (error) {
    dispatch({
      type: USER_STATUS_FOR_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};

export const statusCreate = (status) => async (dispatch) => {
  try {
    dispatch({ type: USER_STATUS_CREATE_REQUEST });
    const { data } = await API.post(`/statusCreate`, status);
console.log(data,"llllllooooo")
    dispatch({ type: USER_STATUS_CREATE_SUCCESS, payload:data });

        toast.success("Status created successfully.")

  } catch (error) {
    dispatch({
      type: USER_STATUS_CREATE_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};

export const statusFetch = () => async (dispatch) => {
  try {
    dispatch({ type: USER_STATUS_REQUEST });
    const { data } = await API.get(`/statusGet`);

    dispatch({ type: USER_STATUS_SUCCESS, payload:data });

  } catch (error) {
    dispatch({
      type: USER_STATUS_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};

export const statusUpdate = (id,status) => async (dispatch) => {
  try {
    dispatch({ type: USER_STATUS_UPDATE_REQUEST });
    const { data } = await API.put(`/statusUpdate?id=${id}`, status);
console.log(data,"llllllooooo")
    dispatch({ type: USER_STATUS_UPDATE_SUCCESS, payload:data });

        toast.success("Status updated successfully.")

  } catch (error) {
    dispatch({
      type: USER_STATUS_UPDATE_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};

export const statusDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_STATUS_DELETE_REQUEST });
    const { data } = await API.delete(`/statusDelete?id=${id}`);
console.log(data,"llllllooooo")
    dispatch({ type: USER_STATUS_DELETE_SUCCESS, payload:data });

    toast.success("Status deleted successfully.")

  } catch (error) {
    dispatch({
      type: USER_STATUS_DELETE_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};

// //Add Status action
// export const fetchStatus = (status) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_STATUS_REQUEST });
//     const { data } = await API.post(`/createStatus`, status);

//     dispatch({ type: USER_STATUS_SUCCESS });
//     if(data.status_code){
//         toast.success(data?.message)
     
//     }else{
//       toast.error(data?.message)
//     }
//   } catch (error) {
//     dispatch({
//       type: USER_STATUS_FAILURE,
//       // payload: error.message && error.message ? error.message : '',
//     });
//   }
// };



