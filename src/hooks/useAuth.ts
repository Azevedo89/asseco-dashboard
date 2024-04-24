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

  let isLoggedIn = false;

  if (auth.accessToken) {
    const decodedToken = jwtDecode<DecodedAccessToken>(auth.accessToken);
    isLoggedIn = decodedToken.exp * 1000 > Date.now();
  }

  return {
    auth,
    isLoggedIn,
  }
}

export default useAuth;
