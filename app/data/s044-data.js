// APPLICANT DATA - HAPPY PATH (not in OHS)
const applicant4 = {
    ohsReference: 230123456,
    rinaReference: "sxl532ya-bae451po-ssw565sj-fqb573jx",
    firstname: "Ali",
    lastname: "Roberts",
    dob: "16 May 1989",
    sex: "Female",
    address: {
        street: "12 Willow Road",
        buildingname: null,
        town: "Sunderland",
        postalcode: "SR5 6UT",
        region: "Tyne and wear",
        country: "United Kingdom"
    },
    email: "aliroberts89@email.com",
    phone: "07787 123 123",
    startdate: "4 December 2023",
    enddate: "1 January 2024",
    "inOHS": false,
    existingEntitlements: [

    ],
    memberstate: "France",
    incomingSED: "S044",
    incomingSEDname: "Request for entitlement document - temporary stay",
    responseSED: {
        type: "S045",
        created: false,
        status: "rejected",
        sent: false
    },
    caseStatus: "open"
}


// APPLICANT DATA - HAPPY PATH (in OHS with existing entitlement)
const applicant5 = {
    ohsReference: 230123456,
    rinaReference: "sxl532ya-bae451po-ssw565sj-fqb573jx",
    firstname: "Ali",
    lastname: "Roberts",
    dob: "16 May 1989",
    sex: "Female",
    address: {
        street: "12 Willow Road",
        buildingname: null,
        town: "Sunderland",
        postalcode: "SR5 6UT",
        region: "Tyne and wear",
        country: "United Kingdom"
    },
    email: "aliroberts89@email.com",
    phone: "07787 123 123",
    startdate: "4 December 2023",
    enddate: "1 January 2024",
    "inOHS": true,
    existingEntitlements: [
        {
            type: "PRC",
            startdate: "3 Nov 2023",
            enddate: "1 Dec 2023",
            main: true,
            dependant: false,
            country: "Netherlands",
            status: "Issued",
            additionaldetails: [
                {
                    key: "Reference number",
                    value: "230123456"
                },
                {
                    key: "Request received",
                    value: "11 December 2023"
                },
                {
                    key: "Applicant type",
                    value: "RINA member state"
                },
                {
                    key: "PRC number",
                    value: "808260000020025253256"
                },
                {
                    key: "RINA international case ID",
                    value: "2773464183514212"
                },
                {
                    key: "Treatment facility name",
                    value: "Member state"
                },
                {
                    key: "Treatment facility email address",
                    value: ""
                }
            ]
        }

    ],
    memberstate: "France",
    incomingSED: "S044",
    incomingSEDname: "Request for entitlement document - temporary stay",
    responseSED: {
        type: "S045",
        name: "Entitlement document - temporary stay",
        created: false,
        status: "issued",
        sent: false
    },
    caseStatus: "open"
}

const applicant6 = {
    ohsReference: 230123456,
    rinaReference: "sxl532ya-bae451po-ssw565sj-fqb573jx",
    firstname: "Ali",
    lastname: "Roberts",
    dob: "16 May 1989",
    sex: "Female",
    address: {
        street: "12 Willow Road",
        buildingname: null,
        town: "Sunderland",
        postalcode: "SR5 6UT",
        region: "Tyne and wear",
        country: "United Kingdom"
    },
    email: "aliroberts89@email.com",
    phone: "07787 123 123",
    startdate: "4 December 2023",
    enddate: "1 January 2024",
    "inOHS": true,
    existingEntitlements: [

    ],
    memberstate: "France",
    incomingSED: "S044",
    incomingSEDname: "Request for entitlement document - temporary stay",
    responseSED: {
        type: "S045",
        created: false,
        status: "pending",
        sent: false
    },
    caseStatus: "open"
}

module.exports =
{
    applicant4,
    applicant5,
    applicant6
}
