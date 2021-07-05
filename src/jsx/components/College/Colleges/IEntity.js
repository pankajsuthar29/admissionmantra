import React, { Fragment, useEffect, useState } from 'react';
import { Col, Card, Table, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddHeader from '../../Master/AddHeader';
import MasterApis from '../../../Constants/MasterApis';
import { Formik, Form } from 'formik';
// import * as Yup from "yup";
import ConstantText from '../../../Constants/ConstantText';

// const validationSchema = Yup.object().shape({
//   ientitytypeId: Yup.number().required("IEtityTypeId type is required!"),
//   locations: Yup.number().required("LocationId type is required!"),
//   priorityTypeId: Yup.number().required("PriorityTypeId type is required!"),
//   enitityparentId: Yup.number().required("EnitityparentId type is required!"),
//   establishType: Yup.number().required("EstablishType type is required!"),
//   name: Yup.string().min(2, "Too Short!").required("Name is required!"),
//   isActive: Yup.number().min(0).max(1).required("isActive is required!"),
// });

function IEntity() {
  const [Data, setData] = useState('');
  // const [CoursesType, setCoursesType] = useState([]);
  const [PriorityType, setPriorityType] = useState([]);
  const [establishTypeId, setEstablishTypes] = useState([]);
  const [ientityTypeId, setIentityTypes] = useState([]);
  const [locationId, setLocations] = useState([]);

  const [SelectedId, setSelectedId] = useState('');
  const [showDelete, setShowDelete] = useState(false);
  const [AddDataModel, setAddDataModel] = useState(false);
  const [isPost, setIsPost] = useState(true);
  const [editData, setEditData] = useState('');
  const [imagefile, setImagefile] = useState('');

  const OnFileChange = (event) => {
    setImagefile(event.target.files[0]);
  };

  //  get ientitytypeId function
  const GetIentityTypes = async () => {
    await MasterApis.GetIentityTypes()
      .then((resp) => {
        if (resp.ok) {
          setIentityTypes(resp.data);
        } else {
          console.log(resp.originalError);
        }
      })
      .catch((err) => console.log(err));
  };

  //  get GetLocationTypes
  const Getlocation = async () => {
    await MasterApis.Getlocations()
      .then((resp) => {
        if (resp.ok) {
          setLocations(resp.data);
        } else {
          console.log(resp.originalError);
        }
      })
      .catch((err) => console.log(err));
  };

  // GetEstablishTypes
  const GetEstablishTypes = async () => {
    await MasterApis.GetEstablishTypes()
      .then((resp) => {
        if (resp.ok) {
          setEstablishTypes(resp.data);
        } else {
          console.log(resp.originalError);
        }
      })
      .catch((err) => console.log(err));
  };

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

  // get data function
  const getDataHandler = async () => {
    await MasterApis.GetIentity()
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
    let form = new FormData();
    form.append('IentityTypeId', values.ientityTypeId);
    form.append('LocationId', values.locationId);
    form.append('priorityTypeId', values.priorityTypeId);
    form.append('EntityParentId', values.entityParentId);
    form.append('EstablishTypeId', values.establishTypeId);
    form.append('Name', values.name);
    form.append('Address', values.address);
    form.append('PinCode', values.pinCode);
    form.append('EstbDate', values.estbDate);
    form.append('PhoneNo', values.phoneNo);
    form.append('MobileNo1', values.mobileNo1);
    form.append('MobileNo2', values.mobileNo2);
    form.append('EmailId', values.emailId);
    form.append('WebsiteUrl', values.websiteUrl);
    form.append('MapUrl', values.mapUrl);
    form.append('logoImageFile', imagefile);
    form.append('Lat', values.lat);
    form.append('Long', values.long);
    form.append('IsActive', values.isActive);

    await MasterApis.PostIentity(form)
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
    await MasterApis.PutCourses(
      SelectedId,
      values.courseId,
      values.courseTypeId,
      values.priorityTypeId,
      values.Getlocations,

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
    await MasterApis.DeleteIentity(SelectedId)
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
    GetEstablishTypes();
    Getlocation();
    GetIentityTypes();
    getPriorityType();
  }, []);

  return (
    <Fragment>
      <AddHeader btnName='Add Collage' addHandler={() => newAddHandler()} />

      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Collage</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className='table-responsive'>
              <Table className='table-responsive-sm'>
                <thead>
                  <tr>
                    <th>
                      <strong>View</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Name</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Address</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Pincode</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>EstablishDate</strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Phone </strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Mobile No 1 </strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Mobile No 2 </strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Email Id </strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>WebsiteUrl </strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>MapUrl </strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Logoimage </strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Lat </strong>
                    </th>
                    <th className='sorting_1'>
                      <strong>Long</strong>
                    </th>
                    <th>
                      <strong>Is Active</strong>
                    </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Data
                    ? Data.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <Link
                              to={{
                                pathname: '/college-detail',
                              }}
                              onClick={() =>
                                localStorage.setItem('CollegeId', item.id)
                              }
                              className='btn btn-success shadow btn-xs sharp mr-1'
                            >
                              <i className='fa fa-eye'></i>
                            </Link>
                          </td>
                          <td className='sorting_1' style={{ minWidth: 130 }}>
                            <div>{item.name}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.address}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.pinCode}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.estbDate}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.phoneNo}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.mobileNo1}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.mobileNo2}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.emailId}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.websiteUrl}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.mapUrl}</div>
                          </td>
                          <td>
                            <div className='align-items-center'>
                              {/* {item.logoImage} */}
                              <img
                                src={
                                  ConstantText.serverImagePath + item.logoImage
                                }
                                className='rounded-lg mr-2'
                                width='24'
                                height='24'
                                alt=''
                              />
                            </div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.lat}</div>
                          </td>
                          <td className='sorting_1'>
                            <div>{item.long}</div>
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

      {/* / delete Modal / */}
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

      {/* <!--Add Data Modal -->  */}
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
              ientityId: isPost ? '' : editData[0].ientityId,
              ientityTypeId: isPost ? '' : editData[0].ientityTypeId,
              locationId: isPost ? '' : editData[0].locationId,
              priorityTypeId: isPost ? '' : editData[0].priorityTypeId,
              entityParentId: isPost ? '' : editData[0].entityParentId,
              establishTypeId: isPost ? '' : editData[0].establishTypeId,
              name: isPost ? '' : editData[0].name,
              address: isPost ? '' : editData[0].address,
              pinCode: isPost ? '' : editData[0].pinCode,
              estbDate: isPost ? '' : editData[0].estbDate,
              phoneNo: isPost ? '' : editData[0].phoneNo,
              mobileNo1: isPost ? '' : editData[0].mobileNo1,
              mobileNo2: isPost ? '' : editData[0].mobileNo2,
              emailId: isPost ? '' : editData[0].emailId,
              websiteUrl: isPost ? '' : editData[0].websiteUrl,
              mapUrl: isPost ? '' : editData[0].mapUrl,
              lat: isPost ? '' : editData[0].lat,
              long: isPost ? '' : editData[0].long,
              imagePath: isPost ? '' : editData[0].logoImage,
              isActive: isPost ? 1 : editData[0].isActive,
            }}
            // validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              // same shape as initial values
              isPost ? postData(values, resetForm) : putData(values, resetForm);
              // alert("Post Work");
            }}
          >
            {({ errors, touched, values, handleChange, handleBlur }) => (
              <Form>
                <div className='mx-auto'>
                  <div className='form-group'>
                    <label htmlFor='ientityId'>Collage Type*</label>
                    <select
                      name='ientityTypeId'
                      id='ientityTypeId'
                      className='form-control input-default'
                      onBlur={handleBlur}
                      value={values.ientityTypeId}
                      onChange={handleChange}
                    >
                      <option value={''}>Select Collage type</option>
                      {ientityTypeId.map((d) => (
                        <option value={d.id}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className='form-group'>
                    <label htmlFor='Getlocation'>location *</label>
                    <select
                      name='Getlocation'
                      id='Getlocation'
                      className='form-control input-default'
                      onBlur={handleBlur}
                      value={values.locationId}
                      onChange={handleChange}
                    >
                      <option value={''}>Select Location</option>
                      {locationId.map((d) => (
                        <option value={d.id}>{d.name}</option>
                      ))}
                    </select>
                    {errors.locations && touched.locations ? (
                      <div style={{ color: 'red' }}>{errors.locations}</div>
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
                    <label htmlFor='priorityTypeId'>establish Type *</label>
                    <select
                      name='establishTypeId'
                      id='establishTypeId'
                      className='form-control input-default'
                      onBlur={handleBlur}
                      value={values.establishTypeId}
                      onChange={handleChange}
                    >
                      <option value={''}>select establish Type</option>
                      {establishTypeId.map((d) => (
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
                    <label htmlFor='name'>address *</label>
                    <input
                      type='text'
                      name='address'
                      id='address'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      className='form-control input-default '
                      placeholder='Enter address'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='name'>pinCode *</label>
                    <input
                      type='text'
                      name='pinCode'
                      id='pinCode'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.pinCode}
                      className='form-control input-default '
                      placeholder='Enter pinCode'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='name'>estbDate *</label>
                    <input
                      type='date'
                      name='estbDate'
                      id='estbDate'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.estbDate}
                      className='form-control input-default '
                      placeholder='Enter estbDate'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='name'>phoneNo *</label>
                    <input
                      type='text'
                      name='phoneNo'
                      id='phoneNo'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNo}
                      className='form-control input-default '
                      placeholder='Enter phoneNo'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='name'>mobileNo1 *</label>
                    <input
                      type='text'
                      name='mobileNo1'
                      id='mobileNo1'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mobileNo1}
                      className='form-control input-default '
                      placeholder='Enter mobileNo1'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='name'>mobileNo2 *</label>
                    <input
                      type='text'
                      name='mobileNo2'
                      id='mobileNo2'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mobileNo2}
                      className='form-control input-default '
                      placeholder='Enter mobileNo2'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='name'>emailId *</label>
                    <input
                      type='text'
                      name='emailId'
                      id='emailId'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.emailId}
                      className='form-control input-default '
                      placeholder='Enter emailId'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='name'>websiteUrl *</label>
                    <input
                      type='text'
                      name='websiteUrl'
                      id='websiteUrl'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.websiteUrl}
                      className='form-control input-default '
                      placeholder='Enter websiteUrl'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='name'>mapUrl *</label>
                    <input
                      type='text'
                      name='mapUrl'
                      id='mapUrl'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mapUrl}
                      className='form-control input-default '
                      placeholder='Enter mapUrl'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='name'>lat *</label>
                    <input
                      type='number'
                      name='lat'
                      id='lat'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lat}
                      className='form-control input-default '
                      placeholder='Enter name'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='name'>long *</label>
                    <input
                      type='number'
                      name='long'
                      id='long'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.long}
                      className='form-control input-default '
                      placeholder='Enter long'
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='imagePath'>Logo Image</label>
                    <input
                      type='file'
                      name='imagePath'
                      id='imagePath'
                      onChange={OnFileChange}
                      onBlur={handleBlur}
                      // value={values.imagePath}
                      className='form-control input-default'
                    />
                    {errors.totalYears && touched.totalYears ? (
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

export default React.memo(IEntity);
