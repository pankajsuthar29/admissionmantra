import { id } from 'chartjs-plugin-streaming';
import { BaseApi } from './BaseApi';

// ApprovalTypes Apis
const GetApprovalTypes = () => BaseApi.get('ApprovalTypes');
const PostApprovalTypes = (form) => BaseApi.post('ApprovalTypes', form);
const PutApprovalTypes = (id, form) =>
  BaseApi.post('ApprovalTypes/' + id, form);
const DeleteApprovalTypes = (id) => BaseApi.delete('ApprovalTypes/' + id);

// CourseSessionTypes Apis
const GetCourseSessionTypes = () => BaseApi.get('CourseSessionTypes');

const GetCourseSessionTypesById = (id) =>
  BaseApi.get('CourseSessionTypes/' + id);

const DeleteCourseSessionTypes = (id) =>
  BaseApi.delete('CourseSessionTypes/' + id);

const PostCourseSessionTypes = (name, totalYears, isActive) =>
  BaseApi.post('CourseSessionTypes', {
    name: name,
    totalYears: totalYears,
    isActive: isActive,
  });

const PutCourseSessionTypes = (id, name, totalYears, isActive) =>
  BaseApi.put('CourseSessionTypes/' + id, {
    id: id,
    name: name,
    totalYears: totalYears,
    isActive: isActive,
  });

// CourseSessionTypeFees Apis
const GetCourseSessionTypeFees = () => BaseApi.get('CourseSessionTypeFees');

const GetCourseSessionTypeFeesById = (id) =>
  BaseApi.get('CourseSessionTypeFees/' + id);

const DeleteCourseSessionTypeFees = (id) =>
  BaseApi.delete('CourseSessionTypeFees/' + id);

const PostCourseSessionTypeFees = (name, totalYears, isActive) =>
  BaseApi.post('CourseSessionTypeFees', {
    name: name,
    totalYears: totalYears,
    isActive: isActive,
  });

const PutCourseSessionTypeFees = (id, name, totalYears, isActive) =>
  BaseApi.put('CourseSessionTypeFees/' + id, {
    id: id,
    name: name,
    totalYears: totalYears,
    isActive: isActive,
  });

// CourseTypes Apis
const GetCourseTypes = () => BaseApi.get('CourseTypes');

const GetCourseTypesById = (id) => BaseApi.get('CourseTypes/' + id);

const DeleteCourseTypes = (id) => BaseApi.delete('CourseTypes/' + id);

const PostCourseTypes = (name, isActive) =>
  BaseApi.post('CourseTypes', { name: name, isActive: isActive });

const PutCourseTypes = (id, name, isActive) =>
  BaseApi.put('CourseTypes/' + id, { id: id, name: name, isActive: isActive });

// courseValidTypes Apis
const GetCourseValidTypes = () => BaseApi.get('CourseValIdTypes');

const GetCourseValidTypesById = (id) => BaseApi.get('CourseValIdTypes/' + id);

const DeleteCourseValidTypes = (id) => BaseApi.delete('CourseValIdTypes/' + id);

const PostCourseValidTypes = (name, isActive) =>
  BaseApi.post('CourseValIdTypes', { name: name, isActive: isActive });

const PutCourseValidTypes = (id, name, isActive) =>
  BaseApi.put('CourseValIdTypes/' + id, {
    id: id,
    name: name,
    isActive: isActive,
  });

// EstablishTypes Apis
const GetEstablishTypes = () => BaseApi.get('EstablishTypes');

const GetEstablishTypesById = (id) => BaseApi.get('EstablishTypes/' + id);

const DeleteEstablishTypes = (id) => BaseApi.delete('EstablishTypes/' + id);

const PostEstablishTypes = (name, isActive) =>
  BaseApi.post('EstablishTypes', { name: name, isActive: isActive });

const PutEstablishTypes = (id, name, isActive) =>
  BaseApi.put('EstablishTypes/' + id, {
    id: id,
    name: name,
    isActive: isActive,
  });

// DocumentTypes Apis
const GetDocumentTypes = () => BaseApi.get('DocumentTypes');

const GetDocumentTypesById = (id) => BaseApi.get('DocumentTypes/' + id);

const DeleteDocumentTypes = (id) => BaseApi.delete('DocumentTypes/' + id);

const PostDocumentTypes = (name, isActive) =>
  BaseApi.post('DocumentTypes', { name: name, isActive: isActive });

const PutDocumentTypes = (id, name, isActive) =>
  BaseApi.put('DocumentTypes/' + id, {
    id: id,
    name: name,
    isActive: isActive,
  });

// PriorityTypes Apis
const GetPriorityTypes = () => BaseApi.get('PriorityTypes');

const GetPriorityTypesById = (id) => BaseApi.get('PriorityTypes/' + id);

const DeletePriorityTypes = (id) => BaseApi.delete('PriorityTypes/' + id);

const PostPriorityTypes = (name, isActive) =>
  BaseApi.post('PriorityTypes', { name: name, isActive: isActive });

const PutPriorityTypes = (id, name, isActive) =>
  BaseApi.put('PriorityTypes/' + id, {
    id: id,
    name: name,
    isActive: isActive,
  });

// Courses Apis
const GetCourses = () => BaseApi.get('Courses');

const GetCoursesById = (id) => BaseApi.get('Courses/' + id);

const DeleteCourses = (id) => BaseApi.delete('Courses/' + id);

const PostCourses = (
  courseId,
  courseTypeId,
  priorityTypeId,
  name,
  description,
  isActive
) =>
  BaseApi.post('Courses', {
    courseId: courseId,
    courseTypeId: courseTypeId,
    priorityTypeId: priorityTypeId,
    name: name,
    description: description,
    isActive: isActive,
  });

const PutCourses = (
  id,
  courseId,
  courseTypeId,
  priorityTypeId,
  name,
  description,
  isActive
) =>
  BaseApi.put('Courses/' + id, {
    id: id,
    courseId: courseId,
    courseTypeId: courseTypeId,
    priorityTypeId: priorityTypeId,
    name: name,
    description: description,
    isActive: isActive,
  });

// ExamTypes Apis
const GetExamTypes = () => BaseApi.get('ExamTypes');

const GetExamTypesById = (id) => BaseApi.get('ExamTypes/' + id);

const DeleteExamTypes = (id) => BaseApi.delete('ExamTypes/' + id);

const PostExamTypes = (name, isActive) =>
  BaseApi.post('ExamTypes', { name: name, isActive: isActive });

const PutExamTypes = (id, name, isActive) =>
  BaseApi.put('ExamTypes/' + id, { id: id, name: name, isActive: isActive });

// FacultyDepartmentTypes Apis
const GetFacultyDepartmentTypes = () => BaseApi.get('FacultyDepartmentTypes');

const GetFacultyDepartmentTypesById = (id) =>
  BaseApi.get('FacultyDepartmentTypes/' + id);

const DeleteFacultyDepartmentTypes = (id) =>
  BaseApi.delete('FacultyDepartmentTypes/' + id);

const PostFacultyDepartmentTypes = (name, isActive) =>
  BaseApi.post('FacultyDepartmentTypes', { name: name, isActive: isActive });

const PutFacultyDepartmentTypes = (id, name, isActive) =>
  BaseApi.put('FacultyDepartmentTypes/' + id, {
    id: id,
    name: name,
    isActive: isActive,
  });

// FacultyTypes Apis
const GetFacultyTypes = () => BaseApi.get('FacultyTypes');

const GetFacultyTypesById = (id) => BaseApi.get('FacultyTypes/' + id);

const DeleteFacultyTypes = (id) => BaseApi.delete('FacultyTypes/' + id);

const PostFacultyTypes = (name, isActive) =>
  BaseApi.post('FacultyTypes', { name: name, isActive: isActive });

const PutFacultyTypes = (id, name, isActive) =>
  BaseApi.put('FacultyTypes/' + id, { id: id, name: name, isActive: isActive });

// IentityTypes Apis
const GetIentityTypes = () => BaseApi.get('IentityTypes');

const GetIentityTypesById = (id) => BaseApi.get('IentityTypes/' + id);

const DeleteIentityTypes = (id) => BaseApi.delete('IentityTypes/' + id);

const PostIentityTypes = (name, isActive) =>
  BaseApi.post('IentityTypes', { name: name, isActive: isActive });

const PutIentityTypes = (id, name, isActive) =>
  BaseApi.put('IentityTypes/' + id, { id: id, name: name, isActive: isActive });

// Ientity Apis
const GetIentity = () => BaseApi.get('ientities');

const GetIentityById = (id) => BaseApi.get('Ientities/' + id);

const DeleteIentity = (id) => BaseApi.delete('Ientities/' + id);

const PostIentity = (form) => BaseApi.post('ientities', form);

// const PutIentity = (id, name, isActive) =>
//   BaseApi.put("Ientity/" + id, { id: id, name: name, isActive: isActive });
const PutIentity = (
  ientityTypeId,
  locationId,
  priorityTypeId,
  entityParentId,
  establishTypeId,
  name,
  address,
  pinCode,
  estbDate,
  phoneNo,
  mobileNo1,
  mobileNo2,
  emailId,
  websiteUrl,
  mapUrl,
  logoImage,
  lat,
  long,
  isActive
) =>
  BaseApi.put('ientities/' + id, {
    ientityTypeId: ientityTypeId,
    locationId: locationId,
    priorityTypeId: priorityTypeId,
    entityParentId: entityParentId,
    establishTypeId: establishTypeId,
    address: address,
    pinCode: pinCode,
    estbDate: estbDate,
    phoneNo: phoneNo,
    mobileNo1: mobileNo1,
    mobileNo2: mobileNo2,
    emailId: emailId,
    websiteUrl: websiteUrl,
    mapUrl: mapUrl,
    logoImage: logoImage,
    lat: lat,
    long: long,
    name: name,
    isActive: isActive,
  });

// Locations Apis

const Getlocations = () => BaseApi.get('locations');

const GetlocationsbyId = (id) => BaseApi.get('locations/' + id);

const Deletelocations = (id) => BaseApi.delete('locations/' + id);

const Postlocations = (locationParentId, locationTypeId, name, isActive) =>
  BaseApi.post('locations', {
    locationParentId: locationParentId,
    locationTypeId: locationTypeId,
    name: name,
    isActive: isActive,
  });

const Putlocations = (id, locationParentId, locationTypeId, name, isActive) =>
  BaseApi.put('locations/' + id, {
    id: id,
    locationParentId: locationParentId,
    locationTypeId: locationTypeId,
    name: name,
    isActive: isActive,
  });

// CourseApplicationProcesses Apis
const GetCourseApplicationProcesses = () =>
  BaseApi.get('CourseApplicationProcesses');

const GetCourseApplicationProcessesbyId = (id) =>
  BaseApi.get('CourseApplicationProcesses/' + id);

const DeleteCourseApplicationProcesses = (id) =>
  BaseApi.delete('CourseApplicationProcesses/' + id);

const PostCourseApplicationProcesses = (
  ientityCourseId,
  name,
  discription,
  isActive
) =>
  BaseApi.post('CourseApplicationProcesses', {
    ientityCourseId: ientityCourseId,
    name: name,
    discription: discription,
    isActive: isActive,
  });

const PutCourseApplicationProcesses = (
  id,
  ientityCourseId,
  name,
  discription,
  isActive
) =>
  BaseApi.put('CourseApplicationProcesses/' + id, {
    id: id,
    ientityCourseId: ientityCourseId,
    name: name,
    discription: discription,
    isActive: isActive,
  });

// CourseEligibilityCriterions Apis
const GetCourseEligibilityCriterions = () =>
  BaseApi.get('CourseEligibilityCriterions');

const GetCourseEligibilityCriterionsbyId = (id) =>
  BaseApi.get('CourseEligibilityCriterions/' + id);

const DeleteCourseEligibilityCriterions = (id) =>
  BaseApi.delete('CourseEligibilityCriterions/' + id);

const PostCourseEligibilityCriterions = (
  ientityCourseId,
  name,
  discription,
  isActive
) =>
  BaseApi.post('CourseEligibilityCriterions', {
    ientityCourseId: ientityCourseId,
    name: name,
    discription: discription,
    isActive: isActive,
  });

const PutCourseEligibilityCriterions = (
  id,
  ientityCourseId,
  name,
  discription,
  isActive
) =>
  BaseApi.put('CourseEligibilityCriterions/' + id, {
    id: id,
    ientityCourseId: ientityCourseId,
    name: name,
    discription: discription,
    isActive: isActive,
  });

// Events Apis
const GetEvents = () => BaseApi.get('Events');

const GetEventsbyId = (id) => BaseApi.get('Events/' + id);

const DeleteEvents = (id) => BaseApi.delete('Events/' + id);

const PostEvents = (
  eventsId,
  ientityId,
  priorityTypeId,
  name,
  description,
  isActive
) =>
  BaseApi.post('Events', {
    eventsId: eventsId,
    ientityId: ientityId,
    priorityTypeId: priorityTypeId,
    name: name,
    description: description,
    isActive: isActive,
  });

const PutEvents = (
  id,
  eventsId,
  ientityId,
  priorityTypeId,
  name,
  description,
  isActive
) =>
  BaseApi.put('Events/' + id, {
    id: id,
    eventsId: eventsId,
    ientityId: ientityId,
    priorityTypeId: priorityTypeId,
    name: name,
    description: description,
    isActive: isActive,
  });

// ExamCourseCutOffs Apis
const GetExamCourseCutOffs = () => BaseApi.get('ExamCourseCutOffs');

const GetExamCourseCutOffsbyId = (id) => BaseApi.get('ExamCourseCutOffs/' + id);

const DeleteExamCourseCutOffs = (id) =>
  BaseApi.delete('ExamCourseCutOffs/' + id);

const PostExamCourseCutOffs = (
  examId,
  ientityCourseId,
  description,
  document,
  examYear,
  openingRank,
  closingRank,
  gender,
  cast,
  isActive
) =>
  BaseApi.post('ExamCourseCutOffs', {
    examId: examId,
    ientityCourseId: ientityCourseId,
    description: description,
    document: document,
    examYear: examYear,
    openingRank: openingRank,
    closingRank: closingRank,
    gender: gender,
    cast: cast,
    isActive: isActive,
  });

const PutExamCourseCutOffs = (
  id,
  examId,
  ientityCourseId,
  description,
  document,
  examYear,
  openingRank,
  closingRank,
  gender,
  cast,
  isActive
) =>
  BaseApi.put('ExamCourseCutOffs/' + id, {
    id: id,
    examId: examId,
    ientityCourseId: ientityCourseId,
    description: description,
    document: document,
    examYear: examYear,
    openingRank: openingRank,
    closingRank: closingRank,
    gender: gender,
    cast: cast,
    isActive: isActive,
  });

// ExamCutOffDocuments apis

const GetExamCutOffDocuments = () => BaseApi.get('ExamCutOffDocuments');

const GetExamCutOffDocumentsbyId = (id) =>
  BaseApi.get('ExamCutOffDocuments/' + id);

const DeleteExamCutOffDocuments = (id) =>
  BaseApi.delete('ExamCutOffDocuments/' + id);

const PostExamCutOffDocuments = (
  examId,
  ientityId,
  name,
  description,
  document,
  examYear,
  isActive
) =>
  BaseApi.post('ExamCutOffDocuments', {
    examId: examId,
    ientityId: ientityId,
    name: name,
    description: description,
    document: document,
    examYear: examYear,
    isActive: isActive,
  });

const PutExamCutOffDocuments = (
  id,
  examId,
  ientityId,
  name,
  description,
  document,
  examYear,
  isActive
) =>
  BaseApi.put('ExamCutOffDocuments/' + id, {
    id: id,
    examId: examId,
    ientityId: ientityId,
    name: name,
    description: description,
    document: document,
    examYear: examYear,
    isActive: isActive,
  });

// Exams apis
const GetExams = () => BaseApi.get('Exams');

const GetExamsbyId = (id) => BaseApi.get('Exams/' + id);

const DeleteExams = (id) => BaseApi.delete('Exams/' + id);

const PostExams = (
  examId,
  examTypeId,
  priorityTypeId,
  name,
  description,
  isActive
) =>
  BaseApi.post('Exams', {
    examId: examId,
    examTypeId: examTypeId,
    priorityTypeId: priorityTypeId,
    name: name,
    description: description,
    isActive: isActive,
  });

const PutExams = (
  id,
  examId,
  examTypeId,
  priorityTypeId,
  name,
  description,
  isActive
) =>
  BaseApi.put('Exams/' + id, {
    id: id,
    examId: examId,
    examTypeId: examTypeId,
    priorityTypeId: priorityTypeId,
    name: name,
    description: description,
    isActive: isActive,
  });

// IentityApprovals apis
const GetIentityApprovals = () => BaseApi.get('IentityApprovals');

const GetIentityApprovalsbyId = (id) => BaseApi.get('IentityApprovals/' + id);

const DeleteIentityApprovals = (id) => BaseApi.delete('IentityApprovals/' + id);

const PostIentityApprovals = (ientityId, approvalTypeId, isActive) =>
  BaseApi.post('IentityApprovals', {
    ientityId: ientityId,
    approvalTypeId: approvalTypeId,
    isActive: isActive,
  });

const PutIentityApprovals = (id, ientityId, approvalTypeId, isActive) =>
  BaseApi.put('IentityApprovals/' + id, {
    id: id,
    ientityId: ientityId,
    approvalTypeId: approvalTypeId,
    isActive: isActive,
  });

// IentityBlogs apis
const GetIentityBlogs = () => BaseApi.get('IentityBlogs');

const GetIentityBlogsbyId = (id) => BaseApi.get('IentityBlogs/' + id);

const DeleteIentityBlogs = (id) => BaseApi.delete('IentityBlogs/' + id);

const PostIentityBlogs = (form) => BaseApi.post('IentityBlogs', form);

const PutIentityBlogs = (
  id,
  ientityId,
  title,
  discription,
  createDate,
  createBy,
  imageUrl,
  isActive
) =>
  BaseApi.put('IentityBlogs/' + id, {
    id: id,
    ientityId: ientityId,
    title: title,
    discription: discription,
    createDate: createDate,
    createBy: createBy,
    imageUrl: imageUrl,
    isActive: isActive,
  });

// IentityCourses apis
const GetIentityCourses = () => BaseApi.get('IentityCourses/GetIentityCourse');

const GetIentityCoursesbyCourseId = (id) =>
  BaseApi.get('IentityCourses/GetIentityCourseById/' + id);

const GetIentityCoursesbyId = (id) =>
  BaseApi.get('IentityCourses/GetIentityCourse/' + id);

const DeleteIentityCourses = (id) =>
  BaseApi.delete('IentityCourses/DeleteIentityCourse/' + id);

const PostIentityCourses = (
  courseId,
  ientityId,
  courseSessionTypeId,
  courseValIdTypeId,
  courseFeeOneYear,
  certificateType,
  attandingType,
  attandingPlace,
  isActive
) =>
  BaseApi.post('IentityCourses/PostIentityCourse', {
    courseId: courseId,
    ientityId: ientityId,
    courseSessionTypeId: courseSessionTypeId,
    courseValIdTypeId: courseValIdTypeId,
    courseFeeOneYear: courseFeeOneYear,
    certificateType: certificateType,
    attandingType: attandingType,
    attandingPlace: attandingPlace,
    isActive: isActive,
  });

const PutIentityCourses = (
  id,
  courseId,
  ientityId,
  courseSessionTypeId,
  courseValIdTypeId,
  courseFeeOneYear,
  certificateType,
  attandingType,
  attandingPlace,
  isActive
) =>
  BaseApi.put('IentityCourses/PutIentityCourse/' + id, {
    id: id,
    courseId: courseId,
    ientityId: ientityId,
    courseSessionTypeId: courseSessionTypeId,
    courseValIdTypeId: courseValIdTypeId,
    courseFeeOneYear: courseFeeOneYear,
    certificateType: certificateType,
    attandingType: attandingType,
    attandingPlace: attandingPlace,
    isActive: isActive,
  });

// IentityDocuments apis
const GetIentityDocuments = () => BaseApi.get('IentityDocuments');

const GetIentityDocumentsbyId = (id) => BaseApi.get('IentityDocuments/' + id);

const DeleteIentityDocuments = (id) => BaseApi.delete('IentityDocuments/' + id);

// const PostIentityDocuments = (documentTypeId,ientityId,documentUrl,isActive) =>
//   BaseApi.post("IentityDocuments", {documentTypeId:documentTypeId,ientityId:ientityId,documentUrl:documentUrl,
//     attandingPlace:attandingPlace,  isActive: isActive });

const PutIentityDocuments = (
  id,
  documentTypeId,
  ientityId,
  documentUrl,
  isActive
) =>
  BaseApi.put('IentityDocuments/' + id, {
    id: id,
    documentTypeId: documentTypeId,
    ientityId: ientityId,
    documentUrl: documentUrl,
    isActive: isActive,
  });

// IentityFacilities apis

const GetIentityFacilities = () => BaseApi.get('IentityFacilities');

const GetIentityFacilitiesbyId = (id) => BaseApi.get('IentityFacilities/' + id);

const DeleteIentityFacilities = (id) =>
  BaseApi.delete('IentityFacilities/' + id);

const PostIentityFacilities = (form) => BaseApi.post('IentityFacilities', form);

const PutIentityFacilities = (id, ientityId, name, iconImage, isActive) =>
  BaseApi.put('IentityFacilities/' + id, {
    id: id,
    ientityId: ientityId,
    name: name,
    iconImage: iconImage,
    isActive: isActive,
  });

// IentityFaculties Apis
const GetIentityFaculties = () => BaseApi.get('IentityFaculties');

const GetIentityFacultiesbyId = (id) => BaseApi.get('IentityFaculties/' + id);

const DeleteIentityFaculties = (id) => BaseApi.delete('IentityFaculties/' + id);

const PostIentityFaculties = (form) => BaseApi.post('IentityFaculties', form);

const PutIentityFaculties = (id, from) =>
  BaseApi.put('IentityFaculties/' + id, from);

// IentityRanks Apis
const GetIentityRanks = () => BaseApi.get('IentityRanks');

const GetIentityRanksbyId = (id) => BaseApi.get('IentityRanks/' + id);

const DeleteIentityRanks = (id) => BaseApi.delete('IentityRanks/' + id);

const PostIentityRanks = (ientityId, name, isActive) =>
  BaseApi.post('IentityRanks', {
    ientityId: ientityId,
    name: name,
    isActive: isActive,
  });

const PutIentityRanks = (id, ientityId, name, isActive) =>
  BaseApi.put('IentityRanks/' + id, {
    id: id,
    ientityId: ientityId,
    name: name,
    isActive: isActive,
  });

// IientityBlogsDetails apis

const GetIientityBlogsDetails = () => BaseApi.get('IientityBlogsDetails');

const GetIientityBlogsDetailsbyId = (id) =>
  BaseApi.get('IientityBlogsDetails/' + id);

const DeleteIientityBlogsDetails = (id) =>
  BaseApi.delete('IientityBlogsDetails/' + id);

const PostIientityBlogsDetails = (form) =>
  BaseApi.post('IientityBlogsDetails', form);

const PutIientityBlogsDetails = (
  id,
  ientityBlogsId,
  title,
  createDate,
  createBy,
  discription,
  imageUrl,
  isActive
) =>
  BaseApi.put('IientityBlogsDetails/' + id, {
    id: id,
    ientityBlogsId: ientityBlogsId,
    title: title,
    createDate: createDate,
    createBy: createBy,
    discription: discription,
    imageUrl: imageUrl,
    isActive: isActive,
  });

// LocationTypes

const GetLocationTypes = () => BaseApi.get('LocationTypes');

const GetLocationTypesbyId = (id) => BaseApi.get('LocationTypes/' + id);

const DeleteLocationTypes = (id) => BaseApi.delete('LocationTypes/' + id);

const PostLocationTypes = (name, isActive) =>
  BaseApi.post('LocationTypes', { name: name, isActive: isActive });

const PutLocationTypes = (id, name, isActive) =>
  BaseApi.put('LocationTypes/' + id, {
    id: id,
    name: name,
    isActive: isActive,
  });

// Placements apis

const GetPlacements = () => BaseApi.get('Placements');

const GetPlacementsbyId = (id) => BaseApi.get('Placements/' + id);

const DeletePlacements = (id) => BaseApi.delete('Placements/' + id);

const PostPlacements = (
  ientityCourseId,
  totalInPercent,
  heighestCtc,
  document,
  sessionYear,
  isActive
) =>
  BaseApi.post('Placements', {
    ientityCourseId: ientityCourseId,
    totalInPercent: totalInPercent,
    heighestCtc: heighestCtc,
    document: document,
    sessionYear: sessionYear,
    isActive: isActive,
  });

const PutPlacements = (
  id,
  ientityCourseId,
  totalInPercent,
  heighestCtc,
  document,
  sessionYear,
  isActive
) =>
  BaseApi.put('Placements/' + id, {
    id: id,
    ientityCourseId: ientityCourseId,
    totalInPercent: totalInPercent,
    heighestCtc: heighestCtc,
    document: document,
    sessionYear: sessionYear,
    isActive: isActive,
  });

// PlacementTotals apis

const GetPlacementTotals = () => BaseApi.get('PlacementTotals');

const GetPlacementTotalsbyId = (id) => BaseApi.get('PlacementTotals/' + id);

const DeletePlacementTotals = (id) => BaseApi.delete('PlacementTotals/' + id);

const PostPlacementTotals = (
  ientityId,
  totalCompany,
  totalStudent,
  totalOffer,
  topRecuiters,
  sessionYear,
  isActive
) =>
  BaseApi.post('PlacementTotals', {
    ientityId: ientityId,
    totalCompany: totalCompany,
    totalStudent: totalStudent,
    totalOffer: totalOffer,
    topRecuiters: topRecuiters,
    sessionYear: sessionYear,
    isActive: isActive,
  });

const PutPlacementTotals = (
  id,
  ientityId,
  totalCompany,
  totalStudent,
  totalOffer,
  topRecuiters,
  sessionYear,
  isActive
) =>
  BaseApi.put('PlacementTotals/' + id, {
    id: id,
    ientityId: ientityId,
    totalCompany: totalCompany,
    totalStudent: totalStudent,
    totalOffer: totalOffer,
    topRecuiters: topRecuiters,
    sessionYear: sessionYear,
    isActive: isActive,
  });

// placement Clients apis

const GetIEntityPlacementClients = () => BaseApi.get('IEntityPlacementClients');

const GetIEntityPlacementClientsbyId = (id) =>
  BaseApi.get('IEntityPlacementClients/' + id);

const DeleteIEntityPlacementClients = (id) =>
  BaseApi.delete('IEntityPlacementClients/' + id);

const PostIEntityPlacementClients = (form) =>
  BaseApi.post('IEntityPlacementClients', form);

const PutIEntityPlacementClients = (
  id,
  ientityId,
  totalCompany,
  totalStudent,
  totalOffer,
  topRecuiters,
  sessionYear,
  isActive
) =>
  BaseApi.put('IEntityPlacementClients/' + id, {
    id: id,
    ientityId: ientityId,
    totalCompany: totalCompany,
    totalStudent: totalStudent,
    totalOffer: totalOffer,
    topRecuiters: topRecuiters,
    sessionYear: sessionYear,
    isActive: isActive,
  });

// CourseCutOffs Export
const GetCourseCutOffs = () => BaseApi.get('CourseCutOffs');
const GetCourseCutOffsbyId = (id) => BaseApi.get('CourseCutOffs/' + id);
const DeleteCourseCutOffs = (id) => BaseApi.delete('CourseCutOffs/' + id);
const PostCourseCutOffs = (
  ientityCourseId,
  name,
  discription,
  openingRank,
  closingRank,
  isActive
) =>
  BaseApi.post('CourseCutOffs', {
    ientityCourseId: ientityCourseId,
    name: name,
    discription: discription,
    openingRank: openingRank,
    closingRank: closingRank,
    isActive: isActive,
  });
const PutCourseCutOffs = (
  id,
  ientityCourseId,
  name,
  discription,
  openingRank,
  closingRank,
  isActive
) =>
  BaseApi.put('CourseCutOffs/' + id, {
    id: id,
    ientityCourseId: ientityCourseId,
    name: name,
    discription: discription,
    openingRank: openingRank,
    closingRank: closingRank,
    isActive: isActive,
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // ApprovalTypes export
  GetApprovalTypes,
  PostApprovalTypes,
  PutApprovalTypes,
  DeleteApprovalTypes,

  // CourseSessionTypes export
  GetCourseSessionTypes,
  GetCourseSessionTypesById,
  DeleteCourseSessionTypes,
  PostCourseSessionTypes,
  PutCourseSessionTypes,

  // CourseSessionTypeFees export
  GetCourseSessionTypeFees,
  GetCourseSessionTypeFeesById,
  DeleteCourseSessionTypeFees,
  PostCourseSessionTypeFees,
  PutCourseSessionTypeFees,

  // CourseTypes export
  GetCourseTypes,
  GetCourseTypesById,
  DeleteCourseTypes,
  PostCourseTypes,
  PutCourseTypes,

  // courseValidTypes export
  GetCourseValidTypes,
  GetCourseValidTypesById,
  DeleteCourseValidTypes,
  PostCourseValidTypes,
  PutCourseValidTypes,

  // EstablishTypes export
  GetEstablishTypes,
  GetEstablishTypesById,
  DeleteEstablishTypes,
  PostEstablishTypes,
  PutEstablishTypes,

  // DocumentTypes export
  GetDocumentTypes,
  GetDocumentTypesById,
  DeleteDocumentTypes,
  PostDocumentTypes,
  PutDocumentTypes,

  // PriorityTypes export
  GetPriorityTypes,
  GetPriorityTypesById,
  DeletePriorityTypes,
  PostPriorityTypes,
  PutPriorityTypes,

  // Courses export
  GetCourses,
  GetCoursesById,
  DeleteCourses,
  PostCourses,
  PutCourses,

  // ExamTypes export
  GetExamTypes,
  GetExamTypesById,
  DeleteExamTypes,
  PostExamTypes,
  PutExamTypes,

  // FacultyDepartmentTypes export
  GetFacultyDepartmentTypes,
  GetFacultyDepartmentTypesById,
  DeleteFacultyDepartmentTypes,
  PostFacultyDepartmentTypes,
  PutFacultyDepartmentTypes,

  // FacultyTypes exports
  GetFacultyTypes,
  GetFacultyTypesById,
  DeleteFacultyTypes,
  PostFacultyTypes,
  PutFacultyTypes,

  // IentityTypes exports
  GetIentityTypes,
  GetIentityTypesById,
  DeleteIentityTypes,
  PostIentityTypes,
  PutIentityTypes,

  // IEntity exports
  GetIentity,
  GetIentityById,
  DeleteIentity,
  PostIentity,
  PutIentity,
  // locations exports
  Getlocations,
  GetlocationsbyId,
  Deletelocations,
  Postlocations,
  Putlocations,

  // CourseApplicationProcesses exports
  GetCourseApplicationProcesses,
  GetCourseApplicationProcessesbyId,
  DeleteCourseApplicationProcesses,
  PutCourseApplicationProcesses,
  PostCourseApplicationProcesses,

  // CourseEligibilityCriterions exports
  GetCourseEligibilityCriterions,
  GetCourseEligibilityCriterionsbyId,
  PostCourseEligibilityCriterions,
  PutCourseEligibilityCriterions,
  DeleteCourseEligibilityCriterions,

  // Events exports
  GetEvents,
  GetEventsbyId,
  PostEvents,
  PutEvents,
  DeleteEvents,

  // ExamCourseCutOffs exports
  GetExamCourseCutOffs,
  PostExamCourseCutOffs,
  PutExamCourseCutOffs,
  GetExamCourseCutOffsbyId,
  DeleteExamCourseCutOffs,

  // ExamCutOffDocuments apis
  GetExamCutOffDocuments,
  PostExamCutOffDocuments,
  PutExamCutOffDocuments,
  GetExamCutOffDocumentsbyId,
  DeleteExamCutOffDocuments,

  // Exams exports
  GetExams,
  GetExamsbyId,
  PostExams,
  PutExams,
  DeleteExams,

  // GetIentityApprovals exports
  GetIentityApprovals,
  GetIentityApprovalsbyId,
  PostIentityApprovals,
  PutIentityApprovals,
  DeleteIentityApprovals,

  // IentityBlogs exports
  GetIentityBlogs,
  GetIentityBlogsbyId,
  PostIentityBlogs,
  PutIentityBlogs,
  DeleteIentityBlogs,

  // IentityCourses exports;
  GetIentityCourses,
  GetIentityCoursesbyId,
  GetIentityCoursesbyCourseId,
  PostIentityCourses,
  PutIentityCourses,
  DeleteIentityCourses,

  // IentityDocuments apis
  GetIentityDocuments,
  GetIentityDocumentsbyId,
  // PostIentityDocuments,
  PutIentityDocuments,
  DeleteIentityDocuments,

  // IentityFacilities apis
  GetIentityFacilities,
  GetIentityFacilitiesbyId,
  PostIentityFacilities,
  PutIentityFacilities,
  DeleteIentityFacilities,

  // IentityFaculties apis
  GetIentityFaculties,
  GetIentityFacultiesbyId,
  PostIentityFaculties,
  PutIentityFaculties,
  DeleteIentityFaculties,

  // IentityRanks exports
  GetIentityRanks,
  GetIentityRanksbyId,
  PostIentityRanks,
  PutIentityRanks,
  DeleteIentityRanks,

  // IientityBlogsDetails apis
  GetIientityBlogsDetails,
  GetIientityBlogsDetailsbyId,
  PostIientityBlogsDetails,
  PutIientityBlogsDetails,
  DeleteIientityBlogsDetails,

  // LocationTypes exports
  GetLocationTypes,
  GetLocationTypesbyId,
  PostLocationTypes,
  PutLocationTypes,
  DeleteLocationTypes,

  // Placements exports
  GetPlacements,
  GetPlacementsbyId,
  PostPlacements,
  PutPlacements,
  DeletePlacements,

  // PlacementTotals exports
  GetPlacementTotals,
  GetPlacementTotalsbyId,
  PostPlacementTotals,
  PutPlacementTotals,
  DeletePlacementTotals,

  // IentityPlacementClient Export
  GetIEntityPlacementClients,
  GetIEntityPlacementClientsbyId,
  DeleteIEntityPlacementClients,
  PostIEntityPlacementClients,
  PutIEntityPlacementClients,

  // CourseCutOffs Export
  GetCourseCutOffs,
  GetCourseCutOffsbyId,
  DeleteCourseCutOffs,
  PostCourseCutOffs,
  PutCourseCutOffs,
};
