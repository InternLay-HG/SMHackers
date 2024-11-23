import {atom} from "recoil"
export const isLoggedInAtom=atom({
    key:"isLoggedIn",
    default: !!localStorage.getItem('token')
});