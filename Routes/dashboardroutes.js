const { Router } = require('express');
const dashboardController = require('../Controllers/dashboardController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();


router.get('/', requireAuth, dashboardController.dashboard_get);
// //get routes for pds manager
router.get('/personalinformation', requireAuth, dashboardController.personalinformation_get);
// router.get('/familybackground', requireAuth, dashboardController.familybackground_get);
// router.get('/education', requireAuth, dashboardController.education_get);
// router.get('/eligibility', requireAuth, dashboardController.eligibility_get);
// router.get('/workexperience', requireAuth, dashboardController.workexperience_get);
// router.get('/voluntarywork', requireAuth, dashboardController.voluntarywork_get);
// router.get('/training', requireAuth, dashboardController.training_get);
// router.get('/otherinfo', requireAuth, dashboardController.otherinfo_get);
// router.get('/questions', requireAuth, dashboardController.questions_get);
// router.get('/references', requireAuth, dashboardController.references_get);
// router.get('/servicerecords', requireAuth, dashboardController.servicerecords_get);
// //post routes for pds manager
router.post('/personalinformation', requireAuth, dashboardController.personalinformation_post);
// router.post('/familybackground', requireAuth, dashboardController.familybackground_post);
// router.post('/education', requireAuth, dashboardController.education_post);
// router.post('/eligibility', requireAuth, dashboardController.eligibility_post);
// router.post('/workexperience', requireAuth, dashboardController.workexperience_post);
// router.post('/voluntarywork', requireAuth, dashboardController.voluntarywork_post);
// router.post('/training', requireAuth, dashboardController.training_post);
// router.post('/otherinfo', requireAuth, dashboardController.otherinfo_post);
// router.post('/questions', requireAuth, dashboardController.questions_post);
// router.post('/references', requireAuth, dashboardController.references_post);
// router.post('/servicerecords', requireAuth, dashboardController.servicerecords_post);



module.exports = router;