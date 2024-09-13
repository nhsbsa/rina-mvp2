// APPLICANT DATA - HAPPY PATH SCENARIO 1
const applicant1 = {
    ohsReference: 230123456,
    rinaReference: 	"sxl532ya-bae451po-ssw565sj-fqb573jx",
    firstname : "Susan Anne",
    lastname : "Wheeler",
    dob : "2 May 1952",
    sex: "Female",
    NINO : "QQ 12 34 56 A",
    address : {
        street: "Rue de Encosta 7",
        buildingname: "8201-126",
        town: "Albufeira",
        postalcode: null,
        region: null,
        country: "Portugal"
    },
    address_OHS : {
        street: "Rue Jean Giono 7",
        buildingname: null,
        town: "01451 Simiane-la Rotonde",
        postalcode: null,
        region: null,
        country: "France"
    },
    startdate: "1 January 2024",
    "inOHS" : true,
    existingEntitlements: [
        {
            type: "S1",
            startdate: "30 January 2021",
            enddate: "28 January 2023",
            main: true,
            dependant: false,
            country: "France",
            status: "Expired",
            additionaldetails: [
                {
                    key: "Reference number",
                    value: "250533349"
                },
                {
                    key: "Date moved to France",
                    value: "30 January 2021"
                },
                {
                    key: "UK State Pension start date",
                    value: "6 May 2014"
                },
                {
                    key: "Source",
                    value: "Customer"
                },
                {
                    key: "Citizen status",
                    value: "Pensioner"
                },
                {
                    key: "Entitlement approved",
                    value: "5 February 2021"
                },
                {
                    key: "Entitlement received",
                    value: "5 February 2021"
                },
                {
                    key: "Pension verified through DWP",
                    value: "No"
                },
                {
                    key: "Death"
                },
                {
                    key: "Date of death"
                }
            ]
        }
     
    ],
    incomingSED: "S071",
    incomingSEDname: "S071 - Request for entitlement",
    pensionStartDate: "6 May 2014",
    passDWPcheck: true,
    pensionBeforeStartDate: true,
    hasS072 : false,
    hasS073 : false,
    S073registered : false
}


// APPLICANT DATA - HAPPY PATH SCENARIO 2
const applicant2 = {
    ohsReference: 230789101,
    rinaReference: 	"sdg335ya-dfh451po-dds665sk-lkj438fd",
    firstname : "Ronald",
    lastname : "Casey",
    dob : "4 Mar 1958",
    sex: "Male",
    NINO : "QA 22 34 34 B",
    address : {
        street: "12 Rue de General Bordas",
        buildingname: null,
        town: "33340 Talence",
        postalcode: null,
        region: null,
        country: "France"
    },
    startdate: "3 Feb 2024",
    "inOHS" : false,
    existingEntitlements: [
      ],
    incomingSED: "S071",
    incomingSEDname: "S071 - Request for entitlement",
    pensionStartDate: "4 Mar 2024",
    passDWPcheck: true,
    pensionBeforeStartDate: false,
    hasS072 : false,
    hasS073 : false,
    S073registered : false
}

// APPLICANT DATA - HAPPY PATH SCENARIO 3
    const applicant3 = {
        ohsReference: 239341230,
        rinaReference: 	"dds234a-yhg987uu-jkl342ks-pdi367dx",
        firstname : "David",
        lastname : "Patel",
        dob : "2 Dec 1957",
        sex: "Male",
        NINO_OHS : "RW 44 56 77 M",
        address : {
            street: "Calle Maria Guerrero, 7",
            buildingname: "03307, Alacant",
            town: "Alicante",
            postalcode: null,
            region: null,
            country: "Spain"
        },
        startdate: "1 Feb 2024",
        "inOHS" : true,
        existingEntitlements: [
            {
                type: "EHIC",
                startdate: "2 Mar 2014",
                enddate: "2 Mar 2019",
                main: true,
                dependant: false,
                country: "",
                status: "Expired"
            }
          ],
        incomingSED: "S071",
        incomingSEDname: "S071 - Request for entitlement",
        pensionBeforeStartDate: false,
        passDWPcheck: false,
        hasS072 : false,
        hasS073 : false,
        S073registered : false
}

module.exports =
    {
        applicant1,
        applicant2,
        applicant3
    }
