// External dependencies
const express = require('express');

// Get applicant data from s1-data.js
const { applicant1 } = require('../../data/s1-data');
const { applicant2 } = require('../../data/s1-data');
const { applicant3 } = require('../../data/s1-data');
const { applicant4 } = require('../../data/s044-data');
const { applicant5 } = require('../../data/s044-data');
const { applicant6 } = require('../../data/s044-data');

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
// RINA: SET APPLICANT DATA FROM TRACKER/URL

router.get(/applicant1/, (req, res) => {
  req.session.data['applicant'] = applicant1
  res.redirect('ohs-rina/case-details-simple')
});

router.get(/applicant2/, (req, res) => {
  req.session.data['applicant'] = applicant2
  res.redirect('ohs-rina/case-details-simple')
});

router.get(/applicant3/, (req, res) => {
  req.session.data['applicant'] = applicant3
  res.redirect('ohs-rina/case-details-simple')
});

router.get(/applicant4/, (req, res) => {
  req.session.data['applicant'] = applicant4
  res.redirect('ohs-rina/case-details-simple')
});

router.get(/applicant5/, (req, res) => {
  req.session.data['applicant'] = applicant5
  res.redirect('ohs-rina/case-details-simple')
});

router.get(/applicant6/, (req, res) => {
  req.session.data['applicant'] = applicant6
  res.redirect('ohs-rina/case-details-simple')
});

// ==========================================================================
// RINA: CASE DETAILS -> SEARCH OHS

router.post(/case-details-simple/,(req,res)=>{
  res.redirect('../ohs/search-results')
});

router.post(/s1-case-details/,(req,res)=>{
   res.redirect('../ohs/search-results')
});

router.post(/sbuc5-case-details/,(req,res)=>{
  res.redirect('../ohs/search-results')
});




// ==========================================================================
// OHS: SEARCH RESULTS -> PERSON RECORD

router.post(/search-results/, (req, res) => {
  res.redirect('case-details')
});


// reset address on pressing update address
router.get(/update-address/, (req, res) => {
  req.session.data.applicant['address_OHS'] = null;
  res.redirect('case-details')
})

// OHS: PERSON RECORD -> CREATE ENTITLEMENT (CHECK ANSWERS)

router.post(/case-details/, (req, res) => {
  req.session.data.applicant['inOHS'] = true;
  res.redirect('check-answers')
});


// OHS: CHECK ANSWERS -> DWP CHECK IF S071, else go to entitlement issued
router.post(/check-answers/, (req,res) => {
  if (req.session.data.applicant['incomingSED'] == "S071"){
    res.redirect('dwp-check')
  } else {
    res.redirect('confirmation-entitlement-issued')
  }
  
});

// OHS: DWP CHECK -> SUCCESS or CHECK ANSWERS

router.post(/dwp-check/, (req, res) => {

  if (req.session.data.applicant.passDWPcheck){
    res.redirect('confirmation-entitlement-issued')
  } else {
    const nextsteps = req.session.data['nextsteps'];

  // If DWP check fails, and user selects check answers go back to check answers screen
  if (nextsteps === 'checkanswers') {
    res.redirect('check-answers')
  }
  // If DWP check fails, and user selects details are correct go to dwp fail screen (further information required)
  if (nextsteps === 'detailscorrect') {
    res.redirect('dwp-fail')
  }
 }


});

// OHS: SUCCESS -> SEND VIA OHS RINA
router.post(/confirmation-entitlement-issued/, (req, res) => {
  if (req.session.data.applicant['incomingSED'] == "S071"){
    res.redirect('../ohs-rina/review-s072')
  }
  if (req.session.data.applicant['incomingSED'] == "S044"){
    res.redirect('../ohs-rina/review-s045')
  }
  
});


// =============================================================================
// RINA: Response sent

router.post(/review-s072/, (req,res) =>{
  req.session.data.applicant['hasS072'] = true;
  res.redirect('s1-case-details#timeline')
});

router.post(/review-s045/, (req,res) =>{
  req.session.data.applicant['hasS045'] = true;
  res.redirect('sbuc5-case-details#timeline')
});

// =============================================================================
// EXPORT ROUTER

module.exports = router;


