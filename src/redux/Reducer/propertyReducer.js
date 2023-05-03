import { PROPERTY_ADMISSION_PROCESS_ADD_SUCCESS, PROPERTY_ADMISSION_PROCESS_UPDATE_SUCCESS, PROPERTY_ANNOUNCEMENT_ADD_SUCCESS, PROPERTY_ANNOUNCEMENT_UPDATE_SUCCESS, PROPERTY_FAQS_ADD_SUCCESS, PROPERTY_FAQS_UPDATE_SUCCESS, PROPERTY_FORM_SUCCESS, PROPERTY_GALLERY_ADD_SUCCESS, PROPERTY_LOAN_ADD_SUCCESS, PROPERTY_LOAN_UPDATE_SUCCESS, PROPERTY_PLACEMENT_ADD_SUCCESS, PROPERTY_PLACEMENT_UPDATE_SUCCESS, PROPERTY_SCHOLARSHIP_ADD_SUCCESS, PROPERTY_SCHOLARSHIP_UPDATE_SUCCESS, PROPERTY_TEAM_ADD_SUCCESS, PROPERTY_TEAM_UPDATE_SUCCESS, PROPERTY_TYPE_ADD_SUCCESS, PROPERTY_TYPE_GET_SUCCESS, PROPERTY_TYPE_UPDATE_SUCCESS,PROPERTY_TYPE_DELETE_SUCCESS,SUCCESS_ADMISSION_PROCESS_LIST, SUCCESS_AFFILIATE_APPROVE, SUCCESS_ANNOUNCEMENT_LIST, SUCCESS_COLLEGE_LIST, SUCCESS_FAQS_LIST, SUCCESS_GALLERY_LIST, SUCCESS_LOAN_LIST, SUCCESS_PLACEMENT_LIST, SUCCESS_SCHOLARSHIP_LIST, SUCCESS_TEAM_LIST } from '../Constants/Constants';

let initState = {
    property: [],
    affiliate_approve: {},
    college: [],
    tab_status: [],
    gallery: [],
    team_lead: [],
    placement: [],
    loan: [],
    scholarship: [],
    admission_process: [],
    announcement: [],
    faqs: []
}

const propertyReducer = (state = initState, action) => {
    switch (action.type) {

        case PROPERTY_TYPE_ADD_SUCCESS:
            //console.log( "PROPERTY_TYPE_ADD_SUCCESS",action.payload);
            //console.log("state",state);
            return ({
                ...state,
                property: [...state.property, action.payload.propertyCreated]
            });

        case PROPERTY_TYPE_GET_SUCCESS:
            // console.log( "PROPERTY_TYPE_GET_SUCCESS",action.payload);
            // console.log("state",state);
            return ({
                ...state,
                property: action.payload
            });

        case PROPERTY_TYPE_UPDATE_SUCCESS:
            console.log("ROPERTY_TYPE_UPDATE_SUCCESS",action.payload);
            console.log("property",action.payload.property);
            const array = action.payload.property;
            const latest = array.reduce(function (r, a) {
                return r.date > a.date ? r : a;
            });
            console.log("latest",latest._id);
            console.log("payload",action.payload.latest)
            //console.log("state",state);
            return ({
                // ...state,
                // property: action.payload
                ...state,
                property: state.property.map((item) =>
                    item?._id == latest._id ? latest : item
            )});
            
        case PROPERTY_TYPE_DELETE_SUCCESS:
            console.log("ROPERTY_TYPE_DELETE_SUCCESS",action.payload);
            return ({
                // ...state,
                // property: action.payload
                ...state,
                property: state.property.map((item) =>
                    item?._id == action.payload?._id ? { ...action.payload } : item
            )});

        case SUCCESS_AFFILIATE_APPROVE:
            return ({
                ...state,
                affiliate_approve: action.payload
            });

        case SUCCESS_COLLEGE_LIST:
            console.log(action.payload, "action.payload")
            return ({
                ...state,
                college: action.payload.colleges,
                tab_status: action.payload.tab_status
            });

        case PROPERTY_FORM_SUCCESS:
            return ({
                ...state,
                college: [...state.college, action.payload]
            });

        case SUCCESS_GALLERY_LIST:
            return ({
                ...state,
                gallery: action.payload
            });

        case PROPERTY_GALLERY_ADD_SUCCESS:
            return ({
                ...state,
                gallery: state.gallery.map((item) =>
                    item?._id == action.payload?._id ? { ...action.payload } : item
                )
            });
        case PROPERTY_TEAM_ADD_SUCCESS:
            return ({
                ...state,
                team_lead: [...state.team_lead, action.payload]
            });
        case PROPERTY_TEAM_UPDATE_SUCCESS:
            return ({
                ...state,
                team_lead: state.team_lead.map((item) =>
                    item?._id == action.payload?._id ? { ...action.payload } : item
                )
            });
        case SUCCESS_TEAM_LIST:
            return ({
                ...state,
                team_lead: action.payload
            });

        case PROPERTY_PLACEMENT_ADD_SUCCESS:
            return ({
                ...state,
                placement: [...state.placement, action.payload]
            });
        case PROPERTY_PLACEMENT_UPDATE_SUCCESS:
            return ({
                ...state,
                placement: state.placement.map((item) =>
                    item?._id == action.payload?._id ? { ...action.payload } : item
                )
            });
        case SUCCESS_PLACEMENT_LIST:
            return ({
                ...state,
                placement: action.payload
            });

        case PROPERTY_LOAN_ADD_SUCCESS:
            return ({
                ...state,
                loan: [...state.loan, action.payload]
            });
        case PROPERTY_LOAN_UPDATE_SUCCESS:
            return ({
                ...state,
                loan: state.loan.map((item) =>
                    item?._id == action.payload?._id ? { ...action.payload } : item
                )
            });
        case SUCCESS_LOAN_LIST:
            return ({
                ...state,
                loan: action.payload
            });

        case PROPERTY_SCHOLARSHIP_ADD_SUCCESS:
            return ({
                ...state,
                scholarship: [...state.scholarship, action.payload]
            });
        case PROPERTY_SCHOLARSHIP_UPDATE_SUCCESS:
            return ({
                ...state,
                scholarship: state.scholarship.map((item) =>
                    item?._id == action.payload?._id ? { ...action.payload } : item
                )
            });
        case SUCCESS_SCHOLARSHIP_LIST:
            return ({
                ...state,
                scholarship: action.payload
            });

        case PROPERTY_ADMISSION_PROCESS_ADD_SUCCESS:
            return ({
                ...state,
                admission_process: [...state.admission_process, action.payload]
            });
        case PROPERTY_ADMISSION_PROCESS_UPDATE_SUCCESS:
            return ({
                ...state,
                admission_process: state.admission_process.map((item) =>
                    item?._id == action.payload?._id ? { ...action.payload } : item
                )
            });
        case SUCCESS_ADMISSION_PROCESS_LIST:
            return ({
                ...state,
                admission_process: action.payload
            });

        case PROPERTY_ANNOUNCEMENT_ADD_SUCCESS:
            return ({
                ...state,
                announcement: [...state.announcement, action.payload]
            });
        case PROPERTY_ANNOUNCEMENT_UPDATE_SUCCESS:
            return ({
                ...state,
                announcement: state.announcement.map((item) =>
                    item?._id == action.payload?._id ? { ...action.payload } : item
                )
            });
        case SUCCESS_ANNOUNCEMENT_LIST:
            return ({
                ...state,
                announcement: action.payload
            });

        case PROPERTY_FAQS_ADD_SUCCESS:
            return ({
                ...state,
                faqs: [...state.faqs, action.payload]
            });
        case PROPERTY_FAQS_UPDATE_SUCCESS:
            return ({
                ...state,
                faqs: state.faqs.map((item) =>
                    item?._id == action.payload?._id ? { ...action.payload } : item
                )
            });
        case SUCCESS_FAQS_LIST:
            return ({
                ...state,
                faqs: action.payload
            });

        default:
            return state;
    }
};
export default propertyReducer;

