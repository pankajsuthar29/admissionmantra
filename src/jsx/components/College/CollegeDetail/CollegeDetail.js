import React, { useEffect, useState } from 'react';
import MasterApis from '../../../Constants/MasterApis';
import CollegeTitle from '../CollegeDetail/CollegeTitle';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CollegeDetail = () => {
  const CollegeId = localStorage.getItem('CollegeId');
  const [Data, setData] = useState([]);
  const [courses, setCourses] = useState([]);

  const getDataHandler = async (id) => {
    await MasterApis.GetIentityById(id)
      .then((resp) => {
        if (resp.ok) {
          setData(resp.data);
        } else {
          console.log(resp.originalError);
        }
      })
      .catch((err) => console.log(err));
  };

  const getCourses = async (id) => {
    await MasterApis.GetIentityCoursesbyId(id)
      .then((resp) => {
        if (resp.ok) {
          setCourses(resp.data);
        } else {
          console.log(resp.originalError);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDataHandler(CollegeId);
    getCourses(CollegeId);
  }, [CollegeId]);

  return (
    <div>
      <CollegeTitle
        clgName={Data.name}
        phone={Data.phoneNo}
        activeMenu='Detail'
        motherMenu='College'
      />

      {/* 4 boxes of dashbord */}
      <div className='row'>
        <div className='col-xl-3 col-lg-6 col-sm-6'>
          <div className='widget-stat card bg-danger'>
            <div className='card-body  p-4'>
              <div className='media'>
                <span className='mr-3'>
                  <i className='flaticon-381-calendar-1'></i>
                </span>
                <div className='media-body text-white text-right'>
                  <p className='mb-1'>Total Courses</p>
                  <h3 className='text-white'>{courses.length}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-6 col-sm-6'>
          <div className='widget-stat card bg-success'>
            <div className='card-body p-4'>
              <div className='media'>
                <span className='mr-3'>
                  <i className='flaticon-381-diamond'></i>
                </span>
                <div className='media-body text-white text-right'>
                  <p className='mb-1'>Earning</p>
                  <h3 className='text-white'>$56K</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-6 col-sm-6'>
          <div className='widget-stat card bg-info'>
            <div className='card-body p-4'>
              <div className='media'>
                <span className='mr-3'>
                  <i className='flaticon-381-heart'></i>
                </span>
                <div className='media-body text-white text-right'>
                  <p className='mb-1'>Total Patient</p>
                  <h3 className='text-white'>783K</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-6 col-sm-6'>
          <div className='widget-stat card bg-primary'>
            <div className='card-body p-4'>
              <div className='media'>
                <span className='mr-3'>
                  <i className='flaticon-381-user-7'></i>
                </span>
                <div className='media-body text-white text-right'>
                  <p className='mb-1'>Chef</p>
                  <h3 className='text-white'>$76</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Components links */}
      <Link to='/college-courses'>
        <Button className='mr-3 mt-3' variant='primary'>
          Manage Courses{' '}
          <span className='btn-icon-right'>
            <i className='fa fa-book' />
          </span>
        </Button>
      </Link>
      <Link to='/college-approvals'>
        <Button className='mr-3 mt-3' variant='primary'>
          Manage Approvals{' '}
          <span className='btn-icon-right'>
            <i className='fa fa-check' />
          </span>
        </Button>
      </Link>
      <Link to='/college-ranks'>
        <Button className='mr-3 mt-3' variant='primary'>
          Manage Ranks{' '}
          <span className='btn-icon-right'>
            <i className='fa fa-check' />
          </span>
        </Button>
      </Link>
      <Link to='/college-events'>
        <Button className='mr-3 mt-3' variant='primary'>
          Manage Events{' '}
          <span className='btn-icon-right'>
            <i className='fa fa-check' />
          </span>
        </Button>
      </Link>
      <Link to='/college-placement-total'>
        <Button className='mr-3 mt-3' variant='primary'>
          Manage Placement Total{' '}
          <span className='btn-icon-right'>
            <i className='fa fa-check' />
          </span>
        </Button>
      </Link>
      <Link to='/college-facilities'>
        <Button className='mr-3 mt-3' variant='primary'>
          Manage Facilities{' '}
          <span className='btn-icon-right'>
            <i className='fa fa-check' />
          </span>
        </Button>
      </Link>
      <Link to='/college-faculties'>
        <Button className='mr-3 mt-3' variant='primary'>
          Manage Faculties{' '}
          <span className='btn-icon-right'>
            <i className='fa fa-check' />
          </span>
        </Button>
      </Link>

      <Link to='/college-blogs'>
        <Button className='mr-3 mt-3' variant='primary'>
          Manage Blogs{' '}
          <span className='btn-icon-right'>
            <i className='fa fa-check' />
          </span>
        </Button>
      </Link>

      <Link to='/college-placement-client'>
        <Button className='mr-3 mt-3' variant='primary'>
          Manage Placement Client{' '}
          <span className='btn-icon-right'>
            <i className='fa fa-check' />
          </span>
        </Button>
      </Link>

      <Row className='mt-5'>
        <Link to='/college' className='btn btn-danger'>
          Go Back
        </Link>
      </Row>
    </div>
  );
};

export default CollegeDetail;
