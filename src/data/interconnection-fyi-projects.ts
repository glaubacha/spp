export type InterconnectionFyiProject = {
  id: string;
  sourceId: string;
  sourceUrl: string;
  owner: string | null;
  ownerSourceField: string;
  projectName: string | null;
  status: string | null;
  queueDate: string | null;
  targetCommercialOperationDate: string | null;
  actualCompletionDate: string | null;
  withdrawnDate: string | null;
  withdrawalComment: string | null;
  capacityMw: number | null;
  summerCapacityMw: number | null;
  winterCapacityMw: number | null;
  generationTypes: readonly string[];
  projectType: string | null;
  powerMarket: string | null;
  interconnectionLocation: string | null;
  county: string | null;
  state: string | null;
  transmissionOwner: string | null;
  canonicalTransmissionOwners: readonly string[];
  utility: string | null;
};

export const interconnectionFyiSource = {
  name: "Interconnection.fyi",
  accessedOn: "2026-05-20",
  projectBaseUrl: "https://www.interconnection.fyi/project/",
  note: "Public project records expose queue timeline/status fields. Developer/owner names may be locked or blank on the public page; blank values are not inferred.",
} as const;

export const interconnectionFyiProjects = {
  "ERAS-2025-001": {
    "id": "ERAS-2025-001",
    "sourceId": "spp-eras-2025-001",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-001",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-09-15",
    "targetCommercialOperationDate": "2029-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 104,
    "summerCapacityMw": 104,
    "winterCapacityMw": 104,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "84th & Bluff 115kV Substation",
    "county": "Lancaster County",
    "state": "NE",
    "transmissionOwner": "LES",
    "canonicalTransmissionOwners": [
      "Lincoln Electric System"
    ],
    "utility": "LES"
  },
  "ERAS-2025-002": {
    "id": "ERAS-2025-002",
    "sourceId": "spp-eras-2025-002",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-002",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-09-12",
    "targetCommercialOperationDate": "2027-02-28",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 217,
    "summerCapacityMw": 208,
    "winterCapacityMw": 217,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Xcel Tuco 345kV Substation",
    "county": "Hale County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "ERAS-2025-003": {
    "id": "ERAS-2025-003",
    "sourceId": "spp-eras-2025-003",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-003",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-09-10",
    "targetCommercialOperationDate": "2025-10-24",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 186,
    "summerCapacityMw": 186,
    "winterCapacityMw": 186,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Redbud 345kV Substation",
    "county": "Oklahoma County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "ERAS-2025-004": {
    "id": "ERAS-2025-004",
    "sourceId": "spp-eras-2025-004",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-004",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-09-30",
    "targetCommercialOperationDate": "2030-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 779,
    "summerCapacityMw": 779,
    "winterCapacityMw": 779,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Horseshoe Lake 138kV Substation",
    "county": "Oklahoma County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "ERAS-2025-005": {
    "id": "ERAS-2025-005",
    "sourceId": "spp-eras-2025-005",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-005",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-09-10",
    "targetCommercialOperationDate": "2029-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Danville - Magazine 161kV Line",
    "county": "Yell County",
    "state": "AR",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "ERAS-2025-006": {
    "id": "ERAS-2025-006",
    "sourceId": "spp-eras-2025-006",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-006",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-09-30",
    "targetCommercialOperationDate": "2030-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 717.8,
    "summerCapacityMw": 690.4,
    "winterCapacityMw": 717.8,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Reno County 345 kV Substation #1443",
    "county": "Reno County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "ERAS-2025-007": {
    "id": "ERAS-2025-007",
    "sourceId": "spp-eras-2025-007",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-007",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2030-09-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 450.6,
    "summerCapacityMw": 425.1,
    "winterCapacityMw": 450.6,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Mullin Creek 345 kV Substation",
    "county": "Nodaway County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "ERAS-2025-008": {
    "id": "ERAS-2025-008",
    "sourceId": "spp-eras-2025-008",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-008",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-09-30",
    "targetCommercialOperationDate": "2029-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 721.1,
    "summerCapacityMw": 693.2,
    "winterCapacityMw": 721.1,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Viola 345 kV Substation",
    "county": "Sumner County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "ERAS-2025-009": {
    "id": "ERAS-2025-009",
    "sourceId": "spp-eras-2025-009",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-009",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-01",
    "targetCommercialOperationDate": "2026-10-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 450,
    "summerCapacityMw": 450,
    "winterCapacityMw": 450,
    "generationTypes": [
      "Coal"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Grec #1 Interconnect 161kV Substation",
    "county": "Chouteau County",
    "state": "OK",
    "transmissionOwner": "GRDA",
    "canonicalTransmissionOwners": [
      "Grand River Dam Authority"
    ],
    "utility": "GRDA"
  },
  "ERAS-2025-010": {
    "id": "ERAS-2025-010",
    "sourceId": "spp-eras-2025-010",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-010",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-09-10",
    "targetCommercialOperationDate": "2029-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 496,
    "summerCapacityMw": 496,
    "winterCapacityMw": 496,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Horseshoe Lake 138kV Substation",
    "county": "Oklahoma County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "ERAS-2025-011": {
    "id": "ERAS-2025-011",
    "sourceId": "spp-eras-2025-011",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-011",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-01",
    "targetCommercialOperationDate": "2030-09-27",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 750,
    "summerCapacityMw": 750,
    "winterCapacityMw": 750,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Leland Olds 345kV Substation",
    "county": "Mercer County",
    "state": "ND",
    "transmissionOwner": "BEPC",
    "canonicalTransmissionOwners": [
      "Basin Electric Power Cooperative"
    ],
    "utility": "BEPC"
  },
  "ERAS-2025-012": {
    "id": "ERAS-2025-012",
    "sourceId": "spp-eras-2025-012",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-012",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-01",
    "targetCommercialOperationDate": "2030-09-27",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 750,
    "summerCapacityMw": 750,
    "winterCapacityMw": 750,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Leland Olds 345kV Substation",
    "county": "Mercer County",
    "state": "ND",
    "transmissionOwner": "BEPC",
    "canonicalTransmissionOwners": [
      "Basin Electric Power Cooperative"
    ],
    "utility": "BEPC"
  },
  "ERAS-2025-013": {
    "id": "ERAS-2025-013",
    "sourceId": "spp-eras-2025-013",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-013",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-09-30",
    "targetCommercialOperationDate": "2030-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 450.6,
    "summerCapacityMw": 425.1,
    "winterCapacityMw": 450.6,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Mullin Creek 345 kV Substation",
    "county": "Nodaway County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "ERAS-2025-014": {
    "id": "ERAS-2025-014",
    "sourceId": "spp-eras-2025-014",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-014",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2029-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 159.5,
    "summerCapacityMw": 120.5,
    "winterCapacityMw": 159.5,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hobbs-Andrews 345kV Line",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "ERAS-2025-015": {
    "id": "ERAS-2025-015",
    "sourceId": "spp-eras-2025-015",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-015",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-09-25",
    "targetCommercialOperationDate": "2029-12-14",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 400,
    "summerCapacityMw": 400,
    "winterCapacityMw": 400,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Holcomb 345 kV Substation",
    "county": "Finney County",
    "state": "KS",
    "transmissionOwner": "SEPC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SEPC"
  },
  "ERAS-2025-016": {
    "id": "ERAS-2025-016",
    "sourceId": "spp-eras-2025-016",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-016",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2029-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 232.5,
    "summerCapacityMw": 224.7,
    "winterCapacityMw": 232.5,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tolk 230kV Substation",
    "county": "Lamb County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "ERAS-2025-017": {
    "id": "ERAS-2025-017",
    "sourceId": "spp-eras-2025-017",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-017",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-09-24",
    "targetCommercialOperationDate": "2029-12-14",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 600,
    "summerCapacityMw": 600,
    "winterCapacityMw": 600,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Holcomb 345 kV Substation",
    "county": "Finney County",
    "state": "KS",
    "transmissionOwner": "SEPC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SEPC"
  },
  "ERAS-2025-018": {
    "id": "ERAS-2025-018",
    "sourceId": "spp-eras-2025-018",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-018",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2030-10-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 256,
    "summerCapacityMw": 256,
    "winterCapacityMw": 256,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Oasis 230kV Substation",
    "county": "Roosevelt County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "ERAS-2025-019": {
    "id": "ERAS-2025-019",
    "sourceId": "spp-eras-2025-019",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-019",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2028-12-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 80,
    "summerCapacityMw": 80,
    "winterCapacityMw": 80,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "5th Street Substation",
    "county": "Edwards County",
    "state": "KS",
    "transmissionOwner": "MIDW",
    "canonicalTransmissionOwners": [
      "Midwest Energy"
    ],
    "utility": "MIDW"
  },
  "ERAS-2025-020": {
    "id": "ERAS-2025-020",
    "sourceId": "spp-eras-2025-020",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-020",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2030-10-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 400,
    "summerCapacityMw": 400,
    "winterCapacityMw": 400,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hobbs - Yoakum 345 kV Line",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "ERAS-2025-021": {
    "id": "ERAS-2025-021",
    "sourceId": "spp-eras-2025-021",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-021",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2030-10-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 500,
    "summerCapacityMw": 500,
    "winterCapacityMw": 500,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Border-Tuco 345kV Line",
    "county": "Hale County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "ERAS-2025-022": {
    "id": "ERAS-2025-022",
    "sourceId": "spp-eras-2025-022",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-022",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-01",
    "targetCommercialOperationDate": "2028-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 123,
    "summerCapacityMw": 123,
    "winterCapacityMw": 123,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Monte Vista 138 kV Substation",
    "county": "Pontotoc County",
    "state": "OK",
    "transmissionOwner": "PEC",
    "canonicalTransmissionOwners": [
      "People's Electric Cooperative"
    ],
    "utility": "PEC"
  },
  "ERAS-2025-023": {
    "id": "ERAS-2025-023",
    "sourceId": "spp-eras-2025-023",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-023",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2029-12-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 510,
    "summerCapacityMw": 505,
    "winterCapacityMw": 510,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Northeastern 345 kV Substation",
    "county": "Rogers County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "ERAS-2025-024": {
    "id": "ERAS-2025-024",
    "sourceId": "spp-eras-2025-024",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-024",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2029-11-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 744,
    "summerCapacityMw": 665,
    "winterCapacityMw": 744,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Comanche 138kV Substation",
    "county": "Comanche County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "ERAS-2025-025": {
    "id": "ERAS-2025-025",
    "sourceId": "spp-eras-2025-025",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-025",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2027-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 175,
    "summerCapacityMw": 175,
    "winterCapacityMw": 175,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Washita 138kV Substation",
    "county": "Caddo County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "ERAS-2025-026": {
    "id": "ERAS-2025-026",
    "sourceId": "spp-eras-2025-026",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-026",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2029-11-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 744,
    "summerCapacityMw": 665,
    "winterCapacityMw": 744,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Oklaunion-Lawton East Side 345kV Line",
    "county": "Comanche County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "ERAS-2025-027": {
    "id": "ERAS-2025-027",
    "sourceId": "spp-eras-2025-027",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-027",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2028-05-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Mahoney 230kV Substation",
    "county": "Yoakum County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "ERAS-2025-028": {
    "id": "ERAS-2025-028",
    "sourceId": "spp-eras-2025-028",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-028",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2030-10-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 384,
    "summerCapacityMw": 384,
    "winterCapacityMw": 384,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tuco-Yoakum 345kV Line",
    "county": "Hockley County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "ERAS-2025-029": {
    "id": "ERAS-2025-029",
    "sourceId": "spp-eras-2025-029",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-029",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2027-03-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 170,
    "summerCapacityMw": 170,
    "winterCapacityMw": 170,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Nearman 161 kV Substation",
    "county": "Wyandotte County",
    "state": "KS",
    "transmissionOwner": "KACY",
    "canonicalTransmissionOwners": [
      "KACY"
    ],
    "utility": "KACY"
  },
  "ERAS-2025-030": {
    "id": "ERAS-2025-030",
    "sourceId": "spp-eras-2025-030",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-030",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2030-10-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 350,
    "summerCapacityMw": 350,
    "winterCapacityMw": 350,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "G24-279 New Switch Station tying into Chaves - Eddy County 230 kV Line",
    "county": "Chaves County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "ERAS-2025-031": {
    "id": "ERAS-2025-031",
    "sourceId": "spp-eras-2025-031",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-031",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2028-05-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Diesel"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Quindaro 161kV Substation",
    "county": "Wyandotte County",
    "state": "KS",
    "transmissionOwner": "KACY",
    "canonicalTransmissionOwners": [
      "KACY"
    ],
    "utility": "KACY"
  },
  "ERAS-2025-032": {
    "id": "ERAS-2025-032",
    "sourceId": "spp-eras-2025-032",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-032",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-01",
    "targetCommercialOperationDate": "2029-10-02",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "St. John 115 kV Substation",
    "county": "Stafford County",
    "state": "KS",
    "transmissionOwner": "SEPC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SEPC"
  },
  "ERAS-2025-033": {
    "id": "ERAS-2025-033",
    "sourceId": "spp-eras-2025-033",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-033",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-01",
    "targetCommercialOperationDate": "2027-05-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Fort Dodge 115 kV Substation",
    "county": "Ford County",
    "state": "KS",
    "transmissionOwner": "SEPC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SEPC"
  },
  "ERAS-2025-034": {
    "id": "ERAS-2025-034",
    "sourceId": "spp-eras-2025-034",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-034",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-09-29",
    "targetCommercialOperationDate": "2030-04-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "State Line 439 161 kV Substation",
    "county": "Jasper County",
    "state": "MO",
    "transmissionOwner": "EMDE",
    "canonicalTransmissionOwners": [
      "Empire District Electric Company"
    ],
    "utility": "EMDE"
  },
  "ERAS-2025-035": {
    "id": "ERAS-2025-035",
    "sourceId": "spp-eras-2025-035",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-035",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 137.96,
    "summerCapacityMw": 137.96,
    "winterCapacityMw": 137.96,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Siebrecht 115 kV Substation",
    "county": "Brown County",
    "state": "SD",
    "transmissionOwner": "NWPS",
    "canonicalTransmissionOwners": [
      "NorthWestern Energy"
    ],
    "utility": "NWPS"
  },
  "ERAS-2025-036": {
    "id": "ERAS-2025-036",
    "sourceId": "spp-eras-2025-036",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-eras-2025-036",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-10-02",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 140,
    "summerCapacityMw": 140,
    "winterCapacityMw": 140,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Newhart - Potter 230 kV Line",
    "county": "Potter County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2021-021": {
    "id": "GEN-2021-021",
    "sourceId": "spp-gen-2021-021",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2021-021",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2021-04-20",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Carpenter 345 kV Substation",
    "county": "Stevens County",
    "state": "KS",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2021-025": {
    "id": "GEN-2021-025",
    "sourceId": "spp-gen-2021-025",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2021-025",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2021-05-14",
    "targetCommercialOperationDate": "2026-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 203.04,
    "summerCapacityMw": 203.04,
    "winterCapacityMw": 203.04,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Western Farmers 138kV Mooreland Substation",
    "county": "Woodward County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2021-029": {
    "id": "GEN-2021-029",
    "sourceId": "spp-gen-2021-029",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2021-029",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2021-05-14",
    "targetCommercialOperationDate": "2026-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 253.8,
    "summerCapacityMw": 253.8,
    "winterCapacityMw": 253.8,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Evergy Tap the  La Cygne to Stillwel 345 kV Line",
    "county": "Linn County",
    "state": "KS",
    "transmissionOwner": "KCPL",
    "canonicalTransmissionOwners": [
      "Kansas City Power and Light"
    ],
    "utility": "KCPL"
  },
  "GEN-2021-030": {
    "id": "GEN-2021-030",
    "sourceId": "spp-gen-2021-030",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2021-030",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2021-05-14",
    "targetCommercialOperationDate": "2026-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 510.3,
    "summerCapacityMw": 510.3,
    "winterCapacityMw": 510.3,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Evergy Tap the La Cygne to Stillwel 345 kV Line",
    "county": "Linn County",
    "state": "KS",
    "transmissionOwner": "KCPL",
    "canonicalTransmissionOwners": [
      "Kansas City Power and Light"
    ],
    "utility": "KCPL"
  },
  "GEN-2021-038": {
    "id": "GEN-2021-038",
    "sourceId": "spp-gen-2021-038",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2021-038",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2021-04-30",
    "targetCommercialOperationDate": "2028-05-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 201.32,
    "winterCapacityMw": 201.32,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Welsh 345kV Substation",
    "county": "Titus County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2021-077": {
    "id": "GEN-2021-077",
    "sourceId": "spp-gen-2021-077",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2021-077",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2021-04-30",
    "targetCommercialOperationDate": "2030-04-11",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 95,
    "summerCapacityMw": 95,
    "winterCapacityMw": 95,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Windsor to AEC Sedalia 161 kV",
    "county": "Pettis County",
    "state": "MO",
    "transmissionOwner": "GMO",
    "canonicalTransmissionOwners": [
      "Evergy Missouri West"
    ],
    "utility": "GMO"
  },
  "GEN-2021-090": {
    "id": "GEN-2021-090",
    "sourceId": "spp-gen-2021-090",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2021-090",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2021-04-30",
    "targetCommercialOperationDate": "2028-06-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 400,
    "summerCapacityMw": 400,
    "winterCapacityMw": 400,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Yoakum 345kV Substation",
    "county": "Yoakum County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2021-096": {
    "id": "GEN-2021-096",
    "sourceId": "spp-gen-2021-096",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2021-096",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2021-04-29",
    "targetCommercialOperationDate": "2030-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 500,
    "summerCapacityMw": 500,
    "winterCapacityMw": 500,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Wolf Creek - Benton 345 kV",
    "county": "Coffey County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2022-015": {
    "id": "GEN-2022-015",
    "sourceId": "spp-gen-2022-015",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-015",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2022-06-08",
    "targetCommercialOperationDate": "2029-08-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 270,
    "summerCapacityMw": 270,
    "winterCapacityMw": 270,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tap of Mingo - Red Willow 345 kV Line",
    "county": "Decatur County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2022-038": {
    "id": "GEN-2022-038",
    "sourceId": "spp-gen-2022-038",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-038",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2022-06-23",
    "targetCommercialOperationDate": "2029-04-22",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 180,
    "summerCapacityMw": 180,
    "winterCapacityMw": 180,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Longwood to Scottville 138 kV line",
    "county": "Harrison County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2022-054": {
    "id": "GEN-2022-054",
    "sourceId": "spp-gen-2022-054",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-054",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2022-06-23",
    "targetCommercialOperationDate": "2030-07-20",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Wolf Creek - Blackberry 345 kV Tap",
    "county": "Bourbon County",
    "state": "KS",
    "transmissionOwner": "NEET",
    "canonicalTransmissionOwners": [
      "NextEra Energy Transmission"
    ],
    "utility": "NEET"
  },
  "GEN-2022-055": {
    "id": "GEN-2022-055",
    "sourceId": "spp-gen-2022-055",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-055",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2022-06-23",
    "targetCommercialOperationDate": "2029-08-26",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Sunshine North to Anadarko 138 kV",
    "county": "Grady County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2022-065": {
    "id": "GEN-2022-065",
    "sourceId": "spp-gen-2022-065",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-065",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2022-07-25",
    "targetCommercialOperationDate": "2027-11-19",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 145,
    "summerCapacityMw": 145,
    "winterCapacityMw": 145,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "tap on Arthur Mullergreen-Spearville 230 kV line",
    "county": "Edwards County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2022-071": {
    "id": "GEN-2022-071",
    "sourceId": "spp-gen-2022-071",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-071",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2022-08-12",
    "targetCommercialOperationDate": "2028-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 90.824,
    "summerCapacityMw": 90.824,
    "winterCapacityMw": 90.824,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Talawanda to Canadian River 138 kV Line Tap",
    "county": "Pittsburg County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2022-073": {
    "id": "GEN-2022-073",
    "sourceId": "spp-gen-2022-073",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-073",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2022-09-02",
    "targetCommercialOperationDate": "2030-05-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Nashua-Smithville 161kV",
    "county": "Clay County",
    "state": "MO",
    "transmissionOwner": "KCPL",
    "canonicalTransmissionOwners": [
      "Kansas City Power and Light"
    ],
    "utility": "KCPL"
  },
  "GEN-2022-075": {
    "id": "GEN-2022-075",
    "sourceId": "spp-gen-2022-075",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-075",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2022-09-02",
    "targetCommercialOperationDate": "2027-11-19",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 175,
    "summerCapacityMw": 175,
    "winterCapacityMw": 175,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tap on the Spearville - Post Rock 345kV line",
    "county": "Ellis County",
    "state": "KS",
    "transmissionOwner": "ITCGP",
    "canonicalTransmissionOwners": [
      "ITC Great Plains"
    ],
    "utility": "ITCGP"
  },
  "GEN-2022-104": {
    "id": "GEN-2022-104",
    "sourceId": "spp-gen-2022-104",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-104",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-01-26",
    "targetCommercialOperationDate": "2029-04-08",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 113.078,
    "summerCapacityMw": 113.078,
    "winterCapacityMw": 113.078,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Brown - South Coleman Junction 138kV line",
    "county": "Bryan County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2022-111": {
    "id": "GEN-2022-111",
    "sourceId": "spp-gen-2022-111",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-111",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-02-10",
    "targetCommercialOperationDate": "2027-04-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Wilkes 345 kV Substation",
    "county": "Marion County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2022-130": {
    "id": "GEN-2022-130",
    "sourceId": "spp-gen-2022-130",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-130",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-02-21",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Battlefield BESS 161kV",
    "county": "Sebastian County",
    "state": "AR",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2022-136": {
    "id": "GEN-2022-136",
    "sourceId": "spp-gen-2022-136",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-136",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-02-21",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 180,
    "summerCapacityMw": 180,
    "winterCapacityMw": 180,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Colbert 138 kV Substation",
    "county": "Bryan County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2022-139": {
    "id": "GEN-2022-139",
    "sourceId": "spp-gen-2022-139",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-139",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-02-21",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 315.7,
    "winterCapacityMw": 315.7,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pirkey 345kV Substation",
    "county": "Harrison County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2022-142": {
    "id": "GEN-2022-142",
    "sourceId": "spp-gen-2022-142",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-142",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-02-21",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 210.4,
    "winterCapacityMw": 210.4,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Shoal Creek 161 kV Substation",
    "county": "Clay County",
    "state": "MO",
    "transmissionOwner": "KCPL",
    "canonicalTransmissionOwners": [
      "Kansas City Power and Light"
    ],
    "utility": "KCPL"
  },
  "GEN-2022-145": {
    "id": "GEN-2022-145",
    "sourceId": "spp-gen-2022-145",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-145",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-02-21",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 180,
    "summerCapacityMw": 180,
    "winterCapacityMw": 180,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Weatherford Jct. to Hinton 138 kV line",
    "county": "Johnston County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2022-147": {
    "id": "GEN-2022-147",
    "sourceId": "spp-gen-2022-147",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-147",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-02-21",
    "targetCommercialOperationDate": "2025-04-11",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 203,
    "summerCapacityMw": 196,
    "winterCapacityMw": 203,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tuco 345kV",
    "county": "Hale County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2022-176": {
    "id": "GEN-2022-176",
    "sourceId": "spp-gen-2022-176",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2022-176",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-02-17",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 215,
    "summerCapacityMw": 215,
    "winterCapacityMw": 215,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Northeastern - Delaware 345 kV transmission line",
    "county": "Nowata County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2023-015": {
    "id": "GEN-2023-015",
    "sourceId": "spp-gen-2023-015",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-015",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2026-09-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 330,
    "summerCapacityMw": 330,
    "winterCapacityMw": 330,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Finney-Carpenter 345 KV line",
    "county": "Finney County",
    "state": "KS",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2023-033": {
    "id": "GEN-2023-033",
    "sourceId": "spp-gen-2023-033",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-033",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-07-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Liberty South 161 kV Substation",
    "county": "Clay County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2023-034": {
    "id": "GEN-2023-034",
    "sourceId": "spp-gen-2023-034",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-034",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2026-09-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 130,
    "summerCapacityMw": 130,
    "winterCapacityMw": 130,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Clear Water - Waco 138 kV line",
    "county": "Sedgwick County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2023-035": {
    "id": "GEN-2023-035",
    "sourceId": "spp-gen-2023-035",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-035",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2026-09-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Cleveland - Amber Tap 138 kV Line",
    "county": "Grady County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2023-037": {
    "id": "GEN-2023-037",
    "sourceId": "spp-gen-2023-037",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-037",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-07-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Nearman 161 kV Substation",
    "county": "Wyandotte County",
    "state": "KS",
    "transmissionOwner": "KACY",
    "canonicalTransmissionOwners": [
      "KACY"
    ],
    "utility": "KACY"
  },
  "GEN-2023-038": {
    "id": "GEN-2023-038",
    "sourceId": "spp-gen-2023-038",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-038",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2026-09-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Lula 138 kV Substation",
    "county": "Coal County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2023-055": {
    "id": "GEN-2023-055",
    "sourceId": "spp-gen-2023-055",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-055",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-05-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 100,
    "summerCapacityMw": 100,
    "winterCapacityMw": 100,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Kerr Grove 161 kV",
    "county": "Mayes",
    "state": "OK",
    "transmissionOwner": "GRDA",
    "canonicalTransmissionOwners": [
      "Grand River Dam Authority"
    ],
    "utility": "GRDA"
  },
  "GEN-2023-057": {
    "id": "GEN-2023-057",
    "sourceId": "spp-gen-2023-057",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-057",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-05-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pawnee Switch 138 kV",
    "county": "Pawnee County",
    "state": "OK",
    "transmissionOwner": "GRDA",
    "canonicalTransmissionOwners": [
      "Grand River Dam Authority"
    ],
    "utility": "GRDA"
  },
  "GEN-2023-059": {
    "id": "GEN-2023-059",
    "sourceId": "spp-gen-2023-059",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-059",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-09-11",
    "targetCommercialOperationDate": "2029-04-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Gas",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tap Rockhill to South Shreveport 138 kV line",
    "county": "Harrison County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2023-061": {
    "id": "GEN-2023-061",
    "sourceId": "spp-gen-2023-061",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-061",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 100,
    "summerCapacityMw": 100,
    "winterCapacityMw": 100,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Carthage 161 kV Substation",
    "county": "Jasper County",
    "state": "MO",
    "transmissionOwner": "SWPA",
    "canonicalTransmissionOwners": [
      "Southwestern Power Administration"
    ],
    "utility": "SWPA"
  },
  "GEN-2023-063": {
    "id": "GEN-2023-063",
    "sourceId": "spp-gen-2023-063",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-063",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 135,
    "summerCapacityMw": 135,
    "winterCapacityMw": 135,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Catoosa - Owasso 88th 138 kV line",
    "county": "Rogers County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2023-064": {
    "id": "GEN-2023-064",
    "sourceId": "spp-gen-2023-064",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-064",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "RS Kerr-Stigler 161 kV line",
    "county": "Le Flore County",
    "state": "OK",
    "transmissionOwner": "SWPA",
    "canonicalTransmissionOwners": [
      "Southwestern Power Administration"
    ],
    "utility": "SWPA"
  },
  "GEN-2023-069": {
    "id": "GEN-2023-069",
    "sourceId": "spp-gen-2023-069",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-069",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-09-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 100,
    "summerCapacityMw": 100,
    "winterCapacityMw": 100,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tupelo - Atoka 138 kV Line",
    "county": "Atoka County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2023-077": {
    "id": "GEN-2023-077",
    "sourceId": "spp-gen-2023-077",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-077",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-02-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 255,
    "summerCapacityMw": 235,
    "winterCapacityMw": 255,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Substation 3740 345 kV",
    "county": "Cass County",
    "state": "NE",
    "transmissionOwner": "OPPD",
    "canonicalTransmissionOwners": [
      "Omaha Public Power District"
    ],
    "utility": "OPPD"
  },
  "GEN-2023-078": {
    "id": "GEN-2023-078",
    "sourceId": "spp-gen-2023-078",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-078",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-02-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 255,
    "summerCapacityMw": 235,
    "winterCapacityMw": 255,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Substation 3740 345 kV",
    "county": "Cass County",
    "state": "NE",
    "transmissionOwner": "OPPD",
    "canonicalTransmissionOwners": [
      "Omaha Public Power District"
    ],
    "utility": "OPPD"
  },
  "GEN-2023-079": {
    "id": "GEN-2023-079",
    "sourceId": "spp-gen-2023-079",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-079",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2032-02-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 272.7,
    "summerCapacityMw": 258,
    "winterCapacityMw": 303,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Substation 3740 345 kV",
    "county": "Cass County",
    "state": "NE",
    "transmissionOwner": "OPPD",
    "canonicalTransmissionOwners": [
      "Omaha Public Power District"
    ],
    "utility": "OPPD"
  },
  "GEN-2023-088": {
    "id": "GEN-2023-088",
    "sourceId": "spp-gen-2023-088",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-088",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 117,
    "summerCapacityMw": 117,
    "winterCapacityMw": 117,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pharaoh 138 kV Substation",
    "county": "Okfuskee County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2023-092": {
    "id": "GEN-2023-092",
    "sourceId": "spp-gen-2023-092",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-092",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-09-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 125,
    "summerCapacityMw": 125,
    "winterCapacityMw": 125,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Unger - Frogville 138 kV line",
    "county": "Choctaw County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2023-099": {
    "id": "GEN-2023-099",
    "sourceId": "spp-gen-2023-099",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-099",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Jeffery Energy Center 345 kV Substation",
    "county": "Jackson County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2023-102": {
    "id": "GEN-2023-102",
    "sourceId": "spp-gen-2023-102",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-102",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2029-06-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 475,
    "summerCapacityMw": 475,
    "winterCapacityMw": 475,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Degrasse 345 kV Substation",
    "county": "Woods County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2023-104": {
    "id": "GEN-2023-104",
    "sourceId": "spp-gen-2023-104",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-104",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-09-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 100,
    "summerCapacityMw": 100,
    "winterCapacityMw": 100,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Mooreland - Noel 138 kV Line",
    "county": "Woods County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2023-107": {
    "id": "GEN-2023-107",
    "sourceId": "spp-gen-2023-107",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-107",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Setab 345 kV",
    "county": "Finney County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2023-120": {
    "id": "GEN-2023-120",
    "sourceId": "spp-gen-2023-120",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-120",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 130,
    "summerCapacityMw": 130,
    "winterCapacityMw": 130,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Kress 115 kV Substation",
    "county": "Swisher County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2023-132": {
    "id": "GEN-2023-132",
    "sourceId": "spp-gen-2023-132",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-132",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Jonesboro - Independence 161 kV",
    "county": "Craighead County",
    "state": "AR",
    "transmissionOwner": "SWPA",
    "canonicalTransmissionOwners": [
      "Southwestern Power Administration"
    ],
    "utility": "SWPA"
  },
  "GEN-2023-135": {
    "id": "GEN-2023-135",
    "sourceId": "spp-gen-2023-135",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-135",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2026-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 52,
    "summerCapacityMw": 52,
    "winterCapacityMw": 52,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Lydia 345kV substation",
    "county": "Bowie County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2023-153": {
    "id": "GEN-2023-153",
    "sourceId": "spp-gen-2023-153",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-153",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-08-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 120,
    "summerCapacityMw": 120,
    "winterCapacityMw": 120,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Grant 115 kV Substation",
    "county": "Perkins County",
    "state": "NE",
    "transmissionOwner": "Tri-State",
    "canonicalTransmissionOwners": [
      "Tri-State Generation and Transmission Association"
    ],
    "utility": "Tri-State"
  },
  "GEN-2023-161": {
    "id": "GEN-2023-161",
    "sourceId": "spp-gen-2023-161",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-161",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2027-10-02",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 74.9,
    "summerCapacityMw": 74.9,
    "winterCapacityMw": 74.9,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Roman Nose 138 kV Substation",
    "county": "Blaine County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2023-170": {
    "id": "GEN-2023-170",
    "sourceId": "spp-gen-2023-170",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-170",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Salisbury 161 kV Substation",
    "county": "Chariton County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2023-171": {
    "id": "GEN-2023-171",
    "sourceId": "spp-gen-2023-171",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-171",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Sub M 161 kV Substation",
    "county": "Jackson County",
    "state": "MO",
    "transmissionOwner": "INDN",
    "canonicalTransmissionOwners": [
      "Independence Power and Light"
    ],
    "utility": "INDN"
  },
  "GEN-2023-172": {
    "id": "GEN-2023-172",
    "sourceId": "spp-gen-2023-172",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-172",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Holcomb 345 kV",
    "county": "Kearny County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2023-173": {
    "id": "GEN-2023-173",
    "sourceId": "spp-gen-2023-173",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-173",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 100,
    "summerCapacityMw": 100,
    "winterCapacityMw": 100,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Holcomb 345 kV",
    "county": "Kearny County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2023-177": {
    "id": "GEN-2023-177",
    "sourceId": "spp-gen-2023-177",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-177",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Paoli - Seminole 138 kV line tap",
    "county": "Garvin County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2023-193": {
    "id": "GEN-2023-193",
    "sourceId": "spp-gen-2023-193",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-193",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-03-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 175,
    "summerCapacityMw": 175,
    "winterCapacityMw": 175,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pirkey - Whitney 138 kV Line",
    "county": "Harrison County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2023-199": {
    "id": "GEN-2023-199",
    "sourceId": "spp-gen-2023-199",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-199",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2027-03-28",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Twin Church 230 kV Substation",
    "county": "Dakota County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2023-204": {
    "id": "GEN-2023-204",
    "sourceId": "spp-gen-2023-204",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-204",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 914.6,
    "summerCapacityMw": 960,
    "winterCapacityMw": 960,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Welsh-Lydia 345kV Line",
    "county": "Morris County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2023-205": {
    "id": "GEN-2023-205",
    "sourceId": "spp-gen-2023-205",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-205",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 180,
    "summerCapacityMw": 180,
    "winterCapacityMw": 180,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "McAlester City - Weleetka 138 kV line",
    "county": "Hughes County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2023-206": {
    "id": "GEN-2023-206",
    "sourceId": "spp-gen-2023-206",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-206",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 50,
    "summerCapacityMw": 50,
    "winterCapacityMw": 50,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Battlefield BESS 161 kV Substation",
    "county": "Sebastian County",
    "state": "AR",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2023-210": {
    "id": "GEN-2023-210",
    "sourceId": "spp-gen-2023-210",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-210",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2026-09-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 191,
    "summerCapacityMw": 191,
    "winterCapacityMw": 191,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Prague - Chernicky 138 kV Line",
    "county": "Lincoln County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2023-220": {
    "id": "GEN-2023-220",
    "sourceId": "spp-gen-2023-220",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-220",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Emporia Energy Center - Swissvale 345 kV Line",
    "county": "Osage County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2023-221": {
    "id": "GEN-2023-221",
    "sourceId": "spp-gen-2023-221",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-221",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Emporia Energy Center - Swissvale 345 kV Line",
    "county": "Osage County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2023-222": {
    "id": "GEN-2023-222",
    "sourceId": "spp-gen-2023-222",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-222",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2030-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 478,
    "summerCapacityMw": 478,
    "winterCapacityMw": 478,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "New Beatrice Power Station 345 kV",
    "county": "Gage County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2023-223": {
    "id": "GEN-2023-223",
    "sourceId": "spp-gen-2023-223",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-223",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2030-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 239,
    "summerCapacityMw": 239,
    "winterCapacityMw": 239,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "New Beatrice Power Station 345 kV",
    "county": "Gage County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2023-224": {
    "id": "GEN-2023-224",
    "sourceId": "spp-gen-2023-224",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-224",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2029-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 478,
    "summerCapacityMw": 478,
    "winterCapacityMw": 478,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Olive Creek 345 kV Substation",
    "county": "Lancaster County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2023-225": {
    "id": "GEN-2023-225",
    "sourceId": "spp-gen-2023-225",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-225",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2029-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 217,
    "summerCapacityMw": 217,
    "winterCapacityMw": 217,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Olive Creek 345 kV Substation",
    "county": "Lancaster County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2023-229": {
    "id": "GEN-2023-229",
    "sourceId": "spp-gen-2023-229",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-229",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2029-04-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 230,
    "summerCapacityMw": 230,
    "winterCapacityMw": 230,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Southwestern Power Station 138 kV Substation (SWS4)",
    "county": "Caddo County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2023-230": {
    "id": "GEN-2023-230",
    "sourceId": "spp-gen-2023-230",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-230",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2028-11-19",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Red Pointe 138 kV Substation",
    "county": "Bossier Parish",
    "state": "LA",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2023-241": {
    "id": "GEN-2023-241",
    "sourceId": "spp-gen-2023-241",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2023-241",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2023-10-02",
    "targetCommercialOperationDate": "2029-04-19",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 93,
    "summerCapacityMw": 93,
    "winterCapacityMw": 93,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Winnsboro 138 kV Substation",
    "county": "Franklin County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-003": {
    "id": "GEN-2024-003",
    "sourceId": "spp-gen-2024-003",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-003",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-04-25",
    "targetCommercialOperationDate": "2025-11-07",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 102.2,
    "summerCapacityMw": 102.2,
    "winterCapacityMw": 102.2,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Fitzhugh 161kV",
    "county": "Franklin County",
    "state": "AR",
    "transmissionOwner": "AECC",
    "canonicalTransmissionOwners": [
      "Arkansas Electric Cooperative Corporation"
    ],
    "utility": "AECC"
  },
  "GEN-2024-007": {
    "id": "GEN-2024-007",
    "sourceId": "spp-gen-2024-007",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-007",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-04-30",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 80,
    "summerCapacityMw": 80,
    "winterCapacityMw": 80,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Seward 115 kV Substation",
    "county": "Stafford County",
    "state": "KS",
    "transmissionOwner": "MIDW",
    "canonicalTransmissionOwners": [
      "Midwest Energy"
    ],
    "utility": "MIDW"
  },
  "GEN-2024-013": {
    "id": "GEN-2024-013",
    "sourceId": "spp-gen-2024-013",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-013",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-08-02",
    "targetCommercialOperationDate": "2030-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 496,
    "summerCapacityMw": 496,
    "winterCapacityMw": 496,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Norman Hills 345 kV",
    "county": "McClain County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-015": {
    "id": "GEN-2024-015",
    "sourceId": "spp-gen-2024-015",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-015",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-04",
    "targetCommercialOperationDate": "2028-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 280,
    "summerCapacityMw": 280,
    "winterCapacityMw": 280,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Sundown-Amaco-Yoakum 230 kV Substation",
    "county": "Yoakum County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-016": {
    "id": "GEN-2024-016",
    "sourceId": "spp-gen-2024-016",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-016",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-12-29",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Post Rock - Macon 345 kV Line",
    "county": "Smith County",
    "state": "KS",
    "transmissionOwner": "ITCGP",
    "canonicalTransmissionOwners": [
      "ITC Great Plains"
    ],
    "utility": "ITCGP"
  },
  "GEN-2024-017": {
    "id": "GEN-2024-017",
    "sourceId": "spp-gen-2024-017",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-017",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 62,
    "summerCapacityMw": 62,
    "winterCapacityMw": 62,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Olive Creek 345 kV Substation",
    "county": "Lancaster County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2024-018": {
    "id": "GEN-2024-018",
    "sourceId": "spp-gen-2024-018",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-018",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 31,
    "summerCapacityMw": 31,
    "winterCapacityMw": 31,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "New Beatrice Power Station 345 kV",
    "county": "Gage County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2024-019": {
    "id": "GEN-2024-019",
    "sourceId": "spp-gen-2024-019",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-019",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 62,
    "summerCapacityMw": 62,
    "winterCapacityMw": 62,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "New Beatrice Power Station 345 kV Substation",
    "county": "Gage County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2024-020": {
    "id": "GEN-2024-020",
    "sourceId": "spp-gen-2024-020",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-020",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 390,
    "summerCapacityMw": 390,
    "winterCapacityMw": 390,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Olive Creek 345 kV Substation",
    "county": "Lancaster County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2024-021": {
    "id": "GEN-2024-021",
    "sourceId": "spp-gen-2024-021",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-021",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 540,
    "summerCapacityMw": 540,
    "winterCapacityMw": 540,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Olive Creek 345 kV Substation",
    "county": "Lancaster County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2024-022": {
    "id": "GEN-2024-022",
    "sourceId": "spp-gen-2024-022",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-022",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 390,
    "summerCapacityMw": 390,
    "winterCapacityMw": 390,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "New Beatrice Power Station 345 kV",
    "county": "Gage County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2024-023": {
    "id": "GEN-2024-023",
    "sourceId": "spp-gen-2024-023",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-023",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 270,
    "summerCapacityMw": 270,
    "winterCapacityMw": 270,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "New Beatrice Power Station 345 kV",
    "county": "Gage County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2024-025": {
    "id": "GEN-2024-025",
    "sourceId": "spp-gen-2024-025",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-025",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Lydia 345 kV Substation",
    "county": "Bowie County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-029": {
    "id": "GEN-2024-029",
    "sourceId": "spp-gen-2024-029",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-029",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Crescent 138 kV Substation",
    "county": "Logan County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-030": {
    "id": "GEN-2024-030",
    "sourceId": "spp-gen-2024-030",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-030",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Santa Fe 115 kV Substation",
    "county": "Gray County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-032": {
    "id": "GEN-2024-032",
    "sourceId": "spp-gen-2024-032",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-032",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hugoton 115 kV Substation",
    "county": "Stevens County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-034": {
    "id": "GEN-2024-034",
    "sourceId": "spp-gen-2024-034",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-034",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-07-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 175,
    "summerCapacityMw": 175,
    "winterCapacityMw": 175,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Forman 115 kV Substation",
    "county": "Sargent County",
    "state": "ND",
    "transmissionOwner": "WAPA",
    "canonicalTransmissionOwners": [
      "Western Area Power Administration"
    ],
    "utility": "WAPA"
  },
  "GEN-2024-035": {
    "id": "GEN-2024-035",
    "sourceId": "spp-gen-2024-035",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-035",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2027-12-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 270,
    "summerCapacityMw": 270,
    "winterCapacityMw": 270,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Groton 345 kV Substation",
    "county": "Brown County",
    "state": "SD",
    "transmissionOwner": "BEPC",
    "canonicalTransmissionOwners": [
      "Basin Electric Power Cooperative"
    ],
    "utility": "BEPC"
  },
  "GEN-2024-038": {
    "id": "GEN-2024-038",
    "sourceId": "spp-gen-2024-038",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-038",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Cooper - S12080 161 kV line",
    "county": "Nemaha County",
    "state": "NE",
    "transmissionOwner": "OPPD",
    "canonicalTransmissionOwners": [
      "Omaha Public Power District"
    ],
    "utility": "OPPD"
  },
  "GEN-2024-039": {
    "id": "GEN-2024-039",
    "sourceId": "spp-gen-2024-039",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-039",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Humboldt - S1280 161 kV line",
    "county": "Nemaha County",
    "state": "NE",
    "transmissionOwner": "OPPD",
    "canonicalTransmissionOwners": [
      "Omaha Public Power District"
    ],
    "utility": "OPPD"
  },
  "GEN-2024-040": {
    "id": "GEN-2024-040",
    "sourceId": "spp-gen-2024-040",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-040",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 174,
    "summerCapacityMw": 174,
    "winterCapacityMw": 174,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "S3458 to Cooper 345 kV line",
    "county": "Nemaha County",
    "state": "NE",
    "transmissionOwner": "OPPD",
    "canonicalTransmissionOwners": [
      "Omaha Public Power District"
    ],
    "utility": "OPPD"
  },
  "GEN-2024-041": {
    "id": "GEN-2024-041",
    "sourceId": "spp-gen-2024-041",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-041",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tuco - Whirlwind 345 kV Line",
    "county": "Floyd County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-042": {
    "id": "GEN-2024-042",
    "sourceId": "spp-gen-2024-042",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-042",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-07-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tuco - Whirlwind 345 kV line",
    "county": "Floyd County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-043": {
    "id": "GEN-2024-043",
    "sourceId": "spp-gen-2024-043",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-043",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Crossroads - Tolk 345 kV Line",
    "county": "Roosevelt County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-044": {
    "id": "GEN-2024-044",
    "sourceId": "spp-gen-2024-044",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-044",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2027-07-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 36,
    "summerCapacityMw": 36,
    "winterCapacityMw": 36,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hosston - Plain Dealing 69 kV Line",
    "county": "Caddo Parish",
    "state": "LA",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-045": {
    "id": "GEN-2024-045",
    "sourceId": "spp-gen-2024-045",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-045",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 345,
    "summerCapacityMw": 345,
    "winterCapacityMw": 345,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hitchland - Moore 230kV line",
    "county": "Hansford County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-046": {
    "id": "GEN-2024-046",
    "sourceId": "spp-gen-2024-046",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-046",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 345,
    "summerCapacityMw": 345,
    "winterCapacityMw": 345,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hitchland-Moore 230 kV line",
    "county": "Hansford County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-050": {
    "id": "GEN-2024-050",
    "sourceId": "spp-gen-2024-050",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-050",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Olson 230 kV Substation",
    "county": "Castro County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-051": {
    "id": "GEN-2024-051",
    "sourceId": "spp-gen-2024-051",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-051",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-05-17",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 170,
    "summerCapacityMw": 170,
    "winterCapacityMw": 170,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Waverly-Alvo 115 kV Line",
    "county": "Lancaster County",
    "state": "NE",
    "transmissionOwner": "LES",
    "canonicalTransmissionOwners": [
      "Lincoln Electric System"
    ],
    "utility": "LES"
  },
  "GEN-2024-052": {
    "id": "GEN-2024-052",
    "sourceId": "spp-gen-2024-052",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-052",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-02-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 42,
    "summerCapacityMw": 42,
    "winterCapacityMw": 42,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Unger - West Bank Tap 138 kV Line",
    "county": "Choctaw County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2024-054": {
    "id": "GEN-2024-054",
    "sourceId": "spp-gen-2024-054",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-054",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 120,
    "summerCapacityMw": 120,
    "winterCapacityMw": 120,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Overton - Sedalia East 161 kV line",
    "county": "Cooper County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-055": {
    "id": "GEN-2024-055",
    "sourceId": "spp-gen-2024-055",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-055",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 175,
    "summerCapacityMw": 175,
    "winterCapacityMw": 175,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Butler - Nevada 161 kV line",
    "county": "Vernon County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-056": {
    "id": "GEN-2024-056",
    "sourceId": "spp-gen-2024-056",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-056",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 120,
    "summerCapacityMw": 120,
    "winterCapacityMw": 120,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Cow Creek - Morrison 138 kV line",
    "county": "Noble County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-058": {
    "id": "GEN-2024-058",
    "sourceId": "spp-gen-2024-058",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-058",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-12-29",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Farmland - Delaware 138 kV line",
    "county": "Nowata County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-061": {
    "id": "GEN-2024-061",
    "sourceId": "spp-gen-2024-061",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-061",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Creswell 138 kV Substation",
    "county": "Cowley County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-062": {
    "id": "GEN-2024-062",
    "sourceId": "spp-gen-2024-062",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-062",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 230,
    "summerCapacityMw": 230,
    "winterCapacityMw": 230,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Dover SW 138 kV Substation",
    "county": "Kingfisher County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2024-063": {
    "id": "GEN-2024-063",
    "sourceId": "spp-gen-2024-063",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-063",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2027-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 256,
    "summerCapacityMw": 256,
    "winterCapacityMw": 256,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Plant X 230 kV Substation",
    "county": "Lamb County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-065": {
    "id": "GEN-2024-065",
    "sourceId": "spp-gen-2024-065",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-065",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "FREMONT7 115 kV Substation",
    "county": "Dodge County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2024-067": {
    "id": "GEN-2024-067",
    "sourceId": "spp-gen-2024-067",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-067",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-07-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 380,
    "summerCapacityMw": 380,
    "winterCapacityMw": 380,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Cirrus 345 kV Substation",
    "county": "Cloud County",
    "state": "KS",
    "transmissionOwner": "ITCGP",
    "canonicalTransmissionOwners": [
      "ITC Great Plains"
    ],
    "utility": "ITCGP"
  },
  "GEN-2024-068": {
    "id": "GEN-2024-068",
    "sourceId": "spp-gen-2024-068",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-068",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-12-29",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Lydia - Welsh 345 kV Line",
    "county": "Morris County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-069": {
    "id": "GEN-2024-069",
    "sourceId": "spp-gen-2024-069",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-069",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 228,
    "summerCapacityMw": 228,
    "winterCapacityMw": 228,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Franklin 69 kV Substation",
    "county": "Crawford County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-071": {
    "id": "GEN-2024-071",
    "sourceId": "spp-gen-2024-071",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-071",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2027-07-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 75,
    "summerCapacityMw": 75,
    "winterCapacityMw": 75,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "West Atlanta - Atlanta 69 kV Line",
    "county": "Cass County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-072": {
    "id": "GEN-2024-072",
    "sourceId": "spp-gen-2024-072",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-072",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-04-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 160,
    "summerCapacityMw": 160,
    "winterCapacityMw": 160,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Beloit 115 kV Substation",
    "county": "Mitchell County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-073": {
    "id": "GEN-2024-073",
    "sourceId": "spp-gen-2024-073",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-073",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 500,
    "summerCapacityMw": 500,
    "winterCapacityMw": 500,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Crossroads - Hobbs 345 kV Substation",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "NEETSW",
    "canonicalTransmissionOwners": [
      "NextEra Energy Transmission Southwest"
    ],
    "utility": "NEETSW"
  },
  "GEN-2024-074": {
    "id": "GEN-2024-074",
    "sourceId": "spp-gen-2024-074",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-074",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Duncan Road 161 kV Substation",
    "county": "Jackson County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-076": {
    "id": "GEN-2024-076",
    "sourceId": "spp-gen-2024-076",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-076",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 130,
    "summerCapacityMw": 130,
    "winterCapacityMw": 130,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Neosho - LaCygne 345 kV Line",
    "county": "Bourbon County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-077": {
    "id": "GEN-2024-077",
    "sourceId": "spp-gen-2024-077",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-077",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pringle 230 kV Substation",
    "county": "Hutchinson County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-078": {
    "id": "GEN-2024-078",
    "sourceId": "spp-gen-2024-078",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-078",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pringle 230 kV Substation",
    "county": "Hutchinson County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-079": {
    "id": "GEN-2024-079",
    "sourceId": "spp-gen-2024-079",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-079",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "San Juan 230 kV Substation",
    "county": "Curry County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-080": {
    "id": "GEN-2024-080",
    "sourceId": "spp-gen-2024-080",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-080",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "San Juan 230 kV Substation",
    "county": "Curry County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-081": {
    "id": "GEN-2024-081",
    "sourceId": "spp-gen-2024-081",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-081",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-02-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 745,
    "summerCapacityMw": 745,
    "winterCapacityMw": 745,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Springbrook - Tande 345 kV Line",
    "county": "Williams County",
    "state": "ND",
    "transmissionOwner": "BEPC",
    "canonicalTransmissionOwners": [
      "Basin Electric Power Cooperative"
    ],
    "utility": "BEPC"
  },
  "GEN-2024-082": {
    "id": "GEN-2024-082",
    "sourceId": "spp-gen-2024-082",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-082",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2030-03-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 745,
    "summerCapacityMw": 745,
    "winterCapacityMw": 745,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Springbrook - Tande 345 kV Line",
    "county": "Williams County",
    "state": "ND",
    "transmissionOwner": "BEPC",
    "canonicalTransmissionOwners": [
      "Basin Electric Power Cooperative"
    ],
    "utility": "BEPC"
  },
  "GEN-2024-083": {
    "id": "GEN-2024-083",
    "sourceId": "spp-gen-2024-083",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-083",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hugo 345 kV Substation",
    "county": "Choctaw County",
    "state": "OK",
    "transmissionOwner": "ITCGP",
    "canonicalTransmissionOwners": [
      "ITC Great Plains"
    ],
    "utility": "ITCGP"
  },
  "GEN-2024-084": {
    "id": "GEN-2024-084",
    "sourceId": "spp-gen-2024-084",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-084",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-11-25",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 167,
    "summerCapacityMw": 167,
    "winterCapacityMw": 167,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Reeds Spring - Aurora 161 kV Line",
    "county": "Lawrence County",
    "state": "MO",
    "transmissionOwner": "EMDE",
    "canonicalTransmissionOwners": [
      "Empire District Electric Company"
    ],
    "utility": "EMDE"
  },
  "GEN-2024-085": {
    "id": "GEN-2024-085",
    "sourceId": "spp-gen-2024-085",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-085",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-09-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 160,
    "summerCapacityMw": 160,
    "winterCapacityMw": 160,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Otis 115 kV Substation",
    "county": "Rush County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-088": {
    "id": "GEN-2024-088",
    "sourceId": "spp-gen-2024-088",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-088",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2027-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 145,
    "summerCapacityMw": 145,
    "winterCapacityMw": 145,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "McCartney 161 kV Substation",
    "county": "Greene County",
    "state": "MO",
    "transmissionOwner": "SPRM",
    "canonicalTransmissionOwners": [
      "City Utilities of Springfield Missouri"
    ],
    "utility": "SPRM"
  },
  "GEN-2024-089": {
    "id": "GEN-2024-089",
    "sourceId": "spp-gen-2024-089",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-089",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 195,
    "summerCapacityMw": 195,
    "winterCapacityMw": 195,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pleasant Hills 230 kV Substation",
    "county": "Curry County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-090": {
    "id": "GEN-2024-090",
    "sourceId": "spp-gen-2024-090",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-090",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-03-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 100,
    "summerCapacityMw": 100,
    "winterCapacityMw": 100,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Smithville 161 kV Substation",
    "county": "Clay County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-091": {
    "id": "GEN-2024-091",
    "sourceId": "spp-gen-2024-091",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-091",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2028-03-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 100,
    "summerCapacityMw": 100,
    "winterCapacityMw": 100,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "145 JOPLIN WEST 7TH 161 kV Substation",
    "county": "Jasper County",
    "state": "MO",
    "transmissionOwner": "EDE",
    "canonicalTransmissionOwners": [
      "Empire District Electric Company"
    ],
    "utility": "EDE"
  },
  "GEN-2024-092": {
    "id": "GEN-2024-092",
    "sourceId": "spp-gen-2024-092",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-092",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2024-10-30",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199.5,
    "summerCapacityMw": 199.5,
    "winterCapacityMw": 199.5,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Portales 115 kV Substation",
    "county": "Roosevelt County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-099": {
    "id": "GEN-2024-099",
    "sourceId": "spp-gen-2024-099",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-099",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2031-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Newhart 230 kV Substation",
    "county": "Castro County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-102": {
    "id": "GEN-2024-102",
    "sourceId": "spp-gen-2024-102",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-102",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2031-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 400.5,
    "summerCapacityMw": 400.5,
    "winterCapacityMw": 400.5,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Holcomb 345 kV Substation",
    "county": "Finney County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-109": {
    "id": "GEN-2024-109",
    "sourceId": "spp-gen-2024-109",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-109",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2031-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 400.5,
    "summerCapacityMw": 400.5,
    "winterCapacityMw": 400.5,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tolk - Crossroads 345 kV line",
    "county": "Bailey County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-113": {
    "id": "GEN-2024-113",
    "sourceId": "spp-gen-2024-113",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-113",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Muskogee - Ft. Smith 345 kV Line",
    "county": "Sequoyah County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-114": {
    "id": "GEN-2024-114",
    "sourceId": "spp-gen-2024-114",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-114",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Jonesboro - Independence County 161 kV Line",
    "county": "Jackson County",
    "state": "AR",
    "transmissionOwner": "SWPA",
    "canonicalTransmissionOwners": [
      "Southwestern Power Administration"
    ],
    "utility": "SWPA"
  },
  "GEN-2024-117": {
    "id": "GEN-2024-117",
    "sourceId": "spp-gen-2024-117",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-117",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Coffeyville Tap - North Bartlesville 138kV Line",
    "county": "Washington County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-118": {
    "id": "GEN-2024-118",
    "sourceId": "spp-gen-2024-118",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-118",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "East 11th Street 138kV Substation",
    "county": "Wagoner County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-119": {
    "id": "GEN-2024-119",
    "sourceId": "spp-gen-2024-119",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-119",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Lexington 138 kV Substation",
    "county": "Cleveland County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2024-120": {
    "id": "GEN-2024-120",
    "sourceId": "spp-gen-2024-120",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-120",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "JNS KAMO 138 kV Substation",
    "county": "Oklahoma County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-121": {
    "id": "GEN-2024-121",
    "sourceId": "spp-gen-2024-121",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-121",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Jarbalo 115 kV Substation",
    "county": "Leavenworth County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-122": {
    "id": "GEN-2024-122",
    "sourceId": "spp-gen-2024-122",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-122",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-10-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 160,
    "summerCapacityMw": 160,
    "winterCapacityMw": 160,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Lieberman - IPC Jefferson 138 kV Line",
    "county": "Marion County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-123": {
    "id": "GEN-2024-123",
    "sourceId": "spp-gen-2024-123",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-123",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 120,
    "summerCapacityMw": 120,
    "winterCapacityMw": 120,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Center - Tenaha 138 kV Line",
    "county": "Shelby County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-124": {
    "id": "GEN-2024-124",
    "sourceId": "spp-gen-2024-124",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-124",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-10-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 420,
    "summerCapacityMw": 420,
    "winterCapacityMw": 420,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Crossroads-Hobbs-Roadrunner 345 kV Line",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "NEETSW",
    "canonicalTransmissionOwners": [
      "NextEra Energy Transmission Southwest"
    ],
    "utility": "NEETSW"
  },
  "GEN-2024-125": {
    "id": "GEN-2024-125",
    "sourceId": "spp-gen-2024-125",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-125",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-06-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 400,
    "summerCapacityMw": 400,
    "winterCapacityMw": 400,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Neosho Ridge - Caney River 345 kV Line",
    "county": "Elk County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-128": {
    "id": "GEN-2024-128",
    "sourceId": "spp-gen-2024-128",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-128",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 690,
    "summerCapacityMw": 690,
    "winterCapacityMw": 690,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Gracemont - Lawton 345 kV Line",
    "county": "Caddo County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-129": {
    "id": "GEN-2024-129",
    "sourceId": "spp-gen-2024-129",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-129",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 910,
    "summerCapacityMw": 910,
    "winterCapacityMw": 910,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Caney River - Neosho 345 kV Line",
    "county": "Labette County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-132": {
    "id": "GEN-2024-132",
    "sourceId": "spp-gen-2024-132",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-132",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2031-06-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 1300,
    "summerCapacityMw": 1300,
    "winterCapacityMw": 1300,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hugo (71 miles) - Sunnyside (42 miles) 345 kV Line",
    "county": "Johnston County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-134": {
    "id": "GEN-2024-134",
    "sourceId": "spp-gen-2024-134",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-134",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2031-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Degrasse 345 kV Substation",
    "county": "Woods County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-135": {
    "id": "GEN-2024-135",
    "sourceId": "spp-gen-2024-135",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-135",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2031-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Degrasse 345 kV Substation",
    "county": "Woods County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-136": {
    "id": "GEN-2024-136",
    "sourceId": "spp-gen-2024-136",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-136",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 400,
    "summerCapacityMw": 400,
    "winterCapacityMw": 400,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Setab 345 kV Substation",
    "county": "Scott County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-137": {
    "id": "GEN-2024-137",
    "sourceId": "spp-gen-2024-137",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-137",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Setab 345 kV Substation",
    "county": "Scott County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-138": {
    "id": "GEN-2024-138",
    "sourceId": "spp-gen-2024-138",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-138",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Setab 345 kV Substation",
    "county": "Scott County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-139": {
    "id": "GEN-2024-139",
    "sourceId": "spp-gen-2024-139",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-139",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2033-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Wolf Creek - Blackberry 345 kV Line",
    "county": "Coffey County",
    "state": "KS",
    "transmissionOwner": "NEETSW",
    "canonicalTransmissionOwners": [
      "NextEra Energy Transmission Southwest"
    ],
    "utility": "NEETSW"
  },
  "GEN-2024-140": {
    "id": "GEN-2024-140",
    "sourceId": "spp-gen-2024-140",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-140",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2033-12-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Antelope - Hoskins 345 kV line",
    "county": "Douglas County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2024-141": {
    "id": "GEN-2024-141",
    "sourceId": "spp-gen-2024-141",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-141",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2031-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 424,
    "summerCapacityMw": 424,
    "winterCapacityMw": 424,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "BASIN__-BE4 230 kV Substation",
    "county": "Mercer County",
    "state": "ND",
    "transmissionOwner": "BEPC",
    "canonicalTransmissionOwners": [
      "Basin Electric Power Cooperative"
    ],
    "utility": "BEPC"
  },
  "GEN-2024-142": {
    "id": "GEN-2024-142",
    "sourceId": "spp-gen-2024-142",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-142",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2031-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Reno - Summit 345 kV Line",
    "county": "McPherson County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-143": {
    "id": "GEN-2024-143",
    "sourceId": "spp-gen-2024-143",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-143",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2032-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "XIT Interchange 230 kV Substation",
    "county": "Dallam County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-144": {
    "id": "GEN-2024-144",
    "sourceId": "spp-gen-2024-144",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-144",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Setab 345 kV Substation",
    "county": "Scott County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-145": {
    "id": "GEN-2024-145",
    "sourceId": "spp-gen-2024-145",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-145",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2032-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "XIT Interchange 230 kV Substation",
    "county": "Dallam County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-153": {
    "id": "GEN-2024-153",
    "sourceId": "spp-gen-2024-153",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-153",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Bushland 230 kV Substation",
    "county": "Randall County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-154": {
    "id": "GEN-2024-154",
    "sourceId": "spp-gen-2024-154",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-154",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Chisholm 345 kV Substation",
    "county": "Beckham County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-157": {
    "id": "GEN-2024-157",
    "sourceId": "spp-gen-2024-157",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-157",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 140,
    "summerCapacityMw": 140,
    "winterCapacityMw": 140,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hobart - Martha 138 kV Line",
    "county": "Kiowa County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-158": {
    "id": "GEN-2024-158",
    "sourceId": "spp-gen-2024-158",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-158",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 190,
    "summerCapacityMw": 190,
    "winterCapacityMw": 190,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Altus Jct - Snyder 138 kV Line",
    "county": "Jackson County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-159": {
    "id": "GEN-2024-159",
    "sourceId": "spp-gen-2024-159",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-159",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Oasis 230 kV Substation",
    "county": "Roosevelt County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-161": {
    "id": "GEN-2024-161",
    "sourceId": "spp-gen-2024-161",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-161",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-01-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 170,
    "summerCapacityMw": 170,
    "winterCapacityMw": 170,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hobart - Martha 138 kV Line",
    "county": "Jackson County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-162": {
    "id": "GEN-2024-162",
    "sourceId": "spp-gen-2024-162",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-162",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-01-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 110,
    "summerCapacityMw": 110,
    "winterCapacityMw": 110,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Twin Church 230 kV Substation",
    "county": "Dakota County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2024-164": {
    "id": "GEN-2024-164",
    "sourceId": "spp-gen-2024-164",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-164",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-01-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Arbuckle 138 kV Substation",
    "county": "Murray County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-165": {
    "id": "GEN-2024-165",
    "sourceId": "spp-gen-2024-165",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-165",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-01-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 500,
    "summerCapacityMw": 500,
    "winterCapacityMw": 500,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pittsburg - Johnston County 345 kV line",
    "county": "Coal County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-166": {
    "id": "GEN-2024-166",
    "sourceId": "spp-gen-2024-166",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-166",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-01-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 275,
    "summerCapacityMw": 275,
    "winterCapacityMw": 275,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Murray Gill 138 kV Substation",
    "county": "Sedgwick County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-167": {
    "id": "GEN-2024-167",
    "sourceId": "spp-gen-2024-167",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-167",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-01-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Orrick 161 kV Substation",
    "county": "Ray County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-168": {
    "id": "GEN-2024-168",
    "sourceId": "spp-gen-2024-168",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-168",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2033-12-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Geneva 115 kV Substation",
    "county": "Fillmore County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2024-170": {
    "id": "GEN-2024-170",
    "sourceId": "spp-gen-2024-170",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-170",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-05-17",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 280,
    "summerCapacityMw": 280,
    "winterCapacityMw": 280,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pleasant Hill 345 kV Substation",
    "county": "Cass County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-171": {
    "id": "GEN-2024-171",
    "sourceId": "spp-gen-2024-171",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-171",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-05-17",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tulsa North - Grand River Energy Center 345 kV Line",
    "county": "Tulsa County",
    "state": "OK",
    "transmissionOwner": "GRDA",
    "canonicalTransmissionOwners": [
      "Grand River Dam Authority"
    ],
    "utility": "GRDA"
  },
  "GEN-2024-173": {
    "id": "GEN-2024-173",
    "sourceId": "spp-gen-2024-173",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-173",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-05-17",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pawnee Lake 115 kV Substation",
    "county": "Lancaster County",
    "state": "NE",
    "transmissionOwner": "NPPD",
    "canonicalTransmissionOwners": [
      "Nebraska Public Power District"
    ],
    "utility": "NPPD"
  },
  "GEN-2024-175": {
    "id": "GEN-2024-175",
    "sourceId": "spp-gen-2024-175",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-175",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-05-17",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Summit 161 kV Substation",
    "county": "Greene County",
    "state": "MO",
    "transmissionOwner": "SPRM",
    "canonicalTransmissionOwners": [
      "City Utilities of Springfield Missouri"
    ],
    "utility": "SPRM"
  },
  "GEN-2024-176": {
    "id": "GEN-2024-176",
    "sourceId": "spp-gen-2024-176",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-176",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-05-17",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Reno County 115 kV Substation",
    "county": "Reno County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-177": {
    "id": "GEN-2024-177",
    "sourceId": "spp-gen-2024-177",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-177",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-01-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Red Point 138 kV Substation",
    "county": "Bossier Parish",
    "state": "LA",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-178": {
    "id": "GEN-2024-178",
    "sourceId": "spp-gen-2024-178",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-178",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-01-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pirkey 138 kV Substation",
    "county": "Harrison County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-180": {
    "id": "GEN-2024-180",
    "sourceId": "spp-gen-2024-180",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-180",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-01-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 100,
    "summerCapacityMw": 100,
    "winterCapacityMw": 100,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Kerr Dam 161 kV Substation",
    "county": "Mayes County",
    "state": "OK",
    "transmissionOwner": "GRDA",
    "canonicalTransmissionOwners": [
      "Grand River Dam Authority"
    ],
    "utility": "GRDA"
  },
  "GEN-2024-181": {
    "id": "GEN-2024-181",
    "sourceId": "spp-gen-2024-181",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-181",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-01-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Brookline 161 kV Substation",
    "county": "Greene County",
    "state": "MO",
    "transmissionOwner": "SPRM",
    "canonicalTransmissionOwners": [
      "City Utilities of Springfield Missouri"
    ],
    "utility": "SPRM"
  },
  "GEN-2024-184": {
    "id": "GEN-2024-184",
    "sourceId": "spp-gen-2024-184",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-184",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-01-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Atoka to Lehigh 138 kV Line",
    "county": "Atoka County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-186": {
    "id": "GEN-2024-186",
    "sourceId": "spp-gen-2024-186",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-186",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-01-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Roswell Interchange 115 kV Substation",
    "county": "Chaves County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-187": {
    "id": "GEN-2024-187",
    "sourceId": "spp-gen-2024-187",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-187",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-01-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Civit-Stratford 138 kV Line",
    "county": "McClain County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2024-189": {
    "id": "GEN-2024-189",
    "sourceId": "spp-gen-2024-189",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-189",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "ITC Great Plains Saddle 345 kV Substation",
    "county": "Ford County",
    "state": "KS",
    "transmissionOwner": "ITCGP",
    "canonicalTransmissionOwners": [
      "ITC Great Plains"
    ],
    "utility": "ITCGP"
  },
  "GEN-2024-193": {
    "id": "GEN-2024-193",
    "sourceId": "spp-gen-2024-193",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-193",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 249.6,
    "summerCapacityMw": 249.6,
    "winterCapacityMw": 249.6,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Spearville - Buckner 345 kV Line",
    "county": "Ford County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-194": {
    "id": "GEN-2024-194",
    "sourceId": "spp-gen-2024-194",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-194",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 249.6,
    "summerCapacityMw": 249.6,
    "winterCapacityMw": 249.6,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Spearville - Holcomb 345 kV Line",
    "county": "Ford County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-204": {
    "id": "GEN-2024-204",
    "sourceId": "spp-gen-2024-204",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-204",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-06-10",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 100,
    "summerCapacityMw": 100,
    "winterCapacityMw": 100,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Brown 138 kV Substation",
    "county": "Bryan County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-205": {
    "id": "GEN-2024-205",
    "sourceId": "spp-gen-2024-205",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-205",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-10-02",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 155,
    "summerCapacityMw": 155,
    "winterCapacityMw": 155,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "St. John 115 kV Substation",
    "county": "Stafford County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-206": {
    "id": "GEN-2024-206",
    "sourceId": "spp-gen-2024-206",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-206",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2026-07-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 226.3,
    "summerCapacityMw": 226.3,
    "winterCapacityMw": 226.3,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Blue Valley 161 kV Substation",
    "county": "Jackson County",
    "state": "MO",
    "transmissionOwner": "City of Independence MO",
    "canonicalTransmissionOwners": [
      "Independence Power and Light"
    ],
    "utility": "City of Independence MO"
  },
  "GEN-2024-207": {
    "id": "GEN-2024-207",
    "sourceId": "spp-gen-2024-207",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-207",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-07-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 778.6,
    "summerCapacityMw": 778.6,
    "winterCapacityMw": 778.6,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Blue Valley - Blumil 161 kV Line",
    "county": "Jackson County",
    "state": "MO",
    "transmissionOwner": "City of Independence MO",
    "canonicalTransmissionOwners": [
      "Independence Power and Light"
    ],
    "utility": "City of Independence MO"
  },
  "GEN-2024-209": {
    "id": "GEN-2024-209",
    "sourceId": "spp-gen-2024-209",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-209",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-06-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Elm Creek - North Manhattan 230 kV Line",
    "county": "Clay County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-210": {
    "id": "GEN-2024-210",
    "sourceId": "spp-gen-2024-210",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-210",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-06-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "St. Francis Tap 115 kV Substation",
    "county": "Cheyenne County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-211": {
    "id": "GEN-2024-211",
    "sourceId": "spp-gen-2024-211",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-211",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2035-02-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 303,
    "summerCapacityMw": 253,
    "winterCapacityMw": 303,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Substation 3740 345 kV",
    "county": "Cass County",
    "state": "NE",
    "transmissionOwner": "OPPD",
    "canonicalTransmissionOwners": [
      "Omaha Public Power District"
    ],
    "utility": "OPPD"
  },
  "GEN-2024-212": {
    "id": "GEN-2024-212",
    "sourceId": "spp-gen-2024-212",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-212",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2035-02-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 303,
    "summerCapacityMw": 253,
    "winterCapacityMw": 303,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Substation 3740 345 kV",
    "county": "Cass County",
    "state": "NE",
    "transmissionOwner": "OPPD",
    "canonicalTransmissionOwners": [
      "Omaha Public Power District"
    ],
    "utility": "OPPD"
  },
  "GEN-2024-213": {
    "id": "GEN-2024-213",
    "sourceId": "spp-gen-2024-213",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-213",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2035-02-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 360,
    "summerCapacityMw": 360,
    "winterCapacityMw": 360,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Substation 3740 345 kV",
    "county": "Cass County",
    "state": "NE",
    "transmissionOwner": "OPPD",
    "canonicalTransmissionOwners": [
      "Omaha Public Power District"
    ],
    "utility": "OPPD"
  },
  "GEN-2024-215": {
    "id": "GEN-2024-215",
    "sourceId": "spp-gen-2024-215",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-215",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-10-02",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Elm Creek 345 kV Substation",
    "county": "Cloud County",
    "state": "KS",
    "transmissionOwner": "ITCGP",
    "canonicalTransmissionOwners": [
      "ITC Great Plains"
    ],
    "utility": "ITCGP"
  },
  "GEN-2024-216": {
    "id": "GEN-2024-216",
    "sourceId": "spp-gen-2024-216",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-216",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2027-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 225,
    "summerCapacityMw": 225,
    "winterCapacityMw": 225,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Miles City 230 kV Substation",
    "county": "Custer",
    "state": "MT",
    "transmissionOwner": "WAPA",
    "canonicalTransmissionOwners": [
      "Western Area Power Administration"
    ],
    "utility": "WAPA"
  },
  "GEN-2024-217": {
    "id": "GEN-2024-217",
    "sourceId": "spp-gen-2024-217",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-217",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Sibley -  Hawthorne 345 kV line",
    "county": "Jackson County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-218": {
    "id": "GEN-2024-218",
    "sourceId": "spp-gen-2024-218",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-218",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Cimarron River 115 kV Substation",
    "county": "Seward County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-219": {
    "id": "GEN-2024-219",
    "sourceId": "spp-gen-2024-219",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-219",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-06-28",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 160,
    "summerCapacityMw": 160,
    "winterCapacityMw": 160,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Chigley - Oaklawn 138 kV Line",
    "county": "Murray County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-220": {
    "id": "GEN-2024-220",
    "sourceId": "spp-gen-2024-220",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-220",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-06-28",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 55,
    "summerCapacityMw": 55,
    "winterCapacityMw": 55,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Rodessa - Bloomberg 69 kV Line",
    "county": "Caddo Parish",
    "state": "LA",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-221": {
    "id": "GEN-2024-221",
    "sourceId": "spp-gen-2024-221",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-221",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-06-28",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 400,
    "summerCapacityMw": 400,
    "winterCapacityMw": 400,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "345 kV Crossroads -  Eddy County 345 kV Line",
    "county": "Roosevelt County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-226": {
    "id": "GEN-2024-226",
    "sourceId": "spp-gen-2024-226",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-226",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-09-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "John W Turk Jr Power Plant 345 kV Substation",
    "county": "Hempstead County",
    "state": "AR",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-227": {
    "id": "GEN-2024-227",
    "sourceId": "spp-gen-2024-227",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-227",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-09-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "John W Turk Jr Power Plant 345 kV Substation",
    "county": "Hempstead County",
    "state": "AR",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-228": {
    "id": "GEN-2024-228",
    "sourceId": "spp-gen-2024-228",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-228",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-09-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Rice to Circle 230 kV Line",
    "county": "Rice County",
    "state": "KS",
    "transmissionOwner": "MIDW",
    "canonicalTransmissionOwners": [
      "Midwest Energy"
    ],
    "utility": "MIDW"
  },
  "GEN-2024-229": {
    "id": "GEN-2024-229",
    "sourceId": "spp-gen-2024-229",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-229",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-09-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Lawton East Side - Oklaunion North 345 kV",
    "county": "Wilbarger County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-230": {
    "id": "GEN-2024-230",
    "sourceId": "spp-gen-2024-230",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-230",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-09-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Lawton East Side - Oklaunion North 345 kV",
    "county": "Wilbarger County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-231": {
    "id": "GEN-2024-231",
    "sourceId": "spp-gen-2024-231",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-231",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-10-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 65,
    "summerCapacityMw": 65,
    "winterCapacityMw": 65,
    "generationTypes": [
      "Solar",
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "S1399 5 161 kV Substation",
    "county": "Richardson County",
    "state": "NE",
    "transmissionOwner": "OPPD",
    "canonicalTransmissionOwners": [
      "Omaha Public Power District"
    ],
    "utility": "OPPD"
  },
  "GEN-2024-232": {
    "id": "GEN-2024-232",
    "sourceId": "spp-gen-2024-232",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-232",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Crockett - Rocky Creek 345 kV line",
    "county": "Houston County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-234": {
    "id": "GEN-2024-234",
    "sourceId": "spp-gen-2024-234",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-234",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Raun - Tekamah 161 kV line",
    "county": "Burt County",
    "state": "NE",
    "transmissionOwner": "OPPD",
    "canonicalTransmissionOwners": [
      "Omaha Public Power District"
    ],
    "utility": "OPPD"
  },
  "GEN-2024-235": {
    "id": "GEN-2024-235",
    "sourceId": "spp-gen-2024-235",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-235",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Sooner - Wekiwa 345 kV line",
    "county": "Payne County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-236": {
    "id": "GEN-2024-236",
    "sourceId": "spp-gen-2024-236",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-236",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 241.4,
    "summerCapacityMw": 241.4,
    "winterCapacityMw": 241.4,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Seminole - Muskogee 345 kV line",
    "county": "Okfuskee County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-239": {
    "id": "GEN-2024-239",
    "sourceId": "spp-gen-2024-239",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-239",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Cimarron 345 kV Substation",
    "county": "Canadian County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-240": {
    "id": "GEN-2024-240",
    "sourceId": "spp-gen-2024-240",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-240",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Neosho - Delaware 345 kV line",
    "county": "Nowata County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-241": {
    "id": "GEN-2024-241",
    "sourceId": "spp-gen-2024-241",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-241",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 100,
    "summerCapacityMw": 100,
    "winterCapacityMw": 100,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Lydia 345 kV Substation",
    "county": "Bowie County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-242": {
    "id": "GEN-2024-242",
    "sourceId": "spp-gen-2024-242",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-242",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-14",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "515171 138 kV Substation",
    "county": "Carter County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-243": {
    "id": "GEN-2024-243",
    "sourceId": "spp-gen-2024-243",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-243",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-14",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 50.1,
    "summerCapacityMw": 50.1,
    "winterCapacityMw": 50.1,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Van Buren 161 kV Substation",
    "county": "Crawford County",
    "state": "AR",
    "transmissionOwner": "SWPA",
    "canonicalTransmissionOwners": [
      "Southwestern Power Administration"
    ],
    "utility": "SWPA"
  },
  "GEN-2024-244": {
    "id": "GEN-2024-244",
    "sourceId": "spp-gen-2024-244",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-244",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-14",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Sooner 115 kV Substation",
    "county": "Texas County",
    "state": "OK",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-245": {
    "id": "GEN-2024-245",
    "sourceId": "spp-gen-2024-245",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-245",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-14",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Lincoln 138 kV Substation",
    "county": "Lincoln County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-246": {
    "id": "GEN-2024-246",
    "sourceId": "spp-gen-2024-246",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-246",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-14",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "North Loving 115 kV Substation",
    "county": "Eddy County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-247": {
    "id": "GEN-2024-247",
    "sourceId": "spp-gen-2024-247",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-247",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-05-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 456.6,
    "summerCapacityMw": 422,
    "winterCapacityMw": 456.6,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Stillwater Northtap 138 kV Substation",
    "county": "Payne County",
    "state": "OK",
    "transmissionOwner": "GRDA",
    "canonicalTransmissionOwners": [
      "Grand River Dam Authority"
    ],
    "utility": "GRDA"
  },
  "GEN-2024-249": {
    "id": "GEN-2024-249",
    "sourceId": "spp-gen-2024-249",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-249",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2032-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 721.2,
    "summerCapacityMw": 696,
    "winterCapacityMw": 721.2,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Jeffrey EC 345 kV Substation",
    "county": "Pottawatomie County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-250": {
    "id": "GEN-2024-250",
    "sourceId": "spp-gen-2024-250",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-250",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-14",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pittsburgh 345 kV Substation",
    "county": "Pittsburg County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-251": {
    "id": "GEN-2024-251",
    "sourceId": "spp-gen-2024-251",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-251",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-14",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 125,
    "summerCapacityMw": 125,
    "winterCapacityMw": 125,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Atoka 115 kV Substation",
    "county": "Eddy County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-252": {
    "id": "GEN-2024-252",
    "sourceId": "spp-gen-2024-252",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-252",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2027-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Battery",
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Cimmaron 345 kV Substation",
    "county": "Canadian County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-253": {
    "id": "GEN-2024-253",
    "sourceId": "spp-gen-2024-253",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-253",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2027-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Battery",
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Stranger Creek - 87th Street 345 kV line",
    "county": "Leavenworth County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-254": {
    "id": "GEN-2024-254",
    "sourceId": "spp-gen-2024-254",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-254",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2027-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Battery",
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Mathewson 345 kV Substation",
    "county": "Canadian County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-255": {
    "id": "GEN-2024-255",
    "sourceId": "spp-gen-2024-255",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-255",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2027-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Battery",
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Spring Creek 345 kV Substation",
    "county": "Oklahoma County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-257": {
    "id": "GEN-2024-257",
    "sourceId": "spp-gen-2024-257",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-257",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-10-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 220,
    "summerCapacityMw": 220,
    "winterCapacityMw": 220,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Skellyville 115 kV Tap Substation",
    "county": "Pratt County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-258": {
    "id": "GEN-2024-258",
    "sourceId": "spp-gen-2024-258",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-258",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Wolf Creek - Blackberry 345 kV Line",
    "county": "Allen County",
    "state": "KS",
    "transmissionOwner": "NEETSW",
    "canonicalTransmissionOwners": [
      "NextEra Energy Transmission Southwest"
    ],
    "utility": "NEETSW"
  },
  "GEN-2024-259": {
    "id": "GEN-2024-259",
    "sourceId": "spp-gen-2024-259",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-259",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-10-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199.8,
    "summerCapacityMw": 199.8,
    "winterCapacityMw": 199.8,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Asbury 161 kV Substation",
    "county": "Barton County",
    "state": "MO",
    "transmissionOwner": "EMDE",
    "canonicalTransmissionOwners": [
      "Empire District Electric Company"
    ],
    "utility": "EMDE"
  },
  "GEN-2024-260": {
    "id": "GEN-2024-260",
    "sourceId": "spp-gen-2024-260",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-260",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199.8,
    "summerCapacityMw": 199.8,
    "winterCapacityMw": 199.8,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "East Town 161 kV Substation",
    "county": "Buchanan County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-261": {
    "id": "GEN-2024-261",
    "sourceId": "spp-gen-2024-261",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-261",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hobbs - LCEC West 115 kV Line",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "LCEC",
    "canonicalTransmissionOwners": [
      "Lea County Electric Cooperative"
    ],
    "utility": "LCEC"
  },
  "GEN-2024-265": {
    "id": "GEN-2024-265",
    "sourceId": "spp-gen-2024-265",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-265",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 155,
    "summerCapacityMw": 155,
    "winterCapacityMw": 155,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Bensing 115 kV Substation",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-266": {
    "id": "GEN-2024-266",
    "sourceId": "spp-gen-2024-266",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-266",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2033-12-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 500,
    "summerCapacityMw": 500,
    "winterCapacityMw": 500,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Potter Co - Hitchland 345 kV Line",
    "county": "Potter County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-267": {
    "id": "GEN-2024-267",
    "sourceId": "spp-gen-2024-267",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-267",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-03-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 195,
    "summerCapacityMw": 195,
    "winterCapacityMw": 195,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Durantp4 - Sclmnjc4 138 kV Line",
    "county": "Bryan County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2024-268": {
    "id": "GEN-2024-268",
    "sourceId": "spp-gen-2024-268",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-268",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 390,
    "summerCapacityMw": 390,
    "winterCapacityMw": 390,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Keefton 345 kV Substation",
    "county": "Muskogee County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-271": {
    "id": "GEN-2024-271",
    "sourceId": "spp-gen-2024-271",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-271",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Chaves County - San Juan Wind 230 kV Line",
    "county": "Chaves County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-272": {
    "id": "GEN-2024-272",
    "sourceId": "spp-gen-2024-272",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-272",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Sawyer 115 kV Substation",
    "county": "Pratt County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-273": {
    "id": "GEN-2024-273",
    "sourceId": "spp-gen-2024-273",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-273",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2026-10-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 16.214,
    "summerCapacityMw": 16.21,
    "winterCapacityMw": 16.21,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pearl 115 kV Substation",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-274": {
    "id": "GEN-2024-274",
    "sourceId": "spp-gen-2024-274",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-274",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 175,
    "summerCapacityMw": 175,
    "winterCapacityMw": 175,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Harper - Anthony 138 kV Line",
    "county": "Harper County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-276": {
    "id": "GEN-2024-276",
    "sourceId": "spp-gen-2024-276",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-276",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tecumseh Hill - Swissvale 230kV Line",
    "county": "Shawnee County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-277": {
    "id": "GEN-2024-277",
    "sourceId": "spp-gen-2024-277",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-277",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tecumseh Hill - Swissvale 230kV Line",
    "county": "Shawnee County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-278": {
    "id": "GEN-2024-278",
    "sourceId": "spp-gen-2024-278",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-278",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-03",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 264.3,
    "summerCapacityMw": 264.3,
    "winterCapacityMw": 264.3,
    "generationTypes": [
      "Battery",
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Eddy County - Crossroads 345 kV Line",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-280": {
    "id": "GEN-2024-280",
    "sourceId": "spp-gen-2024-280",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-280",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 350,
    "summerCapacityMw": 350,
    "winterCapacityMw": 350,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Andrews County 345 kV Substation",
    "county": "Andrews County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-281": {
    "id": "GEN-2024-281",
    "sourceId": "spp-gen-2024-281",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-281",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Jal - Teague 115 kV Line",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-282": {
    "id": "GEN-2024-282",
    "sourceId": "spp-gen-2024-282",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-282",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-11-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Maurine - New Underwood 230 kV Line",
    "county": "Meade County",
    "state": "SD",
    "transmissionOwner": "WAPA",
    "canonicalTransmissionOwners": [
      "Western Area Power Administration"
    ],
    "utility": "WAPA"
  },
  "GEN-2024-283": {
    "id": "GEN-2024-283",
    "sourceId": "spp-gen-2024-283",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-283",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-11-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Maurine - New Underwood 230 kV Line",
    "county": "Meade County",
    "state": "SD",
    "transmissionOwner": "WAPA",
    "canonicalTransmissionOwners": [
      "Western Area Power Administration"
    ],
    "utility": "WAPA"
  },
  "GEN-2024-284": {
    "id": "GEN-2024-284",
    "sourceId": "spp-gen-2024-284",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-284",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-11-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Antelope Valley - Broadland 345 kV Line",
    "county": "Mercer County",
    "state": "ND",
    "transmissionOwner": "BEPC",
    "canonicalTransmissionOwners": [
      "Basin Electric Power Cooperative"
    ],
    "utility": "BEPC"
  },
  "GEN-2024-285": {
    "id": "GEN-2024-285",
    "sourceId": "spp-gen-2024-285",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-285",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Crocker 345 kV Substation",
    "county": "Clark County",
    "state": "SD",
    "transmissionOwner": "BEPC",
    "canonicalTransmissionOwners": [
      "Basin Electric Power Cooperative"
    ],
    "utility": "BEPC"
  },
  "GEN-2024-286": {
    "id": "GEN-2024-286",
    "sourceId": "spp-gen-2024-286",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-286",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2031-05-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 136,
    "summerCapacityMw": 136,
    "winterCapacityMw": 136,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "AES 5 161 kV Substation",
    "county": "Le Flore County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-287": {
    "id": "GEN-2024-287",
    "sourceId": "spp-gen-2024-287",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-287",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-10-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199.8,
    "summerCapacityMw": 199.8,
    "winterCapacityMw": 199.8,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Wolf Creek - Blackberry 345 kV Line",
    "county": "Crawford County",
    "state": "KS",
    "transmissionOwner": "NEETSW",
    "canonicalTransmissionOwners": [
      "NextEra Energy Transmission Southwest"
    ],
    "utility": "NEETSW"
  },
  "GEN-2024-288": {
    "id": "GEN-2024-288",
    "sourceId": "spp-gen-2024-288",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-288",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-10-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 130,
    "summerCapacityMw": 130,
    "winterCapacityMw": 130,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Elm Creek - Tobias 345 kV Line",
    "county": "Cloud County",
    "state": "KS",
    "transmissionOwner": "SUNC",
    "canonicalTransmissionOwners": [
      "Sunflower Electric Power Corporation"
    ],
    "utility": "SUNC"
  },
  "GEN-2024-289": {
    "id": "GEN-2024-289",
    "sourceId": "spp-gen-2024-289",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-289",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 350,
    "summerCapacityMw": 350,
    "winterCapacityMw": 350,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Archie - Clinton 161 kV Line",
    "county": "Henry County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-291": {
    "id": "GEN-2024-291",
    "sourceId": "spp-gen-2024-291",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-291",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Canadian River 345 kV Substation",
    "county": "Pittsburg County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-293": {
    "id": "GEN-2024-293",
    "sourceId": "spp-gen-2024-293",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-293",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2033-05-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 248,
    "summerCapacityMw": 248,
    "winterCapacityMw": 248,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Muskoge7 345 kV Substation",
    "county": "Oklahoma County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-294": {
    "id": "GEN-2024-294",
    "sourceId": "spp-gen-2024-294",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-294",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 500,
    "summerCapacityMw": 500,
    "winterCapacityMw": 500,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tulsa North - Igloo Valley 345 kV line",
    "county": "Mayes County",
    "state": "OK",
    "transmissionOwner": "GRDA",
    "canonicalTransmissionOwners": [
      "Grand River Dam Authority"
    ],
    "utility": "GRDA"
  },
  "GEN-2024-295": {
    "id": "GEN-2024-295",
    "sourceId": "spp-gen-2024-295",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-295",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-06-10",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 115,
    "summerCapacityMw": 115,
    "winterCapacityMw": 115,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "S Loving 115 kV Substation",
    "county": "Eddy County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-296": {
    "id": "GEN-2024-296",
    "sourceId": "spp-gen-2024-296",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-296",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-05-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 167,
    "summerCapacityMw": 167,
    "winterCapacityMw": 167,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Muskogee - Pittsburg 345 kV Line",
    "county": "McIntosh County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-297": {
    "id": "GEN-2024-297",
    "sourceId": "spp-gen-2024-297",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-297",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-05-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 167,
    "summerCapacityMw": 167,
    "winterCapacityMw": 167,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Muskogee - Pittsburg 345 kV Line",
    "county": "McIntosh County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-298": {
    "id": "GEN-2024-298",
    "sourceId": "spp-gen-2024-298",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-298",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-05-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 167,
    "summerCapacityMw": 167,
    "winterCapacityMw": 167,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Muskogee - Pittsburg 345 kV Line",
    "county": "McIntosh County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-299": {
    "id": "GEN-2024-299",
    "sourceId": "spp-gen-2024-299",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-299",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2032-05-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 744,
    "summerCapacityMw": 744,
    "winterCapacityMw": 744,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "AES 5 345 kV Substation",
    "county": "Oklahoma County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-303": {
    "id": "GEN-2024-303",
    "sourceId": "spp-gen-2024-303",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-303",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 500,
    "summerCapacityMw": 500,
    "winterCapacityMw": 500,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Crossroads 345 kV Substation",
    "county": "Roosevelt County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-304": {
    "id": "GEN-2024-304",
    "sourceId": "spp-gen-2024-304",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-304",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 500,
    "summerCapacityMw": 500,
    "winterCapacityMw": 500,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Crossroads 345 kV Substation",
    "county": "Roosevelt County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-305": {
    "id": "GEN-2024-305",
    "sourceId": "spp-gen-2024-305",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-305",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-10-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 50,
    "summerCapacityMw": 50,
    "winterCapacityMw": 50,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Superior - Jefferson 69 kV Line",
    "county": "Marion County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-306": {
    "id": "GEN-2024-306",
    "sourceId": "spp-gen-2024-306",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-306",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2031-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Taylor Switching Station 115 kV Substation",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-308": {
    "id": "GEN-2024-308",
    "sourceId": "spp-gen-2024-308",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-308",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-07-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery",
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Okeene - Mooreland 138 kV line",
    "county": "Woodward County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2024-310": {
    "id": "GEN-2024-310",
    "sourceId": "spp-gen-2024-310",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-310",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 75,
    "summerCapacityMw": 75,
    "winterCapacityMw": 75,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Eddy - Chaves 230 kV line",
    "county": "Chaves County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-311": {
    "id": "GEN-2024-311",
    "sourceId": "spp-gen-2024-311",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-311",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 225,
    "summerCapacityMw": 225,
    "winterCapacityMw": 225,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Eddy - Chaves 230 kV line",
    "county": "Chaves County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-312": {
    "id": "GEN-2024-312",
    "sourceId": "spp-gen-2024-312",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-312",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 50,
    "summerCapacityMw": 50,
    "winterCapacityMw": 50,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Clarksville Ozark 161 kV line",
    "county": "Franklin County",
    "state": "AR",
    "transmissionOwner": "SWPA",
    "canonicalTransmissionOwners": [
      "Southwestern Power Administration"
    ],
    "utility": "SWPA"
  },
  "GEN-2024-316": {
    "id": "GEN-2024-316",
    "sourceId": "spp-gen-2024-316",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-316",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pittsburg - Valliant 345 kV Line",
    "county": "Atoka County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-317": {
    "id": "GEN-2024-317",
    "sourceId": "spp-gen-2024-317",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-317",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Dragon 345 kV Substation",
    "county": "Cottle County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-318": {
    "id": "GEN-2024-318",
    "sourceId": "spp-gen-2024-318",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-318",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Tulsa North - American Airlines 138 kV Line",
    "county": "Tulsa County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-319": {
    "id": "GEN-2024-319",
    "sourceId": "spp-gen-2024-319",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-319",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Metro 5 161 kV Substation",
    "county": "Wyandotte County",
    "state": "KS",
    "transmissionOwner": "KACY",
    "canonicalTransmissionOwners": [
      "KACY"
    ],
    "utility": "KACY"
  },
  "GEN-2024-320": {
    "id": "GEN-2024-320",
    "sourceId": "spp-gen-2024-320",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-320",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Jaggard 115 kV Substation",
    "county": "Wyandotte County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-321": {
    "id": "GEN-2024-321",
    "sourceId": "spp-gen-2024-321",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-321",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-04-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 493,
    "summerCapacityMw": 393,
    "winterCapacityMw": 493,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Seminole 345 kV Substation",
    "county": "Seminole County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-322": {
    "id": "GEN-2024-322",
    "sourceId": "spp-gen-2024-322",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-322",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-06-29",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 75,
    "summerCapacityMw": 75,
    "winterCapacityMw": 75,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Redlin - Beach3 115 kV line",
    "county": "Graham County",
    "state": "KS",
    "transmissionOwner": "MIDW",
    "canonicalTransmissionOwners": [
      "Midwest Energy"
    ],
    "utility": "MIDW"
  },
  "GEN-2024-323": {
    "id": "GEN-2024-323",
    "sourceId": "spp-gen-2024-323",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-323",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-05-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 356.8,
    "summerCapacityMw": 356.8,
    "winterCapacityMw": 356.8,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "ITC Hugo 7 345 kV Substation",
    "county": "Choctaw County",
    "state": "OK",
    "transmissionOwner": "ITCGP",
    "canonicalTransmissionOwners": [
      "ITC Great Plains"
    ],
    "utility": "ITCGP"
  },
  "GEN-2024-324": {
    "id": "GEN-2024-324",
    "sourceId": "spp-gen-2024-324",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-324",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 160,
    "summerCapacityMw": 160,
    "winterCapacityMw": 160,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Samson 115 kV Substation",
    "county": "Chaves County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-325": {
    "id": "GEN-2024-325",
    "sourceId": "spp-gen-2024-325",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-325",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Sierra 115 kV Substation",
    "county": "Chaves County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-326": {
    "id": "GEN-2024-326",
    "sourceId": "spp-gen-2024-326",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-326",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 225,
    "summerCapacityMw": 225,
    "winterCapacityMw": 225,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Belfield 230 kV Substation",
    "county": "Stark County",
    "state": "ND",
    "transmissionOwner": "WAPA",
    "canonicalTransmissionOwners": [
      "Western Area Power Administration"
    ],
    "utility": "WAPA"
  },
  "GEN-2024-327": {
    "id": "GEN-2024-327",
    "sourceId": "spp-gen-2024-327",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-327",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Berthold 115 kV Substation",
    "county": "Ward County",
    "state": "ND",
    "transmissionOwner": "CPEC",
    "canonicalTransmissionOwners": [
      "Central Power Electric Cooperative"
    ],
    "utility": "CPEC"
  },
  "GEN-2024-328": {
    "id": "GEN-2024-328",
    "sourceId": "spp-gen-2024-328",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-328",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Little Missouri 230 kV Substation",
    "county": "Slope County",
    "state": "ND",
    "transmissionOwner": "BEPC",
    "canonicalTransmissionOwners": [
      "Basin Electric Power Cooperative"
    ],
    "utility": "BEPC"
  },
  "GEN-2024-329": {
    "id": "GEN-2024-329",
    "sourceId": "spp-gen-2024-329",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-329",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pleasant Valley 115 kV Substation",
    "county": "Williams County",
    "state": "ND",
    "transmissionOwner": "MWEC",
    "canonicalTransmissionOwners": [
      "Missouri Western Energy Corporation"
    ],
    "utility": "MWEC"
  },
  "GEN-2024-330": {
    "id": "GEN-2024-330",
    "sourceId": "spp-gen-2024-330",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-330",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 225,
    "summerCapacityMw": 225,
    "winterCapacityMw": 225,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Midian 138 kV Substation",
    "county": "Butler County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-331": {
    "id": "GEN-2024-331",
    "sourceId": "spp-gen-2024-331",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-331",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Round Up 345 kV Substation",
    "county": "Dunn County",
    "state": "ND",
    "transmissionOwner": "BEPC",
    "canonicalTransmissionOwners": [
      "Basin Electric Power Cooperative"
    ],
    "utility": "BEPC"
  },
  "GEN-2024-332": {
    "id": "GEN-2024-332",
    "sourceId": "spp-gen-2024-332",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-332",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2027-04-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 150,
    "summerCapacityMw": 150,
    "winterCapacityMw": 150,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Discovery 138 kV Substation",
    "county": "Oklahoma County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-333": {
    "id": "GEN-2024-333",
    "sourceId": "spp-gen-2024-333",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-333",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2027-04-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 100,
    "summerCapacityMw": 100,
    "winterCapacityMw": 100,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Kelley Avenue 138 kV",
    "county": "Oklahoma County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-334": {
    "id": "GEN-2024-334",
    "sourceId": "spp-gen-2024-334",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-334",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 124,
    "summerCapacityMw": 100.6,
    "winterCapacityMw": 124,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Ranch Road 345 kV Substation",
    "county": "Kay County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-336": {
    "id": "GEN-2024-336",
    "sourceId": "spp-gen-2024-336",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-336",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-04-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Ink Basin 230 kV Substation",
    "county": "Yoakum County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-337": {
    "id": "GEN-2024-337",
    "sourceId": "spp-gen-2024-337",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-337",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-12-17",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Sunnyside - Pooleville 138 kV line",
    "county": "Carter County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-338": {
    "id": "GEN-2024-338",
    "sourceId": "spp-gen-2024-338",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-338",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-05-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 350,
    "summerCapacityMw": 350,
    "winterCapacityMw": 350,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pittsburg - Johnston County 345 kV line",
    "county": "Johnston County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-339": {
    "id": "GEN-2024-339",
    "sourceId": "spp-gen-2024-339",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-339",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-06-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Stranger Creek 115 kV Substation",
    "county": "Leavenworth County",
    "state": "KS",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-340": {
    "id": "GEN-2024-340",
    "sourceId": "spp-gen-2024-340",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-340",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2032-01-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 1400,
    "summerCapacityMw": 1400,
    "winterCapacityMw": 1400,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Riverside – Redbud 345 kV line",
    "county": "Creek County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-341": {
    "id": "GEN-2024-341",
    "sourceId": "spp-gen-2024-341",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-341",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2031-11-10",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 1045,
    "summerCapacityMw": 980,
    "winterCapacityMw": 1045,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pittsburgh 345 kV Substation",
    "county": "Pittsburg County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-343": {
    "id": "GEN-2024-343",
    "sourceId": "spp-gen-2024-343",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-343",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-06-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 470.5,
    "summerCapacityMw": 445.67,
    "winterCapacityMw": 470.5,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "LeBrock 345 kV Substation",
    "county": "Harrison County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-344": {
    "id": "GEN-2024-344",
    "sourceId": "spp-gen-2024-344",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-344",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Riverside - Redbud Switch 345 kV Line",
    "county": "Lincoln County",
    "state": "OK",
    "transmissionOwner": "OGE/AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power",
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE/AEP"
  },
  "GEN-2024-345": {
    "id": "GEN-2024-345",
    "sourceId": "spp-gen-2024-345",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-345",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 600,
    "summerCapacityMw": 600,
    "winterCapacityMw": 600,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Delaware 345 kV Substation",
    "county": "Nowata County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-346": {
    "id": "GEN-2024-346",
    "sourceId": "spp-gen-2024-346",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-346",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-31",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 220,
    "summerCapacityMw": 220,
    "winterCapacityMw": 220,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Coffeyville Tap - North Barlettsville 138 kV Line",
    "county": "Nowata County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-351": {
    "id": "GEN-2024-351",
    "sourceId": "spp-gen-2024-351",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-351",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-04-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Cooper Ranch 115 kV Substation",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-352": {
    "id": "GEN-2024-352",
    "sourceId": "spp-gen-2024-352",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-352",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Sibley 345 kV Substation",
    "county": "Jackson County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-355": {
    "id": "GEN-2024-355",
    "sourceId": "spp-gen-2024-355",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-355",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-12-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 199,
    "summerCapacityMw": 199,
    "winterCapacityMw": 199,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Lubbock South  230 kV Substation",
    "county": "Lubbock County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-359": {
    "id": "GEN-2024-359",
    "sourceId": "spp-gen-2024-359",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-359",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-11-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 100,
    "summerCapacityMw": 100,
    "winterCapacityMw": 100,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Belfield 345 kV Substation",
    "county": "Stark County",
    "state": "ND",
    "transmissionOwner": "WAPA",
    "canonicalTransmissionOwners": [
      "Western Area Power Administration"
    ],
    "utility": "WAPA"
  },
  "GEN-2024-360": {
    "id": "GEN-2024-360",
    "sourceId": "spp-gen-2024-360",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-360",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-06-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 160,
    "summerCapacityMw": 160,
    "winterCapacityMw": 160,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Seminole - Maud 138 kV Line",
    "county": "Seminole County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-361": {
    "id": "GEN-2024-361",
    "sourceId": "spp-gen-2024-361",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-361",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-06-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 80,
    "summerCapacityMw": 80,
    "winterCapacityMw": 80,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Spring Valley - Warwick 138 kV line",
    "county": "Lincoln County",
    "state": "OK",
    "transmissionOwner": "OGE",
    "canonicalTransmissionOwners": [
      "Oklahoma Gas and Electric"
    ],
    "utility": "OGE"
  },
  "GEN-2024-362": {
    "id": "GEN-2024-362",
    "sourceId": "spp-gen-2024-362",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-362",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-06-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 140,
    "summerCapacityMw": 140,
    "winterCapacityMw": 140,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Leonard 138 kV Substation",
    "county": "Grady County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-364": {
    "id": "GEN-2024-364",
    "sourceId": "spp-gen-2024-364",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-364",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-10-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 300,
    "summerCapacityMw": 300,
    "winterCapacityMw": 300,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Bushland 230 kV Substation",
    "county": "Randall County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-365": {
    "id": "GEN-2024-365",
    "sourceId": "spp-gen-2024-365",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-365",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-06-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hobbs - Yoakum 345 kV Line",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-366": {
    "id": "GEN-2024-366",
    "sourceId": "spp-gen-2024-366",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-366",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-06-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 200,
    "summerCapacityMw": 200,
    "winterCapacityMw": 200,
    "generationTypes": [
      "Wind"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hobbs - Yoakum 345 kV Line",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-367": {
    "id": "GEN-2024-367",
    "sourceId": "spp-gen-2024-367",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-367",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-03-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Lawton East Side 345 kV Substation",
    "county": "Comanche County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-368": {
    "id": "GEN-2024-368",
    "sourceId": "spp-gen-2024-368",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-368",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-03-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Bowers 115 kV Substation",
    "county": "Gray County",
    "state": "TX",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-369": {
    "id": "GEN-2024-369",
    "sourceId": "spp-gen-2024-369",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-369",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-03-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Cornville 138 kV Substation",
    "county": "Grady County",
    "state": "OK",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-370": {
    "id": "GEN-2024-370",
    "sourceId": "spp-gen-2024-370",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-370",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-03-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Smithville 161 kV Substation",
    "county": "Clay County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-371": {
    "id": "GEN-2024-371",
    "sourceId": "spp-gen-2024-371",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-371",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-03-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Maddox 115 kV Substation",
    "county": "Lea County",
    "state": "NM",
    "transmissionOwner": "SPS",
    "canonicalTransmissionOwners": [
      "Southwestern Public Service Company"
    ],
    "utility": "SPS"
  },
  "GEN-2024-372": {
    "id": "GEN-2024-372",
    "sourceId": "spp-gen-2024-372",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-372",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-03-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 250,
    "summerCapacityMw": 250,
    "winterCapacityMw": 250,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "S1247 161 kV Substation",
    "county": "Douglas County",
    "state": "NE",
    "transmissionOwner": "OPPD",
    "canonicalTransmissionOwners": [
      "Omaha Public Power District"
    ],
    "utility": "OPPD"
  },
  "GEN-2024-373": {
    "id": "GEN-2024-373",
    "sourceId": "spp-gen-2024-373",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-373",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-08-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 120,
    "summerCapacityMw": 120,
    "winterCapacityMw": 120,
    "generationTypes": [
      "Battery",
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Unger - West Bank Tap 138 kV Line",
    "county": "Choctaw County",
    "state": "OK",
    "transmissionOwner": "WFEC",
    "canonicalTransmissionOwners": [
      "Western Farmers Electric Cooperative"
    ],
    "utility": "WFEC"
  },
  "GEN-2024-374": {
    "id": "GEN-2024-374",
    "sourceId": "spp-gen-2024-374",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-374",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2030-06-30",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 225,
    "summerCapacityMw": 225,
    "winterCapacityMw": 225,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Stegall 345 kV Substation",
    "county": "Scotts Bluff County",
    "state": "NE",
    "transmissionOwner": "BEPC",
    "canonicalTransmissionOwners": [
      "Basin Electric Power Cooperative"
    ],
    "utility": "BEPC"
  },
  "GEN-2024-375": {
    "id": "GEN-2024-375",
    "sourceId": "spp-gen-2024-375",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-375",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2029-03-01",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 100,
    "summerCapacityMw": 100,
    "winterCapacityMw": 100,
    "generationTypes": [
      "Battery"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Malta Bend - Norton 161 kV Line",
    "county": "Saline County",
    "state": "MO",
    "transmissionOwner": "WERE",
    "canonicalTransmissionOwners": [
      "Westar Energy"
    ],
    "utility": "WERE"
  },
  "GEN-2024-376": {
    "id": "GEN-2024-376",
    "sourceId": "spp-gen-2024-376",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-376",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2028-12-29",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 142.183,
    "summerCapacityMw": 142.18,
    "winterCapacityMw": 142.18,
    "generationTypes": [
      "Solar"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Hemphill 138 kV Substation",
    "county": "Sabine County",
    "state": "TX",
    "transmissionOwner": "ETEC",
    "canonicalTransmissionOwners": [
      "East Texas Electric Cooperative"
    ],
    "utility": "ETEC"
  },
  "GEN-2024-377": {
    "id": "GEN-2024-377",
    "sourceId": "spp-gen-2024-377",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-377",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2031-12-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 1350,
    "summerCapacityMw": 1310,
    "winterCapacityMw": 1350,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Pirkey 345 kV Substation",
    "county": "Harrison County",
    "state": "TX",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  },
  "GEN-2024-379": {
    "id": "GEN-2024-379",
    "sourceId": "spp-gen-2024-379",
    "sourceUrl": "https://www.interconnection.fyi/project/spp-gen-2024-379",
    "owner": null,
    "ownerSourceField": "Interconnecting Entity",
    "projectName": null,
    "status": "Active",
    "queueDate": "2025-03-01",
    "targetCommercialOperationDate": "2031-12-15",
    "actualCompletionDate": null,
    "withdrawnDate": null,
    "withdrawalComment": null,
    "capacityMw": 1350,
    "summerCapacityMw": 1310,
    "winterCapacityMw": 1350,
    "generationTypes": [
      "Gas"
    ],
    "projectType": "Generation",
    "powerMarket": "SPP",
    "interconnectionLocation": "Longwood - El Dorado 345 kV Line",
    "county": "Bossier Parish",
    "state": "LA",
    "transmissionOwner": "AEP",
    "canonicalTransmissionOwners": [
      "American Electric Power"
    ],
    "utility": "AEP"
  }
} as const satisfies Record<string, InterconnectionFyiProject>;
