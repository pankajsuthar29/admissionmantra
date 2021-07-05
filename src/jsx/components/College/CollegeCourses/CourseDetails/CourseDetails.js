import React, { useEffect, useState } from 'react';
import MasterApis from '../../../../Constants/MasterApis';
import CourseTitle from './CourseTitle';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
  const CourseId = localStorage.getItem('CourseId');
  const [Data, setData] = useState([]);

  const getDataHandler = async () => {
    await MasterApis.GetIentityCoursesbyCourseId(CourseId)
      .then((resp) => {
        if (resp.ok) {
          setData(resp.data[0]);
        } else {
          console.log(resp.originalError);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  return (
    <div>
      <CourseTitle
        clgName={Data.courseName}
        activeMenu='Detail'
        motherMenu='Course'
      />

      {/* 4 boxes of dashbord */}
      {/* <div className='row'>
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
        </div> */}

      {/* Components links */}
      <Link to='/college-course-CutOff'>
        <Button className='mr-3 mt-3' variant='primary'>
          Manage Cut Off{' '}
          <span className='btn-icon-right'>
            <i className='fa fa-check' />
          </span>
        </Button>
      </Link>

      <Row className='mt-5'>
        <Link to='/college-courses' className='btn btn-danger'>
          Go Back
        </Link>
      </Row>
    </div>
  );
};

export default CourseDetails;
