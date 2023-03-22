import { useFormik } from "formik";
import "./login.scss";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { authanticate } from "../../store/slices/user";

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),
    onSubmit: (values) => {
      dispatch(authanticate(values.email));
      navigate("/");
    },
  });

  return (
    <div className="login-page">
      <div className="logo">
        <img src="logo.png" alt="" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <div className="form__header">
          <h1>Welcome</h1>
          <h3>Enter your login credentials</h3>
        </div>
        <div className="form__body">
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="form-field-error">{formik.errors.email}</span>
            ) : null}
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="form-field-error">{formik.errors.password}</span>
            ) : null}
          </div>
        </div>
        <div className="form__actions">
          <button onClick={() => formik.handleSubmit()} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
