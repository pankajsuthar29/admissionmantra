import React from 'react';

/// React router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/// Css
import './index.css';
import './chart.css';
import './step.css';

/// Layout
import Nav from './layouts/nav';
import Footer from './layouts/Footer';

/// Pages
import Registration from './pages/Registration';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import LockScreen from './pages/LockScreen';
import Error400 from './pages/Error400';
import Error403 from './pages/Error403';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';
import Error503 from './pages/Error503';
/// Widget
import Widget from './pages/Widget';

/// Deshboard
import Home from './components/Dashboard/Home';
import Doctors from './components/Dashboard/Doctors';
import DoctorsDetails from './components/Dashboard/Doctors-Details';
import DoctorsReview from './components/Dashboard/Doctors-Review';
// import PatientDetails from "./components/Dashboard/Patient-Details";

import Setting from './layouts/Setting';

// Data
import CourseSessionType from './components/Master/CourseSessionType/CourseSessionType';
import CourseType from './components/Master/CourseType/CourseType';
import CourseValidType from './components/Master/CourseValidType/CourseValidType';
import EstablishType from './components/Master/EstablishType/EstablishType';
import DocumentType from './components/Master/DocumentType/DocumentType';
import PriorityType from './components/Master/PriorityType/PriorityType';
import Courses from './components/Master/Courses/Courses';
import ApprovalType from './components/Master/ApprovalType/ApprovalType';
import ExamType from './components/Master/ExamType/ExamType';
import FacultyDepartmentType from './components/Master/FacultyDepartmentType/FacultyDepartmentType';
import FacultyType from './components/Master/FacultyType/FacultyType';
import IentityType from './components/Master/IentityType/IentityType';
import CourseSessionTypeFee from './components/Master/CourseSessionTypeFee/CourseSessionTypeFee';

// College
import IEntity from './components/College/Colleges/IEntity';
import CollegeDetail from './components/College/CollegeDetail/CollegeDetail';
import CollegeCourses from './components/College/CollegeCourses/CollegeCourses';
import CollegeApproval from './components/College/CollegeApproval/CollegeApproval';
import CollegeRank from './components/College/CollegeRank/CollegeRank';
import CollegeEvents from './components/College/CollegeEvents/CollegeEvents';
import CollegePlacementTotal from './components/College/CollegePlacementTotal/CollegePlacementTotal';
import Collegefacilities from './components/College/CollegeFacilities/Collegefacilities';
import Collegefaculties from './components/College/CollegeFaculties/CollegeFaculties';
import CollegeBlogs from './components/College/CollegeBlogs/CollegeBlogs';
import CollegePlacementClient from './components/College/CollegePlacementClient/CollegePlacementClient';
import CourseDetails from './components/College/CollegeCourses/CourseDetails/CourseDetails';
import CourseCutOff from './components/College/CollegeCourses/CourseCutOff/CourseCutOff';

const Markup = () => {
  let path = window.location.pathname;
  path = path.split('/');
  path = path[path.length - 1];
  let pagePath = path.split('-').includes('page');
  const routes = [
    /// Deshborad
    { url: '', component: Home },
    { url: 'doctors', component: Doctors },
    // { url: "workout-plan", component: WorkoutPlan},
    { url: 'doctors-details', component: DoctorsDetails },
    { url: 'doctors-review', component: DoctorsReview },
    // { url: "patient-details", component: PatientDetails },
    // { url: "distance-map", component: DistanceMap},
    // { url: "diet-food-menu", component: DietFoodMenu },
    // { url: "personal-record", component: PersonalRecord },

    // Data
    { url: 'master-approval-type', component: ApprovalType },
    { url: 'master-course-session-type', component: CourseSessionType },
    { url: 'master-course-type', component: CourseType },
    { url: 'master-course-valid-type', component: CourseValidType },
    { url: 'master-establish-type', component: EstablishType },
    { url: 'master-document-type', component: DocumentType },
    { url: 'master-priority-type', component: PriorityType },
    { url: 'master-courses', component: Courses },
    { url: 'master-exam-type', component: ExamType },
    { url: 'master-faculty-department-type', component: FacultyDepartmentType },
    { url: 'master-faculty-type', component: FacultyType },
    { url: 'master-ientity-type', component: IentityType },
    { url: 'master-Course-session-type-fee', component: CourseSessionTypeFee },

    // college
    { url: 'college', component: IEntity },
    { url: 'college-detail', component: CollegeDetail },
    { url: 'college-courses', component: CollegeCourses },
    { url: 'college-approvals', component: CollegeApproval },
    { url: 'college-ranks', component: CollegeRank },
    { url: 'college-events', component: CollegeEvents },
    { url: 'college-placement-total', component: CollegePlacementTotal },
    { url: 'college-facilities', component: Collegefacilities },
    { url: 'college-faculties', component: Collegefaculties },
    { url: 'college-blogs', component: CollegeBlogs },
    { url: 'college-placement-client', component: CollegePlacementClient },

    // Courses
    { url: 'college-course-detail', component: CourseDetails },
    { url: 'college-course-CutOff', component: CourseCutOff },

    /// pages
    { url: 'widget-basic', component: Widget },

    { url: 'page-register', component: Registration },
    { url: 'page-lock-screen', component: LockScreen },
    { url: 'page-login', component: Login },
    { url: 'page-forgot-password', component: ForgotPassword },
    { url: 'page-error-400', component: Error400 },
    { url: 'page-error-403', component: Error403 },
    { url: 'page-error-404', component: Error404 },
    { url: 'page-error-500', component: Error500 },
    { url: 'page-error-503', component: Error503 },
  ];

  return (
    // <Router basename="/demo/fito/">
    <Router basename='/react/demo/'>
      <div
        id={`${!pagePath ? 'main-wrapper' : ''}`}
        className={`${!pagePath ? 'show' : 'mh100vh'}`}
      >
        {!pagePath && <Nav />}
        <div className={` ${!pagePath ? 'content-body' : ''}`}>
          <div
            className={`${!pagePath ? 'container-fluid' : ''}`}
            style={{ minHeight: '720px', marginBottom: '80px' }}
          >
            <Switch>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`/${data.url}`}
                  component={data.component}
                />
              ))}
            </Switch>
          </div>
        </div>
        {!pagePath && <Footer />}
      </div>
      <Setting />
    </Router>
  );
};

export default Markup;
