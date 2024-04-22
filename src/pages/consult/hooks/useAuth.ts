import jwtDecode from 'jwt-decode'
import { useSelector } from 'react-redux'

import type { RootState } from 'store/store'
import type { DecodedAccessToken } from 'types/accessToken.types'

/**
 * @description : Gets state auth object and returns it
 * @return {object}:  Returns state auth object plus isLoggedIn prop.
 */
const useAuth = () => {
    const auth = useSelector((state: RootState) => state.auth)
    return {
        auth,
        isLoggedIn: Boolean(auth.accessToken && jwtDecode<DecodedAccessToken>(auth.accessToken).exp * 1000 > Date.now()),
    }
}

export default useAuth
