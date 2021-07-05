import React, { Fragment, useEffect, useState } from "react";
import { Col, Card, Table, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddHeader from "../AddHeader";
import MasterApis from "../../../Constants/MasterApis";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ConstantText from "../../../Constants/ConstantText";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Name is required!"),
  totalYears: Yup.number().min(0).max(10).required("totalYears is required!"),
  isActive: Yup.number().min(0).max(1).required("isActive is required!"),
});

function CourseSessionType() {

  const [Data, setData] = useState("");
  const [SelectedId, setSelectedId] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [AddDataModel, setAddDataModel] = useState(false);
  const [isPost, setIsPost] = useState(true);
  const [editData, setEditData] = useState("");

  // get data from Api
  const getDataHandler = async () => {
    await MasterApis.GetCourseSessionTypes()
      .then((resp) => {
        if (resp.ok) {
          setData(resp.data);
        } else {
          console.log(resp.originalError);
        }
      })
      .catch((err) => console.log(err));
  };

  //   post data function
  const postData = async (values, resetForm) => {
    await MasterApis.PostCourseSessionTypes(values.name, values.totalYears.toString(), values.isActive)
      .then((resp) => {
        if (resp.ok) {
          setAddDataModel(false);
          getDataHandler();
          resetForm();
          alert("Added Successfully!");
        }
      })
      .catch((err) => console.log(err));
  };

  //   put data function
  const putData = async (values, resetForm) => {
    await MasterApis.PutCourseSessionTypes(SelectedId, values.name,values.totalYears.toString(), values.isActive)
      .then((resp) => {
        if (resp.ok) {
          setAddDataModel(false);
          getDataHandler();
          resetForm();
          alert("Updated Successfully!");
        }
      })
      .catch((err) => console.log(err));
  };

    // delete data
    const modalDeleteHandle = async () => {
      await MasterApis.DeleteCourseSessionTypes(SelectedId)
        .then((resp) => {
          getDataHandler();
          setSelectedId("");
          setShowDelete(false);
        })
        .catch((err) => console.log(err));
    };

  //   cancel Post Modal (close post Modal)
  const cancelPostData = () => {
    setSelectedId("");
    setAddDataModel(false);
  };

  // add data prepare
  const newAddHandler = () => {
    setIsPost(true);
    setAddDataModel(true);
  };

//   put data prepare
  const editHandler = (id) => {
    setEditData(Data.filter((fl) => fl.id === id));
    setSelectedId(id);
    setIsPost(false);
    setAddDataModel(true);
  };

  // delete data prepare
  const deleteData = async (id) => {
    setSelectedId(id);
    setShowDelete(true);
  };



  useEffect(() => {
    getDataHandler();
  }, []);

  return (
    <Fragment>
      <AddHeader btnName="Add Session Type" addHandler={() => newAddHandler()} />

      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Course Session Type</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <Table className="table-responsive-md">
                <thead>
                  <tr>
                    <th>
                      <strong>NAME</strong>
                    </th>
                    <th>
                      <strong>Total Years</strong>
                    </th>
                    <th>
                      <strong>Is Active</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Data
                    ? Data.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div>{item.name}</div>
                          </td>
                          <td>
                            <div className="align-items-center">
                              {item.totalYears}
                            </div>
                          </td>
                          <td>
                            <div className="align-items-center">
                              {!item.isActive
                                ? ConstantText.inActive
                                : ConstantText.active}
                            </div>
                          </td>
                          <td>
                            <div className="d-flex">
                              <Link
                                onClick={() => editHandler(item.id)}
                                className="btn btn-primary shadow btn-xs sharp mr-1"
                              >
                                <i className="fa fa-pencil"></i>
                              </Link>
                              <Link
                                onClick={() => deleteData(item.id)}
                                className="btn btn-danger shadow btn-xs sharp"
                              >
                                <i className="fa fa-trash"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))
                    : "Loading.."}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* delete Modal */}
      <Modal show={showDelete} onHide={() => setShowDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Delete Session</Modal.Title>
        </Modal.Header>
        <Modal.Body>You really want to delete this Session!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDelete(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={() => modalDeleteHandle()}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <!--Add Data Modal --> */}
      <Modal className="fade" show={AddDataModel}>
        <Modal.Header>
          <Modal.Title>{isPost ? "Add Data" : "Edit Data"}</Modal.Title>
          <Button
            onClick={() => setAddDataModel(false)}
            variant=""
            className="close"
          >
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              name: isPost ? "" : editData[0].name,
              totalYears: isPost ? "" : editData[0].totalYears,
              isActive: isPost ? 1 : editData[0].isActive,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              // same shape as initial values
                isPost ? postData(values, resetForm) : putData(values, resetForm);
            //   postData(values, resetForm);
            }}
          >
            {({ errors, touched, values, handleChange, handleBlur }) => (
              <Form>
                <div className="mx-auto">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className="form-control input-default "
                      placeholder="Enter name"
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: "red" }}>{errors.name}</div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="totalYears">Total Years *</label>
                    <input
                      type="number"
                      name="totalYears"
                      id="totalYears"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.totalYears}
                      className="form-control input-default "
                      placeholder="Enter total Years"
                      max={10}
                      min={0}
                    />
                    {errors.totalYears && touched.totalYears ? (
                      <div style={{ color: "red" }}>{errors.totalYears}</div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="isActive">isActive *</label>
                    <select
                      name="isActive"
                      id="isActive"
                      className="form-control input-default"
                      onBlur={handleBlur}
                      value={values.isActive}
                      onChange={handleChange}
                    >
                      <option value={1}>{ConstantText.active}</option>
                      <option value={0}>{ConstantText.inActive}</option>
                    </select>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      display: "inline-flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      onClick={() => cancelPostData()}
                      variant="danger light"
                    >
                      Cancel
                    </Button>

                    <button className="btn btn-primary" type="submit">
                      {isPost ? ConstantText.addData : ConstantText.editData}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

export default CourseSessionType;
