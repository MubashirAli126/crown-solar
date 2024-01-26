import * as Yup from "yup";

export const warrentyClaim = Yup.object({
    customerName: Yup.string().min(2).max(25).required("Please enter your name"),
    phoneNumberCN: Yup.string().email().required("Please enter your email"),
//   password: Yup.string().min(6).required("Please enter your password"),
//   confirm_password: Yup.string()
//     .required()
//     .oneOf([Yup.ref("password"), null], "Password must match"),
});