import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const RegisterPage = () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "يجب ان يكون اسم المستخدم اقل من 15 حرف")
            .min(3, "يجب ان يكون اسم المستخدم اكبر من 2 حرف")
            .required("لايمكن ترك اسم المستخدم فارغا"),
          email: Yup.string()
            .email("بيانات غير صحيحة")
            .required("لايمكن ترك البريد الالكتروني فارغا"),
          password: Yup.string()
            .min(6, "كلمة مرور ضعيف جدا")
            .required("لايمكن ترك كلمة المرور  فارغه"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            localStorage.setItem("uname", values.name);
            localStorage.setItem("email", values.email);
            localStorage.setItem("password", values.password);
            setSubmitting(false);
            window.location = "/";
          }, 400);
        }}
      >
        {(formik) => (
          <Form
            className="col-5 d-flex flex-column text-center mx-auto  font-ar"
            onSubmit={formik.handleSubmit}
          >
            <h4
              className="font-ar my-4 text-center"
              style={{ fontWeight: "bold", color: "#5a2e5d" }}
            >
              انشاء حساب جديد
            </h4>
            <Form.Group controlId="formBasicText">
              <Form.Label style={{ color: "#5a2e5d" }} htmlFor="name">
                اسم المستخدم
              </Form.Label>
              <Form.Control
                id="name"
                style={{ opacity: "0.6" }}
                className="  text-center "
                type="text"
                placeholder="يجب ان يكون اسم المستخدم على الاقل ثلاث احرف ......"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-danger">{formik.errors.name}</p>
              ) : null}
            </Form.Group>
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
              إنشاء حساب
            </button>
            <Form.Text className="text-muted">
              لن تتم مشاركه بياناتك مع اي شخص آخر
            </Form.Text>
            <p className="font-ar my-5 py-5 text-center">
              لديك حساب ؟
              <Link
                to="/login"
                className="text-danger"
                style={{ textDecoration: "none" }}
              >
                تسجيل الدخول
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterPage;
