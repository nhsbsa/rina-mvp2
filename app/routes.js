// External dependencies
const express = require('express');

// Create router
const router = express.Router();

// =============================================================================
// OUTPUT SESSION DATA TO CONSOLE FOR ALL ROUTES

router.use((req, res, next) => {
  const log = {
    method: req.method,
    url: req.originalUrl,
    data: req.session.data
  }
  console.log(JSON.stringify(log, null, 2))
  // Enable/disable in .env file
  // if (process.env.LOGGING === 'TRUE') {
  //   console.log(JSON.stringify(log, null, 2))
  // }
  next()
})

// =============================================================================
// VERSION ROUTES FILES

// --- LATEST VERSION ---
// router.use('/latest', require('./views/current/_routes'));

// --- ITERATIONS ---
router.use('/v1', require('./views/v1/_routes')); //Happy path ones here
router.use('/v2', require('./views/v2/_routes'));
router.use('/v3', require('./views/v3/_routes'));
router.use('/v4-happy-path', require('./views/v4-happy-path/_routes'));
router.use('/v5-happy-path', require('./views/v5-happy-path/_routes'));
router.use('/v6-happy-path', require('./views/v6-happy-path/_routes'));
router.use('/path-2-v1', require('./views/path-2-v1/_routes')); //Unhappy path ones here
router.use('/path-2-v2', require('./views/path-2-v2/_routes'));
router.use('/v3-unhappy-path', require('./views/v3-unhappy-path/_routes'));
router.use('/s1-path-v1', require('./views/s1-path-v1/_routes')); //S1 paths here
router.use('/common-approach-v1', require('./views/common-approach-v1/_routes')); // Common approach paths here
router.use('/v2-common-approach', require('./views/v2-common-approach/_routes')); // Common approach paths here

// =============================================================================
// EXPORT ROUTER

module.exports = router;
