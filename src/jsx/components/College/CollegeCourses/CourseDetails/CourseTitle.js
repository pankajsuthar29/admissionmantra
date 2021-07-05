import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const CourseTitle = ({ motherMenu, activeMenu, clgName, phone }) => {
  return (
    // <div className="page-titles">
    //    <Breadcrumb>
    //       <Breadcrumb.Item>
    //          <a href="#">{motherMenu}</a>
    //       </Breadcrumb.Item>
    //       <Breadcrumb.Item active>
    //          <a href="#">{activeMenu}</a>
    //       </Breadcrumb.Item>
    //    </Breadcrumb>
    // </div>
    <div className='row page-titles mx-0'>
      <div className='col-sm-6 p-md-0'>
        <div className='welcome-text'>
          <h4>{clgName}</h4>
          {/* <p className="mb-0">{phone}</p> */}
        </div>
      </div>
      <div className='col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex'>
        <ol className='breadcrumb'>
          <Breadcrumb>
            <Breadcrumb.Item>
              {/* <a href='#'>{motherMenu}</a> */}
              <p>{motherMenu}</p>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              {/* <a href='#'>{activeMenu}</a> */}
            </Breadcrumb.Item>
          </Breadcrumb>
        </ol>
      </div>
    </div>
  );
};

export default CourseTitle;
