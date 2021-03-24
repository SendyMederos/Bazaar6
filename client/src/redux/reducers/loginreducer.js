const initialstate = {
    user : null
}

function loginreducer( state = initialstate, action ) {
    console.log(action.payload)
    switch(action.type){
        case "LOGIN" : {
            const user = action.payload;
            return {
                user : {
                   email : user.email
                }
            }
        }
        default : {return state}
    }
}
export default loginreducer