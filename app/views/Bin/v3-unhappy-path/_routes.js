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
// H001 routing

router.post('/p2-h001-create-2/', (req, res) => {
  const h001create = req.session.data['p2-h001-create-2'];

  if (h001create === 'yes') {
    delete req.session.data['p2-h001-create-2'];
    res.redirect('p2-h001-create-3-pt1'); // Redirect to the 'yes' page
  } else if (h001create === 'no') {
    delete req.session.data['p2-h001-create-2'];
    res.redirect('p2-h001-create-3-alt-pt1'); // Redirect to the 'no' page
  } else if (!h001create) {
      req.session.data['p2-h001-create-2-null'] = 1;
      res.redirect('p2-h001-create-2'); // Warning if no option is selected
  }
});

router.post('/h001-choose/', (req, res) => {
  const h001choose = req.session.data['h001-choose'];

  if (h001choose === 'person') {
    delete req.session.data['h001-choose'];
    res.redirect('p2-h001-create-1'); // Redirect to the 'person context' page
  } else if (h001choose === 'employer') {
    delete req.session.data['h001-choose'];
    res.redirect('h001-employer1'); // Redirect to the 'employer context' page
  }  else if (h001choose === 'reimbursement') {
      delete req.session.data['h001-choose'];
      res.redirect('h001-reimbursement1'); // Redirect to the 'reimbursement context' page
  } else if (!h001choose) {
      req.session.data['h001-choose-null'] = 1;
      res.redirect('h001-choose'); // Warning if no option is selected
  }
});

router.post('/h001-employer1/', (_req, res) => {
  res.redirect('h001-employer2')
});

router.post('/h001-employer2/', (_req, res) => {
  res.redirect('h001-employer-check-answers')
});

router.post('/h001-reimbursement1/', (_req, res) => {
  res.redirect('h001-reimbursement-check-answers')
});

// =============================================================================
// X009


// --- x009 ---

router.post('/x009-choose/', (req, res) => {
  const x009choose = req.session.data['x009-choose'];

  if (x009choose === 'person') {
    delete req.session.data['x009-choose'];
    res.redirect('x009-person'); // Redirect to the 'person context' page
  } else if (x009choose === 'employer') {
    delete req.session.data['x009-choose'];
    res.redirect('x009-employer'); // Redirect to the 'employer context' page
  }  else if (x009choose === 'reimbursement') {
      delete req.session.data['x009-choose'];
      res.redirect('x009-reimbursement'); // Redirect to the 'reimbursement context' page
  } else if (!x009choose) {
      req.session.data['x009-choose-null'] = 1;
      res.redirect('x009-choose'); // Warning if no option is selected
  }
});

router.post('/x009/', (_req, res) => {
  res.redirect('x009-success')
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


