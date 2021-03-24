export function loginUserRedux( user ){
    console.log(user)
    return {
        type: "LOGIN",
        payload: user
    }
}
