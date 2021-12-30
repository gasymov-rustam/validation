import styles from "./Validation.module.css";
import { Formik } from "formik";
import * as yup from "yup";
const image =
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e";

export default function Validation() {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .typeError("Should be String")
      .max(15, "Must be 15 characters or less")
      .min(3, "Must be 3 characters at least")
      .required("Required"),
    surname: yup
      .string()
      .typeError("Should be String")
      .max(15, "Must be 15 characters or less")
      .min(3, "Must be 3 characters at least")
      .required("Required"),
    telefon: yup
      .number()
      .typeError("Should be Number")
      .min(5, "Must be 5 characters at least")
      .required("Required")
      .positive("entry should be greater than 0")
      .integer("input integer value"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    confirmEmail: yup
      .string()
      .email("Email is invalid")
      .oneOf([yup.ref("email")], "email is not match")
      .required("Confirm email is required"),
    acceptTerms: yup.bool().oneOf([true], "Accept Terms is required"),
    password: yup
      .string()
      .typeError("Should be String")
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password is not match")
      .required("Confirm password is required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          telefon: "",
          email: "",
          confirmEmail: "",
          acceptTerms: false,
          password: "",
          confirmPassword: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
          resetForm,
        }) => (
          <form className={styles.wrapper} autoComplete="off">
            <h3 className={styles.title}>Form Validation</h3>

            <label className={styles.label}>
              <span>Name</span>
              <input
                type="text"
                name="name"
                // className={cn(styles.input, { [styles["input-error"]]: !isValid })}
                className={!errors.name ? styles.input : styles["input-error"]}
                placeholder="name"
                autoComplete={"off"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && (
                <img
                  src={image}
                  className={styles.img}
                  loading="lazy"
                  width="20"
                  height="20"
                  alt="what`s wrong with downloading"
                  decoding="async"
                />
              )}
              {touched.name && errors.name && <span className={styles.error}>{errors.name}</span>}
            </label>
            <label className={styles.label}>
              <span>Surname</span>
              <input
                type="text"
                name="surname"
                className={!errors.surname ? styles.input : styles["input-error"]}
                placeholder="surname"
                autoComplete={"off"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.surname}
              />
              {errors.surname && (
                <img
                  src={image}
                  className={styles.img}
                  loading="lazy"
                  width="20"
                  height="20"
                  alt="what`s wrong with downloading"
                  decoding="async"
                />
              )}
              {touched.surname && errors.surname && (
                <span className={styles.error}>{errors.surname}</span>
              )}
            </label>

            <label className={styles.label}>
              <span>Your telefon</span>
              <input
                type="number"
                name="telefon"
                className={!errors.telefon ? styles.input : styles["input-error"]}
                placeholder="telefon"
                autoComplete={"off"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telefon}
              />
              {errors.telefon && (
                <img
                  src={image}
                  className={styles.img}
                  loading="lazy"
                  width="20"
                  height="20"
                  alt="what`s wrong with downloading"
                  decoding="async"
                />
              )}
              {touched.telefon && errors.telefon && (
                <span className={styles.error}>{errors.telefon}</span>
              )}
            </label>

            <label className={styles.label}>
              <span>Your email</span>
              <input
                type="email"
                name="email"
                className={!errors.email ? styles.input : styles["input-error"]}
                placeholder="your email"
                autoComplete={"off"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && (
                <img
                  src={image}
                  className={styles.img}
                  loading="lazy"
                  width="20"
                  height="20"
                  alt="what`s wrong with downloading"
                  decoding="async"
                />
              )}
              {touched.email && errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </label>

            <label className={styles.label}>
              <span>Confirm your email</span>
              <input
                type="email"
                name="confirmEmail"
                className={!errors.confirmEmail ? styles.input : styles["input-error"]}
                placeholder="confirm your email"
                autoComplete={"off"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmEmail}
              />
              {errors.confirmEmail && (
                <img
                  src={image}
                  className={styles.img}
                  loading="lazy"
                  width="20"
                  height="20"
                  alt="what`s wrong with downloading"
                  decoding="async"
                />
              )}
              {touched.confirmEmail && errors.confirmEmail && (
                <span className={styles.error}>{errors.confirmEmail}</span>
              )}
            </label>

            <label className={styles.label}>
              <span>Password</span>
              <input
                type="password"
                name="password"
                className={!errors.password ? styles.input : styles["input-error"]}
                placeholder="password"
                autoComplete={"off"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && (
                <img
                  src={image}
                  className={styles.img}
                  loading="lazy"
                  width="20"
                  height="20"
                  alt="what`s wrong with downloading"
                  decoding="async"
                />
              )}
              {touched.password && errors.password && (
                <span className={styles.error}>{errors.password}</span>
              )}
            </label>

            <label className={styles.label}>
              <span>Confirm your password</span>
              <input
                type="password"
                name="confirmPassword"
                className={!errors.confirmPassword ? styles.input : styles["input-error"]}
                placeholder="confirm your password"
                autoComplete={"off"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {errors.confirmPassword && (
                <img
                  src={image}
                  className={styles.img}
                  loading="lazy"
                  width="20"
                  height="20"
                  alt="what`s wrong with downloading"
                  decoding="async"
                />
              )}
              {touched.confirmPassword && errors.confirmPassword && (
                <span className={styles.error}>{errors.confirmPassword}</span>
              )}
            </label>

            <label className={styles.label}>
              <div className={styles["label-checkbox"]}>
                <input
                  name="acceptTerms"
                  type="checkbox"
                  autoComplete={"off"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                <span style={!errors.acceptTerms ? { color: "black" } : { color: "red" }}>
                  I have read and agree to the Terms
                </span>
              </div>
              {touched.acceptTerms && errors.acceptTerms && (
                <span className={styles.error}>{errors.acceptTerms}</span>
              )}
            </label>

            <div className={styles["wrapper-btn"]}>
              <button
                className={styles["btn-register"]}
                type="submit"
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
              >
                Register
              </button>

              <button className={styles["btn-reset"]} type="reset" onClick={resetForm}>
                Reset
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
