import AxiosInstance from "../../api/axios";

export const REQUEST_USER_SIGNIN = "REQUEST_USER_SIGNIN";
export const SIGNIN_USER_SUCCESS_FAILURE = "SIGNIN_USER_SUCCESS_FAILURE";


export function requestUserSignin() {
    return {
        type: REQUEST_USER_SIGNIN
    };
}

export function signinSuccessFailure(signinSuccessFailure) {
    return {
        type: SIGNIN_USER_SUCCESS_FAILURE,
        signinSuccessFailure
    }
}


export function signin(body) {
    return dispatch => {
        dispatch(requestUserSignin());
        return AxiosInstance.post("signin", body).then(res => {
            dispatch(signinSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(signinSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}
