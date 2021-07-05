import React, { Fragment, useEffect, useState } from 'react';
import { Col, Card, Table, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddHeader from '../../Master/AddHeader';
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

function CollegeEvents() {
  const CollegeId = localStorage.getItem('CollegeId');
  const [Data, setData] = useState('');
  const [priorityType, setPriorityType] = useState([]);

  const [SelectedId, setSelectedId] = useState('');
  const [showDelete, setShowDelete] = useState(false);
  const [AddDataModel, setAddDataModel] = useState(false);
  const [isPost, setIsPost] = useState(true);
  const [editData, setEditData] = useState('');

  // approvalType function
  const getpriorityType = async () => {
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

  // get data function
  const getDataHandler = async () => {
    await MasterApis.GetEventsbyId(CollegeId)
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
    await MasterApis.PostEvents(
      values.eventsId,
      CollegeId,
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
    await MasterApis.PutEvents(
      SelectedId,
      values.eventsId,
      CollegeId,
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
    await MasterApis.DeleteEvents(SelectedId)
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
    getpriorityType();
  }, []);

  return (
    <Fragment>
      <AddHeader btnName='Add Approval' addHandler={() => newAddHandler()} />

      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>College Events</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className='table-responsive'>
              <Table className='table-responsive-sm'>
                <thead>
                  <tr>
                    <th className='sorting_1'>
                      <strong>ParentEvent</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>priorityTypeName</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>name</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>description</strong>
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
                            <div>{item.eventsId ? item.eventsId : '--'}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.priorityTypeName}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.name}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.description}</div>
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
              eventsId: isPost ? '' : editData[0].eventsId,
              priorityTypeId: isPost ? '' : editData[0].priorityTypeId,
              name: isPost ? '' : editData[0].name,
              description: isPost ? '' : editData[0].description,
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
                    <label htmlFor='priorityTypeId'>Parent event *</label>
                    <select
                      name='eventsId'
                      id='eventsId'
                      className='form-control input-default'
                      onBlur={handleBlur}
                      value={values.eventsId}
                      onChange={handleChange}
                    >
                      <option value={''}>Select Parent Event</option>
                      {Data.map((d) => (
                        <option value={d.id}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className='form-group'>
                    <label htmlFor='priorityTypeId'>priorityType *</label>
                    <select
                      name='priorityTypeId'
                      id='priorityTypeId'
                      className='form-control input-default'
                      onBlur={handleBlur}
                      value={values.priorityTypeId}
                      onChange={handleChange}
                    >
                      <option value={''}>Select priorityType </option>
                      {priorityType.map((d) => (
                        <option value={d.id}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className='form-group'>
                    <label htmlFor='totalCompany'>Name *</label>
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
                    <label htmlFor='totalCompany'>description *</label>
                    <input
                      type='text'
                      name='description'
                      id='description'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      className='form-control input-default '
                      placeholder='Enter description'
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

export default CollegeEvents;
