// External dependencies
const express = require('express');

// Get applicant data from s1-data.js
const { applicant1 } = require('../../data/s1-data');
const { applicant2 } = require('../../data/s1-data');
const { applicant3 } = require('../../data/s1-data');


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


// ==========================================================================
// RINA: SET APPLICANT DATA FROM TRACKER

router.get(/applicant1/, (req, res) => {
  req.session.data['applicant'] = applicant1
  res.redirect('s1-case-details')
});

router.get(/applicant2/, (req, res) => {
  req.session.data['applicant'] = applicant2
  res.redirect('s1-case-details')
});

router.get(/applicant3/, (req, res) => {
  req.session.data['applicant'] = applicant3
  res.redirect('s1-case-details')
});

// ==========================================================================
// RINA: CASE DETAILS -> SEARCH OHS

router.post(/s1-case-details/,(req,res)=>{
   res.redirect('ohs-user-search-results')
});


// ==========================================================================
// OHS: SEARCH RESULTS -> PERSON RECORD

router.post(/ohs-user-search-results/, (req, res) => {
  res.redirect('ohs-case-details-view')
});


router.get(/update-address/, (req, res) => {
  req.session.data.applicant['address_OHS'] = null;
  res.redirect('ohs-case-details-view')
})

// OHS: PERSON RECORD -> CREATE ENTITLEMENT (CHECK ANSWERS)

router.post(/ohs-case-details-view/, (req, res) => {
  req.session.data.applicant['inOHS'] = true;
  res.redirect('ohs-case-check-answers')
});


// OHS: CHECK ANSWERS -> DWP CHECK
router.post(/ohs-case-check-answers/, (req,res) => {
  res.redirect('ohs-dwp-check')
});

// OHS: DWP CHECK -> SUCCESS or CHECK ANSWERS

router.post(/ohs-dwp-check/, (req, res) => {

  if (req.session.data.applicant.passDWPcheck){
    res.redirect('ohs-case-success')
  } else {
    const nextsteps = req.session.data['nextsteps'];

  // If DWP check fails, and user selects check answers go back to check answers screen
  if (nextsteps === 'checkanswers') {
    res.redirect('ohs-case-check-answers')
  }
  // If DWP check fails, and user selects details are correct go to dwp fail screen (further information required)
  if (nextsteps === 'detailscorrect') {
    res.redirect('ohs-case-dwp-fail')
  }
 }


});

// OHS: SUCCESS -> SEND VIA OHS RINA
router.post('/ohs-case-success/', (req, res) => {
  res.redirect('review-s072')
});


// =============================================================================
// RINA: Response sent

router.post('/review-s072/', (req,res) =>{
  req.session.data.applicant['hasS072'] = true;
  res.redirect('s072-sent-success')
});



// =============================================================================
// EXPORT ROUTER

module.exports = router;


