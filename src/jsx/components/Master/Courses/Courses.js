import React, { Fragment, useEffect, useState } from 'react';
import { Col, Card, Table, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddHeader from '../AddHeader';
import MasterApis from '../../../Constants/MasterApis';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ConstantText from '../../../Constants/ConstantText';

const validationSchema = Yup.object().shape({
  courseTypeId: Yup.number().required('Priority type is required!'),
  priorityTypeId: Yup.number().required('Priority type is required!'),
  name: Yup.string().min(2, 'Too Short!').required('Name is required!'),
  isActive: Yup.number().min(0).max(1).required('isActive is required!'),
});

function Courses() {
  const [Data, setData] = useState('');
  const [CoursesType, setCoursesType] = useState([]);
  const [PriorityType, setPriorityType] = useState([]);
  const [SelectedId, setSelectedId] = useState('');
  const [showDelete, setShowDelete] = useState(false);
  const [AddDataModel, setAddDataModel] = useState(false);
  const [isPost, setIsPost] = useState(true);
  const [editData, setEditData] = useState('');

  // get PriorityType function
  const getPriorityType = async () => {
    await MasterApis.GetPriorityTypes()
      .then((resp) => {
        if (resp.ok) {
          setPriorityType(resp.data);
        } else {
          console.log(resp.originalError);
        }
      })
      .catch((err) => console.log(err));
  };

  // get CourseType function
  const getCourseType = async () => {
    await MasterApis.GetCourseTypes()
      .then((resp) => {
        if (resp.ok) {
          setCoursesType(resp.data);
        } else {
          console.log(resp.originalError);
        }
      })
      .catch((err) => console.log(err));
  };

  // get data function
  const getDataHandler = async () => {
    await MasterApis.GetCourses()
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
    await MasterApis.PostCourses(
      values.courseId,
      values.courseTypeId,
      values.priorityTypeId,
      values.name,
      values.description,
      values.isActive
    )
      .then((resp) => {
        if (resp.ok) {
          setAddDataModel(false);
          getDataHandler();
          resetForm();
          alert('Added Successfully!');
        }
      })
      .catch((err) => console.log(err));
  };

  //   put data function
  const putData = async (values, resetForm) => {
    await MasterApis.PutCourses(
      SelectedId,
      values.courseId,
      values.courseTypeId,
      values.priorityTypeId,
      values.name,
      values.description,
      values.isActive
    )
      .then((resp) => {
        if (resp.ok) {
          setAddDataModel(false);
          getDataHandler();
          resetForm();
          alert('Updated Successfully!');
        }
      })
      .catch((err) => console.log(err));
  };

  //   delete data function
  const modalDeleteHandle = async () => {
    await MasterApis.DeleteCourses(SelectedId)
      .then((resp) => {
        getDataHandler();
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
    getDataHandler();
    getCourseType();
    getPriorityType();
  }, []);

  return (
    <Fragment>
      <AddHeader btnName='Add Course' addHandler={() => newAddHandler()} />

      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Courses</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className='table-responsive'>
              <Table className='table-responsive-sm'>
                <thead>
                  <tr>
                    <th className='sorting_1'>
                      <strong>Name</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Parent</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Course Type</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Priority Type</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Description</strong>
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
                          <td className='sorting_1'>
                            <div>{item.name}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>
                              {item.courseNavigation
                                ? item.courseNavigation.name
                                : '--'}
                            </div>
                          </td>
                          <td className='sorting_1'>
                            <div>
                              {item.courseType ? item.courseType.name : '--'}
                            </div>
                          </td>
                          <td className='sorting_1'>
                            <div>
                              {item.priorityType
                                ? item.priorityType.name
                                : '--'}
                            </div>
                          </td>
                          <td className='sorting_1'>
                            <div>
                              {item.description ? item.description : '--'}
                            </div>
                          </td>
                          <td>
                            {!item.isActive
                              ? ConstantText.inActive
                              : ConstantText.active}
                          </td>
                          <td>
                            <Link
                              onClick={() => editHandler(item.id)}
                              className='btn btn-primary shadow btn-xs sharp mr-1'
                            >
                              <i className='fa fa-pencil'></i>
                            </Link>
                            <Link
                              onClick={() => deleteData(item.id)}
                              className='btn btn-danger shadow btn-xs sharp'
                            >
                              <i className='fa fa-trash'></i>
                            </Link>
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
              courseTypeId: isPost ? '' : editData[0].courseTypeId,
              priorityTypeId: isPost ? '' : editData[0].priorityTypeId,
              name: isPost ? '' : editData[0].name,
              description: isPost ? '' : editData[0].description,
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
                <div className='mx-auto'>
                  <div className='form-group'>
                    <label htmlFor='courseId'>Parent Course *</label>
                    <select
                      name='courseId'
                      id='courseId'
                      className='form-control input-default'
                      onBlur={handleBlur}
                      value={values.courseId}
                      onChange={handleChange}
                    >
                      <option value={''}>Select Parent Course</option>
                      {Data.map((d) => (
                        <option value={d.id}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className='form-group'>
                    <label htmlFor='courseTypeId'>Course Type *</label>
                    <select
                      name='courseTypeId'
                      id='courseTypeId'
                      className='form-control input-default'
                      onBlur={handleBlur}
                      value={values.courseTypeId}
                      onChange={handleChange}
                    >
                      <option value={''}>Select Course Type</option>
                      {CoursesType.map((d) => (
                        <option value={d.id}>{d.name}</option>
                      ))}
                    </select>
                    {errors.courseTypeId && touched.courseTypeId ? (
                      <div style={{ color: 'red' }}>{errors.courseTypeId}</div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='priorityTypeId'>Priority Type *</label>
                    <select
                      name='priorityTypeId'
                      id='priorityTypeId'
                      className='form-control input-default'
                      onBlur={handleBlur}
                      value={values.priorityTypeId}
                      onChange={handleChange}
                    >
                      <option value={''}>Select Course Type</option>
                      {PriorityType.map((d) => (
                        <option value={d.id}>{d.name}</option>
                      ))}
                    </select>
                    {errors.priorityTypeId && touched.priorityTypeId ? (
                      <div style={{ color: 'red' }}>
                        {errors.priorityTypeId}
                      </div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='name'>Name *</label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className='form-control input-default '
                      placeholder='Enter name'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='description'>Description *</label>
                    <textarea
                      type='text'
                      name='description'
                      id='description'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      className='form-control input-default '
                      placeholder='Description.....'
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

export default Courses;
