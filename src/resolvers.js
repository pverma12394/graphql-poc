const mockData = {
  Dataset: [
    {
      dataset_id: "dataset1",
    },
    {
      dataset_id: "dataset2",
    },
  ],
  Sample: [
    {
      sample_id: "S001",
      dataset_id: "dataset1"
    },
    {
      sample_id: "S002",
      dataset_id: "dataset2"
    }
  ],
  Donor: [
    {
      donor_id: "donor1",
      patientId: "P001",
      patientUuid: "UUID001",
      bmi: 25.5,
      preMenopauseCycleType: "Regular",
      preMenopauseCycleDuration: "28 days",
      age: 35,
      gender: "Female",
      menstruation: true,
      occupation: "Software Engineer",
      ethnicity: "Caucasian",
      height: 165.0,
      weight: 65.0,
      diet: "Balanced",
      maritalStatus: "Single",
      numberOfChildren: 0,
      waistCircumference: 75.0,
      baselineHba1c: 5.2,
      baselineFpg: 90.0,
      race: "White",
      ethnicityHispanic: false,
      asianMajority: false,
      diseaseDuration: "2 years",
      indication: "Breast Cancer",
      diseaseEntryCriteria: "Stage II",
      overweight: false,
      obesityClassI: false,
      obesityClassII: false,
      obesityClassIII: false,
      diabetes: false,
      prediabetes: false,
      dyslipidemia: true,
      hypertension: false,
      depression: true,
      pcos: false,
    },
    {
      donor_id: "donor2",
      patientId: "P002",
      patientUuid: "UUID002",
      bmi: 29.8,
      preMenopauseCycleType: "Irregular",
      preMenopauseCycleDuration: "35 days",
      age: 42,
      gender: "Male",
      menstruation: false,
      occupation: "Teacher",
      ethnicity: "African American",
      height: 175.0,
      weight: 80.0,
      diet: "High Protein",
      maritalStatus: "Married",
      numberOfChildren: 2,
      waistCircumference: 90.0,
      baselineHba1c: 5.8,
      baselineFpg: 110.0,
      race: "Black",
      ethnicityHispanic: false,
      asianMajority: false,
      diseaseDuration: "5 years",
      indication: "Colorectal Cancer",
      diseaseEntryCriteria: "Stage III",
      overweight: true,
      obesityClassI: false,
      obesityClassII: true,
      obesityClassIII: false,
      diabetes: true,
      prediabetes: false,
      dyslipidemia: false,
      hypertension: true,
      depression: false,
      pcos: false,
    },
  ],
  Exposure: [
    {
      donor_id: "donor1",
      smoking: false,
      smokingSpecify: null,
      smokingFrequency: null,
      drinking: true,
      drinkingSpecify: "Occasional",
      drinkingFrequency: "Once a week",
      isBloodThinningMedications: true,
      bloodThinningMedicationSpecify: "Aspirin",
      otherFormsOfTobaccoUse: false,
      otherFormsOfTobaccoUseSpecify: null,
      backTreatments: "Physiotherapy",
      failedTreatments: "None",
      treatmentSwitch: "N/A",
      diet: "Vegetarian",
      exercise: "Moderate",
    },
    {
      donor_id: "donor2",
      smoking: true,
      smokingSpecify: "10 cigarettes/day",
      smokingFrequency: "Daily",
      drinking: true,
      drinkingSpecify: "Moderate",
      drinkingFrequency: "2-3 times a week",
      isBloodThinningMedications: false,
      bloodThinningMedicationSpecify: null,
      otherFormsOfTobaccoUse: false,
      otherFormsOfTobaccoUseSpecify: null,
      backTreatments: "None",
      failedTreatments: "N/A",
      treatmentSwitch: "N/A",
      diet: "Balanced",
      exercise: "High Intensity",
    },
  ],
  Family: [
    {
      donor_id: "donor1",
      herediatries: "None",
      patientRelation: "N/A",
      cancerSiteName: null,
      ageOfDiagnosis: null,
    },
    {
      donor_id: "donor2",
      herediatries: "Colorectal Cancer",
      patientRelation: "Father",
      cancerSiteName: "Colon",
      ageOfDiagnosis: 55,
    },
  ],
  ClinicalHistory: [
    {
      donor_id: "donor1",
      ageAtDiagnosis: 33,
      symptomsBeforeDiagnosis: "Lump in the breast",
      hereditaryFactor: "No",
      hereditaryFactorSignificant: null,
      synchronousOrMetachronous: "Metachronous",
    },
    {
      donor_id: "donor2",
      ageAtDiagnosis: 37,
      symptomsBeforeDiagnosis: "Abdominal pain",
      hereditaryFactor: "Yes",
      hereditaryFactorSignificant: "Family history of colorectal cancer",
      synchronousOrMetachronous: "Synchronous",
    },
  ],
  Diagnosis: [
    {
      donor_id: "donor1",
      disease: {
        cancerSite: "Breast",
        cancerLocation: "Left",
        morphology: "Ductal Carcinoma In Situ",
        laterality: "Unilateral",
      },
      diagnostictests: {
        eventtype: {
          treatmenteventtype: {
            chemotherapy: {
              chemotherapydetails: {
                selectedRegimen: "AC-T",
                startDate: "2022-06-01",
                numberOfCycles: 6,
                cycles: {
                  drugdosages: {
                    date: "2022-06-01",
                    drugName: "Doxorubicin",
                    dosage: "60 mg/m2",
                  },
                },
                routeOfAdministration: "Intravenous",
                adverseEventList: ["Nausea", "Fatigue"],
                adverseEventMedication: "Ondansetron",
              },
            },
            performancestatus: {
              performancestatusdetails: {
                diseaseFreeSurvival: "24 months",
                progressionFreeSurvival: "18 months",
                recistCriteria: "Complete Response",
                irecistCriteria: "Stable Disease",
              },
            },
            surgery: {
              surgerydetails: {
                name: "Lumpectomy",
                date: "2023-01-15",
                adverseEventList: ["Infection"],
                adverseEventMedication: "Antibiotics",
              },
            },
          },
          diagnosticeventtype: {
            diagnosticdetails: {
              molecularpathology: {
                ihc: {
                  selectMarker: "ER",
                  result: "Positive",
                  cellsPositive: 80,
                  intensityScore: 2.5,
                  combinedPositiveScore: 85,
                  tumourProportionScore: 75,
                  allRedScore: 3,
                  cloneOfAntibody: false,
                  jScore: 0.8,
                  hScore: 200,
                },
                fish: null,
                pcr: null,
                selectMethod: "Immunohistochemistry",
                impression: "Positive for ER",
                dateOfTest: "2022-05-15",
                approximateDate: "2022-05-01",
              },
              serumbiomarker: null,
              pathology: {
                lymphNodeRegions: "Axillary",
                typeOfSample: "Biopsy",
                dateOfTest: "2022-05-20",
                grade: "II",
                tissue: "Breast",
                margins: "Clear",
                impression: "Invasive Ductal Carcinoma",
              },
            },
          },
        },
      },
    },
    {
      donor_id: "donor2",
      disease: {
        cancerSite: "Colon",
        cancerLocation: "Descending Colon",
        morphology: "Adenocarcinoma",
        laterality: "Unilateral",
      },
      diagnostictests: {
        eventtype: {
          treatmenteventtype: {
            chemotherapy: {
              chemotherapydetails: {
                selectedRegimen: "FOLFOX",
                startDate: "2023-03-01",
                numberOfCycles: 8,
                cycles: {
                  drugdosages: {
                    date: "2023-03-01",
                    drugName: "Oxaliplatin",
                    dosage: "85 mg/m2",
                  },
                },
                routeOfAdministration: "Intravenous",
                adverseEventList: ["Neuropathy", "Fatigue"],
                adverseEventMedication: "Gabapentin",
              },
            },
            performancestatus: {
              performancestatusdetails: {
                diseaseFreeSurvival: "30 months",
                progressionFreeSurvival: "24 months",
                recistCriteria: "Partial Response",
                irecistCriteria: "Stable Disease",
              },
            },
            surgery: {
              surgerydetails: {
                name: "Colectomy",
                date: "2024-01-10",
                adverseEventList: ["Bleeding"],
                adverseEventMedication: "Tranexamic Acid",
              },
            },
          },
          diagnosticeventtype: {
            diagnosticdetails: {
              molecularpathology: {
                ihc: null,
                fish: {
                  selectMarker: "KRAS",
                  result: "Mutant",
                  numberOfCopies: null,
                  ratio: null,
                },
                pcr: {
                  selectMarker: "BRAF",
                  exonTested: "Exon 15",
                  codonTested: "V600E",
                  result: "Mutant",
                },
                selectMethod: "Fluorescent In Situ Hybridization",
                impression: "KRAS Mutation, BRAF V600E Mutation",
                dateOfTest: "2023-02-10",
                approximateDate: "2023-02-01",
              },
              serumbiomarker: null,
              pathology: {
                lymphNodeRegions: "Regional",
                typeOfSample: "Biopsy",
                dateOfTest: "2023-02-15",
                grade: "III",
                tissue: "Colon",
                margins: "Positive",
                impression: "Poorly Differentiated Adenocarcinoma",
              },
            },
          },
        },
      },
    },
  ],
  Publications: [
    {
      dataset_id: "dataset1",
      url: "https://example.com/publication1",
      sourceNumber: 1,
      authors: ["Smith, J.", "Doe, A."],
      publicationYear: 2023,
      title: "Advancements in Breast Cancer Research",
      journal: "Journal of Oncology",
      volume: "15",
      pages: 102,
      publicationType: "Research Article",
      primarySource: "Yes",
      firstAuthor: "Smith, J.",
      reference: "DOI: 10.1234/jo.2023.001",
    },
    {
      dataset_id: "dataset2",
      url: "https://example.com/publication2",
      sourceNumber: 2,
      authors: ["Johnson, M.", "Williams, S."],
      publicationYear: 2023,
      title: "Colorectal Cancer: Genetic Insights",
      journal: "Genetic Medicine",
      volume: "8",
      pages: 45,
      publicationType: "Review Article",
      primarySource: "No",
      firstAuthor: "Johnson, M.",
      reference: "DOI: 10.5678/gm.2023.002",
    },
  ],

  geneExpression: {
    assayType : {
      rawCountData : [
      {
        geneSymbol: "Gene1",
        expressionData:
        [
          {sample_id: "S001", expression_value: 21},
          {sample_id: "S002", expression_value: 102},
        ]
      },
      {
        geneSymbol: "Gene2",
        expressionData:
        [
          {sample_id: "S001", expression_value: 450},
          {sample_id: "S002", expression_value: 199981},
        ]
      },
      {
        geneSymbol: "Gene3",
        expressionData:
        [
          {sample_id: "S001", expression_value: 35},
          {sample_id: "S002", expression_value: 11},
        ]
      },
      {
        geneSymbol: "Gene4",
        expressionData:
        [
          {sample_id: "S001", expression_value: 2},
          {sample_id: "S002", expression_value: 777},
        ]
      },
      {
        geneSymbol: "Gene5",
        expressionData:
        [
          {sample_id: "S001", expression_value: 4112},
          {sample_id: "S002", expression_value: 75},
        ]
      },
      {
        geneSymbol: "Gene6",
        expressionData:
        [
          {sample_id: "S001", expression_value: 22},
          {sample_id: "S002", expression_value: 90811},
        ]
      },
      {
        geneSymbol: "Gene7",
        expressionData:
        [
          {sample_id: "S001", expression_value: 235332},
          {sample_id: "S002", expression_value: 87},
        ]
      },
      {
        geneSymbol: "Gene8",
        expressionData:
        [
          {sample_id: "S001", expression_value: 2},
          {sample_id: "S002", expression_value: 0},
        ]
      },
      {
        geneSymbol: "Gene9",
        expressionData:
        [
          {sample_id: "S001", expression_value: 1},
          {sample_id: "S002", expression_value: 4},
        ]
      },
      {
        geneSymbol: "Gene10",
        expressionData:
        [
          {sample_id: "S001", expression_value: 1},
          {sample_id: "S002", expression_value: 7},
        ]
      },
    ],
    normalisedData : [
      {
        geneSymbol: "Gene1",
        expressionData:
        [
          {sample_id: "S001", expression_value: 109.72},
          {sample_id: "S002", expression_value: 0.75},
        ]
      },
      {
        geneSymbol: "Gene2",
        expressionData:
        [
          {sample_id: "S001", expression_value: 8.77},
          {sample_id: "S002", expression_value: 55.98},
        ]
      },
      {
        geneSymbol: "Gene3",
        expressionData:
        [
          {sample_id: "S001", expression_value: 2.71},
          {sample_id: "S002", expression_value: 1.65},
        ]
      },
      {
        geneSymbol: "Gene4",
        expressionData:
        [
          {sample_id: "S001", expression_value: 0.02},
          {sample_id: "S002", expression_value: 75.99},
        ]
      },
      {
        geneSymbol: "Gene5",
        expressionData:
        [
          {sample_id: "S001", expression_value: 100.11},
          {sample_id: "S002", expression_value: 5.77},
        ]
      },
      {
        geneSymbol: "Gene6",
        expressionData:
        [
          {sample_id: "S001", expression_value: 2.66},
          {sample_id: "S002", expression_value: 305.45},
        ]
      },
      {
        geneSymbol: "Gene7",
        expressionData:
        [
          {sample_id: "S001", expression_value: 585.89},
          {sample_id: "S002", expression_value: 7.90},
        ]
      },
      {
        geneSymbol: "Gene8",
        expressionData:
        [
          {sample_id: "S001", expression_value: 0.01},
          {sample_id: "S002", expression_value: 0},
        ]
      },
      {
        geneSymbol: "Gene9",
        expressionData:
        [
          {sample_id: "S001", expression_value: 0.001},
          {sample_id: "S002", expression_value: 0.03},
        ]
      },
      {
        geneSymbol: "Gene10",
        expressionData:
        [
          {sample_id: "S001", expression_value: 0.002},
          {sample_id: "S002", expression_value: 0.05},
        ]
      },
    ]
  }}

};



const resolvers = {
    Query: {
      appname: () => "RNAWihsper 1.0.0",
      
      donorsCountByCancerSite: (_, { cancerSite }) => {
        const diagnoses = mockData.Diagnosis.filter((diagnosis) => diagnosis.disease.cancerSite === cancerSite);
        
        if (diagnoses.length === 0) {
          return null; // or handle the case where no diagnoses are found for the specified cancer site
        }
  
        const donorIds = diagnoses.map((diagnosis) => diagnosis.donor_id);
        const donors = mockData.Donor.filter((donor) => donorIds.includes(donor.donor_id));

        const totalDonors = donors.length;
        const maleDonors = donors.filter((donor) => donor.gender === "Male").length;
        const femaleDonors = donors.filter((donor) => donor.gender === "Female").length;
  
        // Calculate average age
        const averageAge = calculateAverageAgeDonor(donors);
  
        return {
          cancerSite,
          totalDonors,
          maleDonors,
          femaleDonors,
          averageAge,
        };
      },
      
      donorsWithDiabetesCount: () => {
        // Ensure mockData object and Donor array are not null or undefined
        if (!mockData || !mockData.Donor || !Array.isArray(mockData.Donor)) {
          throw new Error('Unable to fetch donor data');
        }
  
        const donors = mockData.Donor;
  
        // Calculate counts based on conditions
        const totalDonors = donors.length;
        const obeseDonorsCount = donors.filter(donor => donor.obesityClassIII === true).length;
        const overweightDonorsCount = donors.filter(donor => donor.overweight === true).length;
        const diabetesDonorsCount = donors.filter(donor => donor.diabetes === true).length;
        const prediabetesDonorsCount = donors.filter(donor => donor.prediabetes === true).length;
  
        // Return the counts
        return {
          totalDonors,
          obeseDonorsCount,
          overweightDonorsCount,
          diabetesDonorsCount,
          prediabetesDonorsCount,
        };
      },

      familyHistoryAnalysis: (_, { cancerSite }) => {
        const filteredFamilies = mockData.Family.filter(
          (family) => family.cancerSiteName === cancerSite
        );
  
        const totalFamilies = filteredFamilies.length;
        const affectedFamilies = filteredFamilies.filter((family) => family.ageOfDiagnosis !== null).length;
  
        let averageAgeOfDiagnosis = 0;
        const ages = filteredFamilies.map((family) => family.ageOfDiagnosis);
        if (ages.length > 0) {
          averageAgeOfDiagnosis = ages.reduce((sum, age) => (sum += age || 0), 0) / ages.length;
        }
  
        let mostCommonRelation = null;
        if (filteredFamilies.length > 0) {
          const relationCounts = filteredFamilies.reduce((countMap, family) => {
            const relation = family.patientRelation;
            countMap[relation] = (countMap[relation] || 0) + 1;
            return countMap;
          }, {});
  
          mostCommonRelation = Object.keys(relationCounts).reduce((a, b) =>
            relationCounts[a] > relationCounts[b] ? a : b
          );
        }
  
        return {
          cancerSite,
          totalFamilies,
          affectedFamilies,
          averageAgeOfDiagnosis,
          mostCommonRelation,
        };
      },

      chemotherapyAdverseEventsAnalysis: (_, { selectedRegimen }) => {
        const filteredChemotherapyData = mockData.Diagnosis.filter(
          (diagnosis) =>
            diagnosis.diagnostictests.eventtype.treamenteventtype &&
            diagnosis.diagnostictests.eventtype.treamenteventtype.chemotherapy &&
            diagnosis.diagnostictests.eventtype.treamenteventtype.chemotherapy.chemotherapydetails
              .selectedRegimen === selectedRegimen
        );

        let totalCycles = 0;
        filteredChemotherapyData.forEach((diagnosis) => {
          const numberOfCycles =
            diagnosis.diagnostictests.eventtype.treamenteventtype?.chemotherapy?.chemotherapydetails
              .numberOfCycles || 0;
          totalCycles += numberOfCycles;
        });

        const averageNumberOfCycles =
          totalCycles / (filteredChemotherapyData.length || 1); // Avoid division by zero

        const adverseEventsList = [];
        filteredChemotherapyData.forEach((diagnosis) => {
          const events =
            diagnosis.diagnostictests.eventtype.treamenteventtype?.chemotherapy?.chemotherapydetails
              .adverseEventList || [];
          adverseEventsList.push(...events);
        });

        const eventCounts =
          adverseEventsList.length > 0
            ? adverseEventsList.reduce((counts, event) => ({
                ...counts,
                [event]: (counts[event] || 0) + 1,
              }), {})
            : {};

        const mostCommonAdverseEvent =
          Object.keys(eventCounts).length > 0
            ? Object.keys(eventCounts).reduce((a, b) => (eventCounts[a] > eventCounts[b] ? a : b))
            : null;

        const mostCommonMedication =
          filteredChemotherapyData[0]?.diagnostictests.eventtype.treamenteventtype?.chemotherapy?.chemotherapydetails
            .adverseEventMedication || null;

        return {
          selectedRegimen,
          totalCycles,
          averageNumberOfCycles,
          mostCommonAdverseEvent,
          mostCommonMedication,
        };
      },

      diagnosisByEthnicity: (_, { ethnicity }) => {
        const diagnoses = mockData.Diagnosis.filter(
          (diagnosis) => mockData.Donor.find((donor) => donor.donor_id === diagnosis.donor_id)?.ethnicity === ethnicity
        );
  
        if (diagnoses.length === 0) {
          return null; // or handle the case where no diagnoses are found for the specified ethnicity
        }
  
        const donorIds = diagnoses.map((diagnosis) => diagnosis.donor_id);
        const donors = mockData.Donor.filter((donor) => donorIds.includes(donor.donor_id));
  
        const totalDiagnoses = diagnoses.length;
        const maleDiagnoses = diagnoses.filter((diagnosis) => mockData.Donor.find((donor) => donor.donor_id === diagnosis.donor_id)?.gender === "Male").length;
        const femaleDiagnoses = diagnoses.filter((diagnosis) => mockData.Donor.find((donor) => donor.donor_id === diagnosis.donor_id)?.gender === "Female").length;
  
        // Calculate average age at diagnosis
        const averageAgeAtDiagnosis = calculateAverageAgeDonor(donors);
  
        return {
          ethnicity,
          totalDiagnoses,
          maleDiagnoses,
          femaleDiagnoses,
          averageAgeAtDiagnosis,
        };
      },


      surgeryAdverseEventsAnalysis: (_, { surgeryName }) => {
        try {
          // Assuming your surgery data is stored in the mockData.Surgery array
          const filteredSurgeries = mockData.Diagnosis.filter(
            (diagnoses) =>
              diagnoses.diagnostictests &&
              diagnoses.diagnostictests.eventtype &&
              diagnoses.diagnostictests.eventtype.treatmenteventtype &&
              diagnoses.diagnostictests.eventtype.treatmenteventtype.surgery &&
              diagnoses.diagnostictests.eventtype.treatmenteventtype.surgery.surgerydetails && 
              diagnoses.diagnostictests.eventtype.treatmenteventtype.surgery.surgerydetails.name === surgeryName
          );
  
          const totalSurgeries = filteredSurgeries.length;

          const adverseEventsList = [];
          filteredSurgeries.forEach((diagnoses) => {
            const events = diagnoses.diagnostictests.eventtype.treatmenteventtype.surgery.surgerydetails.adverseEventList || [];
            adverseEventsList.push(...events);
          });
  
          const adverseEventsCount =
            adverseEventsList.length > 0
              ? adverseEventsList.reduce((counts, event) => ({
                  ...counts,
                  [event]: (counts[event] || 0) + 1,
                }), {})
              : {};

          console.log(adverseEventsCount)

          // Find the most common adverse event
          const mostCommonAdverseEvent =
            Object.keys(adverseEventsCount).length > 0
              ? Object.keys(adverseEventsCount).reduce(
                  (a, b) =>
                    adverseEventsCount[a] > adverseEventsCount[b] ? a : b
                )
              : null;

          const mostCommonMedication =
          mostCommonAdverseEvent &&
          filteredSurgeries
            .flatMap((diagnoses) =>
              diagnoses.diagnostictests.eventtype.treatmenteventtype.surgery.surgerydetails.adverseEventList.includes(
                mostCommonAdverseEvent
              )
                ? diagnoses.diagnostictests.eventtype.treatmenteventtype.surgery.surgerydetails.adverseEventMedication
                : []
            )
            .reduce((a, b) => (adverseEventsList[a] > adverseEventsList[b] ? a : b), null);
  
          return {
            surgeryName,
            totalSurgeries,
            mostCommonAdverseEvent,
            mostCommonMedication,
          };
        } catch (error) {
          console.error("Error in surgeryAdverseEventsAnalysis resolver:", error);
          throw new Error("Internal server error");
        }
      },

      // Basic Queries

      getDonorById: (_, { donor_id }) => {
        // Find the donor with the specified donor_id
        const donor = mockData.Donor.find(
          (donor) => donor.donor_id === donor_id
        );
  
        // Check if the donor is found
        if (!donor) {
          return null;
        }
  
        // Return the donor details
        return {
          donor_id: donor.donor_id,
          patientId: donor.patientId || null,
          patientUuid: donor.patientUuid || null,
          bmi: donor.bmi || null,
          preMenopauseCycleType: donor.preMenopauseCycleType || null,
          preMenopauseCycleDuration: donor.preMenopauseCycleDuration || null,
          age: donor.age || null,
          gender: donor.gender || null,
          menstruation: donor.menstruation || null,
          occupation: donor.occupation || null,
          ethnicity: donor.ethnicity || null,
          height: donor.height || null,
          weight: donor.weight || null,
          diet: donor.diet || null,
          maritalStatus: donor.maritalStatus || null,
          numberOfChildren: donor.numberOfChildren || null,
          waistCircumference: donor.waistCircumference || null,
          baselineHba1c: donor.baselineHba1c || null,
          baselineFpg: donor.baselineFpg || null,
          race: donor.race || null,
          ethnicityHispanic: donor.ethnicityHispanic || null,
          asianMajority: donor.asianMajority || null,
          diseaseDuration: donor.diseaseDuration || null,
          indication: donor.indication || null,
          diseaseEntryCriteria: donor.diseaseEntryCriteria || null,
          overweight: donor.overweight || null,
          obesityClassI: donor.obesityClassI || null,
          obesityClassII: donor.obesityClassII || null,
          obesityClassIII: donor.obesityClassIII || null,
          diabetes: donor.diabetes || null,
          prediabetes: donor.prediabetes || null,
          dyslipidemia: donor.dyslipidemia || null,
          hypertension: donor.hypertension || null,
          depression: donor.depression || null,
          pcos: donor.pcos || null,
        };
      },

      getDonorsWithCondition: (_, { indication }) => {
        return mockData.Donor.filter(donor => donor.indication === indication);
      },

      getDonorsWithExposure: (_, { exposureType }) => {
        // Filter exposures to get donor IDs
        const exposureDonorIds = mockData.Exposure
          .filter(exposure => exposure[exposureType] === true)
          .map(exposure => exposure.donor_id);
  
        // Fetch all donors with the obtained donor IDs
        const donorsWithExposure = mockData.Donor
          .filter(donor => exposureDonorIds.includes(donor.donor_id))
          .map(donor => ({
            ...donor,
            exposureType, // Include exposureType in the result
          }));
  
        return donorsWithExposure;
      },

      // Analytical Queries

      donorDemographics: () => {
        const totalDonors = mockData.Donor.length;
        const totalMaleDonors = mockData.Donor.filter(donor => donor.gender === 'Male').length;
        const totalFemaleDonors = totalDonors - totalMaleDonors;
  
        const totalAge = mockData.Donor.reduce((acc, donor) => acc + donor.age, 0);
        const averageAge = totalAge / totalDonors;
  
        const totalBMI = mockData.Donor.reduce((acc, donor) => acc + donor.bmi, 0);
        const averageBMI = totalBMI / totalDonors;
  
        return {
          totalDonors,
          averageAge,
          maleDonors: totalMaleDonors,
          femaleDonors: totalFemaleDonors,
          averageBMI,
        };
      },

      diseaseDistributionByGender: () => {
        const diseaseDistribution = [];
  
        // Calculate disease distribution by gender
        const genders = [...new Set(mockData.Donor.map((donor) => donor.gender))];
        genders.forEach((gender) => {
          const casesByGender = mockData.Diagnosis.filter((d) => mockData.Donor.find((donor) => donor.donor_id === d.donor_id && donor.gender === gender));
  
          const totalCases = casesByGender.length;
          const commonCancerSites = [...new Set(casesByGender.map((d) => d.disease.cancerSite))];
          const averageAgeAtDiagnosis = casesByGender.reduce((sum, d) => sum + mockData.ClinicalHistory.find((c) => c.donor_id === d.donor_id).ageAtDiagnosis, 0) / totalCases;
  
          diseaseDistribution.push({
            gender,
            totalCases,
            commonCancerSites,
            averageAgeAtDiagnosis,
          });
        });
  
        return diseaseDistribution;
      },

      exposureAndLifestyle: () => {
        // Calculate percentages and averages from mock data
        const totalDonors = mockData.Donor.length;
  
        const smokingPercentage =
          (mockData.Exposure.filter((exposure) => exposure.smoking).length / totalDonors) * 100;
  
        const drinkingPercentage =
          (mockData.Exposure.filter((exposure) => exposure.drinking).length / totalDonors) * 100;
  
        const obesityPercentage =
          (mockData.Donor.filter((donor) => donor.obesityClassI || donor.obesityClassII || donor.obesityClassIII).length /
            totalDonors) * 100;
  
        const totalPhysicalActivity = mockData.Exposure.reduce((acc, exposure) => {
          if (exposure.exercise === 'Moderate') {
            return acc + 2; // Assigning a score for moderate exercise
          } else if (exposure.exercise === 'High Intensity') {
            return acc + 3; // Assigning a higher score for high-intensity exercise
          }
          return acc;
        }, 0);
  
        const averagePhysicalActivity = totalPhysicalActivity / totalDonors;
  
        return {
          smokingPercentage,
          drinkingPercentage,
          obesityPercentage,
          averagePhysicalActivity: averagePhysicalActivity.toFixed(2),
        };
      },

      familyHistoryAndHereditaryFactors: () => {
        const totalFamilies = mockData.Family.length;
        
        const hereditaryFactors = mockData.Family
          .filter(entry => entry.herediatries !== null && entry.herediatries !== 'None')
          .map(entry => entry.herediatries);
        
        const averageAgeOfDiagnosis = mockData.Family
          .filter(entry => entry.ageOfDiagnosis !== null)
          .reduce((sum, entry) => sum + entry.ageOfDiagnosis, 0) / totalFamilies;
  
        const cancerSites = mockData.Family
          .filter(entry => entry.cancerSiteName !== null)
          .map(entry => entry.cancerSiteName);
  
        const mostCommonCancerSite = findMostCommonElement(cancerSites);
  
        return {
          totalFamilies,
          hereditaryFactors,
          averageAgeOfDiagnosis,
          mostCommonCancerSite,
        };
      },

      chemotherapyAdverseEventsSummary: () => {
        // Extract chemotherapy adverse events data from mockData
        const chemotherapyData = mockData.Diagnosis.map((d) => d.diagnostictests.eventtype.treatmenteventtype.chemotherapy);
  
        // Calculate total cycles
        const totalCycles = chemotherapyData.reduce((sum, chemotherapy) => sum + chemotherapy.chemotherapydetails.numberOfCycles, 0);
  
        // Calculate average number of cycles
        const averageNumberOfCycles = totalCycles / chemotherapyData.length;
  
        // Get all adverse events and medications
        const adverseEvents = chemotherapyData.map((chemotherapy) => chemotherapy.chemotherapydetails.adverseEventList).flat();
        const medications = chemotherapyData.map((chemotherapy) => chemotherapy.chemotherapydetails.adverseEventMedication).filter(Boolean);
  
        // Calculate the most common adverse event and medication
        const mostCommonAdverseEvent = getMostCommonItem(adverseEvents);
        const mostCommonMedication = getMostCommonItem(medications);
  
        return {
          totalCycles,
          averageNumberOfCycles,
          mostCommonAdverseEvent,
          mostCommonMedication,
        };
      },

    // Advanced GraphQL queries

      oncologySummary: (_, { cancerSite }) => {
        const diagnosedCases = mockData.Diagnosis.filter((diagnosis) => diagnosis.disease.cancerSite === cancerSite);  
        const totalDiagnosedCases = diagnosedCases.length;
  
        if (totalDiagnosedCases === 0) {
          return null; // or return a default value or handle the case where there are no diagnosed cases
        }
  
        // Calculate mostCommonMorphology
        const morphologyCount = {};
        diagnosedCases.forEach((diagnosis) => {
          const morphology = diagnosis.disease.morphology;
          morphologyCount[morphology] = (morphologyCount[morphology] || 0) + 1;
        });
        const mostCommonMorphology = Object.keys(morphologyCount).reduce(
          (a, b) => (morphologyCount[a] > morphologyCount[b] ? a : b)
        );

        // Calculate averageAgeAtDiagnosis
        const totalAge = diagnosedCases.reduce((sum, diagnosedCases) => {
          const donor = mockData.Donor.find((donor) => donor.donor_id === diagnosedCases.donor_id);
          return sum + (donor ? donor.age : 0);
        }, 0);
        
        const averageAgeAtDiagnosis = totalAge / totalDiagnosedCases;

        // Calculate commonTreatmentRegimens
        const treatmentRegimenCount = {};
        diagnosedCases.forEach((diagnosis) => {
          const regimen = diagnosis.diagnostictests.eventtype.treatmenteventtype.chemotherapy.chemotherapydetails.selectedRegimen;
          treatmentRegimenCount[regimen] = (treatmentRegimenCount[regimen] || 0) + 1;
        });
        const commonTreatmentRegimens = Object.keys(treatmentRegimenCount).map((regimen) => ({
          regimen,
          totalDonors: treatmentRegimenCount[regimen],
        }));

  
        return {
          cancerSite,
          totalDiagnosedCases,
          mostCommonMorphology,
          averageAgeAtDiagnosis,
          commonTreatmentRegimens,
        };
      },

      ageDistributionOfDiagnosedDonors: () => {
        // Calculate the age distribution of diagnosed donors
        const ageDistribution = mockData.Donor.reduce((accumulator, donor) => {
          const ageGroup = getAgeGroup(donor.age);
          accumulator[ageGroup] = (accumulator[ageGroup] || 0) + 1;
          return accumulator;
        }, {});
  
        // Convert the age distribution object into an array of objects
        const result = Object.entries(ageDistribution).map(([ageGroup, totalDiagnosedDonors]) => ({
          ageGroup,
          totalDiagnosedDonors,
        }));
  
        return result;
      },

      ethnicityAndDiseasePrevalence: (_, { ethnicity }) => {
        // Use mockData to calculate the required values
        const donors = mockData.Donor.filter(donor => donor.ethnicity === ethnicity);
        const totalDonors = donors.length;
        
        // Example calculation for disease prevalence and average age
        const diseasePrevalence = donors.reduce((prev, curr) => prev + (curr.disease ? 1 : 0), 0) / totalDonors;
        const averageAge = donors.reduce((prev, curr) => prev + curr.age, 0) / totalDonors;
  
        return {
          ethnicity,
          totalDonors,
          diseasePrevalence,
          averageAge,
        };
      },

      cancerSiteAndFamilyHistoryAnalysis: (parent, { cancerSite }) => {
        // Assuming mockData is available in the same scope
        const families = mockData.Family.filter(
          (family) => family.cancerSiteName === cancerSite
        );
  
        const totalFamilies = families.length;
        const affectedFamilies = families.filter((family) => family.herediatries !== 'None').length;
  
        // Calculate average age of diagnosis for affected families
        const affectedFamilyAges = families
          .filter((family) => family.herediatries !== 'None' && family.ageOfDiagnosis !== null)
          .map((family) => family.ageOfDiagnosis);
  
        const averageAgeOfDiagnosis =
          affectedFamilyAges.length > 0
            ? affectedFamilyAges.reduce((sum, age) => sum + age, 0) / affectedFamilyAges.length
            : null;
  
        // Find the most common relation in affected families
        const relationCounts = {};
        families.forEach((family) => {
          if (family.herediatries !== 'None' && family.patientRelation !== null) {
            relationCounts[family.patientRelation] =
              (relationCounts[family.patientRelation] || 0) + 1;
          }
        });
  
        const mostCommonRelation = Object.keys(relationCounts).reduce((a, b) =>
          relationCounts[a] > relationCounts[b] ? a : b
        );
  
        return {
          cancerSite,
          totalFamilies,
          affectedFamilies,
          averageAgeOfDiagnosis,
          mostCommonRelation,
        };
      },

      genderBasedExposureAnalysis: (parent, args) => {
        try {
          const { gender } = args;
  
          // Filter donors based on gender
          const genderDonors = mockData.Donor.filter((donor) => donor.gender === gender);
  
          // Calculate analysis metrics
          let totalDonors = 0;
          let totalSmokers = 0;
          let totalDrinkers = 0;
          let totalBMI = 0;
  
          genderDonors.forEach((donor) => {
            const donorExposure = mockData.Exposure.find((exposure) => exposure.donor_id === donor.donor_id);
  
            if (donorExposure && donorExposure.smoking === true) {
              totalSmokers++;
            }
  
            if (donorExposure && donorExposure.drinking === true) {
              totalDrinkers++;
            }
  
            totalBMI += donor.bmi;
            totalDonors++;
          });
  
          const smokingPercentage = totalDonors > 0 ? (totalSmokers / totalDonors) * 100 : 0;
          const drinkingPercentage = totalDonors > 0 ? (totalDrinkers / totalDonors) * 100 : 0;
          const averageBMI = totalDonors > 0 ? totalBMI / totalDonors : 0;
  
          // Return the analysis result
          return {
            gender,
            totalDonors,
            smokingPercentage,
            drinkingPercentage,
            averageBMI,
          };
        } catch (error) {
          console.error("Error in genderBasedExposureAnalysis resolver:", error);
          throw new Error("Internal server error");
        }
      },

      performanceStatusAndSurvivalAnalysis: (_, { disease }) => {
        // Assuming you have access to the mockData object
  
        // Filter donors with the specified disease
        const relevantDonors = mockData.Donor.filter(
          (donor) => donor.indication === disease
        );
  
        if (relevantDonors.length === 0) {
          // Return null or handle appropriately when no relevant donors are found
          return null;
        }
  
        // Extract donor ids
        const donorIds = relevantDonors.map((donor) => donor.donor_id);
  
        // Filter diagnoses for relevant donors
        const relevantDiagnoses = mockData.Diagnosis.filter((diagnosis) =>
          donorIds.includes(diagnosis.donor_id)
        );
  
        // Calculate average disease-free survival and progression-free survival
        const totalDiseaseFreeSurvival = relevantDiagnoses.reduce(
          (total, diagnosis) =>
            total +
            parseInt(
              diagnosis.diagnostictests?.eventtype?.treatmenteventtype
                ?.performancestatus?.performancestatusdetails
                ?.diseaseFreeSurvival || 0
            ),
          0
        );
  
        const totalProgressionFreeSurvival = relevantDiagnoses.reduce(
          (total, diagnosis) =>
            total +
            parseInt(
              diagnosis.diagnostictests?.eventtype?.treatmenteventtype
                ?.performancestatus?.performancestatusdetails
                ?.progressionFreeSurvival || 0
            ),
          0
        );
  
        const averageDiseaseFreeSurvival =
          totalDiseaseFreeSurvival / relevantDiagnoses.length || 0;
  
        const averageProgressionFreeSurvival =
          totalProgressionFreeSurvival / relevantDiagnoses.length || 0;
  
        // Get common RECIST criteria
        const recistCriteriaList = relevantDiagnoses.map(
          (diagnosis) =>
            diagnosis.diagnostictests?.eventtype?.treatmenteventtype
              ?.performancestatus?.performancestatusdetails?.recistCriteria || null
        );
  
        const commonRecistCriteria =
          recistCriteriaList.reduce(
            (commonCriteria, criteria) =>
              commonCriteria === null || commonCriteria === criteria
                ? criteria
                : "Mixed", // Handle the case when different criteria are present
            null
          ) || "Not Available";
  
        return {
          disease,
          averageDiseaseFreeSurvival,
          averageProgressionFreeSurvival,
          commonRecistCriteria,
        };
      },

      expressionByGeneId: (_, { geneSymbol }) => {
        // Assuming your data is structured as shown in mockData
        const geneData = mockData.geneExpression.assayType.rawCountData.find(
          (gene) => gene.geneSymbol === geneSymbol
        );
  
        if (!geneData) {
          throw new Error(`Gene with symbol ${geneSymbol} not found`);
        }
  
        return {
          assayType: {
            rawCountData: geneData.expressionData,
            normalisedData: getNormalisedDataForGene(geneSymbol),
          },
        };
      },

      expressionByRegimen: (_, { regimen }, { mockData }) => {
        // Assuming mockData is accessible in the resolver context
  
        // Filter donors based on the given regimen
        const donorsWithRegimen = mockData.Diagnosis.filter((diagnosis) => {
          const treatmentEvent = diagnosis.disease.diagnostictests.eventtype.treatmenteventtype.chemotherapy;
          return treatmentEvent && treatmentEvent.chemotherapydetails.selectedRegimen === regimen;
        });
  
        // Extract sample IDs from filtered donors
        const sampleIds = donorsWithRegimen.map((donor) => {
          return mockData.Exposure.find((exposure) => exposure.donor_id === donor.donor_id)?.sample_id;
        });
  
        // Fetch gene expression data for the selected sample IDs
        const geneExpressionData = mockData.geneExpression.assayType.rawCountData.map((geneData) => {
          const expressionData = geneData.expressionData.filter((data) => sampleIds.includes(data.sample_id));
          return {
            geneSymbol: geneData.geneSymbol,
            expressionData,
          };
        });
  
        // You can do the same for normalisedData if needed
  
        return {
          assayType: {
            rawCountData: geneExpressionData,
          },
        };
      },

    },
  };


function getNormalisedDataForGene(geneSymbol) {
    const normalisedData = mockData.geneExpression.assayType.normalisedData.find(
      (gene) => gene.geneSymbol === geneSymbol
    );
  
    return normalisedData ? normalisedData.expressionData : [];
}
  
// Function to categorize age into groups
function getAgeGroup(age) {
  const lowerBound = Math.floor(age / 10) * 10;
  const upperBound = lowerBound + 9;
  return `${lowerBound}-${upperBound}`;
}


function calculateAverageAgeDonor(donors) {
  if (donors.length === 0) {
    return null;
  }

  const totalAge = donors.reduce((sum, donor) => sum + donor.age, 0);
  return totalAge / donors.length;
}

function findMostCommonElement(arr) {
  if (arr.length === 0) {
    return null;
  }

  const counts = {};
  let maxCount = 0;
  let mostCommonElement = arr[0];

  for (const element of arr) {
    counts[element] = (counts[element] || 0) + 1;

    if (counts[element] > maxCount) {
      maxCount = counts[element];
      mostCommonElement = element;
    }
  }

  return mostCommonElement;
}

function getMostCommonItem(array) {
  if (array.length === 0) return null;

  const counts = {};
  let maxCount = 0;
  let mostCommonItem = null;

  array.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;

    if (counts[item] > maxCount) {
      maxCount = counts[item];
      mostCommonItem = item;
    }
  });

  return mostCommonItem;
}

  
module.exports = {
resolvers,
mockData
};
  