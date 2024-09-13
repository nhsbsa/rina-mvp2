// Content for case details page
const casedetails = {

    sendtoOHSinstruction : "If the case details are complete and the applicant is of pension age, create S072 entitlement in OHS (opens in new tab).",
    incompleteinformation: "Send an H001 request for information to the member state.",
    applicantnotpensionage: "Contact DWP to confirm eligibilty before proceeding."

}


// Copy for what happens next on S072 created screen in OHS
const S072created = {
    whathappensnext: {
        pre: [
        "An electronic copy of the entitlement (S072) has been created and is ready for you to review.",
        "A paper copy of the entitlement (S1) has been sent to the applicant."
        ],
        post:
        [
        "You can now review the S072 and send it to the member state."
        ]
    }
}

// Copy for what happens next on S072 sent to member state screen in OHS RINA
const S072_sent_success = {
    whathappensnext : [
        "Once the member state returns the S073, if the dates are valid, the OHS system will automatically register the entitlement and close this case locally.",
        "If the dates need to be reviewed the case will stay open."
    ]
}

// Export content so it can be used in prototype
module.exports =
    {
        casedetails,
        S072created,
        S072_sent_success
    }