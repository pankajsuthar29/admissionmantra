import React, { Component } from 'react';

/// Link
import { Link } from 'react-router-dom';

/// Scroll
import PerfectScrollbar from 'react-perfect-scrollbar';

/// Menu
import MetisMenu from 'metismenujs';

///
// import icon1 from "../../../images/icon1.png";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
    //  this.mm("dispose");
    // console.log(this.mm);
  }
  render() {
    return (
      <div className='mm-wrapper'>
        <ul className='metismenu' ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector('.nav-control');
    var aaa = document.querySelector('#main-wrapper');

    function toggleFunc() {
      return aaa.classList.toggle('menu-toggle');
    }

    btn.addEventListener('click', toggleFunc);

    //sidebar icon Heart blast
    var handleheartBlast = document.querySelector('.heart');

    function heartBlast() {
      return handleheartBlast.classList.toggle('heart-blast');
    }

    handleheartBlast.addEventListener('click', heartBlast);
  }
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split('/');
    path = path[path.length - 1];

    /// Active menu
    let deshBoard = [
        '',
        'doctors',
        'doctors-review',
        'patient-details',
        // "doctors-details",
      ],
      master = [
        'master-approval-type',
        'master-course-session-type',
        'master-course-type',
        'master-course-valid-type',
        'master-establish-type',
        'master-document-type',
        'master-priority-type',
        'master-courses',
        'master-exam-type',
        'master-faculty-department-type',
        'master-faculty-type',
        'master-ientity-type',
        'master-Course-session-type-fee',
      ],
      college = ['college'],
      pages = [
        'page-register',
        'page-login',
        'page-lock-screen',
        'page-error-400',
        'page-error-403',
        'page-error-404',
        'page-error-500',
        'page-error-503',
      ],
      error = [
        'page-error-400',
        'page-error-403',
        'page-error-404',
        'page-error-500',
        'page-error-503',
      ];

    return (
      <div className='deznav'>
        <PerfectScrollbar className='deznav-scroll'>
          <MM className='metismenu' id='menu'>
            <li className={`${deshBoard.includes(path) ? 'mm-active' : ''}`}>
              <Link className='has-arrow ai-icon' to='#' aria-expanded='false'>
                <i className='flaticon-381-networking'></i>
                <span className='nav-text'>Dashboard</span>
              </Link>
              <ul aria-expanded='false'>
                <li>
                  <Link className={`${path === '' ? 'mm-active' : ''}`} to='/'>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === 'doctors' ? 'mm-active' : ''}`}
                    to='/doctors'
                  >
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'doctors-details' ? 'mm-active' : ''
                    }`}
                    to='/doctors-details'
                  >
                    Doctors Details
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'doctors-review' ? 'mm-active' : ''
                    }`}
                    to='/doctors-review'
                  >
                    Doctors Review
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'patient-details' ? 'mm-active' : ''
                    }`}
                    to='/patient-details'
                  >
                    Patient Details
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`${master.includes(path) ? 'mm-active' : ''}`}>
              <Link className='has-arrow ai-icon' to='#' aria-expanded='false'>
                <i className='flaticon-381-networking'></i>
                <span className='nav-text'>Master</span>
              </Link>
              <ul aria-expanded='false'>
                <li>
                  <Link
                    className={`${
                      path === 'master-approval-type' ? 'mm-active' : ''
                    }`}
                    to='/master-approval-type'
                  >
                    Approval Type
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'master-course-session-type' ? 'mm-active' : ''
                    }`}
                    to='/master-course-session-type'
                  >
                    Course Session Type
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'master-course-session-type-fee'
                        ? 'mm-active'
                        : ''
                    }`}
                    to='/master-course-session-type-fee'
                  >
                    Course Session Type Fee
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'master-course-type' ? 'mm-active' : ''
                    }`}
                    to='/master-course-type'
                  >
                    Course Type
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'master-course-valid-type' ? 'mm-active' : ''
                    }`}
                    to='/master-course-valid-type'
                  >
                    Course Valid Type
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'master-establish-type' ? 'mm-active' : ''
                    }`}
                    to='/master-establish-type'
                  >
                    Establish Type
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'master-document-type' ? 'mm-active' : ''
                    }`}
                    to='/master-document-type'
                  >
                    Document Type
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'master-priority-type' ? 'mm-active' : ''
                    }`}
                    to='/master-priority-type'
                  >
                    Priority Type
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'master-courses' ? 'mm-active' : ''
                    }`}
                    to='/master-courses'
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'master-exam-type' ? 'mm-active' : ''
                    }`}
                    to='/master-exam-type'
                  >
                    Exam Type
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'master-faculty-department-type'
                        ? 'mm-active'
                        : ''
                    }`}
                    to='/master-faculty-department-type'
                  >
                    Faculty Department Type
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'master-faculty-type' ? 'mm-active' : ''
                    }`}
                    to='/master-faculty-type'
                  >
                    Faculty Type
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'master-ientity-type' ? 'mm-active' : ''
                    }`}
                    to='/master-ientity-type'
                  >
                    Ientity Type
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`${college.includes(path) ? 'mm-active' : ''}`}>
              <Link
                // className='has-arrow ai-icon'
                aria-expanded='false'
                className={`${
                  path === 'college'
                    ? 'mm-active has-arrow ai-icon'
                    : 'has-arrow ai-icon'
                }`}
                to='/college'
              >
                <i className='flaticon-381-layer-1'></i>
                <span className='nav-text'>Collages</span>
              </Link>
            </li>

            <li className={`${pages.includes(path) ? 'mm-active' : ''}`}>
              <Link className='has-arrow ai-icon' to='#' aria-expanded='false'>
                <i className='flaticon-381-layer-1'></i>
                <span className='nav-text'>Pages</span>
              </Link>
              <ul aria-expanded='false'>
                <li>
                  <Link to='/page-register'>Register</Link>
                </li>
                <li>
                  <Link to='/page-login'>Login</Link>
                </li>
                <li className={`${error.includes(path) ? 'mm-active' : ''}`}>
                  <Link className='has-arrow' to='#' aria-expanded='false'>
                    Error
                  </Link>
                  <ul aria-expanded='false'>
                    <li>
                      <Link
                        className={`${
                          path === 'page-error-400' ? 'mm-active' : ''
                        }`}
                        to='/page-error-400'
                      >
                        Error 400
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === 'page-error-403' ? 'mm-active' : ''
                        }`}
                        to='/page-error-403'
                      >
                        Error 403
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === 'page-error-404' ? 'mm-active' : ''
                        }`}
                        to='/page-error-404'
                      >
                        Error 404
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === 'page-error-500' ? 'mm-active' : ''
                        }`}
                        to='/page-error-500'
                      >
                        Error 500
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === 'page-error-503' ? 'mm-active' : ''
                        }`}
                        to='/page-error-503'
                      >
                        Error 503
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'page-lock-screen' ? 'mm-active' : ''
                    }`}
                    to='/page-lock-screen'
                  >
                    Lock Screen
                  </Link>
                </li>
              </ul>
            </li>
          </MM>

          <div className='plus-box'>
            <p>Add New Collage </p>
          </div>
          <div className='copyright'>
            <p>
              <strong>Admission mantra Admin Dashboard</strong> © 2021 All
              Rights Reserved
            </p>
            <p>
              Made with <span className='heart' /> by edumantra
            </p>
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
