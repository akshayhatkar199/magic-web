import { axiosPrivate } from "./axios";

export const emailApi = async (payloadData) => {
  let res = await axiosPrivate.post("Api1/sendEmail", payloadData);
  return res.data;
};
