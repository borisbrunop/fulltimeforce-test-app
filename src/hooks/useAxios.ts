import { useCallback } from "react";
import axios from "axios";
import {
  HandleAxiosTypes,
  handleUseEffectAxiosTypes,
} from "../interfaces/Axios";

export function useAxios(auth = true) {
  // const history = useNavigate();
  // const location = useLocation();

  const handleError = useCallback(
    (e: any, errorToast: string) => {
      console.log("ERROR WITH AXIOS", e, errorToast);
      //   if (e?.response?.status === 401 && redirect) {
      //     history.push({
      //       pathname: redirect,
      //       state: { errorMessage: e.message || errorToast },
      //     });
      //   } else if (e?.response?.status === 401) {
      //     history.push({
      //       pathname: "/secure/user/login",
      //       state: { from: location.pathname, errorMessage: errorToast },
      //     });
      //   }
      //   setRes(e.response);
      //   console.error("ERROR", e);
      //   setWorking(false);
    },
    []
  );

  const handleAxios = useCallback(
    async ({
      path = "/",
      method,
      body = {},
      postFetch = () => {},
      postErrorFetch = () => {},
      setWork,
      errorToast = "",
    }: HandleAxiosTypes) => {
      //   if (specialAuth) {
      //     axios.defaults.headers.common = {
      //       Authorization: `Bearer ${specialAuth}`,
      //     };
      //   }
      const url = `${process.env.REACT_APP_BACKEND_URL}${path}`;
      if (setWork) setWork(true);
      switch (method) {
        case "get":
          try {
            const response = await axios.get(url, body);
            // setWorking(false);
            // setRes(response.data);
            postFetch(response.data);
            if (setWork) setWork(false);
          } catch (e) {
            postErrorFetch(e);
            handleError(e, errorToast);
            if (setWork) setWork(false);
          }
          break;
        case "post":
          try {
            const response = await axios.post(url, body);
            // setRes(response.data);
            // setWorking(false);
            if (setWork) setWork(false);
            postFetch(response.data);
          } catch (e) {
            postErrorFetch(e);
            handleError(e, errorToast);
            if (setWork) setWork(false);
          }
          break;
        case "put":
          try {
            const response = await axios.put(url, body);
            // setRes(response.data);
            // setWorking(false);
            if (setWork) setWork(false);
            postFetch(response.data);
          } catch (e) {
            postErrorFetch(e);
            handleError(e, errorToast);
            if (setWork) setWork(false);
          }
          break;
        case "delete":
          try {
            const response = await axios.delete(url, { data: body });
            if (setWork) setWork(false);
            postFetch(response.data);
          } catch (e) {
            postErrorFetch(e);
            handleError(e, errorToast);
            if (setWork) setWork(false);
          }
          break;
        default:
          console.error("Please provide a method, error ocurred in useAxios");
          break;
      }
    },
    [handleError]
  );

  const handleUseEffectAxios = useCallback(
    async (config: handleUseEffectAxiosTypes) => {
      const configAxios = {
        path: config.path,
        method: config.method,
        postFetch: config.postFetch,
      };
      await handleAxios(configAxios);
    },
    [handleAxios]
  );

  return { handleAxios, handleUseEffectAxios };
}
