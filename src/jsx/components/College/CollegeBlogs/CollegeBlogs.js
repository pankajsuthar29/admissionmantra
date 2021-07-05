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

function CollegeBlogs() {
  const CollegeId = localStorage.getItem('CollegeId');
  const [Data, setData] = useState('');
  const [SelectedId, setSelectedId] = useState('');
  const [showDelete, setShowDelete] = useState(false);
  const [AddDataModel, setAddDataModel] = useState(false);
  const [isPost, setIsPost] = useState(true);
  const [editData, setEditData] = useState('');
  const [imagefile, setImagefile] = useState('');

  const OnFileChange = (event) => {
    setImagefile(event.target.files[0]);
  };

  // get data function
  const getDataHandler = async () => {
    await MasterApis.GetIentityBlogsbyId(CollegeId)
      .then((resp) => {
        if (resp.ok) {
          setData(resp.data);
        } else {
          if (resp.originalError.response.statusText === 'Not Found') {
            setData([]);
          } else {
            console.log(resp.originalError);
          }
        }
      })
      .catch((err) => console.log(err));
  };

  //   post data function
  const postData = async (values, resetForm) => {
    let form = new FormData();
    form.append('ientityId', CollegeId);
    form.append('title', values.title);
    form.append('discription', values.discription);
    form.append('createDate', values.createDate);
    form.append('createBy', values.createBy);
    form.append('ImageFile', imagefile);
    form.append('IsActive', values.isActive);

    await MasterApis.PostIentityBlogs(form)
      .then((resp) => {
        if (!resp.ok) {
          console.log(resp.originalError);
        }
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
    await MasterApis.PutIentityBlogs(
      SelectedId,
      CollegeId,
      values.title,
      values.discription,
      values.createDate,
      values.createBy,
      values.imageUrl,
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
    await MasterApis.DeleteIentityBlogs(SelectedId)
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
      <AddHeader btnName='Add Blog' addHandler={() => newAddHandler()} />

      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>College blogs</Card.Title>
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
                      <strong>title</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>discription</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>createDate</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>createBy</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>image</strong>
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
                          <td className='sorting_1'>
                            <div>{item.id}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.title}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.discription}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.createDate}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.createBy}</div>
                          </td>
                          <td className='sorting_1'>
                            <div className='align-items-center'>
                              {/* {item.logoImage} */}
                              <img
                                src={
                                  ConstantText.serverImagePath + item.imageUrl
                                }
                                className='rounded-lg mr-2'
                                width='24'
                                height='24'
                                alt=''
                              />
                            </div>
                          </td>
                          <td>
                            {!item.isActive
                              ? ConstantText.inActive
                              : ConstantText.active}
                          </td>
                          <td style={{ minWidth: 80 }}>
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
              title: isPost ? '' : editData[0].title,
              discription: isPost ? '' : editData[0].discription,
              createDate: isPost ? '' : editData[0].createDate,
              createBy: isPost ? '' : editData[0].createBy,
              imageUrl: isPost ? '' : editData[0].imageUrl,
              isActive: isPost ? 1 : editData[0].isActive,
            }}
            // validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              // same shape as initial values
              isPost ? postData(values, resetForm) : putData(values, resetForm);
            }}
          >
            {({ errors, touched, values, handleChange, handleBlur }) => (
              <Form>
                <div className='mx-auto'>
                  <div className='form-group'>
                    <label htmlFor='title'>title *</label>
                    <input
                      type='text'
                      name='title'
                      id='title'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      className='form-control input-default '
                      placeholder='Enter title'
                    />
                    {errors.title && touched.title ? (
                      <div style={{ color: 'red' }}>{errors.title}</div>
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
                    {errors.discription && touched.discription ? (
                      <div style={{ color: 'red' }}>{errors.discription}</div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='createDate'>createDate *</label>
                    <input
                      type='date'
                      name='createDate'
                      id='createDate'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.createDate}
                      className='form-control input-default '
                      placeholder='Enter createDate'
                    />
                    {errors.createDate && touched.createDate ? (
                      <div style={{ color: 'red' }}>{errors.createDate}</div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='createBy'>createBy *</label>
                    <input
                      type='text'
                      name='createBy'
                      id='createBy'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.createBy}
                      className='form-control input-default '
                      placeholder='Enter createBy'
                    />
                    {errors.createBy && touched.createBy ? (
                      <div style={{ color: 'red' }}>{errors.createBy}</div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='imageUrl'>Image</label>
                    <input
                      type='file'
                      name='imageUrl'
                      id='imageUrl'
                      onChange={OnFileChange}
                      onBlur={handleBlur}
                      //   value={values.imageUrl}
                      className='form-control input-default'
                    />
                    {errors.imageUrl && touched.imageUrl ? (
                      <div style={{ color: 'red' }}>{errors.totalYears}</div>
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

export default CollegeBlogs;
