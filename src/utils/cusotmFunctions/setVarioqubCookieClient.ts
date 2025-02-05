import cookies from "js-cookie";

export const setVarioqubCookieClient = (_ymab_param: string) => {
  cookies.set("_ymab_param", _ymab_param);
};
