import React, { Fragment, useEffect, useState } from 'react';
import { Col, Card, Table, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddHeader from '../../../Master/AddHeader';
import MasterApis from '../../../../Constants/MasterApis';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ConstantText from '../../../../Constants/ConstantText';

const validationSchema = Yup.object().shape({
  courseTypeId: Yup.number().required('Priority type is required!'),
  priorityTypeId: Yup.number().required('Priority type is required!'),
  name: Yup.string().min(2, 'Too Short!').required('Name is required!'),
  isActive: Yup.number().min(0).max(1).required('isActive is required!'),
});

function CourseAdmissions() {
  const CourseId = localStorage.getItem('CourseId');
  const [Data, setData] = useState('');

  const [SelectedId, setSelectedId] = useState('');
  const [showDelete, setShowDelete] = useState(false);
  const [AddDataModel, setAddDataModel] = useState(false);
  const [isPost, setIsPost] = useState(true);
  const [editData, setEditData] = useState('');

  // get data function
  const getDataHandler = async () => {
    await MasterApis.GetCourseCutOffsbyId(CourseId)
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
    await MasterApis.PostCourseCutOffs(
      CourseId,
      values.name,
      values.discription,
      values.openingRank,
      values.closingRank,
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
    await MasterApis.PutCourseCutOffs(
      SelectedId,
      CourseId,
      values.approvalTypeId,
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
    await MasterApis.DeleteCourseCutOffs(SelectedId)
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
  }, []);

  return (
    <Fragment>
      <AddHeader btnName='Add Cut Off' addHandler={() => newAddHandler()} />

      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Course Cut Off</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className='table-responsive'>
              <Table className='table-responsive-sm'>
                <thead>
                  <tr>
                    <th className='sorting_1'>
                      <strong>id</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>name</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>discription</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>openingRank</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>closingRank</strong>
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
                            <div>{item.id}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.name}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.discription}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.openingRank}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.closingRank}</div>
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

      <Link to='/college-course-detail' className='btn btn-danger'>
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

      {/* Add Data Modal */}
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
              name: isPost ? '' : editData[0].name,
              discription: isPost ? '' : editData[0].discription,
              openingRank: isPost ? '' : editData[0].openingRank,
              closingRank: isPost ? '' : editData[0].closingRank,
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
                <div className='form-group'>
                  <label htmlFor='name'>name *</label>
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
                  <label htmlFor='discription'>discription *</label>
                  <input
                    type='text'
                    name='discription'
                    id='discription'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.discription}
                    className='form-control input-default '
                    placeholder='Enter discription'
                  />
                  {errors.name && touched.name ? (
                    <div style={{ color: 'red' }}>{errors.name}</div>
                  ) : null}
                </div>
                <div className='form-group'>
                  <label htmlFor='openingRank'>openingRank *</label>
                  <input
                    type='text'
                    name='openingRank'
                    id='openingRank'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.openingRank}
                    className='form-control input-default '
                    placeholder='Enter openingRank'
                  />
                  {errors.openingRank && touched.openingRank ? (
                    <div style={{ color: 'red' }}>{errors.openingRank}</div>
                  ) : null}
                </div>
                <div className='form-group'>
                  <label htmlFor='closingRank'>closingRank *</label>
                  <input
                    type='text'
                    name='closingRank'
                    id='closingRank'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.closingRank}
                    className='form-control input-default '
                    placeholder='Enter closingRank'
                  />
                  {errors.closingRank && touched.closingRank ? (
                    <div style={{ color: 'red' }}>{errors.closingRank}</div>
                  ) : null}
                </div>
                <div className='mx-auto'>
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

export default CourseAdmissions;
