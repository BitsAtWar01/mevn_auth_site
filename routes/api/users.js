const router = require('express').Router();
//Bring in User Registeration Function
const {
    validators,
    userLogin,
    userRegister,
    serializeUser,
    checkRole,
    userAuth
} = require('../../utils/Auth');

//User Registeration Route
router.post('/register-user', validators['register'], async (req, res) => await userRegister(req, res, 'user'))

//Admin Registeration Route
router.post('/register-admin', validators['register'], async (req, res) => await userRegister(req, res, 'admin'))

//Super Admin Registeration Route
router.post('/register-superadmin', validators['register'], async (req, res) => await userRegister(req, res, 'superadmin'))

//User Login Route
router.post('/login-user', validators['login'], async (req, res) => await userLogin(req, res, 'user'))

//Admin Login Route
router.post('/login-admin', validators['login'], async (req, res) => await userLogin(req, res, 'admin'))

//Super Admin Login Route
router.post('/login-superadmin', validators['login'], async (req, res) => await userLogin(req, res, 'superadmin'))

//Profile Route
router.get('/profile', userAuth, (req, res) => {
    return res.json(serializeUser(req.user));
})

//User Protected Route
router.get("/user-protected", userAuth, checkRole(['user']), async (req, res) => {
    return res.json("Hello World");
});

//Admin Protected Route
router.get("/admin-protected", userAuth, checkRole(['admin', 'superadmin']), async (req, res) => {
    return res.json("Hello World");
});

//Super Admin Protected Route
router.get("/superadmin-protected", userAuth, checkRole(['superadmin']), async (req, res) => {
    return res.json("Hello World");
});

module.exports = router;