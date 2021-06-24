import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { clearLocalStorage } from "../../store/utilities";
import "./Checkout.scss";

const Checkout = () => {
  const submitForm = (values) => {
    const { name, surname, age, phone, address } = values;
    console.log("%c%s", "color: green; font: 1rem/1 Tahoma;", ` Checkout done.\n Name: ${name} ${surname}, age: ${age} , phone: ${phone}, delivery address: ${address}.`);
    console.log(` Checkout item(s):\n ${localStorage.getItem("savedToCart")}`);
    clearLocalStorage();
  };

  const validationFromSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    surname: Yup.string().min(3, "Minimum 3 chars").required("Required"),
    age: Yup.number().typeError("Enter correct age").positive().integer().required("Requireddddd"),
    phone: Yup.number().typeError("Enter correct phone").positive().integer().required("Required"),
    address: Yup.string().required("Required"),
  });
  return (
    <div>
      <h1>CHECKOUT</h1>
      <Formik initialValues={{ name: "", surname: "", age: "", phone: "", address: "" }} onSubmit={submitForm} validationSchema={validationFromSchema}>
        {(formikProps) => {
          console.log(formikProps);
          return (
            <Form>
              <div>
                <label>
                  Name
                  <Field type="text" name="name" value={formikProps.values.name} />
                </label>
                <div>{formikProps.errors.name && formikProps.touched.name && <span className="error">{formikProps.errors.name}</span>}</div>
              </div>
              <div>
                <label>
                  Surname
                  <Field type="text" name="surname" value={formikProps.values.surname} />
                </label>
                <div>{formikProps.errors.surname && formikProps.touched.surname && <span className="error">{formikProps.errors.surname}</span>}</div>
              </div>
              <div>
                <label>
                  Age
                  <Field type="text" name="age" value={formikProps.values.age} />
                </label>
                <div>{formikProps.errors.age && formikProps.touched.age && <span className="error">{formikProps.errors.age}</span>}</div>
              </div>
              <div>
                <label>
                  Phone
                  <Field type="text" name="phone" value={formikProps.values.phone} />
                </label>
                <div>{formikProps.errors.phone && formikProps.touched.phone && <span className="error">{formikProps.errors.phone}</span>}</div>
              </div>
              <div>
                <label>
                  Address
                  <Field type="text" name="address" value={formikProps.values.address} />
                </label>
                <div>{formikProps.errors.address && formikProps.touched.address && <span className="error">{formikProps.errors.address}</span>}</div>
              </div>
              <div>
                <button type="submit">Checkout</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Checkout;
