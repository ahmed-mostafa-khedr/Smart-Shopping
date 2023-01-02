import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
const LoginPage = () => {
  let emailInLocal = localStorage.getItem("email");
  let passwordInLocal = localStorage.getItem("password");

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("بيانات غير صحيحة")
            .required("لايمكن ترك البريد الالكتروني فارغا"),
          password: Yup.string().required("لايمكن ترك كلمة المرور  فارغه"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            if (
              values.email === emailInLocal &&
              values.password === passwordInLocal
            ) {
              setSubmitting(false);
              window.location = "/";
            } else {
              alert(
                " بيانات غير صحيحه من فضلك تاكد من البريد وكلمه المرور الخاصه بك "
              );
            }
          }, 1500);
        }}
      >
        {(formik) => (
          <Form
            className="col-6 d-flex flex-column text-center mx-auto mt-5 font-ar"
            onSubmit={formik.handleSubmit}
          >
            <h4
              className="font-ar my-5 text-center"
              style={{ fontWeight: "bold" }}
            >
              تسجيل الدخول{" "}
            </h4>
            <Form.Group controlId="formBasicEmail">
              <Form.Label htmlFor="email"> البريد الالكتروني </Form.Label>
              <Form.Control
                id="email"
                style={{ opacity: "0.6" }}
                className="  text-center"
                type="email"
                placeholder="...البريد الكتروني"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-danger">{formik.errors.email}</p>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label htmlFor="password"> الرقم السري </Form.Label>
              <Form.Control
                id="password"
                style={{ opacity: "0.6" }}
                className="  text-center"
                type="password"
                placeholder="أدخل كلمة السر"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-danger">{formik.errors.password}</p>
              ) : null}
            </Form.Group>

            <button
              style={{
                border: "1px solid #5a2e5d",
                color: "#5a2e5d",
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "5px",
              }}
              className="bttn "
              type="submit"
            >
              تسجيل الدخول
            </button>
            <Form.Text className="text-muted">
              لن تتم مشاركه بياناتك مع اي شخص آخر
            </Form.Text>
            <p className="font-ar my-5 py-5 text-center">
              {" "}
              ليس لديك حساب ؟{" "}
              <Link
                to="/register"
                className="text-danger"
                style={{ textDecoration: "none" }}
              >
                انشاء حساب جديد
              </Link>{" "}
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginPage;
