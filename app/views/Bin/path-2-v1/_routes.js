// External dependencies
const express = require('express');

// Create router
const router = express.Router();

// =============================================================================
// TEMPLATE / GUIDANCE

/*

  Basic overview: https://prototype-kit.service.gov.uk/docs/create-routes

  1. Make sure that page form action is set to submit back to itself
  2. The path in router.post is a regex of the page to be posted from
     e.g. /start-page/ would be caught by both 'start-page' and 'ohs-start-page'
  3. TBC

*/

router.post(/name-of-page-posting-from/, (req, res) => {
  // Do any processing here
  res.redirect('name-of-page-to-redirect-to')
});


// =============================================================================
// X009


// --- x009 ---
router.post(/x009/, (req, res) => {
  res.redirect('x009-success')
});


// --- ADD SEX ---
router.post(/x009-sex/, (req, res) => {
  
  if (!req.session.data['x009-sex']) {
    req.session.data['x009-sex-null'] = 1;
    res.redirect('x009-sex') // Try again
  } else {
    delete req.session.data['x009-sex-null'];
    res.redirect('x009-check')
  }
});



// =============================================================================
// OHS: CASE

// --- UPDATE CASE NOTES ---
// router.post(/ohs-case-update-notes/, (req, res) => {
//   res.redirect('ohs-so45-create')
// });

// =============================================================================
// EXPORT ROUTER






module.exports = router;


