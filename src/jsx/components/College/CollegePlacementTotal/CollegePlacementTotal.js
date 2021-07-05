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

function CollegePlacementTotal() {
  const CollegeId = localStorage.getItem('CollegeId');
  const [Data, setData] = useState('');
  const [SelectedId, setSelectedId] = useState('');
  const [showDelete, setShowDelete] = useState(false);
  const [AddDataModel, setAddDataModel] = useState(false);
  const [isPost, setIsPost] = useState(true);
  const [editData, setEditData] = useState('');

  // get data function
  const getDataHandler = async () => {
    await MasterApis.GetPlacementTotalsbyId(CollegeId)
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
    await MasterApis.PostPlacementTotals(
      CollegeId,
      values.totalCompany,
      values.totalStudent,
      values.totalOffer,
      values.topRecuiters,
      values.sessionYear,
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
    await MasterApis.PutPlacementTotals(
      SelectedId,
      CollegeId,
      values.totalCompany,
      values.totalStudent,
      values.totalOffer,
      values.topRecuiters,
      values.sessionYear,
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
    await MasterApis.DeletePlacementTotals(SelectedId)
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
      <AddHeader btnName='Add Course' addHandler={() => newAddHandler()} />

      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Total Placement</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className='table-responsive'>
              <Table className='table-responsive-sm'>
                <thead>
                  <tr>
                    <th className='sorting_1'>
                      <strong>ientityId</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>totalCompany</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>totalStudent</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>totalOffer</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>topRecuiters</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>sessionYear</strong>
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
                            <div>{item.ientityId}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.totalCompany}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.totalStudent}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.totalOffer}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.topRecuiters}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.sessionYear}</div>
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
              GetIentity: isPost ? '' : editData[0].GetIentity,
              totalCompany: isPost ? '' : editData[0].totalCompany,
              totalStudent: isPost ? '' : editData[0].totalStudent,
              totalOffer: isPost ? '' : editData[0].totalOffer,
              topRecuiters: isPost ? '' : editData[0].topRecuiters,
              sessionYear: isPost ? '' : editData[0].sessionYear,

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
                    <label htmlFor='totalCompany'>totalCompany *</label>
                    <input
                      type='text'
                      name='totalCompany'
                      id='totalCompany'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.totalCompany}
                      className='form-control input-default '
                      placeholder='Enter totalCompany'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='totalStudent'>totalStudent *</label>
                    <input
                      type='number'
                      name='totalStudent'
                      id='totalStudent'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.totalStudent}
                      className='form-control input-default '
                      placeholder='Enter totalStudent'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='totalOffer'>totalOffer *</label>
                    <input
                      type='number'
                      name='totalOffer'
                      id='totalOffer'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.totalOffer}
                      className='form-control input-default '
                      placeholder='totalOffer.....'
                    />
                    {errors.description && touched.description ? (
                      <div style={{ color: 'red' }}>{errors.description}</div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='topRecuiters'>topRecuiters *</label>
                    <input
                      type='number'
                      name='topRecuiters'
                      id='topRecuiters'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.topRecuiters}
                      className='form-control input-default '
                      placeholder='topRecuiters.....'
                    />
                    {errors.description && touched.description ? (
                      <div style={{ color: 'red' }}>{errors.description}</div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='sessionYear'>sessionYear *</label>
                    <input
                      type='number'
                      name='sessionYear'
                      id='sessionYear'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.sessionYear}
                      className='form-control input-default '
                      placeholder='sessionYear.....'
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

export default CollegePlacementTotal;
