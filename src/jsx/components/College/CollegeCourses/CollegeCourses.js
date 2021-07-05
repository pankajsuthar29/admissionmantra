import React, { Fragment, useEffect, useState } from 'react';
import { Col, Card, Table, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddHeader from '../../Master/AddHeader';
import MasterApis from '../../../Constants/MasterApis';
import { Formik, Form } from 'formik';
// import * as Yup from "yup";
import ConstantText from '../../../Constants/ConstantText';

// const validationSchema = Yup.object().shape({
//   courseTypeId: Yup.number().required("Priority type is required!"),
//   priorityTypeId: Yup.number().required("Priority type is required!"),
//   name: Yup.string().min(2, "Too Short!").required("Name is required!"),
//   isActive: Yup.number().min(0).max(1).required("isActive is required!"),
// });

function CollegeDetail() {
  const CollegeId = localStorage.getItem('CollegeId');
  const [Data, setData] = useState('');
  const [GetCourses, setCourses] = useState([]);
  const [GetCourseSessionTypes, setCourseSessionTypes] = useState([]);
  const [GetCourseValidTypes, setCourseValidTypes] = useState([]);

  const [SelectedId, setSelectedId] = useState('');
  const [showDelete, setShowDelete] = useState(false);
  const [AddDataModel, setAddDataModel] = useState(false);
  const [isPost, setIsPost] = useState(true);
  const [editData, setEditData] = useState('');

  // get CourseType function
  const CourseSessionTypes = async () => {
    await MasterApis.GetCourseSessionTypes()
      .then((resp) => {
        if (resp.ok) {
          setCourseSessionTypes(resp.data);
        } else {
          console.log(resp.originalError);
        }
      })
      .catch((err) => console.log(err));
  };
  // get courseValIdTypeId function
  const courseValIdType = async () => {
    await MasterApis.GetCourseValidTypes()
      .then((resp) => {
        if (resp.ok) {
          setCourseValidTypes(resp.data);
        } else {
          console.log(resp.originalError);
        }
      })
      .catch((err) => console.log(err));
  };

  // CourseType function
  const getCourse = async () => {
    await MasterApis.GetCourses()
      .then((resp) => {
        if (resp.ok) {
          setCourses(resp.data);
        } else {
          console.log(resp.originalError);
        }
      })
      .catch((err) => console.log(err));
  };

  // get data function
  const getDataHandler = async (id) => {
    await MasterApis.GetIentityCoursesbyId(id)
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
    await MasterApis.PostIentityCourses(
      values.courseId,
      CollegeId,
      values.courseSessionTypeId,
      values.courseValIdTypeId,
      values.courseFeeOneYear,
      values.certificateType,
      values.attandingType,
      values.attandingPlace,
      values.isActive
    )
      .then((resp) => {
        if (resp.ok) {
          setAddDataModel(false);
          getDataHandler(CollegeId);
          resetForm();
          alert('Added Successfully!');
        }
      })
      .catch((err) => console.log(err));
  };

  const putData = async (values, resetForm) => {
    await MasterApis.PutIentityCourses(
      SelectedId,
      values.courseId,
      CollegeId,
      values.courseSessionTypeId,
      values.courseValIdTypeId,
      values.courseFeeOneYear,
      values.certificateType,
      values.attandingType,
      values.attandingPlace,
      values.isActive
    )
      .then((resp) => {
        if (resp.ok) {
          setAddDataModel(false);
          getDataHandler(CollegeId);
          resetForm();
          alert('Updated Successfully!');
        }
      })
      .catch((err) => console.log(err));
  };

  //   delete data function
  const modalDeleteHandle = async () => {
    await MasterApis.DeleteIentityCourses(SelectedId)
      .then((resp) => {
        getDataHandler(CollegeId);
        setSelectedId('');
        setShowDelete(false);
      })
      .catch((err) => console.log(err));
  };

  //   cancel Post Modal (close post Modal)
  const cancelPostData = () => {
    setSelectedId('');
    setAddDataModel(false);
  };

  //   post data prepare
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
    courseValIdType();
    CourseSessionTypes();
    getCourse();
    getDataHandler(CollegeId);
  }, []);

  return (
    <Fragment>
      <AddHeader btnName='Add Course' addHandler={() => newAddHandler()} />

      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>IentityCourses</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className='table-responsive'>
              <Table className='table-responsive-sm'>
                <thead>
                  <tr>
                    <th className='sorting_1'>
                      <strong>View</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Id</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>courseName</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>courseSessionTypeName</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>courseValidTypeName</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>courseFeeOneYear </strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>certificateType</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>attandingType</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>attandingPlace</strong>
                    </th>
                    <th>
                      <strong>Is Active</strong>
                    </th>
                    <th>
                      <strong>Action</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Data
                    ? Data.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <Link
                              to={{
                                pathname: '/college-course-detail',
                              }}
                              onClick={() =>
                                localStorage.setItem('CourseId', item.id)
                              }
                              className='btn btn-success shadow btn-xs sharp mr-1'
                            >
                              <i className='fa fa-eye'></i>
                            </Link>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.id}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.courseName}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.courseSessionTypeName}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.courseValidTypeName}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.courseFeeOneYear}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.certificateType}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.attandingType}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.attandingPlace}</div>
                          </td>
                          <td>
                            {!item.isActive
                              ? ConstantText.inActive
                              : ConstantText.active}
                          </td>
                          <td>
                            <button
                              onClick={() => editHandler(item.id)}
                              className='btn btn-primary shadow btn-xs sharp mr-1'
                            >
                              <i className='fa fa-pencil'></i>
                            </button>
                            <button
                              onClick={() => deleteData(item.id)}
                              className='btn btn-danger shadow btn-xs sharp'
                            >
                              <i className='fa fa-trash'></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    : 'Loading..'}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Link to='/college-detail' className='btn btn-danger'>
        Go Back
      </Link>

      {/* delete Modal */}
      <Modal show={showDelete} onHide={() => setShowDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>You really want to delete this data!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowDelete(false)}>
            Close
          </Button>
          <Button variant='danger' onClick={() => modalDeleteHandle()}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <!--Add Data Modal --> */}
      <Modal className='fade' show={AddDataModel}>
        <Modal.Header>
          <Modal.Title>{isPost ? 'Add Data' : 'Edit Data'}</Modal.Title>
          <Button
            onClick={() => setAddDataModel(false)}
            variant=''
            className='close'
          >
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              courseId: isPost ? '' : editData[0].courseId,
              courseSessionTypeId: isPost
                ? ''
                : editData[0].courseSessionTypeId,
              courseValIdTypeId: isPost ? '' : editData[0].courseValIdTypeId,
              courseFeeOneYear: isPost ? '' : editData[0].courseFeeOneYear,
              certificateType: isPost ? '' : editData[0].certificateType,
              attandingType: isPost ? '' : editData[0].attandingType,
              attandingPlace: isPost ? '' : editData[0].attandingPlace,

              isActive: isPost ? 1 : editData[0].isActive,
            }}
            // validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              // same shape as initial values
              isPost ? postData(values, resetForm) : putData(values, resetForm);
              //   postData(values, resetForm);
            }}
          >
            {({ errors, touched, values, handleChange, handleBlur }) => (
              <Form>
                <div className='mx-auto'>
                  <div className='form-group'>
                    <label htmlFor='courseId'> Course ID *</label>
                    <select
                      name='courseId'
                      id='courseId'
                      className='form-control input-default'
                      onBlur={handleBlur}
                      value={values.courseId}
                      onChange={handleChange}
                    >
                      <option value={''}> Course</option>
                      {GetCourses.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='courseSessionTypeId'>
                      courseSessionTypeId *
                    </label>
                    <select
                      name='courseSessionTypeId'
                      id='courseSessionTypeId'
                      className='form-control input-default'
                      onBlur={handleBlur}
                      value={values.courseSessionTypeId}
                      onChange={handleChange}
                    >
                      <option value={''}>Select courseSessionTypeId </option>
                      {GetCourseSessionTypes.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                    {errors.priorityTypeId && touched.priorityTypeId ? (
                      <div style={{ color: 'red' }}>
                        {errors.priorityTypeId}
                      </div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='courseValIdTypeId'>
                      GetCourseValidTypes *
                    </label>
                    <select
                      name='courseValIdTypeId'
                      id='courseValIdTypeId'
                      className='form-control input-default'
                      onBlur={handleBlur}
                      value={values.courseValIdTypeId}
                      onChange={handleChange}
                    >
                      <option value={''}>Select courseValIdTypeId </option>
                      {GetCourseValidTypes.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                    {errors.priorityTypeId && touched.priorityTypeId ? (
                      <div style={{ color: 'red' }}>
                        {errors.priorityTypeId}
                      </div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='courseFeeOneYear'>courseFeeOneYear *</label>
                    <input
                      type='number'
                      name='courseFeeOneYear'
                      id='courseFeeOneYear'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.courseFeeOneYear}
                      className='form-control input-default '
                      placeholder='Enter courseFeeOneYear'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='certificateType'>certificateType *</label>
                    <input
                      type='name'
                      name='certificateType'
                      id='certificateType'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.certificateType}
                      className='form-control input-default '
                      placeholder='Enter certificateType'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='certificateType'>attandingType *</label>
                    <input
                      type='attandingType'
                      name='attandingType'
                      id='attandingType'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.attandingType}
                      className='form-control input-default '
                      placeholder='Enter attandingType'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='attandingPlace'>attandingPlace *</label>
                    <textarea
                      type='text'
                      name='attandingPlace'
                      id='attandingPlace'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.attandingPlace}
                      className='form-control input-default '
                      placeholder='attandingPlace.....'
                    />
                    {errors.description && touched.description ? (
                      <div style={{ color: 'red' }}>{errors.description}</div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='isActive'>isActive *</label>
                    <select
                      name='isActive'
                      id='isActive'
                      className='form-control input-default'
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
                      width: '100%',
                      display: 'inline-flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button
                      onClick={() => cancelPostData()}
                      variant='danger light'
                    >
                      Cancel
                    </Button>

                    <button className='btn btn-primary' type='submit'>
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

export default CollegeDetail;
