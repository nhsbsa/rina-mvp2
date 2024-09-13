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
// RINA: LOGIN AND AUTH

// --- 1 ---
router.post(/login-and-auth-3/, (req, res) => {
  res.redirect('login-and-auth-1')
});

// --- 1 ---
router.post(/login-and-auth-1/, (req, res) => {
  res.redirect('ohs-signin-option')
});

// =============================================================================
// RINA: NAVIGATION

// ---START PAGE route a---
router.post(/login-and-auth-2a/, (req, res) => {
  res.redirect('find-case-1')
});

// ---START PAGE route b1---
router.post(/login-and-auth-2b/, (req, res) => {
  res.redirect('login-and-auth-4')
});

// ---START PAGE route b2---
router.post(/login-and-auth-4/, (req, res) => {
  res.redirect('find-case-1')
});



router.post(/nhs-signin/, (req, res) => {
  res.redirect('ohs-signin-option')
});

router.post(/alan/, (req, res) => {
  res.redirect('find-case-1')
});


// =============================================================================
// RINA: FIND CASE

// --- 1 ---
router.post(/find-case-1/, (req, res) => {

  if (!req.session.data['case-search-term']) {
    req.session.data['case-search-null'] = 1;
    res.redirect('find-case-1') // Try again
  } else {
    delete req.session.data['case-search-null'];
    res.redirect('find-case-1')
  }

});

// --- 2 ---
router.post(/rina-landing/, (req, res) => {
  res.redirect('ohs-case-view-so44')
});

// --- VIEW SO44 ---
router.post(/ohs-so44/, (req, res) => {
  res.redirect('so44-sent')
});

// --- GO TO OHS ---
router.post(/so44-sent/, (req, res) => {
  res.redirect('ohs-user-search-results')
});


// =============================================================================
// OHS: CASE

// --- LANDING PAGE ---
router.post(/ohs-landing-page/, (req, res) => {
  res.redirect('ohs-user-search')
});

// --- USER SEARCH ---
router.post(/(ohs-user-search$)/, (req, res) => {
  res.redirect('ohs-user-search-results')
});

// --- USER SEARCH RESULTS ---
router.post(/ohs-user-search-results/, (req, res) => {
  res.redirect('ohs-user-check-details')
});

// --- USER CHECK DETAILS ---
router.post(/ohs-user-check-details/, (req, res) => {
  res.redirect('ohs-case-search')
});

// --- CASE SEARCH ---
router.post(/ohs-case-search/, (req, res) => {

  if (!req.session.data['case-search-date-day'] || !req.session.data['case-search-date-month'] || !req.session.data['case-search-date-year']) {
    req.session.data['ohs-case-search-null'] = 1;
    res.redirect('ohs-case-search') // Try again
  } else {
    delete req.session.data['ohs-case-search-null'];
    res.redirect('ohs-case-check-answers')
  }
  
});



// --- CREATE ENTITLEMENT ---
router.post(/ohs-case-entitlement-create/, (req, res) => {
  
  if (!req.session.data['ohs-case-entitlement']) {
    req.session.data['ohs-case-entitlement-null'] = 1;
    res.redirect('ohs-case-entitlement-create') // Try again
  } else {
    delete req.session.data['ohs-case-entitlement-null'];
    res.redirect('ohs-case-check-answers')
  }
  
});


// --- ADD ENTITLEMENT TYPE ---
router.post(/ohs-case-entitlement-type/, (req, res) => {
  
  if (!req.session.data['ohs-case-entitlement-type']) {
    req.session.data['ohs-case-entitlement-type-null'] = 1;
    res.redirect('ohs-case-entitlement-type') // Try again
  } else {
    delete req.session.data['ohs-case-entitlement-type-null'];
    res.redirect('ohs-case-check-answers')
  }
});

// --- ADD RINA ID NUMBER ---
router.post(/ohs-case-add-rina-number/, (req, res) => {
  res.redirect('ohs-case-check-answers')
});


// --- ADD ENTITLEMENT DATES ---
router.post(/ohs-case-entitlement-dates/, (req, res) => {
  res.redirect('ohs-case-check-answers')
});

// --- ADD FACILITY DETAILS ---
router.post(/ohs-case-facility-details/, (req, res) => {
  res.redirect('ohs-case-check-answers')
});

// --- VIEW CASE DETAILS ---
router.post('/ohs-case-details-view/', (req, res) => {
  res.redirect('ohs-case-check-answers')
});

// --- CHECK ANSWERS ---
router.post(/ohs-case-check-answers/, (req, res) => {
  res.redirect('ohs-case-success')
});

// --- SUCCESS ---
router.post('/ohs-case-success/', (req, res) => {
  res.redirect('ohs-case-details-view-2')
});

// --- VIEW CASE DETAILS ---
router.post('/ohs-case-details-view-2/', (req, res) => {
  res.redirect('so45-personal')
});

// --- VIEW CASE DETAILS ---
router.post(/ohs-so45-create/, (req, res) => {
  res.redirect('so45-view')
});

// =============================================================================
// RINA: CASE

// --- VIEW SO45 ---
router.post(/so45-view/, (req, res) => {
  res.redirect('so45-send')
});

// --- SEND SO45 ---
router.post(/so45-send/, (req, res) => {
  res.redirect('ohs-case-update-notes')
});

// --- View SO45 p2 ---
router.post(/so45-personal/, (req, res) => {
  res.redirect('so45-entitled')
});

// --- View SO45 p3 ---
router.post(/so45-address/, (req, res) => {
  res.redirect('so45-dates')
});

// --- View SO45 p4 ---
router.post(/so45-dates/, (req, res) => {
  res.redirect('ohs-so45-success')
});












// =============================================================================
// X009

// --- x009 ---
router.post('/x009-case-answer/', (req, res) => {
  const whatContext = req.session.data['what-context'];

  if (whatContext === 'person') {
    res.redirect('x009-person');
  }
  else if (whatContext === 'employer') {
    res.redirect('x009-employer');
  } else {
    res.redirect('x009-reimbursement');
  }
});

// --- x009 ---
router.post(/x009-person/, (req, res) => {
  res.redirect('x009-reminders')
});

// --- x009 ---
router.post(/x009-employer/, (req, res) => {
  res.redirect('x009-reminders')
});

// --- x009 ---
router.post(/x009-reimbursement/, (req, res) => {
  res.redirect('x009-reminders')
});

// --- x009 ---
router.post(/x009-reminders/, (req, res) => {
  res.redirect('x009-success')
});

// --- ARE ENTITLED? ---
router.post('/so45-entitled/', (req, res) => {
  const so45Entitled = req.session.data['so45-entitled'];

  if (so45Entitled === 'yes') {
    delete req.session.data['so45-entitled'];
    res.redirect('so45-dates'); // Redirect to the 'yes' page
  } else if (so45Entitled === 'no') {
    delete req.session.data['so45-entitled'];
    res.redirect('so45-deny'); // Redirect to the 'no' page
  } else if (!so45Entitled) {
      req.session.data['so45-entitled-null'] = 1;
      res.redirect('so45-entitled'); // Warning if no option is selected
  }
});

// --- NOT ENTITLED ---
router.post(/so45-deny/, (req, res) => {
  
  if (!req.session.data['entitlement-reason']) {
    req.session.data['so45-deny-null'] = 1;
    res.redirect('so45-deny') // Try again
  } else {
    delete req.session.data['so45-deny'];
    res.redirect('ohs-so45-success')
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


