// Import controlers
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const checkUserFn = require('./middlewares/checkUserFn');
const checkUserFnSolution = require('./middlewares/checkUserFnSolution');


// Match URL's with controllers
exports.appRoute = router => {

    router.post('/api/user/login', authController.processLogin);
    router.post('/api/user/register', authController.processRegister);
    router.post('/api/user/process-submission', checkUserFn.getClientUserId, userController.processDesignSubmission);//Old validation
    router.put('/api/user/', userController.processUpdateOneUser);
    router.put('/api/user/design/', userController.processUpdateOneDesign);
    router.post('/api/user/processInvitation/', checkUserFn.getClientUserId, userController.processSendInvitation);//Old validation

    router.get('/api/user/process-search-design/:pagenumber/:search?', checkUserFn.getClientUserId, userController.processGetSubmissionData);//Old validation
    // router.get('/api/user/process-search-user/:pagenumber/:search?', checkUserFn.getClientUserId, userController.processGetUserData);//Old validation
    router.get('/api/user/process-search-user-design/:pagenumber/:search?', userController.processGetSubmissionsbyEmail);
    router.get('/api/user/:recordId', userController.processGetOneUserData);
    router.get('/api/user/design/:fileId', userController.processGetOneDesignData);



    // router.post('/api/user/process-submission', checkUserFnSolution.checkForValidUserRoleUser, userController.processDesignSubmission);
    // router.post('/api/user/processInvitation/', checkUserFnSolution.checkForValidUserRoleUser, userController.processSendInvitation);
    // router.get('/api/user/process-search-design/:pagenumber/:search?', checkUserFnSolution.checkForValidUserRoleUser, userController.processGetSubmissionData);
    router.get('/api/user/process-search-user/:pagenumber/:search?', checkUserFnSolution.checkForValidUserRoleUser, userController.processGetUserData);

};