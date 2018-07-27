let initialState = {
    id: 0,
    username: '',
    password: '',
    profilePic: ''
}

const ADD_USERNAME = "ADD-USERNAME";
const ADD_PASSWORD = "ADD-PASSWORD";
const ADD_PROFILEPIC = "ADD-PROFILEPIC";
const REGISTER_USER = "REGISTER_USER";

export function addUserName(name) {
    return {
        type: ADD_USERNAME,
        payload: name
    }
}
export function addPassword(pass) {
    return {
        type: ADD_PASSWORD,
        payload: pass
    }
}
export function addProfilePic(pic) {
    return {
        type: REGISTER_USER,
        payload: pic
    }
}
export function registerUser(name, pass) {
    let id=0;

    return {
        type: REGISTER_USER,
        payload: {
            id: 1,
            username: name,
            password: pass
            
        }
    }
    id++
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USERNAME:
            return Object.assign({}, state, { username: action.payload });
        
        case ADD_PASSWORD:
            return Object.assign({}, state, { password: action.payload });
        
        case ADD_PROFILEPIC:
            return Object.assign({}, state, { profilePic: action.payload });
        
        case REGISTER_USER:
            return Object.assign({}, state, { username: action.payload, password: action.payload, profilePic: action.payload });
        
        
        
        default: return state;
    }

}
