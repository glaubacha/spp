export type NetworkUpgradeClusterCost = {
  cluster: string;
  executiveTitle: string;
  clusterMw: number | null;
  totalNetworkUpgradeCostUsd: number | null;
  steadyStateNetworkUpgradeCostUsd: number | null;
  stabilityNetworkUpgradeCostUsd: number | null;
  steadyStateStabilityNetworkUpgradeCostUsd: number | null;
  interconnectionCostUsd: number | null;
  allocatedCostSumUsd: number;
  medianCostPerKw: number | null;
  requestCountWithCosts: number;
  studyType: string;
  posted: string;
  sourceTitle: string;
  sourceUrl: string;
  sourceDetail: string;
};

export type NetworkUpgradeProjectCost = {
  cluster: string;
  allocatedCostUsd: number | null;
  costPerKw: number | null;
  costUnavailableReason: string | null;
  requestMw: number | null;
  upgradeCount: number;
  serviceCostUsd: Record<string, number>;
  upgradeTypeCostUsd: Record<string, number>;
  topUpgrades: Array<{ name: string; costUsd: number | null; serviceType: string; upgradeType: string }>;
  sourceTitle: string;
  sourceUrl: string;
  sourceDetail: string;
};

export const networkUpgradeCostsByCluster: Record<string, NetworkUpgradeClusterCost> = {
  "DISIS-2021-001": {
    "cluster": "DISIS-2021-001",
    "executiveTitle": "Executive Summary: DISIS-2021-001-1 Restudy of Power Flow, Stability, and Short-Circuit",
    "clusterMw": 10638.97,
    "totalNetworkUpgradeCostUsd": 1219531864.23,
    "steadyStateNetworkUpgradeCostUsd": 316916952,
    "stabilityNetworkUpgradeCostUsd": 463972878,
    "steadyStateStabilityNetworkUpgradeCostUsd": 102596000,
    "interconnectionCostUsd": 336046034.23,
    "allocatedCostSumUsd": 1219531864.23,
    "medianCostPerKw": 57.13,
    "requestCountWithCosts": 54,
    "studyType": "DISIS restudy",
    "posted": "Posted 2025-06-23",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Executive Summary and Assigned Upgrade Costs tabs."
  },
  "DISIS-2022-001": {
    "cluster": "DISIS-2022-001",
    "executiveTitle": "Executive Summary: DISIS-2022-001-2 Restudy of Power Flow, Stability, and Short-Circuit",
    "clusterMw": 7411.902,
    "totalNetworkUpgradeCostUsd": 635668512,
    "steadyStateNetworkUpgradeCostUsd": 141654036,
    "stabilityNetworkUpgradeCostUsd": 33000000,
    "steadyStateStabilityNetworkUpgradeCostUsd": null,
    "interconnectionCostUsd": 461014476,
    "allocatedCostSumUsd": 635668512,
    "medianCostPerKw": 87.7,
    "requestCountWithCosts": 40,
    "studyType": "DISIS restudy",
    "posted": "Re-posted 2026-04-24",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Executive Summary and Assigned Upgrade Costs tabs."
  },
  "DISIS-2023-001": {
    "cluster": "DISIS-2023-001",
    "executiveTitle": "Executive Summary: DISIS-2023-001-1 Restudy of Power Flow, Stability, and Short-Circuit",
    "clusterMw": 10005.9,
    "totalNetworkUpgradeCostUsd": 787079690,
    "steadyStateNetworkUpgradeCostUsd": 118974000,
    "stabilityNetworkUpgradeCostUsd": 0,
    "steadyStateStabilityNetworkUpgradeCostUsd": 63900000,
    "interconnectionCostUsd": 604205690,
    "allocatedCostSumUsd": 787079690,
    "medianCostPerKw": 54.18,
    "requestCountWithCosts": 48,
    "studyType": "DISIS restudy",
    "posted": "Posted 2025-12-05",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Executive Summary and Assigned Upgrade Costs tabs."
  },
  "DISIS-2024-001": {
    "cluster": "DISIS-2024-001",
    "executiveTitle": "Executive Summary: DISIS-2024-001 Phase 1 of Power Flow",
    "clusterMw": 67186.76,
    "totalNetworkUpgradeCostUsd": 28700995615.66,
    "steadyStateNetworkUpgradeCostUsd": 25288345783.24,
    "stabilityNetworkUpgradeCostUsd": null,
    "steadyStateStabilityNetworkUpgradeCostUsd": null,
    "interconnectionCostUsd": 3412649832.42,
    "allocatedCostSumUsd": 28700995615.66,
    "medianCostPerKw": 345.78,
    "requestCountWithCosts": 260,
    "studyType": "DISIS Phase 1",
    "posted": "Posted 2026-04-08",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Executive Summary and Assigned Upgrade Costs tabs."
  },
  "ERAS-2025-001": {
    "cluster": "ERAS-2025-001",
    "executiveTitle": "Executive Summary: ERAS-2025-001 of Power Flow and Short-Circuit",
    "clusterMw": 13262.06,
    "totalNetworkUpgradeCostUsd": 784546773.71,
    "steadyStateNetworkUpgradeCostUsd": 337892742.32,
    "stabilityNetworkUpgradeCostUsd": null,
    "steadyStateStabilityNetworkUpgradeCostUsd": null,
    "interconnectionCostUsd": 446654031.39,
    "allocatedCostSumUsd": 784546773.71,
    "medianCostPerKw": 42.77,
    "requestCountWithCosts": 36,
    "studyType": "ERAS final",
    "posted": "Reposted 2026-04-03",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Executive Summary and Assigned Upgrade Costs tabs."
  }
};

export const networkUpgradeCostsByProject: Record<string, NetworkUpgradeProjectCost> = {
  "ASGI-2021-001": {
    "allocatedCostUsd": 24754107.14,
    "cluster": "DISIS-2021-001",
    "costPerKw": 495.08,
    "costUnavailableReason": null,
    "requestMw": 50,
    "serviceCostUsd": {
      "ERIS": 23899413.12,
      "NRIS": 854694.03
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 23419209.93,
        "name": "Build New Beckham to Potter 345 kV Line Ckt 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 854694.03,
        "name": "Upgrade the existing Tuco 345/230 kV Transformer 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 451223.7,
        "name": "Build New Border to Beckham 345 kV Line Ckt 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 14,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 24754107.14
    }
  },
  "ASGI-2021-003": {
    "allocatedCostUsd": 60895427.94,
    "cluster": "DISIS-2021-001",
    "costPerKw": 761.19,
    "costUnavailableReason": null,
    "requestMw": 80,
    "serviceCostUsd": {
      "ERIS": 60895427.94
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 35003921.31,
        "name": "Build New Beckham to Potter 345 kV Line Ckt 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11000000,
        "name": "Rebuild LE-TATMGOAB2 to LE-MCDONALD2 69kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8000000,
        "name": "Rebuild LE-MCDONALD2 to LE-TATUM_SW2 69kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 17,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 60895427.94
    }
  },
  "ASGI-2023-001": {
    "allocatedCostUsd": 0,
    "cluster": "DISIS-2023-001",
    "costPerKw": 0,
    "costUnavailableReason": null,
    "requestMw": 20,
    "serviceCostUsd": {
      "ERIS": 0,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 0,
        "name": "Build New Phantom to Crossroads to Potter 765 kV Line",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      },
      {
        "costUsd": 0,
        "name": "Tuco Int 345/230 kV Transformer Replacement",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      },
      {
        "costUsd": 0,
        "name": "Build New Beckham to Potter 345 kV Line Ckt 2",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 8,
    "upgradeTypeCostUsd": {
      "Contingent": 0
    }
  },
  "ASGI-2024-001": {
    "allocatedCostUsd": 636.58,
    "cluster": "DISIS-2024-001",
    "costPerKw": 0.04,
    "costUnavailableReason": null,
    "requestMw": 17.1,
    "serviceCostUsd": {
      "ERIS": 636.58
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 636.58,
        "name": "Add 4 MVAR switched shunt at GEN-2017-140 345 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 1,
    "upgradeTypeCostUsd": {
      "Current Study": 636.58
    }
  },
  "ASGI-2024-002": {
    "allocatedCostUsd": 18865547.05,
    "cluster": "DISIS-2024-001",
    "costPerKw": 628.85,
    "costUnavailableReason": null,
    "requestMw": 30,
    "serviceCostUsd": {
      "ERIS": 18865547.05
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2954856.29,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1607409.11,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1580719.18,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 54,
    "upgradeTypeCostUsd": {
      "Current Study": 18865547.05
    }
  },
  "ASGI-2024-003": {
    "allocatedCostUsd": 72463067.89,
    "cluster": "DISIS-2024-001",
    "costPerKw": 908.06,
    "costUnavailableReason": null,
    "requestMw": 79.8,
    "serviceCostUsd": {
      "ERIS": 71877556.41,
      "NRIS": 585511.47
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 19216703.35,
        "name": "Add line 659131 LARAMIE_-MB3    345 800120 UNDERWOOD 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 15120551.88,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 6440553.35,
        "name": "Rebuild line 523097 HITCHLAND  7    345 784950 G24-266_TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 54,
    "upgradeTypeCostUsd": {
      "Current Study": 72463067.89
    }
  },
  "ASGI-2024-006": {
    "allocatedCostUsd": 36607050.44,
    "cluster": "DISIS-2024-001",
    "costPerKw": 366.07,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 36489393.51,
      "NRIS": 117656.93
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12538150.92,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9011447.45,
        "name": "Rebuild line 523097 HITCHLAND  7    345 784950 G24-266_TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4113399.77,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 33,
    "upgradeTypeCostUsd": {
      "Current Study": 36607050.44
    }
  },
  "ASGI-2024-007": {
    "allocatedCostUsd": 1164023.43,
    "cluster": "DISIS-2024-001",
    "costPerKw": 24.26,
    "costUnavailableReason": null,
    "requestMw": 47.99,
    "serviceCostUsd": {
      "ERIS": 1164023.43
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1164023.43,
        "name": "Add 8 MVAR switched shunt at SWAVRLY5 161 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 1,
    "upgradeTypeCostUsd": {
      "Current Study": 1164023.43
    }
  },
  "ASGI-2024-008": {
    "allocatedCostUsd": 2085976.57,
    "cluster": "DISIS-2024-001",
    "costPerKw": 24.26,
    "costUnavailableReason": null,
    "requestMw": 86,
    "serviceCostUsd": {
      "ERIS": 2085976.57
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2085976.57,
        "name": "Add 8 MVAR switched shunt at SWAVRLY5 161 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 1,
    "upgradeTypeCostUsd": {
      "Current Study": 2085976.57
    }
  },
  "ASGI-2024-020": {
    "allocatedCostUsd": 1609174.87,
    "cluster": "DISIS-2024-001",
    "costPerKw": 12.23,
    "costUnavailableReason": null,
    "requestMw": 131.58,
    "serviceCostUsd": {
      "ERIS": 1541387.29,
      "NRIS": 67787.58
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 842683.44,
        "name": "Rebuild line 532765 HOYT   7    345 532766 JEC N  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 362754.17,
        "name": "Rebuild line 640277 MOORE  3    345 650189 103&ROKEBY3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 245031.21,
        "name": "Add 2 MVAR switched shunt at G15048_1 138 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Current Study": 1609174.87
    }
  },
  "ASGI-2024-023": {
    "allocatedCostUsd": 36074940.27,
    "cluster": "DISIS-2024-001",
    "costPerKw": 300.62,
    "costUnavailableReason": null,
    "requestMw": 120,
    "serviceCostUsd": {
      "ERIS": 36060466.57,
      "NRIS": 14473.7
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7016312.85,
        "name": "Rebuild line 508072 NWTXARK7    345 508359 WELSH  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5967372.54,
        "name": "Rebuild line 337505 3EMMET    115 507448 NHOPE  3    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4873354.24,
        "name": "Rebuild line 507449 NWHOPE 3    115 507452 HOPESWI3    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 86,
    "upgradeTypeCostUsd": {
      "Current Study": 36074940.27
    }
  },
  "ASGI-2024-024": {
    "allocatedCostUsd": 6005706.36,
    "cluster": "DISIS-2024-001",
    "costPerKw": 76.02,
    "costUnavailableReason": null,
    "requestMw": 79,
    "serviceCostUsd": {
      "ERIS": 6005706.36
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1625602.14,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 976141.05,
        "name": "Rebuild line 645458 S3458  3    345 778170 G24-040-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 934571.55,
        "name": "Rebuild line 640139 COOPER 3    345 778170 G24-040-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 17,
    "upgradeTypeCostUsd": {
      "Current Study": 6005706.36
    }
  },
  "ERAS-2025-001": {
    "allocatedCostUsd": 0,
    "cluster": "ERAS-2025-001",
    "costPerKw": 0,
    "costUnavailableReason": null,
    "requestMw": 104,
    "serviceCostUsd": {
      "ERIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 0,
        "name": "84th & Bluff 115 kV Substation ERAS-2025-001 Interconnection (Non-shared NU) (LES)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "84th & Bluff 115 kV Substation ERAS-2025-001 Interconnection (TOIF) (LES)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 0
    }
  },
  "ERAS-2025-002": {
    "allocatedCostUsd": 57045.34,
    "cluster": "ERAS-2025-001",
    "costPerKw": 0.26,
    "costUnavailableReason": null,
    "requestMw": 217,
    "serviceCostUsd": {
      "ERIS": 57045.34,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 57045.34,
        "name": "LACYGNE7-G20-007-TAP 345 kV Ckt 1 Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 0,
        "name": "Cleveland Jct - Anadarko 138 kV Ckt 1 Voltage Conversion",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      },
      {
        "costUsd": 0,
        "name": "COMANC7 TAP  to LES 345 kV Line Rebuild",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 8,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 57045.34,
      "Interconnection": 0
    }
  },
  "ERAS-2025-003": {
    "allocatedCostUsd": 55442.19,
    "cluster": "ERAS-2025-001",
    "costPerKw": 0.3,
    "costUnavailableReason": null,
    "requestMw": 186,
    "serviceCostUsd": {
      "ERIS": 55442.19,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 55442.19,
        "name": "LACYGNE7-G20-007-TAP 345 kV Ckt 1 Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 0,
        "name": "Comanche 345 kV New Substation",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      },
      {
        "costUsd": 0,
        "name": "Dunjee - Reno 138 kV Ckt 1 Rebuild",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 55442.19,
      "Interconnection": 0
    }
  },
  "ERAS-2025-004": {
    "allocatedCostUsd": 222431.43,
    "cluster": "ERAS-2025-001",
    "costPerKw": 0.29,
    "costUnavailableReason": null,
    "requestMw": 763,
    "serviceCostUsd": {
      "ERIS": 222431.43,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 222431.43,
        "name": "LACYGNE7-G20-007-TAP 345 kV Ckt 1 Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 0,
        "name": "Comanche 345 kV New Substation",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      },
      {
        "costUsd": 0,
        "name": "Dunjee - Reno 138 kV Ckt 1 Rebuild",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 14,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 222431.43,
      "Interconnection": 0
    }
  },
  "ERAS-2025-005": {
    "allocatedCostUsd": 19242580,
    "cluster": "ERAS-2025-001",
    "costPerKw": 128.28,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 19242580
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15452461,
        "name": "Danville - Magazine 161 kV Line ERAS-2025-005 Interconnection (Non-shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3790119,
        "name": "Danville - Magazine 161 kV Line ERAS-2025-005 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 19242580
    }
  },
  "ERAS-2025-006": {
    "allocatedCostUsd": 14194667.03,
    "cluster": "ERAS-2025-001",
    "costPerKw": 19.78,
    "costUnavailableReason": null,
    "requestMw": 717.8,
    "serviceCostUsd": {
      "ERIS": 12036306,
      "NRIS": 2158361.03
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 9918207,
        "name": "Reno County 345 kV Substation #1443 ERAS-2025-006 Interconnection (Non-shared NU) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2158361.03,
        "name": "Build the HOLCOMB7 to HOLCOMB3 345kV Transformer 2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2118099,
        "name": "Reno County 345 kV Substation #1443 ERAS-2025-006 Interconnection (TOIF) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 2158361.03,
      "Interconnection": 12036306
    }
  },
  "ERAS-2025-007": {
    "allocatedCostUsd": 19270491.73,
    "cluster": "ERAS-2025-001",
    "costPerKw": 42.77,
    "costUnavailableReason": null,
    "requestMw": 450.6,
    "serviceCostUsd": {
      "ERIS": 13069532,
      "NRIS": 6200959.73
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 10947387,
        "name": "Mullin Creek 345 kV Substation ERAS-2025-007/013 Interconnection (Shared NU) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 4820459.72,
        "name": "Replace the SIBLEY 7 to SIBLEY 5 345kV Transformer 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2122145,
        "name": "Mullin Creek 345 kV Substation ERAS-2025-007 Interconnection (TOIF) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Current Study": 6200959.73,
      "Interconnection": 13069532
    }
  },
  "ERAS-2025-008": {
    "allocatedCostUsd": 10139052.42,
    "cluster": "ERAS-2025-001",
    "costPerKw": 14.06,
    "costUnavailableReason": null,
    "requestMw": 721.1,
    "serviceCostUsd": {
      "ERIS": 7979800.59,
      "NRIS": 2159251.83
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6901474,
        "name": "Viola 345 kV Substation ERAS-2025-008 Interconnection (Non-shared NU) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2159251.83,
        "name": "Build the HOLCOMB7 to HOLCOMB3 345kV Transformer 2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 737202,
        "name": "Viola 345 kV Substation ERAS-2025-008 Interconnection (TOIF) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 2500376.42,
      "Interconnection": 7638676
    }
  },
  "ERAS-2025-009": {
    "allocatedCostUsd": 2953500,
    "cluster": "ERAS-2025-001",
    "costPerKw": 6.56,
    "costUnavailableReason": null,
    "requestMw": 450,
    "serviceCostUsd": {
      "ERIS": 2953500
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2953500,
        "name": "Grec #1 Interconnect 161 kV Substation ERAS-2025-009 Interconnection (TOIF) (GRDA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": null,
        "name": "Grec #1 Interconnect 161 kV Substation ERAS-2025-009 Interconnection (Non-shared NU) (GRDA)\n* Cost and Lead-Time under review by TO and will be provided during the facility study stage",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 2953500
    }
  },
  "ERAS-2025-010": {
    "allocatedCostUsd": 144951.26,
    "cluster": "ERAS-2025-001",
    "costPerKw": 0.29,
    "costUnavailableReason": null,
    "requestMw": 496,
    "serviceCostUsd": {
      "ERIS": 144951.26,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 144951.26,
        "name": "LACYGNE7-G20-007-TAP 345 kV Ckt 1 Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 0,
        "name": "Comanche 345 kV New Substation",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      },
      {
        "costUsd": 0,
        "name": "Dunjee - Reno 138 kV Ckt 1 Rebuild",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 14,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 144951.26,
      "Interconnection": 0
    }
  },
  "ERAS-2025-011": {
    "allocatedCostUsd": 24502880,
    "cluster": "ERAS-2025-001",
    "costPerKw": 32.67,
    "costUnavailableReason": null,
    "requestMw": 750,
    "serviceCostUsd": {
      "ERIS": 24502880,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 11450012,
        "name": "Leland Olds 345kV Substation ERAS-2025-011 Interconnection (Non-Shared NU) (BEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 10000000,
        "name": "Kummer Ridge 345 kV Capacitor Bank",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2927868,
        "name": "Leland Olds 345kV Substation ERAS-2025-011 Interconnection (TOIF) (BEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 10125000,
      "Interconnection": 14377880
    }
  },
  "ERAS-2025-012": {
    "allocatedCostUsd": 40125000,
    "cluster": "ERAS-2025-001",
    "costPerKw": 53.5,
    "costUnavailableReason": null,
    "requestMw": 750,
    "serviceCostUsd": {
      "ERIS": 40125000,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17000000,
        "name": "Leland Olds 345kV Substation ERAS-2025-012 Interconnection (Non-Shared NU) (BEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 13000000,
        "name": "Leland Olds 345kV Substation ERAS-2025-012 Interconnection (TOIF) (BEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 10000000,
        "name": "Kummer Ridge 345 kV Capacitor Bank",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 10125000,
      "Interconnection": 30000000
    }
  },
  "ERAS-2025-013": {
    "allocatedCostUsd": 18913688.73,
    "cluster": "ERAS-2025-001",
    "costPerKw": 41.97,
    "costUnavailableReason": null,
    "requestMw": 450.6,
    "serviceCostUsd": {
      "ERIS": 12712729,
      "NRIS": 6200959.73
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 10947387,
        "name": "Mullin Creek 345 kV Substation ERAS-2025-007/013 Interconnection (Shared NU) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 4820459.72,
        "name": "Replace the SIBLEY 7 to SIBLEY 5 345kV Transformer 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1765342,
        "name": "Mullin Creek 345 kV Substation ERAS-2025-013 Interconnection (TOIF) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Current Study": 6200959.73,
      "Interconnection": 12712729
    }
  },
  "ERAS-2025-014": {
    "allocatedCostUsd": 40955.86,
    "cluster": "ERAS-2025-001",
    "costPerKw": 0.26,
    "costUnavailableReason": null,
    "requestMw": 159.5,
    "serviceCostUsd": {
      "ERIS": 40955.86,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 40955.86,
        "name": "LACYGNE7-G20-007-TAP 345 kV Ckt 1 Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 0,
        "name": "Build New Andrews to Road Runner 345 kV Line",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      },
      {
        "costUsd": 0,
        "name": "Cleveland Jct - Anadarko 138 kV Ckt 1 Voltage Conversion",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 8,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 40955.86,
      "Interconnection": 0
    }
  },
  "ERAS-2025-015": {
    "allocatedCostUsd": 23558867.56,
    "cluster": "ERAS-2025-001",
    "costPerKw": 58.9,
    "costUnavailableReason": null,
    "requestMw": 400,
    "serviceCostUsd": {
      "ERIS": 20647780,
      "NRIS": 2911087.56
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15408880,
        "name": "Holcomb 345 kV Substation ERAS-2025-015/ERAS-2025-017 Interconnection (Shared NU) (SEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 5238900,
        "name": "Holcomb 345 kV Substation ERAS-2025-015 Interconnection (TOIF) (SEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2226166.59,
        "name": "Build the HOLCOMB7 to HOLCOMB3 345kV Transformer 2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 2911087.56,
      "Interconnection": 20647780
    }
  },
  "ERAS-2025-016": {
    "allocatedCostUsd": 5899741.54,
    "cluster": "ERAS-2025-001",
    "costPerKw": 25.38,
    "costUnavailableReason": null,
    "requestMw": 232.5,
    "serviceCostUsd": {
      "ERIS": 5899741.54,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3809606,
        "name": "Tolk 230kV Substation ERAS-2025-016 Interconnection (TOIF) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2030268,
        "name": "Tolk 230kV Substation ERAS-2025-016 Interconnection (Non-shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 59867.54,
        "name": "LACYGNE7-G20-007-TAP 345 kV Ckt 1 Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 59867.54,
      "Interconnection": 5839874
    }
  },
  "ERAS-2025-017": {
    "allocatedCostUsd": 32718851.33,
    "cluster": "ERAS-2025-001",
    "costPerKw": 54.53,
    "costUnavailableReason": null,
    "requestMw": 600,
    "serviceCostUsd": {
      "ERIS": 28352220,
      "NRIS": 4366631.33
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 23113320,
        "name": "Holcomb 345 kV Substation ERAS-2025-015/ERAS-2025-017 Interconnection (Shared NU) (SEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 5238900,
        "name": "Holcomb 345 kV Substation ERAS-2025-017 Interconnection (TOIF) (SEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3339249.89,
        "name": "Build the HOLCOMB7 to HOLCOMB3 345kV Transformer 2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 4366631.33,
      "Interconnection": 28352220
    }
  },
  "ERAS-2025-018": {
    "allocatedCostUsd": 39316582.33,
    "cluster": "ERAS-2025-001",
    "costPerKw": 153.58,
    "costUnavailableReason": null,
    "requestMw": 256,
    "serviceCostUsd": {
      "ERIS": 39316582.33,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17180394,
        "name": "Oasis 230kV Substation ERAS-2025-018 Interconnection (Non-shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 8302968,
        "name": "Tolk 345/230 kV CKT 1 Transformer Replacement",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7415154.76,
        "name": "COMANC7 TAP  to OKU 345 kV Line Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 13,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 19023023.33,
      "Interconnection": 20293559
    }
  },
  "ERAS-2025-019": {
    "allocatedCostUsd": 15166933.53,
    "cluster": "ERAS-2025-001",
    "costPerKw": 189.59,
    "costUnavailableReason": null,
    "requestMw": 80,
    "serviceCostUsd": {
      "ERIS": 7631171,
      "NRIS": 7535762.53
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6595300,
        "name": "North Kinsley 115kV Substation ERAS-2025-019 Interconnection (Non-shared NU) (MIDW)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 5108640.27,
        "name": "Rebuild the SEWARD 3 to ST-JOHN3 115kV Line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2086505.34,
        "name": "Replace the SEWRDMW3 to SEWARD 2 115kV Transformer 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 8,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 7535762.53,
      "Interconnection": 7631171
    }
  },
  "ERAS-2025-020": {
    "allocatedCostUsd": 53902413,
    "cluster": "ERAS-2025-001",
    "costPerKw": 134.76,
    "costUnavailableReason": null,
    "requestMw": 400,
    "serviceCostUsd": {
      "ERIS": 53902413,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 32764203,
        "name": "Hobbs - Yoakum 345 kV Line ERAS-2025-020 Interconnection (Non-shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 12190941.53,
        "name": "COMANC7 TAP  to OKU 345 kV Line Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3793557,
        "name": "Hobbs - Yoakum 345 kV Line ERAS-2025-020 Interconnection (TOIF) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 13,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 17344653,
      "Interconnection": 36557760
    }
  },
  "ERAS-2025-021": {
    "allocatedCostUsd": 55072217.98,
    "cluster": "ERAS-2025-001",
    "costPerKw": 110.14,
    "costUnavailableReason": null,
    "requestMw": 500,
    "serviceCostUsd": {
      "ERIS": 55072217.98,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28993147,
        "name": "Border-Tuco 345 kV Line ERAS-2025-021 Interconnection (Non-shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 16044884.95,
        "name": "COMANC7 TAP  to OKU 345 kV Line Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3817643,
        "name": "Border-Tuco 345 kV Line ERAS-2025-021 Interconnection (TOIF) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 14,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 22261427.98,
      "Interconnection": 32810790
    }
  },
  "ERAS-2025-022": {
    "allocatedCostUsd": 3738498,
    "cluster": "ERAS-2025-001",
    "costPerKw": 30.39,
    "costUnavailableReason": null,
    "requestMw": 123,
    "serviceCostUsd": {
      "ERIS": 3738498
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2573308,
        "name": "Monte Vista 138 kV Substation ERAS-2025-022 Interconnection (TOIF) (PEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1165190,
        "name": "Monte Vista 138 kV Substation ERAS-2025-022 Interconnection (Non-shared NU) (PEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 3738498
    }
  },
  "ERAS-2025-023": {
    "allocatedCostUsd": 9268717,
    "cluster": "ERAS-2025-001",
    "costPerKw": 18.17,
    "costUnavailableReason": null,
    "requestMw": 510,
    "serviceCostUsd": {
      "ERIS": 9268717
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 5406476,
        "name": "Northeastern 345 kV Substation ERAS-2025-023 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3862241,
        "name": "Northeastern 345 kV Substation ERAS-2025-023 Interconnection (Non-shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 9268717
    }
  },
  "ERAS-2025-024": {
    "allocatedCostUsd": 122228207.88,
    "cluster": "ERAS-2025-001",
    "costPerKw": 164.29,
    "costUnavailableReason": null,
    "requestMw": 744,
    "serviceCostUsd": {
      "ERIS": 122228207.88,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 21600000,
        "name": "Comanche 345/138 kV Ckt 1 and Ckt 2 Transformers",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 21293458.91,
        "name": "Comanche Tap-OmDuncan 138 kV Ckt 1 Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 16200000,
        "name": "Comanche 345 kV New Substation",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 25,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 103596495.88,
      "Interconnection": 18631712
    }
  },
  "ERAS-2025-025": {
    "allocatedCostUsd": 19000018,
    "cluster": "ERAS-2025-001",
    "costPerKw": 108.57,
    "costUnavailableReason": null,
    "requestMw": 175,
    "serviceCostUsd": {
      "ERIS": 19000018,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17000000,
        "name": "Washita 138kV Substation ERAS-2025-025 Interconnection (Non-shared NU) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2000018,
        "name": "Washita 138kV Substation ERAS-2025-025 Interconnection (TOIF) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Cleveland Jct - Anadarko 138 kV Ckt 1 Voltage Conversion",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 19000018
    }
  },
  "ERAS-2025-026": {
    "allocatedCostUsd": 53264200.91,
    "cluster": "ERAS-2025-001",
    "costPerKw": 71.59,
    "costUnavailableReason": null,
    "requestMw": 744,
    "serviceCostUsd": {
      "ERIS": 53264200.91,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 24133953,
        "name": "Oklaunion-Lawton East Side 345kV Line ERAS-2025-026 Interconnection (Non-shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 19416541.09,
        "name": "Comanche Tap-OmDuncan 138 kV Ckt 1 Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5236562,
        "name": "Oklaunion-Lawton East Side 345kV Line ERAS-2025-026 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 18,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 23893685.91,
      "Interconnection": 29370515
    }
  },
  "ERAS-2025-027": {
    "allocatedCostUsd": 45780552.65,
    "cluster": "ERAS-2025-001",
    "costPerKw": 183.12,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 45780552.65,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 13826915.85,
        "name": "YOAKUM  to MUSTANG 230 kV Line Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7834869.93,
        "name": "COMANC7 TAP  to OKU 345 kV Line Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4726773.15,
        "name": "YOAKUM  to BRU SUB 230 kV Line Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 17,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 38395025.65,
      "Interconnection": 7385527
    }
  },
  "ERAS-2025-028": {
    "allocatedCostUsd": 22475616.67,
    "cluster": "ERAS-2025-001",
    "costPerKw": 58.53,
    "costUnavailableReason": null,
    "requestMw": 384,
    "serviceCostUsd": {
      "ERIS": 22475616.67,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 13179195.45,
        "name": "COMANC7 TAP  to OKU 345 kV Line Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2868488,
        "name": "Tuco-Yoakum 345kV Line ERAS-2025-028 Interconnection (TOIF) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2761754.87,
        "name": "ELKCITY6  to CHISHOLM6 230 kV Line Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 12,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 18173585.67,
      "Interconnection": 4302031
    }
  },
  "ERAS-2025-029": {
    "allocatedCostUsd": 3675668.37,
    "cluster": "ERAS-2025-001",
    "costPerKw": 21.62,
    "costUnavailableReason": null,
    "requestMw": 170,
    "serviceCostUsd": {
      "ERIS": 3159667,
      "NRIS": 516001.37
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3159667,
        "name": "Nearman 161 kV Substation ERAS-2025-029 Interconnection (Non-shared NU) (KACY)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 516001.37,
        "name": "Build the HOLCOMB7 to HOLCOMB3 345kV Transformer 2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 0,
        "name": "Nearman 161 kV Substation ERAS-2025-029 Interconnection (TOIF) (KACY)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Current Study": 516001.37,
      "Interconnection": 3159667
    }
  },
  "ERAS-2025-030": {
    "allocatedCostUsd": 43591605.69,
    "cluster": "ERAS-2025-001",
    "costPerKw": 124.55,
    "costUnavailableReason": null,
    "requestMw": 350,
    "serviceCostUsd": {
      "ERIS": 43591605.69,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 24611060,
        "name": "G24-279 New Switch Station tying into Chaves - Eddy County 230 kV Line ERAS-2025-030 (NSNU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 10415868.19,
        "name": "COMANC7 TAP  to OKU 345 kV Line Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4055881,
        "name": "G24-279 New Switch Station tying into Chaves - Eddy County 230 kV Line ERAS-2025-030 (TOIF) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 12,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 14924664.69,
      "Interconnection": 28666941
    }
  },
  "ERAS-2025-031": {
    "allocatedCostUsd": 3003335.32,
    "cluster": "ERAS-2025-001",
    "costPerKw": 20.02,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 2548040,
      "NRIS": 455295.32
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2548040,
        "name": "Quindaro 161kV Substation ERAS-2025-031 Interconnection (Non-shared NU) (KC BPU)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 455295.32,
        "name": "Build the HOLCOMB7 to HOLCOMB3 345kV Transformer 2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 0,
        "name": "Quindaro 161kV Substation ERAS-2025-031 Interconnection (TOIF) (KC BPU)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Current Study": 455295.32,
      "Interconnection": 2548040
    }
  },
  "ERAS-2025-032": {
    "allocatedCostUsd": 16243407.1,
    "cluster": "ERAS-2025-001",
    "costPerKw": 108.29,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 2109896,
      "NRIS": 14133511.1
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 9581359.73,
        "name": "Rebuild the SEWARD 3 to ST-JOHN3 115kV Line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3913494.66,
        "name": "Replace the SEWRDMW3 to SEWARD 2 115kV Transformer 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1809896,
        "name": "St. John 115 kV Substation ERAS-2025-032 Interconnection (TOIF) (SEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 8,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 14133511.1,
      "Interconnection": 2109896
    }
  },
  "ERAS-2025-033": {
    "allocatedCostUsd": 567762.91,
    "cluster": "ERAS-2025-001",
    "costPerKw": 3.79,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 330000,
      "NRIS": 237762.91
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 330000,
        "name": "Fort Dodge 115 kV Substation ERAS-2025-033 Interconnection (TOIF) (SEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 237762.91,
        "name": "Replace the SIBLEY 7 to SIBLEY 5 345kV Transformer 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 0,
        "name": "Evans Energy Center North - Maize 138 kV Ckt 1 Rebuild",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 237762.91,
      "Interconnection": 330000
    }
  },
  "ERAS-2025-034": {
    "allocatedCostUsd": 36555574.93,
    "cluster": "ERAS-2025-001",
    "costPerKw": 146.22,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 29466159.39,
      "NRIS": 7089415.54
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28031567.78,
        "name": "State Line 439 161 kV Substation ERAS-2025-034 Interconnection (Non-shared NU) (EDE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 6075000,
        "name": "Build the CARTHAG5 to CARTHG 2 161kV Transformer 3",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1434591.61,
        "name": "State Line 439 161 kV Substation ERAS-2025-034 Interconnection (TOIF) (EDE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Current Study": 7089415.54,
      "Interconnection": 29466159.39
    }
  },
  "ERAS-2025-035": {
    "allocatedCostUsd": null,
    "cluster": "ERAS-2025-001",
    "costPerKw": null,
    "costUnavailableReason": "Cost listed as TBD in SPP workbook",
    "requestMw": 137.96,
    "serviceCostUsd": {},
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": null,
        "name": "Siebrecht 115 kV Substation ERAS-2025-035 Interconnection (Non-shared NU) (NWPS)\n* Cost and Lead-Time under review by TO and will be provided during the facility study stage",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": null,
        "name": "Siebrecht 115 kV Substation ERAS-2025-035 Interconnection (TOIF) (NWPS)\n* Cost and Lead-Time under review by TO and will be provided during the facility study stage",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {}
  },
  "ERAS-2025-036": {
    "allocatedCostUsd": 29655315,
    "cluster": "ERAS-2025-001",
    "costPerKw": 211.82,
    "costUnavailableReason": null,
    "requestMw": 140,
    "serviceCostUsd": {
      "ERIS": 29655315,
      "NRIS": 0
    },
    "sourceDetail": "ERAS final; Reposted 2026-04-03; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP ERAS-2025-001 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2025_Generation_Studies/DISIS_Results_Workbook_ERAS-PowerFlow_SC_Final_04032026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 20961370,
        "name": "Newhart - Potter 230 kV Line ERAS-2025-036 Interconnection (Non-shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3550583,
        "name": "Newhart - Potter 230 kV Line ERAS-2025-036 Interconnection (TOIF) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3336724.51,
        "name": "COMANC7 TAP  to OKU 345 kV Line Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 11,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 5143362,
      "Interconnection": 24511953
    }
  },
  "GEN-2021-001": {
    "allocatedCostUsd": 36437642,
    "cluster": "DISIS-2021-001",
    "costPerKw": 364.38,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 36062642,
      "NRIS": 375000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18031321,
        "name": "Brown Substation Expansion",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 10533072,
        "name": "138kV Brown Substation GEN-2021-001 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 7498249,
        "name": "138kV Brown Substation GEN-2021-001 Interconnection (Non-shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 18406321,
      "Interconnection": 18031321
    }
  },
  "GEN-2021-005": {
    "allocatedCostUsd": 5930139.27,
    "cluster": "DISIS-2021-001",
    "costPerKw": 16.94,
    "costUnavailableReason": null,
    "requestMw": 350,
    "serviceCostUsd": {
      "ERIS": 5930139.27
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4120335,
        "name": "Summit 345 kV substation in Saline County, KS GEN-2021-005 Interconnection (Non-shared NU) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1765340,
        "name": "Summit 345 kV substation in Saline County, KS GEN-2021-005 Interconnection (TOIF) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 44464.27,
        "name": "Build a new 50 MVAR cap bank at Viola 138 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Current Study": 44464.27,
      "Interconnection": 5885675
    }
  },
  "GEN-2021-006": {
    "allocatedCostUsd": 17424707.37,
    "cluster": "DISIS-2021-001",
    "costPerKw": 58.08,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 17424707.37,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15854779,
        "name": "Neosho 345kV substation in Labette County, KS GEN-2021-006 Interconnection (Non-shared NU) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1549131,
        "name": "Neosho 345kV substation in Labette County, KS GEN-2021-006 Interconnection (TOIF) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 20797.37,
        "name": "PECULR 7 to  PHILL 7 345 kV Ckt 1 Terminal Upgrade",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 20797.37,
      "Interconnection": 17403910
    }
  },
  "GEN-2021-008": {
    "allocatedCostUsd": 275000,
    "cluster": "DISIS-2021-001",
    "costPerKw": 1.38,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 275000,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 275000,
        "name": "345kV Bus at BEPC Patent Gate Substation McKenzie County GEN-2021-008 Interconnection (TOIF) (BEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "345kV Bus at BEPC Patent Gate Sub McKenzie County GEN-2021-008 Interconnection (Non-shared NU) (BEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Finstad Switched Shunt",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 8,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 275000
    }
  },
  "GEN-2021-010": {
    "allocatedCostUsd": 80913959.27,
    "cluster": "DISIS-2021-001",
    "costPerKw": 389.01,
    "costUnavailableReason": null,
    "requestMw": 208,
    "serviceCostUsd": {
      "ERIS": 80913959.27
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 69240468.08,
        "name": "Build New Beckham to Potter 345 kV Line Ckt 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9976614.67,
        "name": "Build New Border to Beckham 345 kV Line Ckt 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 840315.63,
        "name": "Border 345 kV interconnection sub GEN-2021-010/012/014Interconnection Expansion (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 14,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 79367492.37,
      "Interconnection": 1546466.89
    }
  },
  "GEN-2021-012": {
    "allocatedCostUsd": 78968912.17,
    "cluster": "DISIS-2021-001",
    "costPerKw": 389.01,
    "costUnavailableReason": null,
    "requestMw": 203,
    "serviceCostUsd": {
      "ERIS": 78968912.17
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 67576033.75,
        "name": "Build New Beckham to Potter 345 kV Line Ckt 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9736792.2,
        "name": "Build New Border to Beckham 345 kV Line Ckt 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 820115.74,
        "name": "Border 345 kV interconnection sub GEN-2021-010/012/014Interconnection Expansion (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 14,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 77459619.96,
      "Interconnection": 1509292.21
    }
  },
  "GEN-2021-014": {
    "allocatedCostUsd": 80913959.27,
    "cluster": "DISIS-2021-001",
    "costPerKw": 389.01,
    "costUnavailableReason": null,
    "requestMw": 208,
    "serviceCostUsd": {
      "ERIS": 80913959.27
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 69240468.08,
        "name": "Build New Beckham to Potter 345 kV Line Ckt 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9976614.67,
        "name": "Build New Border to Beckham 345 kV Line Ckt 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 840315.63,
        "name": "Border 345 kV interconnection sub GEN-2021-010/012/014Interconnection Expansion (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 14,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 79367492.37,
      "Interconnection": 1546466.89
    }
  },
  "GEN-2021-015": {
    "allocatedCostUsd": 80000,
    "cluster": "DISIS-2021-001",
    "costPerKw": 1.07,
    "costUnavailableReason": null,
    "requestMw": 74.9,
    "serviceCostUsd": {
      "ERIS": 80000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 50000,
        "name": "Bobcat 345 kV interconnection substation GEN-2021-015 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 30000,
        "name": "Bobcat 345 kV interconnection substation GEN-2021-015 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 80000
    }
  },
  "GEN-2021-016": {
    "allocatedCostUsd": 25250000,
    "cluster": "DISIS-2021-001",
    "costPerKw": 101,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 25250000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 21800000,
        "name": "Sunnyside-Johnston 345 kV GEN-2021-016 Interconnection (Non-shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3450000,
        "name": "Sunnyside-Johnston 345 kV GEN-2021-016 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Chisholm - Woodward - Border 345 kV Ckt 1 (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 25250000
    }
  },
  "GEN-2021-017": {
    "allocatedCostUsd": 55811.62,
    "cluster": "DISIS-2021-001",
    "costPerKw": 1.49,
    "costUnavailableReason": null,
    "requestMw": 37.5,
    "serviceCostUsd": {
      "ERIS": 55811.62
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 50000,
        "name": "NMANHT6 to ELMCREK6 230 kV Ckt 1 Terminal Upgrade",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5811.62,
        "name": "Build a new 50 MVAR cap bank at Viola 138 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 0,
        "name": "Elm Creek 345 kV interconnection substation GEN-2021-017 Interconnection  (Non-shared NU) (ITCGP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 55811.62,
      "Interconnection": 0
    }
  },
  "GEN-2021-018": {
    "allocatedCostUsd": 72654.46,
    "cluster": "DISIS-2021-001",
    "costPerKw": 0.31,
    "costUnavailableReason": null,
    "requestMw": 231,
    "serviceCostUsd": {
      "ERIS": 72654.46
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 50000,
        "name": "Sooner 345 kV GEN-2021-018 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 22654.46,
        "name": "Sooner 345 kV GEN-2021-018 / GEN-2021-019 Interconnection Expansion (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 72654.46
    }
  },
  "GEN-2021-019": {
    "allocatedCostUsd": 107345.54,
    "cluster": "DISIS-2021-001",
    "costPerKw": 1.43,
    "costUnavailableReason": null,
    "requestMw": 74.9,
    "serviceCostUsd": {
      "ERIS": 107345.54
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 100000,
        "name": "Sooner 345 kV GEN-2021-019 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 7345.54,
        "name": "Sooner 345 kV GEN-2021-018 / GEN-2021-019 Interconnection Expansion (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 107345.54
    }
  },
  "GEN-2021-021": {
    "allocatedCostUsd": 10073514.28,
    "cluster": "DISIS-2021-001",
    "costPerKw": 67.16,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 10073514.28
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4957038.25,
        "name": "Build a new SPERVIL7 to G21-068-TAP 345 kV line 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3298711,
        "name": "Carpenter 345 kV Substation GEN-2021-021 Interconnection (TOIF) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1793895,
        "name": "Carpenter 345 kV Substation GEN-2021-021 Interconnection (Non-shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 4980908.28,
      "Interconnection": 5092606
    }
  },
  "GEN-2021-023": {
    "allocatedCostUsd": 3113769,
    "cluster": "DISIS-2021-001",
    "costPerKw": 10.17,
    "costUnavailableReason": null,
    "requestMw": 306.18,
    "serviceCostUsd": {
      "ERIS": 3113769
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3000858,
        "name": "Upgrade Terminal Equipment at ROSEHIL and G15052_T",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 112911,
        "name": "Wild Plains 345kV Substation GEN-2021-023 Interconnection (Non-shared NU) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Wild Plains 345kV Substation GEN-2021-023 Interconnection (TOIF) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Current Study": 3000858,
      "Interconnection": 112911
    }
  },
  "GEN-2021-025": {
    "allocatedCostUsd": 47572707.66,
    "cluster": "DISIS-2021-001",
    "costPerKw": 234.3,
    "costUnavailableReason": null,
    "requestMw": 203.04,
    "serviceCostUsd": {
      "ERIS": 47572707.66
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 33614505.78,
        "name": "Rebuild ROSEVLY4 to MOORLND4 138 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7125051.29,
        "name": "Rebuild NOELSW4 to ROSEVLY4 138 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5116150.59,
        "name": "Rebuild SOUTHRD4 to ROMNOSE4 138 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Current Study": 45855707.66,
      "Interconnection": 1717000
    }
  },
  "GEN-2021-027": {
    "allocatedCostUsd": 1200000,
    "cluster": "DISIS-2021-001",
    "costPerKw": 11.76,
    "costUnavailableReason": null,
    "requestMw": 102.06,
    "serviceCostUsd": {
      "ERIS": 1200000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1200000,
        "name": "Olive Creek 115 kV Substation GEN-2021-027 Interconnection (TOIF) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Olive Creek 115 kV Substation GEN-2021-027 Interconnection (Non-shared NU) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 1200000
    }
  },
  "GEN-2021-029": {
    "allocatedCostUsd": 13387154.79,
    "cluster": "DISIS-2021-001",
    "costPerKw": 52.75,
    "costUnavailableReason": null,
    "requestMw": 253.8,
    "serviceCostUsd": {
      "ERIS": 13387154.79
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 11710603.04,
        "name": "La Cygne to Stillwel 345 kV Line GEN-2021-029/030 Interconnection Expansion (DISIS-2021-001) (EM)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1549131,
        "name": "La Cygne to Stillwel 345 kV Line GEN-2021-029 Interconnection (TOIF) (EM)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 46266.82,
        "name": "PECULR 7 to  PHILL 7 345 kV Ckt 1 Terminal Upgrade",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Current Study": 127420.76,
      "Interconnection": 13259734.04
    }
  },
  "GEN-2021-030": {
    "allocatedCostUsd": 25351115.01,
    "cluster": "DISIS-2021-001",
    "costPerKw": 49.68,
    "costUnavailableReason": null,
    "requestMw": 510.3,
    "serviceCostUsd": {
      "ERIS": 25351115.01
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 23545786.96,
        "name": "La Cygne to Stillwel 345 kV Line GEN-2021-029/030 Interconnection Expansion (DISIS-2021-001) (EM)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1549131,
        "name": "La Cygne to Stillwel 345 kV Line GEN-2021-030 Interconnection (TOIF) (EM)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 93025.85,
        "name": "PECULR 7 to  PHILL 7 345 kV Ckt 1 Terminal Upgrade",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Current Study": 256197.05,
      "Interconnection": 25094917.96
    }
  },
  "GEN-2021-033": {
    "allocatedCostUsd": 3168760,
    "cluster": "DISIS-2021-001",
    "costPerKw": 15.52,
    "costUnavailableReason": null,
    "requestMw": 204.12,
    "serviceCostUsd": {
      "ERIS": 3168760
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1849661,
        "name": "Grand Prairie 138kV Substation  GEN-2021-033 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1319099,
        "name": "Grand Prairie 138kV Substation  GEN-2021-033 Interconnection (Non-shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 3168760
    }
  },
  "GEN-2021-034": {
    "allocatedCostUsd": 12137065,
    "cluster": "DISIS-2021-001",
    "costPerKw": 107.41,
    "costUnavailableReason": null,
    "requestMw": 113,
    "serviceCostUsd": {
      "ERIS": 12137065
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6862677,
        "name": "Rokeby 115 kV Substation GEN-2021-034 Interconnection (Non-shared NU) (LES)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 5274388,
        "name": "Rokeby 115 kV Substation GEN-2021-034 Interconnection (TOIF) (LES)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 12137065
    }
  },
  "GEN-2021-035": {
    "allocatedCostUsd": 18446222.47,
    "cluster": "DISIS-2021-001",
    "costPerKw": 163.24,
    "costUnavailableReason": null,
    "requestMw": 113,
    "serviceCostUsd": {
      "ERIS": 18446222.47
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12383393,
        "name": "Sunflower Santana Tap 115 kV Substation GEN-2021-035 Interconnection (Non-shared NU) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 4844020.03,
        "name": "Build a new SPERVIL7 to G21-068-TAP 345 kV line 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1192804,
        "name": "Sunflower Santana Tap 115 kV Substation GEN-2021-035 Interconnection (TOIF) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 4870025.47,
      "Interconnection": 13576197
    }
  },
  "GEN-2021-036": {
    "allocatedCostUsd": 14322085.43,
    "cluster": "DISIS-2021-001",
    "costPerKw": 70.17,
    "costUnavailableReason": null,
    "requestMw": 204.12,
    "serviceCostUsd": {
      "ERIS": 14322085.43
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 10650000,
        "name": "Craig to Patterson 138 kV Transmission Line GEN-2021-036 Interconnection (Non-shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1925000,
        "name": "Craig to Patterson 138 kV Transmission Line GEN-2021-036 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1747085.43,
        "name": "Rebuild DEQUEEN2 to DEQUEEN 2 69 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Current Study": 1747085.43,
      "Interconnection": 12575000
    }
  },
  "GEN-2021-038": {
    "allocatedCostUsd": 6600000,
    "cluster": "DISIS-2021-001",
    "costPerKw": 33,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 6600000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3350000,
        "name": "Welsh 345kV Substation GEN-2021-038 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3250000,
        "name": "Welsh 345kV Substation GEN-2021-038 Interconnection (Non-shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 6600000
    }
  },
  "GEN-2021-039": {
    "allocatedCostUsd": 0,
    "cluster": "DISIS-2021-001",
    "costPerKw": 0,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 0,
        "name": "New 161kV sub looping 161kV lines S1211-S1220 & S1211-S1299 GEN-2021-039 Interconnection (TOIF) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "New 161kV sub looping 161kV lines S1211-S1220 & S1211-S1299 GEN-2021-039 Interconnection (Non-shared NU) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 0
    }
  },
  "GEN-2021-040": {
    "allocatedCostUsd": 0,
    "cluster": "DISIS-2021-001",
    "costPerKw": 0,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 0,
        "name": "OPPD District, Cass County Power Plant Sub, 345kV Bus GEN-2021-040 Interconnection (TOIF) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "OPPD District, Cass County Power Plant Sub 345kV Bus GEN-2021-040 Interconnection (Non-shared NU) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 0
    }
  },
  "GEN-2021-041": {
    "allocatedCostUsd": 5017500,
    "cluster": "DISIS-2021-001",
    "costPerKw": 50.17,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 130000,
      "NRIS": 4887500
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4887500,
        "name": "Rebuild SW5th4 to CLASSEN4 138 kV line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 100000,
        "name": "Mustang 138kV Substation GEN-2021-041 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 30000,
        "name": "Mustang 138kV Substation GEN-2021-041 Interconnection (Non-shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 4887500,
      "Interconnection": 130000
    }
  },
  "GEN-2021-042": {
    "allocatedCostUsd": 105578.82,
    "cluster": "DISIS-2021-001",
    "costPerKw": 2.11,
    "costUnavailableReason": null,
    "requestMw": 50,
    "serviceCostUsd": {
      "ERIS": 105578.82
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 100000,
        "name": "Blue Valley  161 kV Substation GEN-2021-042 Interconnection (Non-shared NU) (INDN)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 5578.82,
        "name": "Build a new 50 MVAR cap bank at Viola 138 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 0,
        "name": "Blue Valley  161 kV Substation GEN-2021-042 Interconnection (TOIF) (INDN)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Current Study": 5578.82,
      "Interconnection": 100000
    }
  },
  "GEN-2021-043": {
    "allocatedCostUsd": 12137065,
    "cluster": "DISIS-2021-001",
    "costPerKw": 48.55,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 12137065
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6862677,
        "name": "8000 SW 12th (Rokeby) Station, 115kV Bus GEN-2021-043 Interconnection (Non-shared NU) (LES)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 5274388,
        "name": "8000 SW 12th (Rokeby) Station, 115kV Bus GEN-2021-043 Interconnection (TOIF) (LES)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 12137065
    }
  },
  "GEN-2021-047": {
    "allocatedCostUsd": 15527150,
    "cluster": "DISIS-2021-001",
    "costPerKw": 62.11,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 15527150
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12596750,
        "name": "Tulsa (Bus #509852) - Igloo (Bus #513596)  345kV line GEN-2021-047 Interconnection (Non-shared NU) (GRDA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2930400,
        "name": "Tulsa (Bus #509852) - Igloo (Bus #513596)  345kV line GEN-2021-047 Interconnection (TOIF) (GRDA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 15527150
    }
  },
  "GEN-2021-048": {
    "allocatedCostUsd": 2794147.5,
    "cluster": "DISIS-2021-001",
    "costPerKw": 37.26,
    "costUnavailableReason": null,
    "requestMw": 75,
    "serviceCostUsd": {
      "ERIS": 2794147.5
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2235318,
        "name": "Wagener 115kV Substation GEN-2021-048 Interconnection (TOIF) (LES)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 558829.5,
        "name": "Wagener 115kV Substation GEN-2021-048 / GEN-2021-049 Interconnection Expansion (DISIS-2021-001) (LES)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 2794147.5
    }
  },
  "GEN-2021-049": {
    "allocatedCostUsd": 3911806.5,
    "cluster": "DISIS-2021-001",
    "costPerKw": 17.39,
    "costUnavailableReason": null,
    "requestMw": 225,
    "serviceCostUsd": {
      "ERIS": 3911806.5
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2235318,
        "name": "Wagener 115kV Substation GEN-2021-049 Interconnection (TOIF) (LES)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1676488.5,
        "name": "Wagener 115kV Substation GEN-2021-048 / GEN-2021-049 Interconnection Expansion (DISIS-2021-001) (LES)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 3911806.5
    }
  },
  "GEN-2021-050": {
    "allocatedCostUsd": 38645495.28,
    "cluster": "DISIS-2021-001",
    "costPerKw": 193.23,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 38645495.28,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 38315603.64,
        "name": "Rebuild the ARCHIE 5 to G17-108-TAP 161 kV line Ckt 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 155070.55,
        "name": "ARCHIE 5 to HSNVL 5 161 kV Ckt 1 Terminal Upgrade",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 82117.09,
        "name": "Stilwell to Clinton 161 kV Line GEN-2021-050/051 Interconnection (DISIS-2021-001) (KCPL)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 13,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 38563378.19,
      "Interconnection": 82117.09
    }
  },
  "GEN-2021-051": {
    "allocatedCostUsd": 14492060.73,
    "cluster": "DISIS-2021-001",
    "costPerKw": 193.23,
    "costUnavailableReason": null,
    "requestMw": 75,
    "serviceCostUsd": {
      "ERIS": 14492060.73,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 14368351.36,
        "name": "Rebuild the ARCHIE 5 to G17-108-TAP 161 kV line Ckt 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 58151.45,
        "name": "ARCHIE 5 to HSNVL 5 161 kV Ckt 1 Terminal Upgrade",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 30793.91,
        "name": "Stilwell to Clinton 161 kV Line GEN-2021-050/051 Interconnection (DISIS-2021-001) (KCPL)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 13,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 14461266.82,
      "Interconnection": 30793.91
    }
  },
  "GEN-2021-052": {
    "allocatedCostUsd": 160000,
    "cluster": "DISIS-2021-001",
    "costPerKw": 2.13,
    "costUnavailableReason": null,
    "requestMw": 75,
    "serviceCostUsd": {
      "ERIS": 160000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 100000,
        "name": "Pecan Creek 345kV Substation GEN-2021-052 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 60000,
        "name": "Pecan Creek 345kV Substation GEN-2021-052 / GEN-2021-053 Interconnection Expansion (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 160000
    }
  },
  "GEN-2021-053": {
    "allocatedCostUsd": 100000,
    "cluster": "DISIS-2021-001",
    "costPerKw": 0.33,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 100000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 100000,
        "name": "Pecan Creek 345 kV Substation GEN-2021-053 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 1,
    "upgradeTypeCostUsd": {
      "Interconnection": 100000
    }
  },
  "GEN-2021-056": {
    "allocatedCostUsd": 672518.3,
    "cluster": "DISIS-2021-001",
    "costPerKw": 2.24,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 672518.3
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 559611.3,
        "name": "Build a new 50 MVAR cap bank at Viola 138 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 112907,
        "name": "Viola 345kV Substation GEN-2021-056 Interconnection (Non-shared NU) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Viola  345 kV Substation GEN-2021-056 Interconnection (TOIF) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 559611.3,
      "Interconnection": 112907
    }
  },
  "GEN-2021-057": {
    "allocatedCostUsd": 46200000,
    "cluster": "DISIS-2021-001",
    "costPerKw": 154,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 46200000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 33000000,
        "name": "Build a second 345/115kV transformer at Antelope",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11600000,
        "name": "Antelope 345kV substation GEN-2021-057 Interconnection (Non-shared NU) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1600000,
        "name": "Antelope 345kV substation GEN-2021-057 Interconnection (TOIF) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 33000000,
      "Interconnection": 13200000
    }
  },
  "GEN-2021-063": {
    "allocatedCostUsd": 8707914.57,
    "cluster": "DISIS-2021-001",
    "costPerKw": 56.18,
    "costUnavailableReason": null,
    "requestMw": 155,
    "serviceCostUsd": {
      "ERIS": 8707914.57
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4427914.57,
        "name": "Rebuild DEQUEEN2 to DEQUEEN 2 69 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2430000,
        "name": "Craig JCT 138kV GEN-2021-063 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1850000,
        "name": "Craig JCT 138kV GEN-2021-063 Interconnection (Non-shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Current Study": 4427914.57,
      "Interconnection": 4280000
    }
  },
  "GEN-2021-064": {
    "allocatedCostUsd": 14375000,
    "cluster": "DISIS-2021-001",
    "costPerKw": 143.75,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 14375000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 11900000,
        "name": "Carnegie South 138kV GEN-2021-064 Interconnection (Non-shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2475000,
        "name": "Carnegie South 138kV GEN-2021-064 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 14375000
    }
  },
  "GEN-2021-068": {
    "allocatedCostUsd": 32544791.68,
    "cluster": "DISIS-2021-001",
    "costPerKw": 130.39,
    "costUnavailableReason": null,
    "requestMw": 249.6,
    "serviceCostUsd": {
      "ERIS": 32544791.68
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 23087736.7,
        "name": "Build a new SPERVIL7 to G21-068-TAP 345 kV line 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4814653.63,
        "name": "Build a new AXTELL 345/115 kV Transformer 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4008703.14,
        "name": "SEPC Spearville - Holcomb 345kV GEN-2021-068 / GEN-2021-069 -070 Interconnection Expansion (SEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 27965352.54,
      "Interconnection": 4579439.14
    }
  },
  "GEN-2021-069": {
    "allocatedCostUsd": 32544791.68,
    "cluster": "DISIS-2021-001",
    "costPerKw": 130.39,
    "costUnavailableReason": null,
    "requestMw": 249.6,
    "serviceCostUsd": {
      "ERIS": 32544791.68
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 23087736.7,
        "name": "Build a new SPERVIL7 to G21-068-TAP 345 kV line 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4814653.63,
        "name": "Build a new AXTELL 345/115 kV Transformer 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4008703.14,
        "name": "SEPC Spearville - Holcomb 345kV GEN-2021-068 / GEN-2021-069 -070 Interconnection Expansion (SEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 27965352.54,
      "Interconnection": 4579439.14
    }
  },
  "GEN-2021-070": {
    "allocatedCostUsd": 65133733.04,
    "cluster": "DISIS-2021-001",
    "costPerKw": 129.23,
    "costUnavailableReason": null,
    "requestMw": 504,
    "serviceCostUsd": {
      "ERIS": 65133733.04
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 46619468.33,
        "name": "Build a new SPERVIL7 to G21-068-TAP 345 kV line 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9721896.76,
        "name": "Build a new AXTELL 345/115 kV Transformer 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8094496.72,
        "name": "SEPC Spearville - Holcomb 345kV GEN-2021-068 / GEN-2021-069 -070 Interconnection Expansion (SEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 56468500.32,
      "Interconnection": 8665232.72
    }
  },
  "GEN-2021-076": {
    "allocatedCostUsd": 47892892.96,
    "cluster": "DISIS-2021-001",
    "costPerKw": 423.83,
    "costUnavailableReason": null,
    "requestMw": 113,
    "serviceCostUsd": {
      "ERIS": 11662892.96,
      "NRIS": 36230000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 25000000,
        "name": "Rebuild AXTELL7 to KEARNEY7 115 kV line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11230000,
        "name": "Build a new North Hays to Chelotalah 115 kV line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5648795.97,
        "name": "Build a new AXTELL 345/115 kV Transformer 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Current Study": 41900366.96,
      "Interconnection": 5992526
    }
  },
  "GEN-2021-077": {
    "allocatedCostUsd": 218345.93,
    "cluster": "DISIS-2021-001",
    "costPerKw": 2.3,
    "costUnavailableReason": null,
    "requestMw": 95,
    "serviceCostUsd": {
      "ERIS": 218345.93,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 112911,
        "name": "Windsor to  Sedalia 161 kV GEN-2021-077 Interconnection (Non-shared NU) (EMW)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 95925.16,
        "name": "5SEDALA to SEDALIA5 161 kV Ckt 1 Terminal Upgrade",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9509.77,
        "name": "Build a new 50 MVAR cap bank at Viola 138 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 10,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 105434.93,
      "Interconnection": 112911
    }
  },
  "GEN-2021-088": {
    "allocatedCostUsd": 9838869,
    "cluster": "DISIS-2021-001",
    "costPerKw": 98.39,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 9838869
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7079479,
        "name": "Cedar Lane 138 kV Substation  GEN-2021-088 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2759390,
        "name": "Cedar Lane 138 kV Substation  GEN-2021-088 Interconnection (Non-shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 9838869
    }
  },
  "GEN-2021-090": {
    "allocatedCostUsd": 213149059.22,
    "cluster": "DISIS-2021-001",
    "costPerKw": 532.87,
    "costUnavailableReason": null,
    "requestMw": 400,
    "serviceCostUsd": {
      "ERIS": 181203753.24,
      "NRIS": 31945305.97
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 164140776.84,
        "name": "Build New Beckham to Potter 345 kV Line Ckt 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 16400000,
        "name": "Build a second Yoakum 345/230 kV Transformer 2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 15545305.97,
        "name": "Upgrade the existing Tuco 345/230 kV Transformer 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 18,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 200688738.22,
      "Interconnection": 12460321
    }
  },
  "GEN-2021-096": {
    "allocatedCostUsd": 31497713.56,
    "cluster": "DISIS-2021-001",
    "costPerKw": 63,
    "costUnavailableReason": null,
    "requestMw": 500,
    "serviceCostUsd": {
      "ERIS": 31497713.56,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 29670157,
        "name": "Wolf Creek - Benton 345 kV GEN-2021-096 Interconnection (Non-shared NU) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1619187,
        "name": "Wolf Creek to Benton 345 kV Line GEN-2021-096 Interconnection (TOIF) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 116980.61,
        "name": "Build a new 50 MVAR cap bank at Viola 138 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 9,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 208369.56,
      "Interconnection": 31289344
    }
  },
  "GEN-2021-098": {
    "allocatedCostUsd": 31930292.34,
    "cluster": "DISIS-2021-001",
    "costPerKw": 199.56,
    "costUnavailableReason": null,
    "requestMw": 160,
    "serviceCostUsd": {
      "ERIS": 31930292.34,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15619849.41,
        "name": "Rebuild SOUTHRD4 to ROMNOSE4 138 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 12525494.22,
        "name": "Rebuild ROSEVLY4 to MOORLND4 138 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2654948.71,
        "name": "Rebuild NOELSW4 to ROSEVLY4 138 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 30800292.34,
      "Interconnection": 1130000
    }
  },
  "GEN-2021-101": {
    "allocatedCostUsd": 1761388.68,
    "cluster": "DISIS-2021-001",
    "costPerKw": 11.08,
    "costUnavailableReason": null,
    "requestMw": 159,
    "serviceCostUsd": {
      "ERIS": 1761388.68,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1548587,
        "name": "Midland Substation 115kV bus GEN-2021-101 Interconnection (TOIF) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 152568,
        "name": "MIDLADN3 to MIDLADS3 115 kV Bus Tie Upgrade",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 26181.23,
        "name": "Midland Substation 115kV bus GEN-2021-101 Interconnection Expansion (Non-Shared NU) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 9,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 186620.45,
      "Interconnection": 1574768.23
    }
  },
  "GEN-2021-103": {
    "allocatedCostUsd": 1786489.76,
    "cluster": "DISIS-2021-001",
    "costPerKw": 11.91,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 1786489.76,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 962074,
        "name": "Eudora to Clearview 115 kV Line (Atlantic 115 kV Substation) GEN-2021-103 Interconnection (Non-shared NU) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 779498,
        "name": "Eudora to Clearview 115 kV Line (Atlantic 115 kV Substation) GEN-2021-103 Interconnection (TOIF) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 18482.44,
        "name": "Build a new 50 MVAR cap bank at Viola 138 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 8,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 44917.76,
      "Interconnection": 1741572
    }
  },
  "GEN-2021-107": {
    "allocatedCostUsd": 6111298.99,
    "cluster": "DISIS-2021-001",
    "costPerKw": 30.31,
    "costUnavailableReason": null,
    "requestMw": 201.6,
    "serviceCostUsd": {
      "ERIS": 6111298.99
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4525270,
        "name": "Jeffrey Energy Center 345 kV Substation GEN-2021-107 Interconnection (Non-shared NU) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1549131,
        "name": "Jeffrey Energy Center 345 kV Substation GEN-2021-107 Interconnection (TOIF) (EKC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 24706.31,
        "name": "Build a new 50 MVAR cap bank at Viola 138 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Current Study": 36897.99,
      "Interconnection": 6074401
    }
  },
  "GEN-2021-108": {
    "allocatedCostUsd": 14823901,
    "cluster": "DISIS-2021-001",
    "costPerKw": 81.34,
    "costUnavailableReason": null,
    "requestMw": 182.25,
    "serviceCostUsd": {
      "ERIS": 14823901
    },
    "sourceDetail": "DISIS restudy; Posted 2025-06-23; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2021-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2021_Generation_Studies/DISIS_Results_Workbook_DIS2021-1_Restudy-PowerFlow_Stability_SC_06232025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8318292,
        "name": "OPPD 345KV Cass County Substation GEN-2021-108 Interconnection (Non-shared NU) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 6505609,
        "name": "OPPD 345KV Cass County Substation GEN-2021-108 Interconnection (TOIF) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 14823901
    }
  },
  "GEN-2022-004": {
    "allocatedCostUsd": 2324962.2,
    "cluster": "DISIS-2022-001",
    "costPerKw": 70.45,
    "costUnavailableReason": null,
    "requestMw": 33,
    "serviceCostUsd": {
      "ERIS": 2324962.2
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 952147,
        "name": "Murray Gill 138 kV Substation GEN-2022-004 Interconnection (TOIF) (EKC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 946467,
        "name": "Murray Gill 138 kV Substation GEN-2022-004 Interconnection (Non-Shared NU) (EKC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 426348.2,
        "name": "Reroute the existing LaCygne - Neosho 345kV line to tap the exiting GEN-2020-007 tap switching station",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Current Study": 426348.2,
      "Interconnection": 1898614
    }
  },
  "GEN-2022-006": {
    "allocatedCostUsd": 31528726.61,
    "cluster": "DISIS-2022-001",
    "costPerKw": 157.64,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 25167564.05,
      "NRIS": 6361162.56
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18488191,
        "name": "Neosho - N345  161 kV Substation GEN-2022-006 Interconnection (Non-Shared NU) (EKC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 6361162.56,
        "name": "Rebuild the RIV4525 to G20-079-TAP 161kV Line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5639430.05,
        "name": "Reroute the existing LaCygne - Neosho 345kV line to tap the exiting GEN-2020-007 tap switching station",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 12000592.61,
      "Interconnection": 19528134
    }
  },
  "GEN-2022-007": {
    "allocatedCostUsd": 18177652,
    "cluster": "DISIS-2022-001",
    "costPerKw": 134.65,
    "costUnavailableReason": null,
    "requestMw": 135,
    "serviceCostUsd": {
      "ERIS": 18177652
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17017590,
        "name": "Lang - Reading 115 kV Transmission Line GEN-2022-007 Interconnection (Non-Shared NU) (EKC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1160062,
        "name": "Lang - Reading 115 kV Transmission Line GEN-2022-007 Interconnection (TOIF) (EKC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 18177652
    }
  },
  "GEN-2022-009": {
    "allocatedCostUsd": 55291,
    "cluster": "DISIS-2022-001",
    "costPerKw": 0.44,
    "costUnavailableReason": null,
    "requestMw": 125,
    "serviceCostUsd": {
      "ERIS": 55291
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 55291,
        "name": "Judson Substation 345 kV GEN-2022-009 Interconnection (TOIF) (BEPC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Williston - Judson 230 kV Line Rating Update",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      },
      {
        "costUsd": 0,
        "name": "XFR - Judson 345/230 kV second (Model Update)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 55291
    }
  },
  "GEN-2022-010": {
    "allocatedCostUsd": 55291,
    "cluster": "DISIS-2022-001",
    "costPerKw": 0.22,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 55291
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 55291,
        "name": "Judson Substation 345 kV GEN-2022-010 Interconnection (TOIF) (BEPC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Williston - Judson 230 kV Line Rating Update",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      },
      {
        "costUsd": 0,
        "name": "XFR - Judson 345/230 kV second (Model Update)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 55291
    }
  },
  "GEN-2022-012": {
    "allocatedCostUsd": 2824550.25,
    "cluster": "DISIS-2022-001",
    "costPerKw": 28.25,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 1035947.5,
      "NRIS": 1788602.75
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1788602.75,
        "name": "Rebuild the WOODWRD4 to WINDFRM4 138kV Line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 636662,
        "name": "Woodward 345 kV Substation GEN-2022-012 Interconnection (TOIF) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 399285.5,
        "name": "Woodward 345kV Substation Interconnection (DISIS-2022-001) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 1788602.75,
      "Interconnection": 1035947.5
    }
  },
  "GEN-2022-013": {
    "allocatedCostUsd": 32634851.86,
    "cluster": "DISIS-2022-001",
    "costPerKw": 108.78,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 31109698.93,
      "NRIS": 1525152.93
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18895977.6,
        "name": "Tap of Neosho - LaCygne 345 kV Line Interconnection (DISIS-2022-001) (EKC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 10315052.33,
        "name": "Reroute the existing LaCygne - Neosho 345kV line to tap the exiting GEN-2020-007 tap switching station",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1898669,
        "name": "Tap of Neosho - LaCygne 345 kV Line GEN-2022-013 Interconnection (TOIF) (EKC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Current Study": 11840205.26,
      "Interconnection": 20794646.6
    }
  },
  "GEN-2022-015": {
    "allocatedCostUsd": 46579282,
    "cluster": "DISIS-2022-001",
    "costPerKw": 172.52,
    "costUnavailableReason": null,
    "requestMw": 270,
    "serviceCostUsd": {
      "ERIS": 46579282
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 41340382,
        "name": "Tap of Mingo - Red Willow 345kV line Interconnection (Non-Shared NU) (SEPC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 5238900,
        "name": "Tap of Mingo - Red Willow 345 kV Line GEN-2022-015 Interconnection (TOIF) (SEPC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 46579282
    }
  },
  "GEN-2022-016": {
    "allocatedCostUsd": 6937780.17,
    "cluster": "DISIS-2022-001",
    "costPerKw": 24.09,
    "costUnavailableReason": null,
    "requestMw": 288,
    "serviceCostUsd": {
      "ERIS": 1786604.25,
      "NRIS": 5151175.92
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 5151175.92,
        "name": "Rebuild the WOODWRD4 to WINDFRM4 138kV Line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1149942.25,
        "name": "Woodward 345kV Substation Interconnection (DISIS-2022-001) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 636662,
        "name": "Woodward 345kV Substation GEN-2022-016 Interconnection (TOIF) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 5151175.92,
      "Interconnection": 1786604.25
    }
  },
  "GEN-2022-017": {
    "allocatedCostUsd": 3918494.38,
    "cluster": "DISIS-2022-001",
    "costPerKw": 26.12,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 1235590.25,
      "NRIS": 2682904.13
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2682904.13,
        "name": "Rebuild the WOODWRD4 to WINDFRM4 138kV Line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 636662,
        "name": "Woodward 345kV Substation GEN-2022-017 Interconnection (TOIF) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 598928.25,
        "name": "Woodward 345kV Substation Interconnection (DISIS-2022-001) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 2682904.13,
      "Interconnection": 1235590.25
    }
  },
  "GEN-2022-024": {
    "allocatedCostUsd": 20603699.57,
    "cluster": "DISIS-2022-001",
    "costPerKw": 103.02,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 19586930.95,
      "NRIS": 1016768.62
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12597318.4,
        "name": "Tap of Neosho - LaCygne 345 kV Line Interconnection (DISIS-2022-001) (EKC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 6876701.55,
        "name": "Reroute the existing LaCygne - Neosho 345kV line to tap the exiting GEN-2020-007 tap switching station",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1016768.62,
        "name": "Rebuild the RIV4525 to G20-079-TAP 161kV Line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Current Study": 7893470.17,
      "Interconnection": 12710229.4
    }
  },
  "GEN-2022-038": {
    "allocatedCostUsd": 18374925,
    "cluster": "DISIS-2022-001",
    "costPerKw": 102.08,
    "costUnavailableReason": null,
    "requestMw": 180,
    "serviceCostUsd": {
      "ERIS": 18374925
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15538977,
        "name": "Longwood to Scottville 138 kV line GEN-2022-038 Interconnection (Non-Shared NU) (AEP) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2835948,
        "name": "Longwood to Scottville 138 kV line GEN-2022-038 Interconnection (TOIF) (AEP) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line  - Beckham County - Potter -345 kV New Line (2024 ITP)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 18374925
    }
  },
  "GEN-2022-054": {
    "allocatedCostUsd": 7133183.66,
    "cluster": "DISIS-2022-001",
    "costPerKw": 35.67,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 7133183.66
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6883183.66,
        "name": "Reroute the existing LaCygne - Neosho 345kV line to tap the exiting GEN-2020-007 tap switching station",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 250000,
        "name": "Wolf Creek - Blackberry 345 kV Tap Interconnection (Non-Shared NU) (NEET) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Wolf Creek - Blackberry 345 kV Tap GEN-2022-054 Interconnection (TOIF) (NEET) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Current Study": 6883183.66,
      "Interconnection": 250000
    }
  },
  "GEN-2022-055": {
    "allocatedCostUsd": 9454978.34,
    "cluster": "DISIS-2022-001",
    "costPerKw": 47.27,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 9454978.34
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7000000,
        "name": "Sunshine North to Anadarko 138 kV GEN-2022-055 Interconnection (Non-Shared NU) (WFEC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2000000,
        "name": "Sunshine North to Anadarko 138 kV GEN-2022-055 Interconnection (TOIF) (WFEC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 454978.34,
        "name": "JENSEN 4 to EL RENO4 138kV Line Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 454978.34,
      "Interconnection": 9000000
    }
  },
  "GEN-2022-065": {
    "allocatedCostUsd": 27006184,
    "cluster": "DISIS-2022-001",
    "costPerKw": 186.25,
    "costUnavailableReason": null,
    "requestMw": 145,
    "serviceCostUsd": {
      "ERIS": 27006184
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 24830563,
        "name": "tap on Arthur Mullergreen-Spearville 230 kV line GEN-2022-065 IC (Non-Shared NU) (SUNC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2175621,
        "name": "tap on Arthur Mullergreen-Spearville 230 kV line GEN-2022-065 Interconnection (TOIF) (SEPC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 27006184
    }
  },
  "GEN-2022-071": {
    "allocatedCostUsd": 19411978,
    "cluster": "DISIS-2022-001",
    "costPerKw": 213.73,
    "costUnavailableReason": null,
    "requestMw": 90.824,
    "serviceCostUsd": {
      "ERIS": 19411978
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 16127853,
        "name": "Talawanda to Canadian River 138 kV Line Tap GEN-2022-071 Interconnection (Non-Shared NU) (AEP) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3284125,
        "name": "Talawanda to Canadian River 138 kV Line Tap GEN-2022-071 Interconnection (TOIF) (AEP) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line  - Beckham County - Potter -345 kV New Line (2024 ITP)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 19411978
    }
  },
  "GEN-2022-073": {
    "allocatedCostUsd": 45194981,
    "cluster": "DISIS-2022-001",
    "costPerKw": 150.65,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 45194981,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 20000000,
        "name": "Rebuild the SMTHVL 5 to PLTCTY 5 161kV Line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 17051775,
        "name": "Nashua - Smithville 161 kV Line Tap GEN-2022-073 Interconnection (Non-Shared NU) (EM) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 5000000,
        "name": "Rebuild the SMTHVL 5 to G22-073-TAP 161kV Line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 8,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 27100000,
      "Interconnection": 18094981
    }
  },
  "GEN-2022-075": {
    "allocatedCostUsd": 44663524,
    "cluster": "DISIS-2022-001",
    "costPerKw": 255.22,
    "costUnavailableReason": null,
    "requestMw": 175,
    "serviceCostUsd": {
      "ERIS": 19663524,
      "NRIS": 25000000
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 25000000,
        "name": "Rebuild the AXTELL 7 to KEARNEY7 115kV Line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 18357086,
        "name": "Tap on the Spearville - Post Rock 345kV line GEN-2022-075 Interconnection (Non-Shared NU) (ITCGP) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1306438,
        "name": "Tap on the Spearville - Post Rock 345kV line GEN-2022-075 Interconnection (TOIF) (ITCGP) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 25000000,
      "Interconnection": 19663524
    }
  },
  "GEN-2022-083": {
    "allocatedCostUsd": 55291,
    "cluster": "DISIS-2022-001",
    "costPerKw": 0.22,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 55291
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 55291,
        "name": "Judson Substation 345 kV GEN-2022-083 Interconnection (TOIF) (BEPC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Williston - Judson 230 kV Line Rating Update",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      },
      {
        "costUsd": 0,
        "name": "XFR - Judson 345/230 kV second (Model Update)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 55291
    }
  },
  "GEN-2022-098": {
    "allocatedCostUsd": 4058522,
    "cluster": "DISIS-2022-001",
    "costPerKw": 20.29,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 4058522
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2148537,
        "name": "Bison 345kV Substation GEN-2022-098 Interconnection (Non-Shared NU) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1909985,
        "name": "Bison 345kV Substation GEN-2022-098 Interconnection (TOIF) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line  - Beckham County - Potter -345 kV New Line (2024 ITP)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 4058522
    }
  },
  "GEN-2022-100": {
    "allocatedCostUsd": 17415120,
    "cluster": "DISIS-2022-001",
    "costPerKw": 217.69,
    "costUnavailableReason": null,
    "requestMw": 80,
    "serviceCostUsd": {
      "ERIS": 17415120
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 16371914,
        "name": "Overton - Sedalia East 161 kV Substation GEN-2022-100 Interconnection (Non-Shared NU) (EM) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1043206,
        "name": "Overton - Sedalia East 161 kV Substation GEN-2022-100 Interconnection (TOIF) (EM) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 17415120
    }
  },
  "GEN-2022-102": {
    "allocatedCostUsd": 3237720,
    "cluster": "DISIS-2022-001",
    "costPerKw": 32.38,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 3237720
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2176169,
        "name": "Liberty West 161 kV GEN-2022-102 Interconnection (Non-Shared NU) (EM) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1061551,
        "name": "Liberty West 161 kV GEN-2022-102 Interconnection (TOIF) (EM) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 3237720
    }
  },
  "GEN-2022-104": {
    "allocatedCostUsd": 13244178.42,
    "cluster": "DISIS-2022-001",
    "costPerKw": 117.12,
    "costUnavailableReason": null,
    "requestMw": 113.078,
    "serviceCostUsd": {
      "ERIS": 9088913.29,
      "NRIS": 4155265.14
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7000000,
        "name": "Brown - South Coleman Junction 138kV line GEN-2022-104 Interconnection (Non-Shared NU) (WFEC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 4140265.14,
        "name": "Rebuild the WOODWRD4 to WINDFRM4 138kV Line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2000000,
        "name": "Brown - South Coleman Junction 138kV line GEN-2022-104 Interconnection (TOIF) (WFEC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 9,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 4244178.42,
      "Interconnection": 9000000
    }
  },
  "GEN-2022-111": {
    "allocatedCostUsd": 44509709,
    "cluster": "DISIS-2022-001",
    "costPerKw": 296.73,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 12409709,
      "NRIS": 32100000
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 22100000,
        "name": "Welsh 345 kV Bus Reconfiguration",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 10000000,
        "name": "Southwest Shreveport 345 kV Bus Reconfiguration",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8033377,
        "name": "Wilkes 345 kV Substation GEN-2022-111 Interconnection (TOIF) (AEP) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 32100000,
      "Interconnection": 12409709
    }
  },
  "GEN-2022-130": {
    "allocatedCostUsd": 10359287,
    "cluster": "DISIS-2022-001",
    "costPerKw": 51.8,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 10359287
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7251500,
        "name": "Battlefield BESS 161kV GEN-2022-130 Interconnection (Non-Shared NU) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3107787,
        "name": "Battlefield BESS 161kV GEN-2022-130 Interconnection (TOIF) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line  - Beckham County - Potter -345 kV New Line (2024 ITP)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 10359287
    }
  },
  "GEN-2022-136": {
    "allocatedCostUsd": 17145094.51,
    "cluster": "DISIS-2022-001",
    "costPerKw": 95.25,
    "costUnavailableReason": null,
    "requestMw": 180,
    "serviceCostUsd": {
      "ERIS": 17145094.51
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8001000,
        "name": "KRSEY1_4 to COLBERT4 138kV Line Reconductor",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7000000,
        "name": "Colbert 138 kV Substation GEN-2022-136 Interconnection (Non-Shared NU) (WFEC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2000000,
        "name": "Colbert 138 kV Substation GEN-2022-136 Interconnection (TOIF) (WFEC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 8145094.51,
      "Interconnection": 9000000
    }
  },
  "GEN-2022-139": {
    "allocatedCostUsd": 9586154,
    "cluster": "DISIS-2022-001",
    "costPerKw": 31.95,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 9586154
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 5407966,
        "name": "Pirkey 345kV Substation GEN-2022-139 Interconnection (TOIF) (AEP) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 4178188,
        "name": "Pirkey 345kV Substation GEN-2022-139 Interconnection (Non-Shared NU) (AEP) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line  - Beckham County - Potter -345 kV New Line (2024 ITP)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 9586154
    }
  },
  "GEN-2022-142": {
    "allocatedCostUsd": 19311284,
    "cluster": "DISIS-2022-001",
    "costPerKw": 96.56,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 19311284
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18245089,
        "name": "Shoal Creek 161 kV Substation GEN-2022-142 Interconnection (Non-Shared NU) (EM) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1066195,
        "name": "Shoal Creek 161 kV Substation GEN-2022-142 Interconnection (TOIF) (EM) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 19311284
    }
  },
  "GEN-2022-143": {
    "allocatedCostUsd": 6270424.2,
    "cluster": "DISIS-2022-001",
    "costPerKw": 31.35,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 6270424.2
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4035007,
        "name": "Caney Creek 138 kV Substation GEN-2022-143 Interconnection (Non-Shared NU) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1968425,
        "name": "Caney Creek 138 kV Substation GEN-2022-143 Interconnection (TOIF) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 266992.2,
        "name": "CANEYCK to TEXOMA 138kV Line Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 266992.2,
      "Interconnection": 6003432
    }
  },
  "GEN-2022-144": {
    "allocatedCostUsd": 16080140,
    "cluster": "DISIS-2022-001",
    "costPerKw": 80.4,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 16080140
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15013945,
        "name": "Blue Mills BESS 161kV Substation GEN-2022-144 Interconnection (Non-Shared NU) (EM) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1066195,
        "name": "Blue Mills BESS 161kV Substation GEN-2022-144 Interconnection (TOIF) (EM) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 16080140
    }
  },
  "GEN-2022-145": {
    "allocatedCostUsd": 19709940,
    "cluster": "DISIS-2022-001",
    "costPerKw": 109.5,
    "costUnavailableReason": null,
    "requestMw": 180,
    "serviceCostUsd": {
      "ERIS": 19709940
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 16420759,
        "name": "Weatherford Jct. to Hinton 138 kV line GEN-2022-145 Interconnection (Non-Shared NU) (AEP) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3289181,
        "name": "Weatherford Jct. to Hinton 138 kV line GEN-2022-145 Interconnection (TOIF) (AEP) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line  - Beckham County - Potter -345 kV New Line (2024 ITP)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 0,
      "Interconnection": 19709940
    }
  },
  "GEN-2022-147": {
    "allocatedCostUsd": 25580714,
    "cluster": "DISIS-2022-001",
    "costPerKw": 126.01,
    "costUnavailableReason": null,
    "requestMw": 203,
    "serviceCostUsd": {
      "ERIS": 25580714
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 19200000,
        "name": "Tuco Int 345/230 kV CKT 1 Transformer Replacement",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4128699,
        "name": "Tuco 345kV GEN-2022-147 Interconnection (Non-Shared NU) (SPS) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2252015,
        "name": "Tuco 345kV GEN-2022-147 Interconnection (TOIF) (SPS) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 19200000,
      "Interconnection": 6380714
    }
  },
  "GEN-2022-154": {
    "allocatedCostUsd": 3500000,
    "cluster": "DISIS-2022-001",
    "costPerKw": 35,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 3500000
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2983000,
        "name": "Canadian Switchyard 138kV DISIS-2022-001 Interconnection (Non-Shared NU) (WFEC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 517000,
        "name": "Canadian Switchyard 138kV GEN-2022-154 Interconnection (TOIF) (WFEC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line  - Beckham County - Potter -345 kV New Line (2024 ITP)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 3500000
    }
  },
  "GEN-2022-155": {
    "allocatedCostUsd": 2993706,
    "cluster": "DISIS-2022-001",
    "costPerKw": 14.97,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 2993706
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1760000,
        "name": "Horseshoe Lake 138 kV Substation GEN-2022-155 Interconnection (Non-Shared NU) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1233706,
        "name": "Horseshoe Lake 138 kV Substation GEN-2022-155 Interconnection (TOIF) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line  - Beckham County - Potter -345 kV New Line (2024 ITP)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 2993706
    }
  },
  "GEN-2022-156": {
    "allocatedCostUsd": 1830400,
    "cluster": "DISIS-2022-001",
    "costPerKw": 18.3,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 1830400
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1830400,
        "name": "Silver City 138 kV Substation GEN-2022-156 Interconnection (Non-Shared NU) (GRDA) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line  - Beckham County - Potter -345 kV New Line (2024 ITP)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      },
      {
        "costUsd": 0,
        "name": "Silver City 138 kV Substation GEN-2022-156 Interconnection (TOIF) (GRDA) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 1830400
    }
  },
  "GEN-2022-161": {
    "allocatedCostUsd": 112911,
    "cluster": "DISIS-2022-001",
    "costPerKw": 0.31,
    "costUnavailableReason": null,
    "requestMw": 360,
    "serviceCostUsd": {
      "ERIS": 112911
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 112911,
        "name": "Burns 345kV Substation GEN-2022-161 Interconnection (Non-Shared NU) (EKC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Burns 345kV Substation GEN-2022-161 Interconnection (TOIF) (EKC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Benton 345 kV Terminal Upgrade",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 112911
    }
  },
  "GEN-2022-176": {
    "allocatedCostUsd": 32757508.89,
    "cluster": "DISIS-2022-001",
    "costPerKw": 152.36,
    "costUnavailableReason": null,
    "requestMw": 215,
    "serviceCostUsd": {
      "ERIS": 31890557,
      "NRIS": 866951.89
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 26459422,
        "name": "Northeastern - Delaware 345 kV trans line GEN-2022-176 Interconnection (Non-Shared NU) (AEP) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 5431135,
        "name": "Northeastern - Delaware 345 kV transmission line GEN-2022-176 Interconnection (TOIF) (AEP) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 866951.89,
        "name": "Rebuild the RIV4525 to G20-079-TAP 161kV Line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 866951.89,
      "Interconnection": 31890557
    }
  },
  "GEN-2022-214": {
    "allocatedCostUsd": 22703573.21,
    "cluster": "DISIS-2022-001",
    "costPerKw": 94.99,
    "costUnavailableReason": null,
    "requestMw": 239,
    "serviceCostUsd": {
      "ERIS": 22703573.21
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18804047,
        "name": "Gill - Viola 138 kV Line Break GEN-2022-214 Interconnection (Non-Shared NU) (EKC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2859284.21,
        "name": "Reroute the existing LaCygne - Neosho 345kV line to tap the exiting GEN-2020-007 tap switching station",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1040242,
        "name": "Gill - Viola 138 kV Line Break GEN-2022-214 Interconnection (TOIF) (EKC) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Current Study": 2859284.21,
      "Interconnection": 19844289
    }
  },
  "GEN-2022-235": {
    "allocatedCostUsd": 5750073.73,
    "cluster": "DISIS-2022-001",
    "costPerKw": 38.33,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 1408021.66,
      "NRIS": 4342052.06
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4342052.06,
        "name": "Rebuild the WOODWRD4 to WINDFRM4 138kV Line 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1408021.66,
        "name": "JENSEN 4 to EL RENO4 138kV Line Rebuild",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 0,
        "name": "Multi - Park Community - Sunshine 138 kV",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 5750073.73,
      "Interconnection": 0
    }
  },
  "GEN-2022-238": {
    "allocatedCostUsd": 22576426,
    "cluster": "DISIS-2022-001",
    "costPerKw": 150.51,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 22576426
    },
    "sourceDetail": "DISIS restudy; Re-posted 2026-04-24; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2022-001-2 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2022_Generation_Studies/DISIS_Results_Workbook_DIS2201-2%20Restudy-PowerFlow_Stability_SC_04242026_Final.xlsx",
    "topUpgrades": [
      {
        "costUsd": 19079994,
        "name": "Maud 138 kV substation Interconnection (Non-Shared NU) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3496432,
        "name": "Maud 138 kV substation GEN-2022-238 Interconnection (TOIF) (OGE) ",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line  - Beckham County - Potter -345 kV New Line (2024 ITP)",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 22576426
    }
  },
  "GEN-2023-015": {
    "allocatedCostUsd": 56870035.61,
    "cluster": "DISIS-2023-001",
    "costPerKw": 172.33,
    "costUnavailableReason": null,
    "requestMw": 330,
    "serviceCostUsd": {
      "ERIS": 56870035.61,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 42358867,
        "name": "Finney-Carpenter 345 KV line GEN-2023-015 Interconnection (Non-Shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 9334906.48,
        "name": "Build Second Red Willow 345/115 kV Transformer",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3480128,
        "name": "Finney-Carpenter 345 KV line GEN-2023-015 Interconnection (TOIF) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 14,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 11031040.61,
      "Interconnection": 45838995
    }
  },
  "GEN-2023-033": {
    "allocatedCostUsd": 2244303.18,
    "cluster": "DISIS-2023-001",
    "costPerKw": 11.22,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 2244303.18
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1265759,
        "name": "Liberty South 161 kV Substation GEN-2023-033 Interconnection (Non-Shared NU) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 940803,
        "name": "Liberty South 161 kV Substation GEN-2023-033 Interconnection (TOIF) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 18870.59,
        "name": "Switch Out Carpenter Line Reactor",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 37741.18,
      "Interconnection": 2206562
    }
  },
  "GEN-2023-034": {
    "allocatedCostUsd": 16020202,
    "cluster": "DISIS-2023-001",
    "costPerKw": 123.23,
    "costUnavailableReason": null,
    "requestMw": 130,
    "serviceCostUsd": {
      "ERIS": 16020202
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15091408,
        "name": "Clear Water - Waco 138 kV line GEN-2023-034 Interconnection (Non-Shared NU) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 928794,
        "name": "Clear Water - Waco 138 kV line GEN-2023-034 Interconnection (TOIF) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": null,
        "name": "Build a new EMPEC 7 to GEN-2021-096 345 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Interconnection": 16020202
    }
  },
  "GEN-2023-035": {
    "allocatedCostUsd": 6567000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 32.84,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 6567000,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6050000,
        "name": "Cleveland - Amber Tap 138 kV Line GEN-2023-035 Interconnection (Non-Shared NU) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 517000,
        "name": "Cleveland - Amber Tap 138 kV Line GEN-2023-035 Interconnection (TOIF) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line - Cogar - OU SW 138 kV",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 6567000
    }
  },
  "GEN-2023-037": {
    "allocatedCostUsd": 3394138.16,
    "cluster": "DISIS-2023-001",
    "costPerKw": 16.97,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 3394138.16
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3357305,
        "name": "Nearman 161 kV Substation GEN-2023-037  Interconnection (Non-Shared NU) (KACY)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 18416.58,
        "name": "Switch Out Carpenter Line Reactor",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 18416.58,
        "name": "Switch Out Finney Line Reactors",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 36833.16,
      "Interconnection": 3357305
    }
  },
  "GEN-2023-038": {
    "allocatedCostUsd": 8102358,
    "cluster": "DISIS-2023-001",
    "costPerKw": 40.51,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 8102358,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 5417961,
        "name": "Lula 138 kV Substation GEN-2023-038 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2684397,
        "name": "Lula 138 kV Substation GEN-2023-038 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Reconfigure Little City to Brown 138 kV Line",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 0,
      "Interconnection": 8102358
    }
  },
  "GEN-2023-055": {
    "allocatedCostUsd": 4369247,
    "cluster": "DISIS-2023-001",
    "costPerKw": 43.69,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 4369247
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2619247,
        "name": "Kerr Grove 161 kV GEN-2023-055 Interconnection (TOIF) (GRDA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1750000,
        "name": "Kerr Grove 161 kV GEN-2023-055 Interconnection (Non-Shared NU) (GRDA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 4369247
    }
  },
  "GEN-2023-057": {
    "allocatedCostUsd": 990399,
    "cluster": "DISIS-2023-001",
    "costPerKw": 6.6,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 990399
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 990399,
        "name": "Pawnee Switch 138 kV GEN-2023-057 Interconnection (TOIF) (GRDA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Pawnee Switch 138 kV GEN-2023-057 Interconnection (Non-Shared NU) (GRDA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 990399
    }
  },
  "GEN-2023-059": {
    "allocatedCostUsd": 13975000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 69.88,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 13975000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 11850000,
        "name": "Tap Rockhill to South Shreveport 138 kV line GEN-2023-059 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2125000,
        "name": "Tap Rockhill to South Shreveport 138 kV line GEN-2023-059 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Rebuild the RIV4525 to G20-079-TAP 161kV Line 1",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 13975000
    }
  },
  "GEN-2023-061": {
    "allocatedCostUsd": 4900000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 49,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 4900000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4200000,
        "name": "Carthage 161 kV Substation GEN-2023-061 Interconnection (Non-Shared NU) (SWPA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 700000,
        "name": "Carthage 161 kV Substation GEN-2023-061 Interconnection (TOIF) (SWPA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 4900000
    }
  },
  "GEN-2023-063": {
    "allocatedCostUsd": 13975000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 103.52,
    "costUnavailableReason": null,
    "requestMw": 135,
    "serviceCostUsd": {
      "ERIS": 13975000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 11850000,
        "name": "Catoosa - Owasso 88th 138 kV line GEN-2023-063 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2125000,
        "name": "Catoosa - Owasso 88th 138 kV line GEN-2023-063 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 13975000
    }
  },
  "GEN-2023-064": {
    "allocatedCostUsd": 9400000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 47,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 9400000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8600000,
        "name": "RS Kerr-Stigler 161 kV line GEN-2023-064 Interconnection (Non-Shared NU) (SWPA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 800000,
        "name": "RS Kerr-Stigler 161 kV line GEN-2023-064 Interconnection (TOIF) (SWPA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 9400000
    }
  },
  "GEN-2023-069": {
    "allocatedCostUsd": 6567000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 65.67,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 6567000,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6050000,
        "name": "Tupelo - Atoka 138 kV Line GEN-2023-069 Interconnection (Non-Shared NU) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 517000,
        "name": "Tupelo - Atoka 138 kV Line GEN-2023-069 Interconnection (TOIF) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Rebuild WOODWRD4 to WINDFRM4 138kV line 1",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 6567000
    }
  },
  "GEN-2023-077": {
    "allocatedCostUsd": 16248539.98,
    "cluster": "DISIS-2023-001",
    "costPerKw": 63.72,
    "costUnavailableReason": null,
    "requestMw": 255,
    "serviceCostUsd": {
      "ERIS": 16248539.98
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12899764.98,
        "name": "Substation 3740 345 kV Interconnection (DISIS-2023-001) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3348775,
        "name": "Substation 3740 345 kV GEN-2023-077 Interconnection (TOIF) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line - Elm Creek 345 kV - Tobias 345 kV New Line",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 16248539.98
    }
  },
  "GEN-2023-078": {
    "allocatedCostUsd": 15904129.98,
    "cluster": "DISIS-2023-001",
    "costPerKw": 62.37,
    "costUnavailableReason": null,
    "requestMw": 255,
    "serviceCostUsd": {
      "ERIS": 15904129.98
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12899764.98,
        "name": "Substation 3740 345 kV Interconnection (DISIS-2023-001) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3004365,
        "name": "Substation 3740 345 kV GEN-2023-078 Interconnection (TOIF) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line - Elm Creek 345 kV - Tobias 345 kV New Line",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 15904129.98
    }
  },
  "GEN-2023-079": {
    "allocatedCostUsd": 18332321.04,
    "cluster": "DISIS-2023-001",
    "costPerKw": 60.5,
    "costUnavailableReason": null,
    "requestMw": 303,
    "serviceCostUsd": {
      "ERIS": 18332321.04
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15327956.04,
        "name": "Substation 3740 345 kV Interconnection (DISIS-2023-001) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3004365,
        "name": "Substation 3740 345 kV GEN-2023-079 Interconnection (TOIF) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line - Elm Creek 345 kV - Tobias 345 kV New Line",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 18332321.04
    }
  },
  "GEN-2023-088": {
    "allocatedCostUsd": 1717000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 14.68,
    "costUnavailableReason": null,
    "requestMw": 117,
    "serviceCostUsd": {
      "ERIS": 1717000,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1200000,
        "name": "Pharaoh 138 kV Substation GEN-2023-088 Interconnection (Non-Shared NU) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 517000,
        "name": "Pharaoh 138 kV Substation GEN-2023-088 Interconnection (TOIF) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Rebuild WOODWRD4 to WINDFRM4 138kV line 1",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 1717000
    }
  },
  "GEN-2023-092": {
    "allocatedCostUsd": 6567000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 52.54,
    "costUnavailableReason": null,
    "requestMw": 125,
    "serviceCostUsd": {
      "ERIS": 6567000,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6050000,
        "name": "Unger - Frogville 138 kV line GEN-2023-092 Interconnection (Non-Shared NU) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 517000,
        "name": "Unger - Frogville 138 kV line GEN-2023-092 Interconnection (TOIF) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Rebuild WOODWRD4 to WINDFRM4 138kV line 1",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 6567000
    }
  },
  "GEN-2023-099": {
    "allocatedCostUsd": 172048.09,
    "cluster": "DISIS-2023-001",
    "costPerKw": 0.57,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 172048.09
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 112910,
        "name": "Jeffery Energy Center 345 kV Substation GEN-2023-099 Interconnection (TOIF) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 29569.05,
        "name": "Switch Out Carpenter Line Reactor",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 29569.05,
        "name": "Switch Out Finney Line Reactors",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 59138.09,
      "Interconnection": 112910
    }
  },
  "GEN-2023-102": {
    "allocatedCostUsd": 10447342,
    "cluster": "DISIS-2023-001",
    "costPerKw": 21.99,
    "costUnavailableReason": null,
    "requestMw": 475,
    "serviceCostUsd": {
      "ERIS": 10447342,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7460545,
        "name": "Degrasse 345 kV Substation Interconnection (DISIS-2023-001) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2986797,
        "name": "Degrasse 345 kV Substation GEN-2023-102 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Rebuild WOODWRD4 to WINDFRM4 138kV line 1",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 10447342
    }
  },
  "GEN-2023-104": {
    "allocatedCostUsd": 6567000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 65.67,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 6567000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6050000,
        "name": "Mooreland - Noel 138 kV Line GEN-2023-104 Interconnection (Non-Shared NU) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 517000,
        "name": "Mooreland - Noel 138 kV Line GEN-2023-104 Interconnection (TOIF) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Rebuild NOELSW4 to ROSEVLY4 138 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 6567000
    }
  },
  "GEN-2023-107": {
    "allocatedCostUsd": 20262674.87,
    "cluster": "DISIS-2023-001",
    "costPerKw": 67.54,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 20262674.87
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12235623.14,
        "name": "Build Second Red Willow 345/115 kV Transformer",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5338489,
        "name": "Setab 345 kV Substation Interconnection (DISIS-2023-001) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2206495,
        "name": "Setab 345 kV Substation GEN-2023-107 Interconnection (TOIF) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 9,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 12717690.87,
      "Interconnection": 7544984
    }
  },
  "GEN-2023-120": {
    "allocatedCostUsd": 7808660,
    "cluster": "DISIS-2023-001",
    "costPerKw": 60.07,
    "costUnavailableReason": null,
    "requestMw": 130,
    "serviceCostUsd": {
      "ERIS": 7808660
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4967846,
        "name": "Kress 115 kV Substation GEN-2023-120 Interconnection (Non-Shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2840814,
        "name": "Kress 115 kV Substation GEN-2023-120 Interconnection (TOIF) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Build New Phantom to Crossroads to Potter 765 kV Line",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 7808660
    }
  },
  "GEN-2023-132": {
    "allocatedCostUsd": 11624000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 77.49,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 11624000,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8600000,
        "name": "Jonesboro - Independence 161 kV GEN-2023-132 Interconnection (Non-Shared NU) (SWPA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2224000,
        "name": "Rebuild the existing 5HEBER.N# to GREERSF5 161 kV line",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 800000,
        "name": "Jonesboro - Independence 161 kV GEN-2023-132 Interconnection (TOIF) (SWPA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 2224000,
      "Interconnection": 9400000
    }
  },
  "GEN-2023-135": {
    "allocatedCostUsd": 378121,
    "cluster": "DISIS-2023-001",
    "costPerKw": 7.27,
    "costUnavailableReason": null,
    "requestMw": 52,
    "serviceCostUsd": {
      "ERIS": 378121
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 206941,
        "name": "Lydia 345kV substation GEN-2023-135 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 171180,
        "name": "Lydia 345kV substation GEN-2023-135 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 378121
    }
  },
  "GEN-2023-153": {
    "allocatedCostUsd": 6500000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 54.17,
    "costUnavailableReason": null,
    "requestMw": 120,
    "serviceCostUsd": {
      "ERIS": 6500000,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 5250000,
        "name": "Grant 115 kV Substation GEN-2023-153 Interconnection (Non-Shared NU) (Tri-State)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1250000,
        "name": "Grant 115 kV Substation GEN-2023-153 Interconnection (TOIF) (Tri-State)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line - Elm Creek 345 kV - Tobias 345 kV New Line",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 6500000
    }
  },
  "GEN-2023-161": {
    "allocatedCostUsd": 3266557,
    "cluster": "DISIS-2023-001",
    "costPerKw": 43.61,
    "costUnavailableReason": null,
    "requestMw": 74.9,
    "serviceCostUsd": {
      "ERIS": 3266557
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1764041,
        "name": "Roman Nose 138 kV Substation GEN-2023-161 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1502516,
        "name": "Roman Nose 138 kV Substation GEN-2023-161 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 3266557
    }
  },
  "GEN-2023-170": {
    "allocatedCostUsd": 7353684,
    "cluster": "DISIS-2023-001",
    "costPerKw": 49.02,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 7353684
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6267996,
        "name": "Salisbury 161 kV Substation GEN-2023-170 Interconnection (Non-Shared NU) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1085688,
        "name": "Salisbury 161 kV Substation GEN-2023-170 Interconnection (TOIF) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 7353684
    }
  },
  "GEN-2023-171": {
    "allocatedCostUsd": 3808031.28,
    "cluster": "DISIS-2023-001",
    "costPerKw": 25.39,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 3808031.28
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3280000,
        "name": "Sub M 161 kV Substation GEN-2023-171 Interconnection (Non-Shared NU) (INDN)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 500000,
        "name": "Sub M 161 kV Substation GEN-2023-171 Interconnection (TOIF) (INDN)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 14015.64,
        "name": "Switch Out Carpenter Line Reactor",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 28031.28,
      "Interconnection": 3780000
    }
  },
  "GEN-2023-172": {
    "allocatedCostUsd": 14716922.21,
    "cluster": "DISIS-2023-001",
    "costPerKw": 73.58,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 14716922.21
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6005658.67,
        "name": "Holcomb 345 kV Interconnection (DISIS-2023-001) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 5619646.91,
        "name": "Build Second Red Willow 345/115 kV Transformer",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2718247,
        "name": "Holcomb 345 kV GEN-2023-172 Interconnection (TOIF) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 9,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 5993016.54,
      "Interconnection": 8723905.67
    }
  },
  "GEN-2023-173": {
    "allocatedCostUsd": 8717584.6,
    "cluster": "DISIS-2023-001",
    "costPerKw": 87.18,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 8717584.6
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3002829.33,
        "name": "Holcomb 345 kV Interconnection (DISIS-2023-001) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2809823.46,
        "name": "Build Second Red Willow 345/115 kV Transformer",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2718247,
        "name": "Holcomb 345 kV GEN-2023-173 Interconnection (TOIF) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 9,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 2996508.27,
      "Interconnection": 5721076.33
    }
  },
  "GEN-2023-177": {
    "allocatedCostUsd": 10839233,
    "cluster": "DISIS-2023-001",
    "costPerKw": 54.2,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 10839233
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7079843,
        "name": "Paoli - Seminole 138 kV line tap GEN-2023-177 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3759390,
        "name": "Paoli - Seminole 138 kV line tap GEN-2023-177 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 10839233
    }
  },
  "GEN-2023-193": {
    "allocatedCostUsd": 13975000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 79.86,
    "costUnavailableReason": null,
    "requestMw": 175,
    "serviceCostUsd": {
      "ERIS": 13975000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 11850000,
        "name": "Pirkey - Whitney 138 kV Line GEN-2023-193 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2125000,
        "name": "Pirkey - Whitney 138 kV Line GEN-2023-193 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 13975000
    }
  },
  "GEN-2023-199": {
    "allocatedCostUsd": 1700000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 6.8,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 1700000,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1200000,
        "name": "Twin Church 230 kV Substation GEN-2023-199 Interconnection (Non-Shared NU) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 500000,
        "name": "Twin Church 230 kV Substation GEN-2023-199 Interconnection (TOIF) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line - Elm Creek 345 kV - Tobias 345 kV New Line",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 1700000
    }
  },
  "GEN-2023-204": {
    "allocatedCostUsd": 23275000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 24.42,
    "costUnavailableReason": null,
    "requestMw": 953,
    "serviceCostUsd": {
      "ERIS": 23275000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 20000000,
        "name": "Welsh-Lydia 345kV Line GEN-2023-204 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 3275000,
        "name": "Welsh-Lydia 345kV Line GEN-2023-204 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Rebuild the RIV4525 to G20-079-TAP 161kV Line 1",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 23275000
    }
  },
  "GEN-2023-205": {
    "allocatedCostUsd": 13775000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 76.53,
    "costUnavailableReason": null,
    "requestMw": 180,
    "serviceCostUsd": {
      "ERIS": 13775000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 11850000,
        "name": "McAlester City - Weleetka 138 kV line GEN-2023-205 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1925000,
        "name": "McAlester City - Weleetka 138 kV line GEN-2023-205 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 13775000
    }
  },
  "GEN-2023-206": {
    "allocatedCostUsd": 130000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 2.6,
    "costUnavailableReason": null,
    "requestMw": 50,
    "serviceCostUsd": {
      "ERIS": 130000
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 100000,
        "name": "Battlefield BESS 161 kV Substation GEN-2023-206 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 30000,
        "name": "Battlefield BESS 161 kV Substation GEN-2023-206 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 130000
    }
  },
  "GEN-2023-210": {
    "allocatedCostUsd": 6567000,
    "cluster": "DISIS-2023-001",
    "costPerKw": 34.38,
    "costUnavailableReason": null,
    "requestMw": 191,
    "serviceCostUsd": {
      "ERIS": 6567000,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6050000,
        "name": "Prague - Chernicky 138 kV Line GEN-2023-210 Interconnection (Non-Shared NU) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 517000,
        "name": "Prague - Chernicky 138 kV Line GEN-2023-210 Interconnection (TOIF) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Rebuild WOODWRD4 to WINDFRM4 138kV line 1",
        "serviceType": "NRIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 6567000
    }
  },
  "GEN-2023-220": {
    "allocatedCostUsd": 34840663,
    "cluster": "DISIS-2023-001",
    "costPerKw": 139.36,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 34840663
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 32882571,
        "name": "Emporia Energy Center - Swissvale 345 kV Line GEN-2023-220 Interconnection (Non-Shared NU) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1958092,
        "name": "Emporia Energy Center - Swissvale 345 kV Line GEN-2023-220 Interconnection (TOIF) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Build New Tolk to Potter County 345 kV Line",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 34840663
    }
  },
  "GEN-2023-221": {
    "allocatedCostUsd": 35195423,
    "cluster": "DISIS-2023-001",
    "costPerKw": 140.78,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 35195423
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 33237331,
        "name": "Emporia Energy Center - Swissvale 345 kV Line GEN-2023-221 Interconnection (Non-Shared NU) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1958092,
        "name": "Emporia Energy Center - Swissvale 345 kV Line GEN-2023-221 Interconnection (TOIF) (Evergy)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Build New Tolk to Potter County 345 kV Line",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 3,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 35195423
    }
  },
  "GEN-2023-222": {
    "allocatedCostUsd": 138433333.33,
    "cluster": "DISIS-2023-001",
    "costPerKw": 289.61,
    "costUnavailableReason": null,
    "requestMw": 478,
    "serviceCostUsd": {
      "ERIS": 131266666.66,
      "NRIS": 7166666.67
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 40666666.67,
        "name": "Build a new Beatrice Power Station 345/115 kV to MONOLITH 3 345 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 38933333.33,
        "name": "New Beatrice Power Station 345 kV Interconnection (DISIS-2023-001) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 35333333.33,
        "name": "Build a new Beatrice Power Station 345/115 kV to DAYKIN 345 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 15,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 98500000,
      "Interconnection": 39933333.33
    }
  },
  "GEN-2023-223": {
    "allocatedCostUsd": 69716666.67,
    "cluster": "DISIS-2023-001",
    "costPerKw": 291.7,
    "costUnavailableReason": null,
    "requestMw": 239,
    "serviceCostUsd": {
      "ERIS": 66133333.34,
      "NRIS": 3583333.33
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 20333333.33,
        "name": "Build a new Beatrice Power Station 345/115 kV to MONOLITH 3 345 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 19466666.67,
        "name": "New Beatrice Power Station 345 kV Interconnection (DISIS-2023-001) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 17666666.67,
        "name": "Build a new Beatrice Power Station 345/115 kV to DAYKIN 345 kV line 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 15,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Current Study": 49250000,
      "Interconnection": 20466666.67
    }
  },
  "GEN-2023-224": {
    "allocatedCostUsd": 77204892.09,
    "cluster": "DISIS-2023-001",
    "costPerKw": 161.52,
    "costUnavailableReason": null,
    "requestMw": 478,
    "serviceCostUsd": {
      "ERIS": 77204892.09
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 76204892.09,
        "name": "Olive Creek 345 kV Substation Interconnection (DISIS-2023-001) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1000000,
        "name": "Olive Creek 345 kV Substation GEN-2023-224 Interconnection (TOIF) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line - Elm Creek 345 kV - Tobias 345 kV New Line",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 77204892.09
    }
  },
  "GEN-2023-225": {
    "allocatedCostUsd": 35595107.91,
    "cluster": "DISIS-2023-001",
    "costPerKw": 164.03,
    "costUnavailableReason": null,
    "requestMw": 217,
    "serviceCostUsd": {
      "ERIS": 35595107.91
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 34595107.91,
        "name": "Olive Creek 345 kV Substation Interconnection (DISIS-2023-001) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 1000000,
        "name": "Olive Creek 345 kV Substation GEN-2023-225 Interconnection (TOIF) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line - Elm Creek 345 kV - Tobias 345 kV New Line",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 35595107.91
    }
  },
  "GEN-2023-229": {
    "allocatedCostUsd": 5717804,
    "cluster": "DISIS-2023-001",
    "costPerKw": 24.86,
    "costUnavailableReason": null,
    "requestMw": 230,
    "serviceCostUsd": {
      "ERIS": 5717804,
      "NRIS": 0
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3553691,
        "name": "Southwestern Power Station 138 kV Sub (SWS4) GEN-2023-229 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2164113,
        "name": "Southwestern Power Station 138 kV Substation (SWS4) GEN-2023-229 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 0,
        "name": "Line - Cogar - OU SW 138 kV",
        "serviceType": "ERIS",
        "upgradeType": "Contingent"
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Contingent": 0,
      "Interconnection": 5717804
    }
  },
  "GEN-2023-230": {
    "allocatedCostUsd": 5913390,
    "cluster": "DISIS-2023-001",
    "costPerKw": 39.42,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 5913390
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3338007,
        "name": "Red Pointe 138 kV Substation GEN-2023-230 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2575383,
        "name": "Red Pointe 138 kV Substation GEN-2023-230 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 5913390
    }
  },
  "GEN-2023-241": {
    "allocatedCostUsd": 6434878,
    "cluster": "DISIS-2023-001",
    "costPerKw": 69.19,
    "costUnavailableReason": null,
    "requestMw": 93,
    "serviceCostUsd": {
      "ERIS": 6434878
    },
    "sourceDetail": "DISIS restudy; Posted 2025-12-05; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2023-001-1 Restudy Powerflow, Stability and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2023_Generation_Studies/DISIS_Results_Workbook_DIS2023-1_Restudy-PowerFlow_Stability_SC_12_5_2025.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4107515,
        "name": "Winnsboro 138 kV Substation GEN-2023-241 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      },
      {
        "costUsd": 2327363,
        "name": "Winnsboro 138 kV Substation GEN-2023-241 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection"
      }
    ],
    "upgradeCount": 2,
    "upgradeTypeCostUsd": {
      "Interconnection": 6434878
    }
  },
  "GEN-2024-003": {
    "allocatedCostUsd": 5070048.51,
    "cluster": "DISIS-2024-001",
    "costPerKw": 49.61,
    "costUnavailableReason": null,
    "requestMw": 102.2,
    "serviceCostUsd": {
      "ERIS": 5070048.51
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2961291.69,
        "name": "Rebuild 3-winding transformer 515336 VBI    2    69 515339 VBI    5    161 515769 VBI    1    13 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1750000,
        "name": "Fitzhugh 161kV GEN-2024-003 Interconnection (TOIF) (AECC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 222438.56,
        "name": "Rebuild line 515235 PECANCK7    345 516374 KEEFTON7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Current Study": 3320048.51,
      "Interconnection ": 1750000
    }
  },
  "GEN-2024-007": {
    "allocatedCostUsd": 64940035.27,
    "cluster": "DISIS-2024-001",
    "costPerKw": 811.75,
    "costUnavailableReason": null,
    "requestMw": 80,
    "serviceCostUsd": {
      "ERIS": 64899017.71,
      "NRIS": 41017.56
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8964145.54,
        "name": "Rebuild line 530582 S HAYS6    230 539679 GRTBEND6    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5684745.98,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4981000,
        "name": "Rebuild line 530569 GB STH 2    69 530596 WPRTTS 2    69 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 80,
    "upgradeTypeCostUsd": {
      "Current Study": 60658688.2,
      "Interconnection ": 4281347.07
    }
  },
  "GEN-2024-013": {
    "allocatedCostUsd": 8719922.1,
    "cluster": "DISIS-2024-001",
    "costPerKw": 17.58,
    "costUnavailableReason": null,
    "requestMw": 496,
    "serviceCostUsd": {
      "ERIS": 6530807.91,
      "NRIS": 2189114.19
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3500000,
        "name": "Norman Hills 345 kV GEN-2024-013 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2000000,
        "name": "Norman Hills 345 kV GEN-2024-013 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1582532.03,
        "name": "Rebuild line 514992 TURNER 4    138 516097 NORMHLL4    138 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 11,
    "upgradeTypeCostUsd": {
      "Current Study": 3219922.1,
      "Interconnection ": 5500000
    }
  },
  "GEN-2024-015": {
    "allocatedCostUsd": 269540413.26,
    "cluster": "DISIS-2024-001",
    "costPerKw": 962.64,
    "costUnavailableReason": null,
    "requestMw": 280,
    "serviceCostUsd": {
      "ERIS": 265518658.68,
      "NRIS": 4021754.58
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 34945040.14,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 30512101.78,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 30334912.46,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 59,
    "upgradeTypeCostUsd": {
      "Current Study": 240979742.26,
      "Interconnection ": 28560671
    }
  },
  "GEN-2024-016": {
    "allocatedCostUsd": 112043460.48,
    "cluster": "DISIS-2024-001",
    "costPerKw": 373.48,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 83748724.6,
      "NRIS": 28294735.88
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17836757,
        "name": "Post Rock - Macon 345 kV Line GEN-2024-016 Interconnection (Non-Shared NU) (ITCGP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 11610000,
        "name": "Rebuild line 640066 AXTELL 7    115 640275 MINDEN 7    115 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 10750000,
        "name": "Rebuild line 640261 LOWELL 7    115 640275 MINDEN 7    115 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 57,
    "upgradeTypeCostUsd": {
      "Current Study": 92900270.48,
      "Interconnection ": 19143190
    }
  },
  "GEN-2024-017": {
    "allocatedCostUsd": 7745506.4,
    "cluster": "DISIS-2024-001",
    "costPerKw": 124.93,
    "costUnavailableReason": null,
    "requestMw": 62,
    "serviceCostUsd": {
      "ERIS": 4246316.2,
      "NRIS": 3499190.2
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1915935.83,
        "name": "Rebuild line 645456 S3456  3    345 645458 S3458  3    345 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1095761.86,
        "name": "Rebuild line 640277 MOORE  3    345 650114 NW68HOLDRG3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 919522.87,
        "name": "Add 3-winding transformer 640590 OLIVECREEK 3    345 640591 OLIVECREEK 7    115 640597 OLIVECRK.T29    13 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 14,
    "upgradeTypeCostUsd": {
      "Current Study": 7745506.4,
      "Interconnection ": 0
    }
  },
  "GEN-2024-018": {
    "allocatedCostUsd": 4739185.32,
    "cluster": "DISIS-2024-001",
    "costPerKw": 152.88,
    "costUnavailableReason": null,
    "requestMw": 31,
    "serviceCostUsd": {
      "ERIS": 3080758.71,
      "NRIS": 1658426.61
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1090909.09,
        "name": "New Beatrice Power Station 345 kV GEN-2024-018/019/022/023 Interconnection (Shared NU) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 936657.75,
        "name": "Rebuild line 645456 S3456  3    345 645458 S3458  3    345 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 750000,
        "name": "New Beatrice Power Station 345 kV GEN-2024-018/019/022/023 Interconnection (TOIF) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 15,
    "upgradeTypeCostUsd": {
      "Current Study": 2898276.23,
      "Interconnection ": 1840909.09
    }
  },
  "GEN-2024-019": {
    "allocatedCostUsd": 8364734.28,
    "cluster": "DISIS-2024-001",
    "costPerKw": 134.92,
    "costUnavailableReason": null,
    "requestMw": 62,
    "serviceCostUsd": {
      "ERIS": 5047881.06,
      "NRIS": 3316853.22
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1873315.49,
        "name": "Rebuild line 645456 S3456  3    345 645458 S3458  3    345 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1818181.82,
        "name": "New Beatrice Power Station 345 kV GEN-2024-018/019/022/023 Interconnection (Shared NU) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 951596.24,
        "name": "Rebuild line 640277 MOORE  3    345 650114 NW68HOLDRG3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 15,
    "upgradeTypeCostUsd": {
      "Current Study": 5796552.46,
      "Interconnection ": 2568181.82
    }
  },
  "GEN-2024-020": {
    "allocatedCostUsd": 54721733.83,
    "cluster": "DISIS-2024-001",
    "costPerKw": 140.31,
    "costUnavailableReason": null,
    "requestMw": 390,
    "serviceCostUsd": {
      "ERIS": 32710698.71,
      "NRIS": 22011035.12
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12051854.44,
        "name": "Rebuild line 645456 S3456  3    345 645458 S3458  3    345 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 6892695.54,
        "name": "Rebuild line 640277 MOORE  3    345 650114 NW68HOLDRG3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5784095.48,
        "name": "Add 3-winding transformer 640590 OLIVECREEK 3    345 640591 OLIVECREEK 7    115 640597 OLIVECRK.T29    13 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 14,
    "upgradeTypeCostUsd": {
      "Current Study": 48721733.83,
      "Interconnection ": 6000000
    }
  },
  "GEN-2024-021": {
    "allocatedCostUsd": 73460862.22,
    "cluster": "DISIS-2024-001",
    "costPerKw": 136.04,
    "costUnavailableReason": null,
    "requestMw": 540,
    "serviceCostUsd": {
      "ERIS": 42984044.36,
      "NRIS": 30476817.86
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 16687183.07,
        "name": "Rebuild line 645456 S3456  3    345 645458 S3458  3    345 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9543732.29,
        "name": "Rebuild line 640277 MOORE  3    345 650114 NW68HOLDRG3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8008747.59,
        "name": "Add 3-winding transformer 640590 OLIVECREEK 3    345 640591 OLIVECREEK 7    115 640597 OLIVECRK.T29    13 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 14,
    "upgradeTypeCostUsd": {
      "Current Study": 67460862.22,
      "Interconnection ": 6000000
    }
  },
  "GEN-2024-022": {
    "allocatedCostUsd": 40484912.09,
    "cluster": "DISIS-2024-001",
    "costPerKw": 103.81,
    "costUnavailableReason": null,
    "requestMw": 390,
    "serviceCostUsd": {
      "ERIS": 19620835.36,
      "NRIS": 20864076.72
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 11783758.75,
        "name": "Rebuild line 645456 S3456  3    345 645458 S3458  3    345 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5985847.33,
        "name": "Rebuild line 640277 MOORE  3    345 650114 NW68HOLDRG3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4925399.37,
        "name": "Rebuild line 640277 MOORE  3    345 650189 103&ROKEBY3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 15,
    "upgradeTypeCostUsd": {
      "Current Study": 36462184.82,
      "Interconnection ": 4022727.27
    }
  },
  "GEN-2024-023": {
    "allocatedCostUsd": 28811232.85,
    "cluster": "DISIS-2024-001",
    "costPerKw": 106.71,
    "costUnavailableReason": null,
    "requestMw": 270,
    "serviceCostUsd": {
      "ERIS": 14366872.04,
      "NRIS": 14444360.81
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8157986.83,
        "name": "Rebuild line 645456 S3456  3    345 645458 S3458  3    345 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4144048.15,
        "name": "Rebuild line 640277 MOORE  3    345 650114 NW68HOLDRG3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3409891.87,
        "name": "Rebuild line 640277 MOORE  3    345 650189 103&ROKEBY3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 15,
    "upgradeTypeCostUsd": {
      "Current Study": 25243051.03,
      "Interconnection ": 3568181.82
    }
  },
  "GEN-2024-025": {
    "allocatedCostUsd": 73837779.92,
    "cluster": "DISIS-2024-001",
    "costPerKw": 246.13,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 73595644.29,
      "NRIS": 242135.63
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 10457896.1,
        "name": "Rebuild line 508359 WELSH  7    345 508841 WILKES 7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7229595.53,
        "name": "Rebuild line 508072 NWTXARK7    345 508359 WELSH  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 6282622.1,
        "name": "Rebuild line 508359 WELSH  7    345 776060 G23-204-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 111,
    "upgradeTypeCostUsd": {
      "Current Study": 64712779.92,
      "Interconnection ": 9125000
    }
  },
  "GEN-2024-029": {
    "allocatedCostUsd": 88396859.88,
    "cluster": "DISIS-2024-001",
    "costPerKw": 589.31,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 79021354.62,
      "NRIS": 9375505.25
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 9370153.3,
        "name": "Rebuild line 514827 CTNWOOD4    138 515377 CRESENT4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9135717.01,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 6547173.1,
        "name": "Rebuild line 520847 TWNLKJT4    138 521073 TWNLKSW4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 124,
    "upgradeTypeCostUsd": {
      "Current Study": 84896859.88,
      "Interconnection ": 3500000
    }
  },
  "GEN-2024-030": {
    "allocatedCostUsd": 186103011.34,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1240.69,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 186019654.36,
      "NRIS": 83356.98
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 42947283.55,
        "name": "Add line 659131 LARAMIE_-MB3    345 800120 UNDERWOOD 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 35047726.22,
        "name": "Add line 652424 BELFELD3    345 800121 MAURINE 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 33819770.13,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 62,
    "upgradeTypeCostUsd": {
      "Current Study": 178603011.34,
      "Interconnection ": 7500000
    }
  },
  "GEN-2024-032": {
    "allocatedCostUsd": 230514623.71,
    "cluster": "DISIS-2024-001",
    "costPerKw": 922.06,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 228680314.58,
      "NRIS": 1834309.13
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 60202704.72,
        "name": "Add line 659131 LARAMIE_-MB3    345 800120 UNDERWOOD 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 47370150.01,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 20177172.14,
        "name": "Rebuild line 523097 HITCHLAND  7    345 784950 G24-266_TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 56,
    "upgradeTypeCostUsd": {
      "Current Study": 227014623.71,
      "Interconnection ": 3500000
    }
  },
  "GEN-2024-034": {
    "allocatedCostUsd": 62416115.32,
    "cluster": "DISIS-2024-001",
    "costPerKw": 356.66,
    "costUnavailableReason": null,
    "requestMw": 175,
    "serviceCostUsd": {
      "ERIS": 54120117.39,
      "NRIS": 8295997.94
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 30940000,
        "name": "Forman 115 kV Substation GEN-2024-034 Interconnection (Non-Shared NU) (WAPA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 15996166.5,
        "name": "Rebuild line 652522 SUMMIT-7    115 652531 WATERTN7    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5982243.36,
        "name": "Rebuild line 652296 WARD   4    230 652426 BISMARK4    230 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 23,
    "upgradeTypeCostUsd": {
      "Current Study": 31066115.32,
      "Interconnection ": 31350000
    }
  },
  "GEN-2024-035": {
    "allocatedCostUsd": 175878041.03,
    "cluster": "DISIS-2024-001",
    "costPerKw": 651.4,
    "costUnavailableReason": null,
    "requestMw": 270,
    "serviceCostUsd": {
      "ERIS": 175878041.03
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28979326.57,
        "name": "Rebuild line 652529 WATERTN3    345 659165 CROCKER_-BE3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 25469977.03,
        "name": "Rebuild line 652568 GROTONSOUTH7    115 655481 REDFELD-ER7    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 20755023.95,
        "name": "Rebuild line 652522 SUMMIT-7    115 655457 BRISTOL-ER7    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 28,
    "upgradeTypeCostUsd": {
      "Current Study": 165917887.03,
      "Interconnection ": 9960154
    }
  },
  "GEN-2024-038": {
    "allocatedCostUsd": 108253379.69,
    "cluster": "DISIS-2024-001",
    "costPerKw": 360.84,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 91675064.1,
      "NRIS": 16578315.59
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 27318155.61,
        "name": "Rebuild line 532913 KELLY  5    161 532920 TECHILL5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 20250000,
        "name": "Cooper - S12080 161 kV line GEN-2024-038 Interconnection (Non-Shared NU) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 12679036.67,
        "name": "Rebuild line 645456 S3456  3    345 645458 S3458  3    345 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 19,
    "upgradeTypeCostUsd": {
      "Current Study": 87527340.69,
      "Interconnection ": 20726039
    }
  },
  "GEN-2024-039": {
    "allocatedCostUsd": 111041418.48,
    "cluster": "DISIS-2024-001",
    "costPerKw": 444.17,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 90616595.4,
      "NRIS": 20424823.08
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 34470638.78,
        "name": "Rebuild line 532913 KELLY  5    161 532920 TECHILL5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 20250000,
        "name": "Humboldt - S1280 161 kV line GEN-2024-039 Interconnection (Non-Shared NU) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 8187112.08,
        "name": "Rebuild line 645456 S3456  3    345 645458 S3458  3    345 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 18,
    "upgradeTypeCostUsd": {
      "Current Study": 90315379.48,
      "Interconnection ": 20726039
    }
  },
  "GEN-2024-040": {
    "allocatedCostUsd": 45761595.09,
    "cluster": "DISIS-2024-001",
    "costPerKw": 263,
    "costUnavailableReason": null,
    "requestMw": 174,
    "serviceCostUsd": {
      "ERIS": 22748978.95,
      "NRIS": 23012616.14
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 22347871.06,
        "name": "Rebuild line 645456 S3456  3    345 645458 S3458  3    345 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 22250000,
        "name": "S3458 to Cooper 345 kV line GEN-2024-040 Interconnection (Non-Shared NU) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 496523,
        "name": "S3458 to Cooper 345 kV line GEN-2024-040 Interconnection (TOIF) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Current Study": 23015072.09,
      "Interconnection ": 22746523
    }
  },
  "GEN-2024-041": {
    "allocatedCostUsd": 167818663.77,
    "cluster": "DISIS-2024-001",
    "costPerKw": 671.27,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 166793305.5,
      "NRIS": 1025358.27
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28073345.01,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 27825293.95,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 21788193.41,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 59,
    "upgradeTypeCostUsd": {
      "Current Study": 148934423.65,
      "Interconnection ": 18884240.12
    }
  },
  "GEN-2024-042": {
    "allocatedCostUsd": 167506917.87,
    "cluster": "DISIS-2024-001",
    "costPerKw": 670.03,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 166481559.6,
      "NRIS": 1025358.27
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28073345.01,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 27825293.95,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 21788193.41,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 58,
    "upgradeTypeCostUsd": {
      "Current Study": 148622677.75,
      "Interconnection ": 18884240.12
    }
  },
  "GEN-2024-043": {
    "allocatedCostUsd": 213353501.03,
    "cluster": "DISIS-2024-001",
    "costPerKw": 853.41,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 212908971.79,
      "NRIS": 444529.24
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 29754372.46,
        "name": "Crossroads - Tolk 345 kV Line GEN-2024-043 Interconnection (Non-Shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 24899390.58,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 22522583.19,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 62,
    "upgradeTypeCostUsd": {
      "Current Study": 178824832.36,
      "Interconnection ": 34528668.67
    }
  },
  "GEN-2024-044": {
    "allocatedCostUsd": 31626007.9,
    "cluster": "DISIS-2024-001",
    "costPerKw": 878.5,
    "costUnavailableReason": null,
    "requestMw": 36,
    "serviceCostUsd": {
      "ERIS": 31597196.11,
      "NRIS": 28811.78
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 16475000,
        "name": "Hosston - Plain Dealing 69 kV Line GEN-2024-044 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3475000,
        "name": "Hosston - Plain Dealing 69 kV Line GEN-2024-044 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3394134.9,
        "name": "Rebuild line 508813 PLAINDL2    69 778290 G24-044-TAP    69 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 97,
    "upgradeTypeCostUsd": {
      "Current Study": 11676007.9,
      "Interconnection ": 19950000
    }
  },
  "GEN-2024-045": {
    "allocatedCostUsd": 298712101.3,
    "cluster": "DISIS-2024-001",
    "costPerKw": 865.83,
    "costUnavailableReason": null,
    "requestMw": 345,
    "serviceCostUsd": {
      "ERIS": 298665448.15,
      "NRIS": 46653.15
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 36223935.09,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 24621028.02,
        "name": "Rebuild line 523095 HITCHLAND  6    230 778320 G24-045-TAP    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 23645500,
        "name": "Rebuild line 523309 MOORE_CNTY 6    230 778320 G24-045-TAP    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 55,
    "upgradeTypeCostUsd": {
      "Current Study": 283222211.8,
      "Interconnection ": 15489889.5
    }
  },
  "GEN-2024-046": {
    "allocatedCostUsd": 297696852.5,
    "cluster": "DISIS-2024-001",
    "costPerKw": 862.89,
    "costUnavailableReason": null,
    "requestMw": 345,
    "serviceCostUsd": {
      "ERIS": 297650199.35,
      "NRIS": 46653.15
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 36223935.09,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 24621028.02,
        "name": "Rebuild line 523095 HITCHLAND  6    230 778320 G24-045-TAP    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 23645500,
        "name": "Rebuild line 523309 MOORE_CNTY 6    230 778320 G24-045-TAP    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 55,
    "upgradeTypeCostUsd": {
      "Current Study": 283222211.8,
      "Interconnection ": 14474640.7
    }
  },
  "GEN-2024-050": {
    "allocatedCostUsd": 339113883.66,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1130.38,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 338915710.28,
      "NRIS": 198173.39
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 66386000,
        "name": "Rebuild line 525481 PLANT_X    6    230 525520 OLSON 6    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 35605829.27,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 27849721.02,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 66,
    "upgradeTypeCostUsd": {
      "Current Study": 334034134.15,
      "Interconnection ": 5079749.51
    }
  },
  "GEN-2024-051": {
    "allocatedCostUsd": 25553974.59,
    "cluster": "DISIS-2024-001",
    "costPerKw": 150.32,
    "costUnavailableReason": null,
    "requestMw": 170,
    "serviceCostUsd": {
      "ERIS": 15070140.42,
      "NRIS": 10483834.17
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7533500,
        "name": "Waverly 115 kV Substation GEN-2024-051 Interconnection (TOIF) (LES)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 7533500,
        "name": "Waverly 115 kV Substation GEN-2024-051 Interconnection (Non-Shared NU) (LES)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 6762519.28,
        "name": "Rebuild line 646214 S1214  5    161 650169 70&BLUFF  5    161 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 8,
    "upgradeTypeCostUsd": {
      "Current Study": 10486974.59,
      "Interconnection ": 15067000
    }
  },
  "GEN-2024-052": {
    "allocatedCostUsd": 24253486.36,
    "cluster": "DISIS-2024-001",
    "costPerKw": 577.46,
    "costUnavailableReason": null,
    "requestMw": 42,
    "serviceCostUsd": {
      "ERIS": 24219697.61,
      "NRIS": 33788.75
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2000000,
        "name": "Unger - West Bank Tap 138 kV Line GEN-2024-052 Interconnection (TOIF) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1991166.01,
        "name": "Rebuild line 521098 WSBNKTP4    138 778530 G24-052-TAP    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1814814.81,
        "name": "Unger - West Bank Tap 138 kV Line GEN-2024-052/373 Interconnection (Shared NU) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 148,
    "upgradeTypeCostUsd": {
      "Current Study": 20438671.55,
      "Interconnection ": 3814814.81
    }
  },
  "GEN-2024-054": {
    "allocatedCostUsd": 2522781.08,
    "cluster": "DISIS-2024-001",
    "costPerKw": 21.02,
    "costUnavailableReason": null,
    "requestMw": 120,
    "serviceCostUsd": {
      "ERIS": 2522781.08
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1039692.94,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 506927.74,
        "name": "Add line 516106 BOBCAT 7    345 539841 G-2011-008-1    345 YY",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 386886.36,
        "name": "Rebuild line 532793 NEOSHO 7    345 784170 G24-240-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 13,
    "upgradeTypeCostUsd": {
      "Current Study": 2409870.08,
      "Interconnection ": 112911
    }
  },
  "GEN-2024-055": {
    "allocatedCostUsd": 24406887.98,
    "cluster": "DISIS-2024-001",
    "costPerKw": 139.47,
    "costUnavailableReason": null,
    "requestMw": 175,
    "serviceCostUsd": {
      "ERIS": 24406887.98
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15550547,
        "name": "Butler - Nevada 161 kV line GEN-2024-055 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1621177.19,
        "name": "Rebuild line 300071 5CLINTN    161 761278 G17-108-TAP    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1609245.77,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 17,
    "upgradeTypeCostUsd": {
      "Current Study": 7361217.98,
      "Interconnection ": 17045670
    }
  },
  "GEN-2024-056": {
    "allocatedCostUsd": 37192253.56,
    "cluster": "DISIS-2024-001",
    "costPerKw": 309.94,
    "costUnavailableReason": null,
    "requestMw": 120,
    "serviceCostUsd": {
      "ERIS": 36893249.49,
      "NRIS": 299004.07
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7000000,
        "name": "Cow Creek - Morrison 138 kV line GEN-2024-056 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2716897.53,
        "name": "Rebuild line 532768 EMPEC 7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2470894.22,
        "name": "Rebuild line 532796 WICHITA7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 107,
    "upgradeTypeCostUsd": {
      "Current Study": 28192253.56,
      "Interconnection ": 9000000
    }
  },
  "GEN-2024-058": {
    "allocatedCostUsd": 87612589.18,
    "cluster": "DISIS-2024-001",
    "costPerKw": 438.06,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 87612589.18
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17175000,
        "name": "Farmland - Delaware 138 kV line GEN-2024-058 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 8923823.04,
        "name": "Rebuild line 510379 DELWARE4    138 763113 G18-079-TAP    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7162185.41,
        "name": "Rebuild line 533008 TV1MNDV4    138 533020 NEOSHOS4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 85,
    "upgradeTypeCostUsd": {
      "Current Study": 67112589.18,
      "Interconnection ": 20500000
    }
  },
  "GEN-2024-061": {
    "allocatedCostUsd": 43809048,
    "cluster": "DISIS-2024-001",
    "costPerKw": 219.05,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 43676104.43,
      "NRIS": 132943.57
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 14040446,
        "name": "Creswell 138 kV Substation GEN-2024-061 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 8674611.7,
        "name": "Rebuild line 514804 MIDLTNT4    138 532981 CRESWLN4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3860879.35,
        "name": "Add line 515378 WWRDEHV9    765 523966 POTTER_CO  9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 25,
    "upgradeTypeCostUsd": {
      "Current Study": 28728362,
      "Interconnection ": 15080686
    }
  },
  "GEN-2024-062": {
    "allocatedCostUsd": 172304113.71,
    "cluster": "DISIS-2024-001",
    "costPerKw": 749.15,
    "costUnavailableReason": null,
    "requestMw": 230,
    "serviceCostUsd": {
      "ERIS": 159874930.58,
      "NRIS": 12429183.14
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 26713311.48,
        "name": "Rebuild line 520882 DOVERSW4    138 521016 OKEENE 4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 14368682.24,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 10956000,
        "name": "Rebuild line 520603 NKNGFSH4    138 520882 DOVERSW4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 125,
    "upgradeTypeCostUsd": {
      "Current Study": 170304113.71,
      "Interconnection ": 2000000
    }
  },
  "GEN-2024-063": {
    "allocatedCostUsd": 231568764.35,
    "cluster": "DISIS-2024-001",
    "costPerKw": 904.57,
    "costUnavailableReason": null,
    "requestMw": 256,
    "serviceCostUsd": {
      "ERIS": 231395860.55,
      "NRIS": 172903.8
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 30941967.28,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 25485938.57,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 24853944.05,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 57,
    "upgradeTypeCostUsd": {
      "Current Study": 220221688.5,
      "Interconnection ": 11347075.85
    }
  },
  "GEN-2024-065": {
    "allocatedCostUsd": 31221793.36,
    "cluster": "DISIS-2024-001",
    "costPerKw": 208.15,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 30682644.72,
      "NRIS": 539148.64
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 9500000,
        "name": "FREMONT7 115 kV Substation GEN-2024-065 Interconnection (Non-Shared NU) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 8125000,
        "name": "Add 3-winding transformer 640173 FREMONT7    115 643058 FREMONT T1 9    13 647976 S976   8    69 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8125000,
        "name": "Add 3-winding transformer 640173 FREMONT7    115 643059 FREMONT T4 9    13 647976 S976   8    69 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 9,
    "upgradeTypeCostUsd": {
      "Current Study": 21221793.36,
      "Interconnection ": 10000000
    }
  },
  "GEN-2024-067": {
    "allocatedCostUsd": 72767690.13,
    "cluster": "DISIS-2024-001",
    "costPerKw": 191.49,
    "costUnavailableReason": null,
    "requestMw": 380,
    "serviceCostUsd": {
      "ERIS": 72632287.45,
      "NRIS": 135402.68
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 27448195.79,
        "name": "Add line 640600 DAYKIN3    345 785610 G24-288-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11196357.26,
        "name": "Rebuild line 640277 MOORE  3    345 640525 TOBIAS     3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 6947175.71,
        "name": "Add line 532771 RENO   7    345 532796 WICHITA7    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 25,
    "upgradeTypeCostUsd": {
      "Current Study": 66830817.13,
      "Interconnection ": 5936873
    }
  },
  "GEN-2024-068": {
    "allocatedCostUsd": 91224000.71,
    "cluster": "DISIS-2024-001",
    "costPerKw": 304.08,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 90983419.96,
      "NRIS": 240580.75
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28225000,
        "name": "Lydia - Welsh 345 kV Line GEN-2024-068 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 11606129.06,
        "name": "Rebuild line 508359 WELSH  7    345 508841 WILKES 7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7677906.23,
        "name": "Rebuild line 508359 WELSH  7    345 776060 G23-204-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 108,
    "upgradeTypeCostUsd": {
      "Current Study": 57774000.71,
      "Interconnection ": 33450000
    }
  },
  "GEN-2024-069": {
    "allocatedCostUsd": 49481065.65,
    "cluster": "DISIS-2024-001",
    "costPerKw": 217.02,
    "costUnavailableReason": null,
    "requestMw": 228,
    "serviceCostUsd": {
      "ERIS": 41632337.97,
      "NRIS": 7848727.69
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8183299.23,
        "name": "Rebuild line 547476 ASB349 5    161 547477 CJ 366 5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7992093.28,
        "name": "Rebuild line 547476 ASB349 5    161 547491 PUR421 5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5700860,
        "name": "Franklin 69 kV Substation GEN-2024-069 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 22,
    "upgradeTypeCostUsd": {
      "Current Study": 42741859.65,
      "Interconnection ": 6739206
    }
  },
  "GEN-2024-071": {
    "allocatedCostUsd": 18135408.88,
    "cluster": "DISIS-2024-001",
    "costPerKw": 241.81,
    "costUnavailableReason": null,
    "requestMw": 75,
    "serviceCostUsd": {
      "ERIS": 18077704.38,
      "NRIS": 57704.5
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2979017.91,
        "name": "Rebuild line 508814 RODESSA2    69 783570 G24-220-TAP    69 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2477713.15,
        "name": "Rebuild line 508804 HOSSTON2    69 508846 GODFREYRDTP2    69 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1028172.47,
        "name": "Rebuild line 508089 WATLANT2    69 779100 G24-071-TAP    69 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 113,
    "upgradeTypeCostUsd": {
      "Current Study": 18135408.88,
      "Interconnection ": 0
    }
  },
  "GEN-2024-072": {
    "allocatedCostUsd": 114614990.86,
    "cluster": "DISIS-2024-001",
    "costPerKw": 716.34,
    "costUnavailableReason": null,
    "requestMw": 160,
    "serviceCostUsd": {
      "ERIS": 114558121.7,
      "NRIS": 56869.16
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 30720000,
        "name": "Rebuild line 539663 GLENELD3    115 539693 SMITH-C3    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 21579838.02,
        "name": "Rebuild line 539650 BELOIT 3    115 539657 CONCORD3    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 18576732.56,
        "name": "Rebuild line 539656 CLIFTON3    115 539657 CONCORD3    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 55,
    "upgradeTypeCostUsd": {
      "Current Study": 109614990.86,
      "Interconnection ": 5000000
    }
  },
  "GEN-2024-073": {
    "allocatedCostUsd": 453846078.45,
    "cluster": "DISIS-2024-001",
    "costPerKw": 907.69,
    "costUnavailableReason": null,
    "requestMw": 500,
    "serviceCostUsd": {
      "ERIS": 453500039.4,
      "NRIS": 346039.05
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 61922298.73,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 56914110.74,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 53332754,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 59,
    "upgradeTypeCostUsd": {
      "Current Study": 410241028.45,
      "Interconnection ": 43605050
    }
  },
  "GEN-2024-074": {
    "allocatedCostUsd": 12361248.45,
    "cluster": "DISIS-2024-001",
    "costPerKw": 61.81,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 12361248.45
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1900687.79,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1883896.06,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1235193,
        "name": "Duncan Road 161 kV Substation GEN-2024-074 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 18,
    "upgradeTypeCostUsd": {
      "Current Study": 10064505.45,
      "Interconnection ": 2296743
    }
  },
  "GEN-2024-076": {
    "allocatedCostUsd": 9478743.54,
    "cluster": "DISIS-2024-001",
    "costPerKw": 72.91,
    "costUnavailableReason": null,
    "requestMw": 130,
    "serviceCostUsd": {
      "ERIS": 9380654.13,
      "NRIS": 98089.42
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1958090,
        "name": "Neosho - LaCygne 345 kV Line GEN-2024-076 Interconnection (TOIF) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1958090,
        "name": "Neosho - LaCygne 345 kV Line GEN-2024-076 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1613269.93,
        "name": "Rebuild line 532793 NEOSHO 7    345 784170 G24-240-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 17,
    "upgradeTypeCostUsd": {
      "Current Study": 5562563.54,
      "Interconnection ": 3916180
    }
  },
  "GEN-2024-077": {
    "allocatedCostUsd": 328343907.96,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1094.48,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 327631621.17,
      "NRIS": 712286.8
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 56211500,
        "name": "Rebuild line 523267 PRINGLE    6    230 523979 HARRNG_EST 6    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 33387772.13,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 25647643.15,
        "name": "Add line 515378 WWRDEHV9    765 523966 POTTER_CO  9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 71,
    "upgradeTypeCostUsd": {
      "Current Study": 315994759.96,
      "Interconnection ": 12349148
    }
  },
  "GEN-2024-078": {
    "allocatedCostUsd": 321259276.96,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1070.86,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 320546990.17,
      "NRIS": 712286.8
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 56211500,
        "name": "Rebuild line 523267 PRINGLE    6    230 523979 HARRNG_EST 6    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 33387772.13,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 25647643.15,
        "name": "Add line 515378 WWRDEHV9    765 523966 POTTER_CO  9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 71,
    "upgradeTypeCostUsd": {
      "Current Study": 315994759.96,
      "Interconnection ": 5264517
    }
  },
  "GEN-2024-079": {
    "allocatedCostUsd": 341663154.52,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1366.65,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 341492099.36,
      "NRIS": 171055.16
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 46635500,
        "name": "Rebuild line 524885 SN_JUAN_SS 6    230 785100 G24-271-TAP    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 30593871.04,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 25865861.07,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 76,
    "upgradeTypeCostUsd": {
      "Current Study": 336222686.62,
      "Interconnection ": 5440467.9
    }
  },
  "GEN-2024-080": {
    "allocatedCostUsd": 341663154.52,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1366.65,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 341492099.36,
      "NRIS": 171055.16
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 46635500,
        "name": "Rebuild line 524885 SN_JUAN_SS 6    230 785100 G24-271-TAP    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 30593871.04,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 25865861.07,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 76,
    "upgradeTypeCostUsd": {
      "Current Study": 336222686.62,
      "Interconnection ": 5440467.9
    }
  },
  "GEN-2024-081": {
    "allocatedCostUsd": 71373912.46,
    "cluster": "DISIS-2024-001",
    "costPerKw": 95.8,
    "costUnavailableReason": null,
    "requestMw": 745,
    "serviceCostUsd": {
      "ERIS": 71373912.46
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 20218000,
        "name": "Rebuild line 659070 W.BANK.S-BE3    345 779400 G24-081-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 12500000,
        "name": "Add 3-winding transformer 659336 TANDE___-BE3    345 659337 TANDE___-BE4    230 659338 TND.KU3A-BE9    13 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9900000,
        "name": "Rebuild line 659330 SPRNGBRK-BE3    345 779400 G24-081-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 12,
    "upgradeTypeCostUsd": {
      "Current Study": 66733679.46,
      "Interconnection ": 4640233
    }
  },
  "GEN-2024-082": {
    "allocatedCostUsd": 106307937.46,
    "cluster": "DISIS-2024-001",
    "costPerKw": 142.7,
    "costUnavailableReason": null,
    "requestMw": 745,
    "serviceCostUsd": {
      "ERIS": 106307937.46
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 38027515,
        "name": "Springbrook - Tande 345 kV Line GEN-2024-082 Interconnection (TOIF) (BEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 20218000,
        "name": "Rebuild line 659070 W.BANK.S-BE3    345 779400 G24-081-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 12500000,
        "name": "Add 3-winding transformer 659336 TANDE___-BE3    345 659337 TANDE___-BE4    230 659338 TND.KU3A-BE9    13 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 12,
    "upgradeTypeCostUsd": {
      "Current Study": 66733679.46,
      "Interconnection ": 39574258
    }
  },
  "GEN-2024-083": {
    "allocatedCostUsd": 64735896.45,
    "cluster": "DISIS-2024-001",
    "costPerKw": 258.94,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 64524744.65,
      "NRIS": 211151.8
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8891909.03,
        "name": "Rebuild line 508072 NWTXARK7    345 508359 WELSH  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4950685.99,
        "name": "Rebuild line 508359 WELSH  7    345 508841 WILKES 7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3834311,
        "name": "Hugo 345 kV Substation GEN-2024-083 Interconnection (Non-Shared NU) (ITCGP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 127,
    "upgradeTypeCostUsd": {
      "Current Study": 59595153.45,
      "Interconnection ": 5140743
    }
  },
  "GEN-2024-084": {
    "allocatedCostUsd": 52891810.58,
    "cluster": "DISIS-2024-001",
    "costPerKw": 316.72,
    "costUnavailableReason": null,
    "requestMw": 167,
    "serviceCostUsd": {
      "ERIS": 52830871.78,
      "NRIS": 60938.79
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28140000,
        "name": "Rebuild line 547473 RDS295 5    161 779490 G24-084-TAP    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11956657,
        "name": "Reeds Spring - Aurora 161 kV Line GEN-2024-084 Interconnection (Non-Shared NU) (EMDE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 7425000,
        "name": "Rebuild line 547468 AUR124 5    161 779490 G24-084-TAP    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 10,
    "upgradeTypeCostUsd": {
      "Current Study": 37159367.58,
      "Interconnection ": 15732443
    }
  },
  "GEN-2024-085": {
    "allocatedCostUsd": 125319530.71,
    "cluster": "DISIS-2024-001",
    "costPerKw": 783.25,
    "costUnavailableReason": null,
    "requestMw": 160,
    "serviceCostUsd": {
      "ERIS": 125240412.92,
      "NRIS": 79117.79
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 23036819.55,
        "name": "Rebuild line 530582 S HAYS6    230 539679 GRTBEND6    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 20830000,
        "name": "Rebuild line 539678 GRTBEND3    115 539684 OTISSUB3    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11612676.16,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 71,
    "upgradeTypeCostUsd": {
      "Current Study": 110319530.71,
      "Interconnection ": 15000000
    }
  },
  "GEN-2024-088": {
    "allocatedCostUsd": 5677368.81,
    "cluster": "DISIS-2024-001",
    "costPerKw": 39.15,
    "costUnavailableReason": null,
    "requestMw": 144.999,
    "serviceCostUsd": {
      "ERIS": 5630000,
      "NRIS": 47368.81
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2930000,
        "name": "McCartney 161 kV Substation GEN-2024-088 Interconnection (Non-Shared NU) (CUS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2700000,
        "name": "McCartney 161 kV Substation GEN-2024-088 Interconnection (TOIF) (CUS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 47368.81,
        "name": "Add 7 MVAR switched shunt at GEN-2020-007 345 kV",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Current Study": 47368.81,
      "Interconnection ": 5630000
    }
  },
  "GEN-2024-089": {
    "allocatedCostUsd": 190270576.38,
    "cluster": "DISIS-2024-001",
    "costPerKw": 975.75,
    "costUnavailableReason": null,
    "requestMw": 195,
    "serviceCostUsd": {
      "ERIS": 190270576.38
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17221597.41,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 16567979.73,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 15415525.76,
        "name": "Add line 524909 ROOSEVELT  6    230 525531 TOLK       6    230 P3",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 72,
    "upgradeTypeCostUsd": {
      "Current Study": 179906041.3,
      "Interconnection ": 10364535.08
    }
  },
  "GEN-2024-090": {
    "allocatedCostUsd": 14554306.32,
    "cluster": "DISIS-2024-001",
    "costPerKw": 145.54,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 14554306.32
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3659394,
        "name": "Smithville 161 kV Substation GEN-2024-090 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3210000,
        "name": "Rebuild line 541204 SMTHVL 5    161 541221 PLTCTY 5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1378447.93,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 21,
    "upgradeTypeCostUsd": {
      "Current Study": 9833362.32,
      "Interconnection ": 4720944
    }
  },
  "GEN-2024-091": {
    "allocatedCostUsd": 24566521.83,
    "cluster": "DISIS-2024-001",
    "costPerKw": 245.67,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 20799362.34,
      "NRIS": 3767159.49
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12949695,
        "name": "145 JOPLIN WEST 7TH 161 kV Substation GEN-2024-091 Interconnection (Non-Shared NU) (EDE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5035992,
        "name": "145 JOPLIN WEST 7TH 161 kV Substation GEN-2024-091 Interconnection (TOIF) (EDE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1864437.83,
        "name": "Add 3-winding transformer 505487 CRG X1 1    13 505488 CARTHAG5    161 505490 CARTHG 2    69 M2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 15,
    "upgradeTypeCostUsd": {
      "Current Study": 6580834.83,
      "Interconnection ": 17985687
    }
  },
  "GEN-2024-092": {
    "allocatedCostUsd": 212003538.54,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1062.67,
    "costUnavailableReason": null,
    "requestMw": 199.5,
    "serviceCostUsd": {
      "ERIS": 211868570.72,
      "NRIS": 134967.82
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 24153031.2,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 20015212.39,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 19494040.37,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 68,
    "upgradeTypeCostUsd": {
      "Current Study": 203923061.79,
      "Interconnection ": 8080476.75
    }
  },
  "GEN-2024-099": {
    "allocatedCostUsd": 231828737.06,
    "cluster": "DISIS-2024-001",
    "costPerKw": 772.76,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 231627430.68,
      "NRIS": 201306.38
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 35984271.79,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 28727188.24,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 28306260.42,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 56,
    "upgradeTypeCostUsd": {
      "Current Study": 227011105.58,
      "Interconnection ": 4817631.48
    }
  },
  "GEN-2024-102": {
    "allocatedCostUsd": 467223336.04,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1166.6,
    "costUnavailableReason": null,
    "requestMw": 400.5,
    "serviceCostUsd": {
      "ERIS": 463414015.63,
      "NRIS": 3809320.42
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 112386619.76,
        "name": "Add line 659131 LARAMIE_-MB3    345 800120 UNDERWOOD 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 102352254.92,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 97881684.21,
        "name": "Add line 652424 BELFELD3    345 800121 MAURINE 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 64,
    "upgradeTypeCostUsd": {
      "Current Study": 457223336.04,
      "Interconnection ": 10000000
    }
  },
  "GEN-2024-109": {
    "allocatedCostUsd": 346805482.79,
    "cluster": "DISIS-2024-001",
    "costPerKw": 865.93,
    "costUnavailableReason": null,
    "requestMw": 400.5,
    "serviceCostUsd": {
      "ERIS": 346221978.59,
      "NRIS": 583504.2
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 34976752.52,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 34450282.46,
        "name": "Add line 523961 POTTER_CO  7    345 525549 TOLK       7    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 33363327.16,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 67,
    "upgradeTypeCostUsd": {
      "Current Study": 314229958.93,
      "Interconnection ": 32575523.86
    }
  },
  "GEN-2024-113": {
    "allocatedCostUsd": 58005311.19,
    "cluster": "DISIS-2024-001",
    "costPerKw": 193.35,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 57904372.65,
      "NRIS": 100938.53
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18000000,
        "name": "Muskogee - Ft. Smith 345 kV Line GEN-2024-113 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3000000,
        "name": "Muskogee - Ft. Smith 345 kV Line GEN-2024-113 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2550250.28,
        "name": "Add line 532773 SUMMIT 7    345 532998 G16-111-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 96,
    "upgradeTypeCostUsd": {
      "Current Study": 37005311.19,
      "Interconnection ": 21000000
    }
  },
  "GEN-2024-114": {
    "allocatedCostUsd": 123277213.19,
    "cluster": "DISIS-2024-001",
    "costPerKw": 619.48,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 123254508.6,
      "NRIS": 22704.59
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 26780000,
        "name": "Add line 505418 JONESBO5    161 774620 G23-132-TAP    161 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 20370000,
        "name": "Rebuild the 5EVERTON RD to 5ST JOE 161kV Line 1",
        "serviceType": "ERIS",
        "upgradeType": "JTIQ Expanded Scope Analysis"
      },
      {
        "costUsd": 13950000,
        "name": "Rebuild line 774620 G23-132-TAP    161 780390 G24-114-TAP    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 17,
    "upgradeTypeCostUsd": {
      "Current Study": 43797213.19,
      "Interconnection ": 9400000,
      "JTIQ Expanded Scope Analysis": 70080000
    }
  },
  "GEN-2024-117": {
    "allocatedCostUsd": 81086212.01,
    "cluster": "DISIS-2024-001",
    "costPerKw": 540.57,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 81086212.01
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17175000,
        "name": "Coffeyville Tap - North Bartlesville 138kV Line GEN-2024-117 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 7792272.34,
        "name": "Rebuild line 533008 TV1MNDV4    138 533020 NEOSHOS4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7746735.68,
        "name": "Rebuild line 532996 TIOGA  4    138 533001 ALTOONA4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 88,
    "upgradeTypeCostUsd": {
      "Current Study": 63911212.01,
      "Interconnection ": 17175000
    }
  },
  "GEN-2024-118": {
    "allocatedCostUsd": 62856787.23,
    "cluster": "DISIS-2024-001",
    "costPerKw": 315.86,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 62856787.23
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7971532.8,
        "name": "Add 3-winding transformer 512636 CATSAGR4    138 512638 CATSAGR5    161 512834 CATTER2 1    13 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7971532.8,
        "name": "Add 3-winding transformer 512623 CATSAGD4    138 512638 CATSAGR5    161 512833 CATTER1 1    13 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3958049.97,
        "name": "Rebuild line 547469 RIV4525    161 547729 BAX488 5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 106,
    "upgradeTypeCostUsd": {
      "Current Study": 56731787.23,
      "Interconnection ": 6125000
    }
  },
  "GEN-2024-119": {
    "allocatedCostUsd": 101912356.12,
    "cluster": "DISIS-2024-001",
    "costPerKw": 512.12,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 100947326.89,
      "NRIS": 965029.23
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 11841298.81,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9061415.5,
        "name": "Rebuild line 520842 CANADNS4    138 520976 LIL AXE4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7539440.27,
        "name": "Rebuild line 520973 LEXNGTN4    138 520976 LIL AXE4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 143,
    "upgradeTypeCostUsd": {
      "Current Study": 92912356.12,
      "Interconnection ": 9000000
    }
  },
  "GEN-2024-120": {
    "allocatedCostUsd": 49599769.16,
    "cluster": "DISIS-2024-001",
    "costPerKw": 249.25,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 49599769.16
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4354878.72,
        "name": "Rebuild line 532768 EMPEC 7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3960563.3,
        "name": "Rebuild line 532796 WICHITA7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2376631.71,
        "name": "Rebuild line 532799 WAVERLY7    345 766261 G20-007-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 117,
    "upgradeTypeCostUsd": {
      "Current Study": 46099769.16,
      "Interconnection ": 3500000
    }
  },
  "GEN-2024-121": {
    "allocatedCostUsd": 46925095.39,
    "cluster": "DISIS-2024-001",
    "costPerKw": 235.8,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 46925095.39
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 33543364,
        "name": "Jarbalo 115 kV Substation GEN-2024-121 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2846554.46,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2006384.04,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 20,
    "upgradeTypeCostUsd": {
      "Current Study": 12343383.39,
      "Interconnection ": 34581712
    }
  },
  "GEN-2024-122": {
    "allocatedCostUsd": 20419195.77,
    "cluster": "DISIS-2024-001",
    "costPerKw": 127.62,
    "costUnavailableReason": null,
    "requestMw": 160,
    "serviceCostUsd": {
      "ERIS": 20289272.46,
      "NRIS": 129923.31
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 5298489.52,
        "name": "Rebuild line 508806 LIEBERM4    138 780630 G24-122-TAP    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1340325.37,
        "name": "Add line 532773 SUMMIT 7    345 532998 G16-111-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1220531.55,
        "name": "Rebuild line 507727 FLOURNY4    138 508816 OAKPH  4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 90,
    "upgradeTypeCostUsd": {
      "Current Study": 20419195.77,
      "Interconnection ": 0
    }
  },
  "GEN-2024-123": {
    "allocatedCostUsd": 31046529.64,
    "cluster": "DISIS-2024-001",
    "costPerKw": 258.72,
    "costUnavailableReason": null,
    "requestMw": 120,
    "serviceCostUsd": {
      "ERIS": 30957114.19,
      "NRIS": 89415.45
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17175000,
        "name": "Center - Tenaha 138 kV Line GEN-2024-123 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3325000,
        "name": "Center - Tenaha 138 kV Line GEN-2024-123 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1503501.57,
        "name": "Rebuild line 509106 HEMPHIL4    138 509107 SIXMILE4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 84,
    "upgradeTypeCostUsd": {
      "Current Study": 10546529.64,
      "Interconnection ": 20500000
    }
  },
  "GEN-2024-124": {
    "allocatedCostUsd": 374338196,
    "cluster": "DISIS-2024-001",
    "costPerKw": 891.28,
    "costUnavailableReason": null,
    "requestMw": 420,
    "serviceCostUsd": {
      "ERIS": 374047073.75,
      "NRIS": 291122.25
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 52076443.6,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 48088273.28,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 44956858.46,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 59,
    "upgradeTypeCostUsd": {
      "Current Study": 344679341,
      "Interconnection ": 29658855
    }
  },
  "GEN-2024-125": {
    "allocatedCostUsd": 51205894.4,
    "cluster": "DISIS-2024-001",
    "costPerKw": 128.01,
    "costUnavailableReason": null,
    "requestMw": 400,
    "serviceCostUsd": {
      "ERIS": 50958035.65,
      "NRIS": 247858.75
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 31994301,
        "name": "Neosho Ridge - Caney River 345 kV Line GEN-2024-125 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 4882985.59,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3889729.58,
        "name": "Rebuild line 532793 NEOSHO 7    345 784170 G24-240-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 18,
    "upgradeTypeCostUsd": {
      "Current Study": 17253501.4,
      "Interconnection ": 33952393
    }
  },
  "GEN-2024-128": {
    "allocatedCostUsd": 31505324.94,
    "cluster": "DISIS-2024-001",
    "costPerKw": 45.66,
    "costUnavailableReason": null,
    "requestMw": 690,
    "serviceCostUsd": {
      "ERIS": 30877623.55,
      "NRIS": 627701.39
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18000000,
        "name": "Gracemont - Lawton 345 kV Line GEN-2024-128 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 4745804.47,
        "name": "Add 3-winding transformer 515800 GRACMNT7    345 515801 GRCMNT11    13 515802 GRACMNT4    138 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3000000,
        "name": "Gracemont - Lawton 345 kV Line GEN-2024-128 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 13,
    "upgradeTypeCostUsd": {
      "Current Study": 10505324.94,
      "Interconnection ": 21000000
    }
  },
  "GEN-2024-129": {
    "allocatedCostUsd": 101824676.57,
    "cluster": "DISIS-2024-001",
    "costPerKw": 111.9,
    "costUnavailableReason": null,
    "requestMw": 910,
    "serviceCostUsd": {
      "ERIS": 101374779.99,
      "NRIS": 449896.58
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 66968000,
        "name": "Rebuild line 532794 ROSEHIL7    345 532800 LATHAMS7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 31994301,
        "name": "Caney River - Neosho 345 kV Line GEN-2024-129 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1958092,
        "name": "Caney River - Neosho 345 kV Line GEN-2024-129 Interconnection (TOIF) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Current Study": 67872283.57,
      "Interconnection ": 33952393
    }
  },
  "GEN-2024-132": {
    "allocatedCostUsd": 220774916.77,
    "cluster": "DISIS-2024-001",
    "costPerKw": 169.83,
    "costUnavailableReason": null,
    "requestMw": 1300,
    "serviceCostUsd": {
      "ERIS": 219639445.17,
      "NRIS": 1135471.6
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 164736000,
        "name": "Rebuild line 521157 HUGO   7    345 560088 BISON 7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 13219052.02,
        "name": "Rebuild line 510907 PITTSB-7    345 515045 SEMINOL7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11464316.48,
        "name": "Add 3-winding transformer 520560 HUGOITC4    138 521157 HUGO   7    345 521189 HUGO TERTA    13 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 22,
    "upgradeTypeCostUsd": {
      "Current Study": 216274916.77,
      "Interconnection ": 4500000
    }
  },
  "GEN-2024-134": {
    "allocatedCostUsd": 70063045.82,
    "cluster": "DISIS-2024-001",
    "costPerKw": 280.25,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 69848398.48,
      "NRIS": 214647.34
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 20304032.61,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5829689.89,
        "name": "Rebuild line 532768 EMPEC 7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5500000,
        "name": "Degrasse 345 kV Substation GEN-2024-134 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 98,
    "upgradeTypeCostUsd": {
      "Current Study": 61563045.82,
      "Interconnection ": 8500000
    }
  },
  "GEN-2024-135": {
    "allocatedCostUsd": 70063045.82,
    "cluster": "DISIS-2024-001",
    "costPerKw": 280.25,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 69848398.48,
      "NRIS": 214647.34
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 20304032.61,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5829689.89,
        "name": "Rebuild line 532768 EMPEC 7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5500000,
        "name": "Degrasse 345 kV Substation GEN-2024-135 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 98,
    "upgradeTypeCostUsd": {
      "Current Study": 61563045.82,
      "Interconnection ": 8500000
    }
  },
  "GEN-2024-136": {
    "allocatedCostUsd": 575555040.32,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1438.89,
    "costUnavailableReason": null,
    "requestMw": 400,
    "serviceCostUsd": {
      "ERIS": 551671890.34,
      "NRIS": 23883149.98
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 125114356.06,
        "name": "Add line 659131 LARAMIE_-MB3    345 800120 UNDERWOOD 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 102098704.27,
        "name": "Add line 652424 BELFELD3    345 800121 MAURINE 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 86068445.46,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 70,
    "upgradeTypeCostUsd": {
      "Current Study": 573347942.57,
      "Interconnection ": 2207097.76
    }
  },
  "GEN-2024-137": {
    "allocatedCostUsd": 412071425.59,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1389.79,
    "costUnavailableReason": null,
    "requestMw": 296.5,
    "serviceCostUsd": {
      "ERIS": 394018808.08,
      "NRIS": 18052617.51
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 82786986.82,
        "name": "Add line 659131 LARAMIE_-MB3    345 800120 UNDERWOOD 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 72701264.3,
        "name": "Add line 652424 BELFELD3    345 800121 MAURINE 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 63561324.12,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 77,
    "upgradeTypeCostUsd": {
      "Current Study": 410292681.66,
      "Interconnection ": 1778743.92
    }
  },
  "GEN-2024-138": {
    "allocatedCostUsd": 412071425.59,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1389.79,
    "costUnavailableReason": null,
    "requestMw": 296.5,
    "serviceCostUsd": {
      "ERIS": 394018808.08,
      "NRIS": 18052617.51
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 82786986.82,
        "name": "Add line 659131 LARAMIE_-MB3    345 800120 UNDERWOOD 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 72701264.3,
        "name": "Add line 652424 BELFELD3    345 800121 MAURINE 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 63561324.12,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 77,
    "upgradeTypeCostUsd": {
      "Current Study": 410292681.66,
      "Interconnection ": 1778743.92
    }
  },
  "GEN-2024-139": {
    "allocatedCostUsd": 40696064.54,
    "cluster": "DISIS-2024-001",
    "costPerKw": 165.38,
    "costUnavailableReason": null,
    "requestMw": 246.08,
    "serviceCostUsd": {
      "ERIS": 40237642.21,
      "NRIS": 458422.33
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28818600,
        "name": "Wolf Creek - Blackberry 345 kV Line GEN-2024-139 Interconnection (Non-Shared NU) (NEET)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2910127.11,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1802241.38,
        "name": "Add line 640600 DAYKIN3    345 785610 G24-288-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 19,
    "upgradeTypeCostUsd": {
      "Current Study": 11037209.54,
      "Interconnection ": 29658855
    }
  },
  "GEN-2024-140": {
    "allocatedCostUsd": 13176896.36,
    "cluster": "DISIS-2024-001",
    "costPerKw": 53.63,
    "costUnavailableReason": null,
    "requestMw": 245.7,
    "serviceCostUsd": {
      "ERIS": 13176896.36
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8170743.5,
        "name": "Rebuild line 640386 TWIN CH4    230 652565 SIOUXCY4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4000000,
        "name": "Antelope - Hoskins 345 kV line GEN-2024-140 Interconnection (Non-Shared NU) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1000000,
        "name": "Antelope - Hoskins 345 kV line GEN-2024-140 Interconnection (TOIF) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 4,
    "upgradeTypeCostUsd": {
      "Current Study": 8176896.36,
      "Interconnection ": 5000000
    }
  },
  "GEN-2024-141": {
    "allocatedCostUsd": 96982127.96,
    "cluster": "DISIS-2024-001",
    "costPerKw": 228.73,
    "costUnavailableReason": null,
    "requestMw": 424,
    "serviceCostUsd": {
      "ERIS": 62231404.81,
      "NRIS": 34750723.16
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18078112.11,
        "name": "Rebuild line 640404 WAYSIDE 4    230 652484 NUNDRWD4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 15732942.2,
        "name": "Add 3-winding transformer 659105 LELAND_O-BE3    345 659106 LELAND_O-BE4    230 659202 LO.KVA2_-BE9    13 M2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 15516721.44,
        "name": "Add 3-winding transformer 659105 LELAND_O-BE3    345 659106 LELAND_O-BE4    230 659201 LO.KU1A_-BE9    13 M2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 32,
    "upgradeTypeCostUsd": {
      "Current Study": 87349373.96,
      "Interconnection ": 9632754
    }
  },
  "GEN-2024-142": {
    "allocatedCostUsd": 78831475.48,
    "cluster": "DISIS-2024-001",
    "costPerKw": 266.3,
    "costUnavailableReason": null,
    "requestMw": 296.03,
    "serviceCostUsd": {
      "ERIS": 78781297.75,
      "NRIS": 50177.73
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 33532966,
        "name": "Reno - Summit 345 kV Line GEN-2024-142 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 11668710.1,
        "name": "Add line 532771 RENO   7    345 532796 WICHITA7    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 6744907.95,
        "name": "Add line 640600 DAYKIN3    345 785610 G24-288-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 34,
    "upgradeTypeCostUsd": {
      "Current Study": 43340419.48,
      "Interconnection ": 35491056
    }
  },
  "GEN-2024-143": {
    "allocatedCostUsd": 234489085.94,
    "cluster": "DISIS-2024-001",
    "costPerKw": 937.96,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 234108185.9,
      "NRIS": 380900.03
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 37867141.18,
        "name": "Add line 523869 CHAN+TASCOS6    230 523959 POTTER_CO  6    230 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 29902705.6,
        "name": "Add line 523221 XIT_INTG   6    230 523869 CHAN+TASCOS6    230 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 20756897.02,
        "name": "Add line 515378 WWRDEHV9    765 523966 POTTER_CO  9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 73,
    "upgradeTypeCostUsd": {
      "Current Study": 229108336.51,
      "Interconnection ": 5380749.42
    }
  },
  "GEN-2024-144": {
    "allocatedCostUsd": 413058143.39,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1391.24,
    "costUnavailableReason": null,
    "requestMw": 296.9,
    "serviceCostUsd": {
      "ERIS": 394981171.59,
      "NRIS": 18076971.8
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 82898672.47,
        "name": "Add line 659131 LARAMIE_-MB3    345 800120 UNDERWOOD 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 72799343.57,
        "name": "Add line 652424 BELFELD3    345 800121 MAURINE 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 63647072.96,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 77,
    "upgradeTypeCostUsd": {
      "Current Study": 411277743.99,
      "Interconnection ": 1780399.4
    }
  },
  "GEN-2024-145": {
    "allocatedCostUsd": 228956505.85,
    "cluster": "DISIS-2024-001",
    "costPerKw": 939.5,
    "costUnavailableReason": null,
    "requestMw": 243.7,
    "serviceCostUsd": {
      "ERIS": 228585204.5,
      "NRIS": 371301.35
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 36912889.22,
        "name": "Add line 523869 CHAN+TASCOS6    230 523959 POTTER_CO  6    230 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 29149157.42,
        "name": "Add line 523221 XIT_INTG   6    230 523869 CHAN+TASCOS6    230 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 20233823.21,
        "name": "Add line 515378 WWRDEHV9    765 523966 POTTER_CO  9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 72,
    "upgradeTypeCostUsd": {
      "Current Study": 223606918.85,
      "Interconnection ": 5349587
    }
  },
  "GEN-2024-153": {
    "allocatedCostUsd": 248292359.68,
    "cluster": "DISIS-2024-001",
    "costPerKw": 993.17,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 248133112.59,
      "NRIS": 159247.09
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 33296957.63,
        "name": "Bushland 230 kV Substation GEN-2024-153 Interconnection (Non-Shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 28865080.69,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 23679957.98,
        "name": "Add line 515378 WWRDEHV9    765 523966 POTTER_CO  9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 66,
    "upgradeTypeCostUsd": {
      "Current Study": 210734379.04,
      "Interconnection ": 37557980.64
    }
  },
  "GEN-2024-154": {
    "allocatedCostUsd": 66823573.65,
    "cluster": "DISIS-2024-001",
    "costPerKw": 334.12,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 66660141.51,
      "NRIS": 163432.14
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15233717.57,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5416487.5,
        "name": "Rebuild line 532768 EMPEC 7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5225000,
        "name": "Chisholm 345 kV Substation GEN-2024-154 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 100,
    "upgradeTypeCostUsd": {
      "Current Study": 57698573.65,
      "Interconnection ": 9125000
    }
  },
  "GEN-2024-157": {
    "allocatedCostUsd": 120970540.07,
    "cluster": "DISIS-2024-001",
    "costPerKw": 864.08,
    "costUnavailableReason": null,
    "requestMw": 140,
    "serviceCostUsd": {
      "ERIS": 120867563.23,
      "NRIS": 102976.83
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17175000,
        "name": "Hobart - Martha 138 kV Line GEN-2024-157 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 9427369.83,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9330640.4,
        "name": "Rebuild line 511564 MARTHA 4    138 781800 G24-161-TAP    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 150,
    "upgradeTypeCostUsd": {
      "Current Study": 100470540.07,
      "Interconnection ": 20500000
    }
  },
  "GEN-2024-158": {
    "allocatedCostUsd": 190616120.17,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1003.24,
    "costUnavailableReason": null,
    "requestMw": 190,
    "serviceCostUsd": {
      "ERIS": 190470887.39,
      "NRIS": 145232.78
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 25858381.78,
        "name": "Rebuild line 512110 LAKEP4WT    138 521043 RUSSELL4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 23888803.94,
        "name": "Rebuild line 512101 CHILD4WT    138 512110 LAKEP4WT    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 17175000,
        "name": "Altus Jct - Snyder 138 kV Line GEN-2024-158 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 149,
    "upgradeTypeCostUsd": {
      "Current Study": 170116120.17,
      "Interconnection ": 20500000
    }
  },
  "GEN-2024-159": {
    "allocatedCostUsd": 339105410.03,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1130.35,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 338902203.35,
      "NRIS": 203206.69
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 36372566.83,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 30248510.2,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 29467775.92,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 67,
    "upgradeTypeCostUsd": {
      "Current Study": 307748550.03,
      "Interconnection ": 31356860
    }
  },
  "GEN-2024-161": {
    "allocatedCostUsd": 162110949.15,
    "cluster": "DISIS-2024-001",
    "costPerKw": 953.59,
    "costUnavailableReason": null,
    "requestMw": 170,
    "serviceCostUsd": {
      "ERIS": 161985232.02,
      "NRIS": 125717.13
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17175000,
        "name": "Hobart - Martha 138 kV Line GEN-2024-161 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 15509359.6,
        "name": "Rebuild line 511564 MARTHA 4    138 781800 G24-161-TAP    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11556068.67,
        "name": "Rebuild line 512110 LAKEP4WT    138 521043 RUSSELL4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 151,
    "upgradeTypeCostUsd": {
      "Current Study": 141410949.15,
      "Interconnection ": 20700000
    }
  },
  "GEN-2024-162": {
    "allocatedCostUsd": 47189610.12,
    "cluster": "DISIS-2024-001",
    "costPerKw": 429,
    "costUnavailableReason": null,
    "requestMw": 110,
    "serviceCostUsd": {
      "ERIS": 32309830.34,
      "NRIS": 14879779.78
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 32307568.77,
        "name": "Rebuild line 640386 TWIN CH4    230 652565 SIOUXCY4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 12270000,
        "name": "Rebuild line 640080 BELDEN 7    115 640212 HARTGTN7    115 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2212500,
        "name": "Add 5 MVAR switched shunt at MOORHED7 115 kV",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 8,
    "upgradeTypeCostUsd": {
      "Current Study": 47189610.12,
      "Interconnection ": 0
    }
  },
  "GEN-2024-164": {
    "allocatedCostUsd": 97502306.81,
    "cluster": "DISIS-2024-001",
    "costPerKw": 489.96,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 96887935.38,
      "NRIS": 614371.43
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 27000000,
        "name": "Arbuckle 138 kV Substation GEN-2024-164 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5258576.6,
        "name": "Rebuild line 515117 ARBUCKL4    138 515531 VANOSTP4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5219260.12,
        "name": "Rebuild line 515044 SEMINOL4    138 515531 VANOSTP4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 143,
    "upgradeTypeCostUsd": {
      "Current Study": 68502306.81,
      "Interconnection ": 29000000
    }
  },
  "GEN-2024-165": {
    "allocatedCostUsd": 180894380.98,
    "cluster": "DISIS-2024-001",
    "costPerKw": 361.79,
    "costUnavailableReason": null,
    "requestMw": 500,
    "serviceCostUsd": {
      "ERIS": 180178211.52,
      "NRIS": 716169.46
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28225000,
        "name": "Pittsburg - Johnston County 345 kV line GEN-2024-165 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 8676759.87,
        "name": "Rebuild line 510907 PITTSB-7    345 515045 SEMINOL7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7230218.28,
        "name": "Rebuild line 508072 NWTXARK7    345 508359 WELSH  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 145,
    "upgradeTypeCostUsd": {
      "Current Study": 147244380.98,
      "Interconnection ": 33650000
    }
  },
  "GEN-2024-166": {
    "allocatedCostUsd": 35307651.88,
    "cluster": "DISIS-2024-001",
    "costPerKw": 128.39,
    "costUnavailableReason": null,
    "requestMw": 275,
    "serviceCostUsd": {
      "ERIS": 27614594.35,
      "NRIS": 7693057.53
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7500000,
        "name": "Rebuild line 533044 GILL E 4    138 533051 INTERST4    138 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 6553458.66,
        "name": "Add line 515378 WWRDEHV9    765 523966 POTTER_CO  9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5547412.81,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 29,
    "upgradeTypeCostUsd": {
      "Current Study": 30613198.88,
      "Interconnection ": 4694453
    }
  },
  "GEN-2024-167": {
    "allocatedCostUsd": 28289059.87,
    "cluster": "DISIS-2024-001",
    "costPerKw": 142.16,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 28289059.87
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 16202977,
        "name": "Orrick 161 kV Substation GEN-2024-167 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1918658.3,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1879976.89,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 20,
    "upgradeTypeCostUsd": {
      "Current Study": 10590959.87,
      "Interconnection ": 17698100
    }
  },
  "GEN-2024-168": {
    "allocatedCostUsd": 20258783.51,
    "cluster": "DISIS-2024-001",
    "costPerKw": 103.16,
    "costUnavailableReason": null,
    "requestMw": 196.38,
    "serviceCostUsd": {
      "ERIS": 14228805.15,
      "NRIS": 6029978.36
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 13500000,
        "name": "Geneva 115 kV Substation GEN-2024-168 Interconnection (Non-Shared NU) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3825000,
        "name": "Add 13 MVAR switched shunt at HASTING4 230 kV",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1518336.6,
        "name": "Rebuild line 646214 S1214  5    161 650169 70&BLUFF  5    161 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Current Study": 6258783.51,
      "Interconnection ": 14000000
    }
  },
  "GEN-2024-170": {
    "allocatedCostUsd": 18174543.16,
    "cluster": "DISIS-2024-001",
    "costPerKw": 64.91,
    "costUnavailableReason": null,
    "requestMw": 280,
    "serviceCostUsd": {
      "ERIS": 18174543.16
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4228553,
        "name": "Dogwood 345 kV Substation GEN-2024-170 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2700095.26,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2404864.82,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 17,
    "upgradeTypeCostUsd": {
      "Current Study": 11987898.16,
      "Interconnection ": 6186645
    }
  },
  "GEN-2024-171": {
    "allocatedCostUsd": 63425484.04,
    "cluster": "DISIS-2024-001",
    "costPerKw": 253.7,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 62070261.74,
      "NRIS": 1355222.3
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 14597250,
        "name": "Tulsa North - GR Energy Center 345 kV Line GEN-2024-171 Interconnection (Non-Shared NU) (GRDA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3797463,
        "name": "Tulsa North - GR Energy Center 345 kV Line GEN-2024-171 Interconnection (TOIF) (GRDA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2759775.34,
        "name": "Rebuild line 532799 WAVERLY7    345 766261 G20-007-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 106,
    "upgradeTypeCostUsd": {
      "Current Study": 45030771.04,
      "Interconnection ": 18394713
    }
  },
  "GEN-2024-173": {
    "allocatedCostUsd": 31305727.9,
    "cluster": "DISIS-2024-001",
    "costPerKw": 156.53,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 24449987.97,
      "NRIS": 6855739.93
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 11210000,
        "name": "Rebuild line 640316 PAWNEEL7    115 640340 SEWARD 7    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7500000,
        "name": "Pawnee Lake 115 kV Substation GEN-2024-173 Interconnection (Non-Shared NU) (NPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5235990.12,
        "name": "Rebuild line 640316 PAWNEEL7    115 650214 NW68HOLDRG7    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 8,
    "upgradeTypeCostUsd": {
      "Current Study": 23305727.9,
      "Interconnection ": 8000000
    }
  },
  "GEN-2024-175": {
    "allocatedCostUsd": 2549825.21,
    "cluster": "DISIS-2024-001",
    "costPerKw": 12.75,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 2481924.85,
      "NRIS": 67900.36
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1552842.34,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 700000,
        "name": "Summit 161 kV Substation GEN-2024-175 Interconnection (Non-Shared NU) (CUS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 85561.25,
        "name": "Add line 516106 BOBCAT 7    345 539841 G-2011-008-1    345 YY",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 10,
    "upgradeTypeCostUsd": {
      "Current Study": 1794825.21,
      "Interconnection ": 755000
    }
  },
  "GEN-2024-176": {
    "allocatedCostUsd": 38412106.67,
    "cluster": "DISIS-2024-001",
    "costPerKw": 153.65,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 38269675.04,
      "NRIS": 142431.63
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8072107.79,
        "name": "Add line 532771 RENO   7    345 532796 WICHITA7    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4832276.85,
        "name": "Add line 640600 DAYKIN3    345 785610 G24-288-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4588013.33,
        "name": "Add line 515378 WWRDEHV9    765 523966 POTTER_CO  9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 33,
    "upgradeTypeCostUsd": {
      "Current Study": 32891150.67,
      "Interconnection ": 5520956
    }
  },
  "GEN-2024-177": {
    "allocatedCostUsd": 22937025.46,
    "cluster": "DISIS-2024-001",
    "costPerKw": 115.26,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 22771045.81,
      "NRIS": 165979.66
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3325000,
        "name": "Red Point 138 kV Substation GEN-2024-177 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2800000,
        "name": "Red Point 138 kV Substation GEN-2024-177 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1670277.59,
        "name": "Add line 532773 SUMMIT 7    345 532998 G16-111-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 87,
    "upgradeTypeCostUsd": {
      "Current Study": 16812025.46,
      "Interconnection ": 6125000
    }
  },
  "GEN-2024-178": {
    "allocatedCostUsd": 27797422.19,
    "cluster": "DISIS-2024-001",
    "costPerKw": 139.69,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 27643032.77,
      "NRIS": 154389.42
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6300000,
        "name": "Pirkey 138 kV Substation GEN-2024-178 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3325000,
        "name": "Pirkey 138 kV Substation GEN-2024-178 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1649076.34,
        "name": "Add line 532773 SUMMIT 7    345 532998 G16-111-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 90,
    "upgradeTypeCostUsd": {
      "Current Study": 18172422.19,
      "Interconnection ": 9625000
    }
  },
  "GEN-2024-180": {
    "allocatedCostUsd": 84558760.4,
    "cluster": "DISIS-2024-001",
    "costPerKw": 845.59,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 84558760.4
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 20250000,
        "name": "Rebuild line 512631 MIAMI  5    161 512632 AFTON  5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 19200000,
        "name": "Rebuild line 512632 AFTON  5    161 512669 KETCHUM5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 14850000,
        "name": "Rebuild line 512631 MIAMI  5    161 547487 HOC404 5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 85,
    "upgradeTypeCostUsd": {
      "Current Study": 84558760.4,
      "Interconnection ": 0
    }
  },
  "GEN-2024-181": {
    "allocatedCostUsd": 3578900.15,
    "cluster": "DISIS-2024-001",
    "costPerKw": 17.98,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 3508260.71,
      "NRIS": 70639.43
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1700000,
        "name": "Brookline 161 kV Substation GEN-2024-181 Interconnection (Non-Shared NU) (CUS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1546727.04,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 118451.7,
        "name": "Add line 516106 BOBCAT 7    345 539841 G-2011-008-1    345 YY",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 10,
    "upgradeTypeCostUsd": {
      "Current Study": 1823900.15,
      "Interconnection ": 1755000
    }
  },
  "GEN-2024-184": {
    "allocatedCostUsd": 135593843.74,
    "cluster": "DISIS-2024-001",
    "costPerKw": 681.38,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 135466622.36,
      "NRIS": 127221.38
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17175000,
        "name": "Atoka to Lehigh 138 kV line GEN-2024-184 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 13776000,
        "name": "Rebuild line 510880 COALGTP4    138 510881 ALLENGT4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9671071.79,
        "name": "Rebuild line 505598 ALLEN  4    138 505600 TUPELO 4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 154,
    "upgradeTypeCostUsd": {
      "Current Study": 115093843.74,
      "Interconnection ": 20500000
    }
  },
  "GEN-2024-186": {
    "allocatedCostUsd": 259163018.38,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1302.33,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 259025034.67,
      "NRIS": 137983.71
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 30757015,
        "name": "Roswell Interchange 115 kV Substation GEN-2024-186 Interconnection (Non-Shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 24632949.52,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 21580874.89,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 76,
    "upgradeTypeCostUsd": {
      "Current Study": 228406003.38,
      "Interconnection ": 30757015
    }
  },
  "GEN-2024-187": {
    "allocatedCostUsd": 149033731.76,
    "cluster": "DISIS-2024-001",
    "costPerKw": 748.91,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 148814515.03,
      "NRIS": 219216.73
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15588000,
        "name": "Rebuild line 521056 STRATFD4    138 782580 G24-187-TAP    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 10654336.82,
        "name": "Rebuild line 520854 CIVIT  4    138 521023 PAOLI  4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8760000,
        "name": "Rebuild line 521014 OILCRTP4    138 521056 STRATFD4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 154,
    "upgradeTypeCostUsd": {
      "Current Study": 140033731.76,
      "Interconnection ": 9000000
    }
  },
  "GEN-2024-189": {
    "allocatedCostUsd": 74409231.33,
    "cluster": "DISIS-2024-001",
    "costPerKw": 373.92,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 74304668.07,
      "NRIS": 104563.25
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 22587338.86,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 14330394.16,
        "name": "Add line 516106 BOBCAT 7    345 539841 G-2011-008-1    345 YY",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5772882.21,
        "name": "Add line 516106 BOBCAT 7    345 539841 G-2011-008-1    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 51,
    "upgradeTypeCostUsd": {
      "Current Study": 68472355.33,
      "Interconnection ": 5936876
    }
  },
  "GEN-2024-193": {
    "allocatedCostUsd": 128282164.52,
    "cluster": "DISIS-2024-001",
    "costPerKw": 513.95,
    "costUnavailableReason": null,
    "requestMw": 249.6,
    "serviceCostUsd": {
      "ERIS": 128248107.7,
      "NRIS": 34056.82
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 36451755.95,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 20432445.5,
        "name": "Spearville - Holcomb 345 kV Line GEN-2024-193/194 Interconnection (Shared NU) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 14327587.58,
        "name": "Add line 516106 BOBCAT 7    345 539841 G-2011-008-1    345 YY",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 55,
    "upgradeTypeCostUsd": {
      "Current Study": 105230269.02,
      "Interconnection ": 23051895.5
    }
  },
  "GEN-2024-194": {
    "allocatedCostUsd": 128282164.52,
    "cluster": "DISIS-2024-001",
    "costPerKw": 513.95,
    "costUnavailableReason": null,
    "requestMw": 249.6,
    "serviceCostUsd": {
      "ERIS": 128248107.7,
      "NRIS": 34056.82
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 36451755.95,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 20432445.5,
        "name": "Spearville - Holcomb 345 kV Line GEN-2024-193/194 Interconnection (Shared NU) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 14327587.58,
        "name": "Add line 516106 BOBCAT 7    345 539841 G-2011-008-1    345 YY",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 55,
    "upgradeTypeCostUsd": {
      "Current Study": 105230269.02,
      "Interconnection ": 23051895.5
    }
  },
  "GEN-2024-204": {
    "allocatedCostUsd": 53583841.06,
    "cluster": "DISIS-2024-001",
    "costPerKw": 535.84,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 53507434.14,
      "NRIS": 76406.92
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8282975.28,
        "name": "Rebuild line 505600 TUPELO 4    138 505602 S BROWN4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3816127.3,
        "name": "Rebuild line 515150 CANEYCK4    138 515151 LTLCITY4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2815752.47,
        "name": "Rebuild line 520939 HLDTNTP4    138 520981 LOCO   4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 157,
    "upgradeTypeCostUsd": {
      "Current Study": 53483841.06,
      "Interconnection ": 100000
    }
  },
  "GEN-2024-205": {
    "allocatedCostUsd": 88292537.06,
    "cluster": "DISIS-2024-001",
    "costPerKw": 569.63,
    "costUnavailableReason": null,
    "requestMw": 155,
    "serviceCostUsd": {
      "ERIS": 88209777.93,
      "NRIS": 82759.13
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12276458.2,
        "name": "Rebuild line 530582 S HAYS6    230 539679 GRTBEND6    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8322439.89,
        "name": "Rebuild line 530618 HUNTSVL3    115 530624 ST JOHN3    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5570671.33,
        "name": "Rebuild line 539692 SEWARD 3    115 539696 ST-JOHN3    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 68,
    "upgradeTypeCostUsd": {
      "Current Study": 84292537.06,
      "Interconnection ": 4000000
    }
  },
  "GEN-2024-206": {
    "allocatedCostUsd": 13657690.9,
    "cluster": "DISIS-2024-001",
    "costPerKw": 60.35,
    "costUnavailableReason": null,
    "requestMw": 226.3,
    "serviceCostUsd": {
      "ERIS": 13657690.9
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2333777.34,
        "name": "Rebuild line 542973 HAWTHS5    161 548814 SUB M-161    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2166546.2,
        "name": "Rebuild line 543004 BLUMILS5    161 548808 ECKLES-161    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1499916.6,
        "name": "Rebuild line 543004 BLUMILS5    161 783180 G24-207-TAP    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 12,
    "upgradeTypeCostUsd": {
      "Current Study": 13657690.9,
      "Interconnection ": 0
    }
  },
  "GEN-2024-207": {
    "allocatedCostUsd": 47246735.16,
    "cluster": "DISIS-2024-001",
    "costPerKw": 60.68,
    "costUnavailableReason": null,
    "requestMw": 778.5999999999999,
    "serviceCostUsd": {
      "ERIS": 47246735.16
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7941222.66,
        "name": "Rebuild line 542973 HAWTHS5    161 548814 SUB M-161    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7583453.8,
        "name": "Rebuild line 543004 BLUMILS5    161 548808 ECKLES-161    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5250083.4,
        "name": "Rebuild line 543004 BLUMILS5    161 783180 G24-207-TAP    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 13,
    "upgradeTypeCostUsd": {
      "Current Study": 47246735.16,
      "Interconnection ": 0
    }
  },
  "GEN-2024-209": {
    "allocatedCostUsd": 50930073.85,
    "cluster": "DISIS-2024-001",
    "costPerKw": 255.93,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 50864426.58,
      "NRIS": 65647.27
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12600000,
        "name": "Elm Creek - North Manhattan 230 kV Line GEN-2024-209 Interconnection (Non-Shared NU) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 9543235.96,
        "name": "Add line 640600 DAYKIN3    345 785610 G24-288-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5400000,
        "name": "Elm Creek - North Manhattan 230 kV Line GEN-2024-209 Interconnection (TOIF) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 28,
    "upgradeTypeCostUsd": {
      "Current Study": 32930073.85,
      "Interconnection ": 18000000
    }
  },
  "GEN-2024-210": {
    "allocatedCostUsd": 230472806.69,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1536.49,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 202558360.85,
      "NRIS": 27914445.84
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 41499686.47,
        "name": "Add line 659131 LARAMIE_-MB3    345 800120 UNDERWOOD 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 34790013.14,
        "name": "Add line 652424 BELFELD3    345 800121 MAURINE 2    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 21737345.06,
        "name": "Rebuild line 640183 GENTLMN3    345 640325 REDWILO3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 74,
    "upgradeTypeCostUsd": {
      "Current Study": 213472806.69,
      "Interconnection ": 17000000
    }
  },
  "GEN-2024-211": {
    "allocatedCostUsd": 18964403.6,
    "cluster": "DISIS-2024-001",
    "costPerKw": 62.59,
    "costUnavailableReason": null,
    "requestMw": 303,
    "serviceCostUsd": {
      "ERIS": 17804751.55,
      "NRIS": 1159652.05
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 13904751.55,
        "name": "Rebuild line 645455 S3455  3    345 645740 S3740  3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2000000,
        "name": "Substation 3740 345 kV GEN-2024-211 Interconnection (Non-Shared NU) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1900000,
        "name": "Substation 3740 345 kV GEN-2024-211 Interconnection (TOIF) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Current Study": 15064403.6,
      "Interconnection ": 3900000
    }
  },
  "GEN-2024-212": {
    "allocatedCostUsd": 18964403.6,
    "cluster": "DISIS-2024-001",
    "costPerKw": 62.59,
    "costUnavailableReason": null,
    "requestMw": 303,
    "serviceCostUsd": {
      "ERIS": 17804751.55,
      "NRIS": 1159652.05
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 13904751.55,
        "name": "Rebuild line 645455 S3455  3    345 645740 S3740  3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2000000,
        "name": "Substation 3740 345 kV GEN-2024-212 Interconnection (Non-Shared NU) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1900000,
        "name": "Substation 3740 345 kV GEN-2024-212 Interconnection (TOIF) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Current Study": 15064403.6,
      "Interconnection ": 3900000
    }
  },
  "GEN-2024-213": {
    "allocatedCostUsd": 21798301.31,
    "cluster": "DISIS-2024-001",
    "costPerKw": 60.55,
    "costUnavailableReason": null,
    "requestMw": 360,
    "serviceCostUsd": {
      "ERIS": 20420496.89,
      "NRIS": 1377804.42
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 16520496.89,
        "name": "Rebuild line 645455 S3455  3    345 645740 S3740  3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2000000,
        "name": "Substation 3740 345 kV GEN-2024-213 Interconnection (Non-Shared NU) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1900000,
        "name": "Substation 3740 345 kV GEN-2024-213 Interconnection (TOIF) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Current Study": 17898301.31,
      "Interconnection ": 3900000
    }
  },
  "GEN-2024-215": {
    "allocatedCostUsd": 59448168.56,
    "cluster": "DISIS-2024-001",
    "costPerKw": 198.16,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 59346808.1,
      "NRIS": 101360.46
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 23651831.69,
        "name": "Add line 640600 DAYKIN3    345 785610 G24-288-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9627976.78,
        "name": "Rebuild line 640277 MOORE  3    345 640525 TOBIAS     3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5036725.51,
        "name": "Add line 532771 RENO   7    345 532796 WICHITA7    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 28,
    "upgradeTypeCostUsd": {
      "Current Study": 56284761.56,
      "Interconnection ": 3163407
    }
  },
  "GEN-2024-216": {
    "allocatedCostUsd": 378962493.48,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1684.28,
    "costUnavailableReason": null,
    "requestMw": 225,
    "serviceCostUsd": {
      "ERIS": 346942410.88,
      "NRIS": 32020082.6
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 93303376.7,
        "name": "Rebuild line 652403 DAWSONC4    230 652411 MI CTYE4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 55270143.77,
        "name": "Rebuild line 652616 MINGUSVILLE4    230 659247 MEDORA__-UM4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 41428976.57,
        "name": "Rebuild line 652403 DAWSONC4    230 652616 MINGUSVILLE4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 51,
    "upgradeTypeCostUsd": {
      "Current Study": 369004493.48,
      "Interconnection ": 9958000
    }
  },
  "GEN-2024-217": {
    "allocatedCostUsd": 45445294.85,
    "cluster": "DISIS-2024-001",
    "costPerKw": 181.78,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 45445294.85
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 31935383,
        "name": "Sibley -  Hawthorne 345 kV line GEN-2024-217 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2545772.79,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2361648.26,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 20,
    "upgradeTypeCostUsd": {
      "Current Study": 11551819.85,
      "Interconnection ": 33893475
    }
  },
  "GEN-2024-218": {
    "allocatedCostUsd": 172997568.3,
    "cluster": "DISIS-2024-001",
    "costPerKw": 869.33,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 172875041.18,
      "NRIS": 122527.12
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 33592888.47,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 32202627.95,
        "name": "Rebuild line 523106 TXPHSF     3    115 539672 E-LIBER3    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 24090399.86,
        "name": "Rebuild line 531405 WALKMYR3    115 539654 CIM-PLT3    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 52,
    "upgradeTypeCostUsd": {
      "Current Study": 157997568.3,
      "Interconnection ": 15000000
    }
  },
  "GEN-2024-219": {
    "allocatedCostUsd": 70531795.07,
    "cluster": "DISIS-2024-001",
    "costPerKw": 440.82,
    "costUnavailableReason": null,
    "requestMw": 160,
    "serviceCostUsd": {
      "ERIS": 70072195.24,
      "NRIS": 459599.83
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7000000,
        "name": "Chigley - Oaklawn 138 kV Line GEN-2024-219 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5400000,
        "name": "Rebuild 3-winding transformer 515113 CHIGLEY2    69 515114 CHIGLEY4    138 515712 CHIGLEY1    13 3",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5116154.65,
        "name": "Rebuild line 515097 WLNUTCK4    138 515100 PAOLI- 4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 145,
    "upgradeTypeCostUsd": {
      "Current Study": 61531795.07,
      "Interconnection ": 9000000
    }
  },
  "GEN-2024-220": {
    "allocatedCostUsd": 45604705.04,
    "cluster": "DISIS-2024-001",
    "costPerKw": 829.18,
    "costUnavailableReason": null,
    "requestMw": 55,
    "serviceCostUsd": {
      "ERIS": 45562451.97,
      "NRIS": 42253.07
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 16475000,
        "name": "Rodessa - Bloomberg 69 kV Line GEN-2024-220 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5809982.09,
        "name": "Rebuild line 508814 RODESSA2    69 783570 G24-220-TAP    69 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4832286.85,
        "name": "Rebuild line 508804 HOSSTON2    69 508846 GODFREYRDTP2    69 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 117,
    "upgradeTypeCostUsd": {
      "Current Study": 25654705.04,
      "Interconnection ": 19950000
    }
  },
  "GEN-2024-221": {
    "allocatedCostUsd": 339840936.33,
    "cluster": "DISIS-2024-001",
    "costPerKw": 849.6,
    "costUnavailableReason": null,
    "requestMw": 400,
    "serviceCostUsd": {
      "ERIS": 339089525.84,
      "NRIS": 751410.5
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 45536712.63,
        "name": "345 kV Crossroads -  Eddy County 345 kV Line GEN-2024-221 Interconnection (Non-Shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 43177276.61,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 36887358.35,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 67,
    "upgradeTypeCostUsd": {
      "Current Study": 289432097.45,
      "Interconnection ": 50408838.88
    }
  },
  "GEN-2024-226": {
    "allocatedCostUsd": 115694596.35,
    "cluster": "DISIS-2024-001",
    "costPerKw": 385.65,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 115466935.59,
      "NRIS": 227660.77
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28477036.04,
        "name": "Rebuild line 508072 NWTXARK7    345 508359 WELSH  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8658000,
        "name": "Rebuild the 3COUCH% to 3MCNEIL! 115kV Line 1",
        "serviceType": "ERIS",
        "upgradeType": "JTIQ Expanded Scope Analysis"
      },
      {
        "costUsd": 7621333.96,
        "name": "Rebuild line 508359 WELSH  7    345 508841 WILKES 7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 111,
    "upgradeTypeCostUsd": {
      "Current Study": 89941596.35,
      "Interconnection ": 5425000,
      "JTIQ Expanded Scope Analysis": 20328000
    }
  },
  "GEN-2024-227": {
    "allocatedCostUsd": 78938064.24,
    "cluster": "DISIS-2024-001",
    "costPerKw": 394.69,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 78786290.39,
      "NRIS": 151773.84
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18984690.69,
        "name": "Rebuild line 508072 NWTXARK7    345 508359 WELSH  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5772000,
        "name": "Rebuild the 3COUCH% to 3MCNEIL! 115kV Line 1",
        "serviceType": "ERIS",
        "upgradeType": "JTIQ Expanded Scope Analysis"
      },
      {
        "costUsd": 5425000,
        "name": "John W Turk Jr Power Plant 345 kV Substation GEN-2024-227 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 111,
    "upgradeTypeCostUsd": {
      "Current Study": 59961064.24,
      "Interconnection ": 5425000,
      "JTIQ Expanded Scope Analysis": 13552000
    }
  },
  "GEN-2024-228": {
    "allocatedCostUsd": 110287704.19,
    "cluster": "DISIS-2024-001",
    "costPerKw": 551.44,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 110182168.41,
      "NRIS": 105535.78
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 40750000,
        "name": "Add line 532871 CIRCLE 6    230 783810 G24-228-TAP    230 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 21674620.93,
        "name": "Rebuild line 532871 CIRCLE 6    230 532872 EMCPHER6    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11100578.58,
        "name": "Rice to Circle 230 kV Line GEN-2024-228 Interconnection (Non-Shared NU) (MIDW)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 37,
    "upgradeTypeCostUsd": {
      "Current Study": 97389584.41,
      "Interconnection ": 12898119.78
    }
  },
  "GEN-2024-229": {
    "allocatedCostUsd": 104145621.16,
    "cluster": "DISIS-2024-001",
    "costPerKw": 520.73,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 103978112.6,
      "NRIS": 167508.56
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 13032532.73,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11290000,
        "name": "Lawton East Side - Oklaunion North 345 kV GEN-2024-229/230 Interconnection (Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5744590.01,
        "name": "Rebuild line 511423 FLE TAP4    138 511467 L.E.S.-4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 135,
    "upgradeTypeCostUsd": {
      "Current Study": 87430621.16,
      "Interconnection ": 16715000
    }
  },
  "GEN-2024-230": {
    "allocatedCostUsd": 153505931.74,
    "cluster": "DISIS-2024-001",
    "costPerKw": 511.69,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 153254668.9,
      "NRIS": 251262.84
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 19548799.1,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 16935000,
        "name": "Lawton East Side - Oklaunion North 345 kV GEN-2024-229/230 Interconnection (Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 8616885.02,
        "name": "Rebuild line 511423 FLE TAP4    138 511467 L.E.S.-4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 135,
    "upgradeTypeCostUsd": {
      "Current Study": 131145931.74,
      "Interconnection ": 22360000
    }
  },
  "GEN-2024-231": {
    "allocatedCostUsd": 36930601.59,
    "cluster": "DISIS-2024-001",
    "costPerKw": 568.16,
    "costUnavailableReason": null,
    "requestMw": 65,
    "serviceCostUsd": {
      "ERIS": 28951925.5,
      "NRIS": 7978676.08
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17171205.61,
        "name": "Rebuild line 532913 KELLY  5    161 532920 TECHILL5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3657291.18,
        "name": "Rebuild line 533210 ENEMEHA3    115 533212 KINGFISH3    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3274921.89,
        "name": "Rebuild line 647101 AUBRNT 8    69 647975 S975   8    69 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 21,
    "upgradeTypeCostUsd": {
      "Current Study": 36580601.59,
      "Interconnection ": 350000
    }
  },
  "GEN-2024-232": {
    "allocatedCostUsd": 49911610.59,
    "cluster": "DISIS-2024-001",
    "costPerKw": 199.65,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 49744613.7,
      "NRIS": 166996.88
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28225000,
        "name": "Crockett - Rocky Creek 345 kV line GEN-2024-232 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5225000,
        "name": "Crockett - Rocky Creek 345 kV line GEN-2024-232 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1806056.61,
        "name": "Add line 532773 SUMMIT 7    345 532998 G16-111-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 68,
    "upgradeTypeCostUsd": {
      "Current Study": 16461610.59,
      "Interconnection ": 33450000
    }
  },
  "GEN-2024-234": {
    "allocatedCostUsd": 1125140.73,
    "cluster": "DISIS-2024-001",
    "costPerKw": 5.63,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 355579.74,
      "NRIS": 769560.99
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 387442.85,
        "name": "Add 3-winding transformer 659105 LELAND_O-BE3    345 659106 LELAND_O-BE4    230 659202 LO.KVA2_-BE9    13 M2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 382118.15,
        "name": "Add 3-winding transformer 659105 LELAND_O-BE3    345 659106 LELAND_O-BE4    230 659201 LO.KU1A_-BE9    13 M2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 350000,
        "name": "Raun - Tekamah 161 kV line GEN-2024-234 Interconnection (Non-Shared NU) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Current Study": 775140.73,
      "Interconnection ": 350000
    }
  },
  "GEN-2024-235": {
    "allocatedCostUsd": 70366267.71,
    "cluster": "DISIS-2024-001",
    "costPerKw": 281.47,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 70366267.71
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28225000,
        "name": "Sooner - Wekiwa 345 kV line GEN-2024-235 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5225000,
        "name": "Sooner - Wekiwa 345 kV line GEN-2024-235 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3524151.24,
        "name": "Rebuild line 532794 ROSEHIL7    345 560053 G15052_T    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 105,
    "upgradeTypeCostUsd": {
      "Current Study": 36916267.71,
      "Interconnection ": 33450000
    }
  },
  "GEN-2024-236": {
    "allocatedCostUsd": 59604567.87,
    "cluster": "DISIS-2024-001",
    "costPerKw": 246.91,
    "costUnavailableReason": null,
    "requestMw": 241.4,
    "serviceCostUsd": {
      "ERIS": 59405597.97,
      "NRIS": 198969.9
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18000000,
        "name": "Seminole - Muskogee 345 kV line GEN-2024-236 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 4802351.34,
        "name": "Rebuild 2-winding transformer 515045 SEMINOL7    345 515049 SEMINOLE9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4802351.34,
        "name": "Rebuild 2-winding transformer 515045 SEMINOL7    345 515049 SEMINOLE9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 127,
    "upgradeTypeCostUsd": {
      "Current Study": 38604567.87,
      "Interconnection ": 21000000
    }
  },
  "GEN-2024-239": {
    "allocatedCostUsd": 65683100.88,
    "cluster": "DISIS-2024-001",
    "costPerKw": 328.42,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 60292744.42,
      "NRIS": 5390356.46
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12343090.79,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5277340.18,
        "name": "Add 3-winding transformer 514898 CIMARON4    138 514901 CIMARON7    345 515715 CIMARO21    13 M2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4619954.78,
        "name": "Rebuild line 532768 EMPEC 7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 112,
    "upgradeTypeCostUsd": {
      "Current Study": 60183100.88,
      "Interconnection ": 5500000
    }
  },
  "GEN-2024-240": {
    "allocatedCostUsd": 80847345.7,
    "cluster": "DISIS-2024-001",
    "costPerKw": 269.49,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 80847345.7
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28225000,
        "name": "Neosho - Delaware 345 kV line GEN-2024-240 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 7695831.43,
        "name": "Rebuild line 532793 NEOSHO 7    345 784170 G24-240-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5225000,
        "name": "Neosho - Delaware 345 kV line GEN-2024-240 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 74,
    "upgradeTypeCostUsd": {
      "Current Study": 47397345.7,
      "Interconnection ": 33450000
    }
  },
  "GEN-2024-241": {
    "allocatedCostUsd": 21770926.64,
    "cluster": "DISIS-2024-001",
    "costPerKw": 217.71,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 21690214.76,
      "NRIS": 80711.88
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3485965.37,
        "name": "Rebuild line 508359 WELSH  7    345 508841 WILKES 7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2409865.18,
        "name": "Rebuild line 508072 NWTXARK7    345 508359 WELSH  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2094207.37,
        "name": "Rebuild line 508359 WELSH  7    345 776060 G23-204-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 111,
    "upgradeTypeCostUsd": {
      "Current Study": 21570926.64,
      "Interconnection ": 200000
    }
  },
  "GEN-2024-242": {
    "allocatedCostUsd": 100977583.82,
    "cluster": "DISIS-2024-001",
    "costPerKw": 403.91,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 100735204.63,
      "NRIS": 242379.19
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7686309.05,
        "name": "Rebuild line 520939 HLDTNTP4    138 520981 LOCO   4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4281944.22,
        "name": "Rebuild line 505600 TUPELO 4    138 505602 S BROWN4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3516481.9,
        "name": "Rebuild line 515097 WLNUTCK4    138 515100 PAOLI- 4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 149,
    "upgradeTypeCostUsd": {
      "Current Study": 97477583.82,
      "Interconnection ": 3500000
    }
  },
  "GEN-2024-243": {
    "allocatedCostUsd": 45493115.87,
    "cluster": "DISIS-2024-001",
    "costPerKw": 908.05,
    "costUnavailableReason": null,
    "requestMw": 50.1,
    "serviceCostUsd": {
      "ERIS": 45480311.19,
      "NRIS": 12804.68
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 24940072.51,
        "name": "Rebuild line 338110 5HILLTOP%    161 505507 SWPINEY5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8379780.46,
        "name": "Rebuild line 505507 SWPINEY5    161 505508 DARDANE5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4100000,
        "name": "Van Buren 161 kV Substation GEN-2024-243 Interconnection (Non-Shared NU) (SWPA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 83,
    "upgradeTypeCostUsd": {
      "Current Study": 40593115.87,
      "Interconnection ": 4900000
    }
  },
  "GEN-2024-244": {
    "allocatedCostUsd": 103989622.27,
    "cluster": "DISIS-2024-001",
    "costPerKw": 693.26,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 103962851.46,
      "NRIS": 26770.81
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 14763542.73,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8022702.26,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7890764.49,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 57,
    "upgradeTypeCostUsd": {
      "Current Study": 94265806.5,
      "Interconnection ": 9723815.77
    }
  },
  "GEN-2024-245": {
    "allocatedCostUsd": 48397403.98,
    "cluster": "DISIS-2024-001",
    "costPerKw": 243.2,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 48265498.19,
      "NRIS": 131905.79
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4165914.93,
        "name": "Rebuild line 532768 EMPEC 7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3788709.36,
        "name": "Rebuild line 532796 WICHITA7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2321477.07,
        "name": "Rebuild line 532799 WAVERLY7    345 766261 G20-007-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 116,
    "upgradeTypeCostUsd": {
      "Current Study": 44897403.98,
      "Interconnection ": 3500000
    }
  },
  "GEN-2024-246": {
    "allocatedCostUsd": 187092513.53,
    "cluster": "DISIS-2024-001",
    "costPerKw": 940.16,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 186951670.72,
      "NRIS": 140842.82
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 29862073.18,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 25113605.4,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 22465933.35,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 59,
    "upgradeTypeCostUsd": {
      "Current Study": 180727049.96,
      "Interconnection ": 6365463.57
    }
  },
  "GEN-2024-247": {
    "allocatedCostUsd": 27707303.36,
    "cluster": "DISIS-2024-001",
    "costPerKw": 60.68,
    "costUnavailableReason": null,
    "requestMw": 456.6,
    "serviceCostUsd": {
      "ERIS": 27707303.36
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 11640000,
        "name": "Rebuild line 512710 KINZEGR4    138 512731 NORTHTP4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8364000,
        "name": "Rebuild line 300141 4STILWTR    138 512731 NORTHTP4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2432500,
        "name": "Add 0.4 MVAR switched shunt at CRESENT4 138 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 11,
    "upgradeTypeCostUsd": {
      "Current Study": 25761303.36,
      "Interconnection ": 1946000
    }
  },
  "GEN-2024-249": {
    "allocatedCostUsd": 27852802.06,
    "cluster": "DISIS-2024-001",
    "costPerKw": 38.62,
    "costUnavailableReason": null,
    "requestMw": 721.2,
    "serviceCostUsd": {
      "ERIS": 27634338.34,
      "NRIS": 218463.72
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 20628160.15,
        "name": "Rebuild line 532765 HOYT   7    345 532766 JEC N  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5202083,
        "name": "Jeffrey EC 345 kV Substation GEN-2024-249 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1742929,
        "name": "Jeffrey EC 345 kV Substation GEN-2024-249 Interconnection (TOIF) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Current Study": 20907790.06,
      "Interconnection ": 6945012
    }
  },
  "GEN-2024-250": {
    "allocatedCostUsd": 63540017.84,
    "cluster": "DISIS-2024-001",
    "costPerKw": 319.3,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 63124643.05,
      "NRIS": 415374.79
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 5225000,
        "name": "Pittsburgh 345 kV Substation GEN-2024-250 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 4982075.76,
        "name": "Rebuild line 510907 PITTSB-7    345 515045 SEMINOL7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3900000,
        "name": "Pittsburgh 345 kV Substation GEN-2024-250 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 141,
    "upgradeTypeCostUsd": {
      "Current Study": 54415017.84,
      "Interconnection ": 9125000
    }
  },
  "GEN-2024-251": {
    "allocatedCostUsd": 124159672.67,
    "cluster": "DISIS-2024-001",
    "costPerKw": 993.28,
    "costUnavailableReason": null,
    "requestMw": 125,
    "serviceCostUsd": {
      "ERIS": 124072338.91,
      "NRIS": 87333.76
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15598890.66,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 15446561.37,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 13647722.12,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 68,
    "upgradeTypeCostUsd": {
      "Current Study": 116096553.82,
      "Interconnection ": 8063118.85
    }
  },
  "GEN-2024-252": {
    "allocatedCostUsd": 43073405.39,
    "cluster": "DISIS-2024-001",
    "costPerKw": 143.58,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 34987870.7,
      "NRIS": 8085534.7
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7916010.26,
        "name": "Add 3-winding transformer 514898 CIMARON4    138 514901 CIMARON7    345 515715 CIMARO21    13 M2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 6353605.99,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3000000,
        "name": "Cimmaron 345 kV Substation GEN-2024-252 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 119,
    "upgradeTypeCostUsd": {
      "Current Study": 37573405.39,
      "Interconnection ": 5500000
    }
  },
  "GEN-2024-253": {
    "allocatedCostUsd": 41103169.98,
    "cluster": "DISIS-2024-001",
    "costPerKw": 137.01,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 41103169.98
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 33058407,
        "name": "Stranger Creek - 87th Street 345 kV line GEN-2024-253 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1958092,
        "name": "Stranger Creek - 87th Street 345 kV line GEN-2024-253 Interconnection (TOIF) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1454055.59,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 20,
    "upgradeTypeCostUsd": {
      "Current Study": 6086670.98,
      "Interconnection ": 35016499
    }
  },
  "GEN-2024-254": {
    "allocatedCostUsd": 40124477.23,
    "cluster": "DISIS-2024-001",
    "costPerKw": 133.75,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 35067911.68,
      "NRIS": 5056565.55
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6446618.78,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4906649.56,
        "name": "Add 3-winding transformer 514898 CIMARON4    138 514901 CIMARON7    345 515715 CIMARO21    13 M2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3000000,
        "name": "Mathewson 345 kV Substation GEN-2024-254 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 116,
    "upgradeTypeCostUsd": {
      "Current Study": 35124477.23,
      "Interconnection ": 5000000
    }
  },
  "GEN-2024-255": {
    "allocatedCostUsd": 38175437.31,
    "cluster": "DISIS-2024-001",
    "costPerKw": 127.25,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 38175437.31
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7500000,
        "name": "Spring Creek 345 kV Substation GEN-2024-255 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 6206141.63,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2358486.05,
        "name": "Rebuild line 532768 EMPEC 7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 112,
    "upgradeTypeCostUsd": {
      "Current Study": 28675437.31,
      "Interconnection ": 9500000
    }
  },
  "GEN-2024-257": {
    "allocatedCostUsd": 165741710.02,
    "cluster": "DISIS-2024-001",
    "costPerKw": 753.37,
    "costUnavailableReason": null,
    "requestMw": 220,
    "serviceCostUsd": {
      "ERIS": 165620406.32,
      "NRIS": 121303.69
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15749713.98,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 14700000,
        "name": "Skellyville 115 kV Tap Substation GEN-2024-257 Interconnection (Non-Shared NU) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 12520000,
        "name": "Rebuild line 539753 PRATTENERGY3    115 539756 SKLYVL_GOAB3    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 64,
    "upgradeTypeCostUsd": {
      "Current Study": 144741710.02,
      "Interconnection ": 21000000
    }
  },
  "GEN-2024-258": {
    "allocatedCostUsd": 43128787.66,
    "cluster": "DISIS-2024-001",
    "costPerKw": 143.76,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 42813767.09,
      "NRIS": 315020.58
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28818600,
        "name": "Wolf Creek - Blackberry 345 kV Line GEN-2024-258 Interconnection (Non-Shared NU) (NEET)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3484084.1,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2110912.28,
        "name": "Rebuild line 532793 NEOSHO 7    345 784170 G24-240-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 18,
    "upgradeTypeCostUsd": {
      "Current Study": 13469932.66,
      "Interconnection ": 29658855
    }
  },
  "GEN-2024-259": {
    "allocatedCostUsd": 89398658.18,
    "cluster": "DISIS-2024-001",
    "costPerKw": 447.44,
    "costUnavailableReason": null,
    "requestMw": 199.8,
    "serviceCostUsd": {
      "ERIS": 79876428.87,
      "NRIS": 9522229.3
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 33306052,
        "name": "Asbury 161 kV Substation GEN-2024-259 Interconnection (Non-Shared NU) (EMDE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 10266700.77,
        "name": "Rebuild line 547476 ASB349 5    161 547477 CJ 366 5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9917906.72,
        "name": "Rebuild line 547476 ASB349 5    161 547491 PUR421 5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 21,
    "upgradeTypeCostUsd": {
      "Current Study": 50215067.18,
      "Interconnection ": 39183591
    }
  },
  "GEN-2024-260": {
    "allocatedCostUsd": 17484032.92,
    "cluster": "DISIS-2024-001",
    "costPerKw": 87.51,
    "costUnavailableReason": null,
    "requestMw": 199.8,
    "serviceCostUsd": {
      "ERIS": 17484032.92
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4125987.58,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2460740.81,
        "name": "Rebuild line 645458 S3458  3    345 778170 G24-040-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2355948.81,
        "name": "Rebuild line 640139 COOPER 3    345 778170 G24-040-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 19,
    "upgradeTypeCostUsd": {
      "Current Study": 15187288.92,
      "Interconnection ": 2296744
    }
  },
  "GEN-2024-261": {
    "allocatedCostUsd": 142880778.17,
    "cluster": "DISIS-2024-001",
    "costPerKw": 952.54,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 138050529.26,
      "NRIS": 4830248.91
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18754899.75,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 16449389.5,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 16390576.01,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 68,
    "upgradeTypeCostUsd": {
      "Current Study": 142880778.17,
      "Interconnection ": 0
    }
  },
  "GEN-2024-265": {
    "allocatedCostUsd": 147050286.06,
    "cluster": "DISIS-2024-001",
    "costPerKw": 948.71,
    "costUnavailableReason": null,
    "requestMw": 155,
    "serviceCostUsd": {
      "ERIS": 146941501.9,
      "NRIS": 108784.16
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 19379835.95,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 16995648.49,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 16933367,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 64,
    "upgradeTypeCostUsd": {
      "Current Study": 128566710.28,
      "Interconnection ": 18483575.78
    }
  },
  "GEN-2024-266": {
    "allocatedCostUsd": 374512557.98,
    "cluster": "DISIS-2024-001",
    "costPerKw": 749.03,
    "costUnavailableReason": null,
    "requestMw": 500,
    "serviceCostUsd": {
      "ERIS": 374479100.92,
      "NRIS": 33457.06
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 55573124.78,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 49572312.6,
        "name": "Add line 515378 WWRDEHV9    765 523966 POTTER_CO  9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 45184189.67,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 50,
    "upgradeTypeCostUsd": {
      "Current Study": 343645205.47,
      "Interconnection ": 30867352.51
    }
  },
  "GEN-2024-267": {
    "allocatedCostUsd": 145090916.72,
    "cluster": "DISIS-2024-001",
    "costPerKw": 744.06,
    "costUnavailableReason": null,
    "requestMw": 195,
    "serviceCostUsd": {
      "ERIS": 144940156.09,
      "NRIS": 150760.63
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18960000,
        "name": "Rebuild line 520826 BENNGTN4    138 520884 DURANTP4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 13947555.82,
        "name": "Rebuild line 505600 TUPELO 4    138 505602 S BROWN4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7000000,
        "name": "Durantp4 - Sclmnjc4 138 kV Line GEN-2024-267 Interconnection (Non-Shared NU) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 165,
    "upgradeTypeCostUsd": {
      "Current Study": 136090916.72,
      "Interconnection ": 9000000
    }
  },
  "GEN-2024-268": {
    "allocatedCostUsd": 63890715.96,
    "cluster": "DISIS-2024-001",
    "costPerKw": 163.82,
    "costUnavailableReason": null,
    "requestMw": 390,
    "serviceCostUsd": {
      "ERIS": 63740494.03,
      "NRIS": 150221.93
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 3856968.1,
        "name": "Rebuild line 515235 PECANCK7    345 516374 KEEFTON7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3731033.01,
        "name": "Rebuild line 532799 WAVERLY7    345 766261 G20-007-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3603828.56,
        "name": "Add line 532773 SUMMIT 7    345 532998 G16-111-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 105,
    "upgradeTypeCostUsd": {
      "Current Study": 58890715.96,
      "Interconnection ": 5000000
    }
  },
  "GEN-2024-271": {
    "allocatedCostUsd": 315574805.22,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1262.3,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 315401742.46,
      "NRIS": 173062.76
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 30894967.82,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 26565770.11,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 26356389.29,
        "name": "Chaves County - San Juan Wind 230 kV Line GEN-2024-271 Interconnection (Non-Shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 75,
    "upgradeTypeCostUsd": {
      "Current Study": 285359601.22,
      "Interconnection ": 30215204
    }
  },
  "GEN-2024-272": {
    "allocatedCostUsd": 117069854.51,
    "cluster": "DISIS-2024-001",
    "costPerKw": 588.29,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 116958313.97,
      "NRIS": 111540.54
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 14663203.81,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11900000,
        "name": "Sawyer 115 kV Substation GEN-2024-272 Interconnection (Non-Shared NU) (KACY)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 8590127.34,
        "name": "Rebuild line 530582 S HAYS6    230 539679 GRTBEND6    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 56,
    "upgradeTypeCostUsd": {
      "Current Study": 100069854.51,
      "Interconnection ": 17000000
    }
  },
  "GEN-2024-273": {
    "allocatedCostUsd": 26491793.38,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1633.88,
    "costUnavailableReason": null,
    "requestMw": 16.214,
    "serviceCostUsd": {
      "ERIS": 26480420.48,
      "NRIS": 11372.9
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 10211151,
        "name": "Pearl 115 kV Substation GEN-2024-273 Interconnection (Non-Shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2622572,
        "name": "Pearl 115 kV Substation GEN-2024-273 Interconnection (TOIF) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2029370.22,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 62,
    "upgradeTypeCostUsd": {
      "Current Study": 13658070.38,
      "Interconnection ": 12833723
    }
  },
  "GEN-2024-274": {
    "allocatedCostUsd": 53816819.57,
    "cluster": "DISIS-2024-001",
    "costPerKw": 307.52,
    "costUnavailableReason": null,
    "requestMw": 175,
    "serviceCostUsd": {
      "ERIS": 53707225.38,
      "NRIS": 109594.19
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 10500000,
        "name": "Harper - Anthony 138 kV Line GEN-2024-274 Interconnection (Non-Shared NU) (SUNC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 9710450.54,
        "name": "Rebuild line 539668 HARPER 4    138 539881 SPRVLSTR    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8554826.68,
        "name": "Rebuild line 539009 CONWAY 4    138 539881 SPRVLSTR    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 33,
    "upgradeTypeCostUsd": {
      "Current Study": 38816819.57,
      "Interconnection ": 15000000
    }
  },
  "GEN-2024-276": {
    "allocatedCostUsd": 42254828.1,
    "cluster": "DISIS-2024-001",
    "costPerKw": 281.7,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 42227354.19,
      "NRIS": 27473.91
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 16322218.5,
        "name": "Tecumseh Hill - Swissvale 230kV Line GEN-2024-276/277 Interconnection (Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 14069500,
        "name": "Rebuild line 532856 SWISVAL6    230 785250 G24-276-TAP    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1958092,
        "name": "Tecumseh Hill - Swissvale 230kV Line GEN-2024-276 Interconnection (TOIF) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 25,
    "upgradeTypeCostUsd": {
      "Current Study": 23974517.6,
      "Interconnection ": 18280310.5
    }
  },
  "GEN-2024-277": {
    "allocatedCostUsd": 40409647.1,
    "cluster": "DISIS-2024-001",
    "costPerKw": 269.4,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 40382173.19,
      "NRIS": 27473.91
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 16322218.5,
        "name": "Tecumseh Hill - Swissvale 230kV Line GEN-2024-276/277 Interconnection (Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 14069500,
        "name": "Rebuild line 532856 SWISVAL6    230 785250 G24-276-TAP    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1799675.11,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 25,
    "upgradeTypeCostUsd": {
      "Current Study": 23974517.6,
      "Interconnection ": 16435129.5
    }
  },
  "GEN-2024-278": {
    "allocatedCostUsd": 258807627.51,
    "cluster": "DISIS-2024-001",
    "costPerKw": 979.22,
    "costUnavailableReason": null,
    "requestMw": 264.3,
    "serviceCostUsd": {
      "ERIS": 258580830.34,
      "NRIS": 226797.17
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 32702318.62,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 31250321.55,
        "name": "Eddy County - Crossroads 345 kV Line GEN-2024-278 Interconnection (Non-Shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 31076582.07,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 70,
    "upgradeTypeCostUsd": {
      "Current Study": 224218462.92,
      "Interconnection ": 34589164.59
    }
  },
  "GEN-2024-280": {
    "allocatedCostUsd": 306334814.63,
    "cluster": "DISIS-2024-001",
    "costPerKw": 875.24,
    "costUnavailableReason": null,
    "requestMw": 350,
    "serviceCostUsd": {
      "ERIS": 306089334.11,
      "NRIS": 245480.52
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 43802674.96,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 43393854.61,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 38504096.54,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 61,
    "upgradeTypeCostUsd": {
      "Current Study": 293195141.32,
      "Interconnection ": 13139673.31
    }
  },
  "GEN-2024-281": {
    "allocatedCostUsd": 255327553.8,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1021.31,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 255151919.19,
      "NRIS": 175634.61
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 31855562.15,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 31330872.58,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 27615935.66,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 64,
    "upgradeTypeCostUsd": {
      "Current Study": 229684861.31,
      "Interconnection ": 25642692.49
    }
  },
  "GEN-2024-282": {
    "allocatedCostUsd": 116117617.22,
    "cluster": "DISIS-2024-001",
    "costPerKw": 774.12,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 60821080.95,
      "NRIS": 55296536.27
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 32519481.55,
        "name": "Rebuild line 652497 MAURINE4    230 785430 G24-282-TAP    230 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 21000473.37,
        "name": "Rebuild line 640404 WAYSIDE 4    230 652484 NUNDRWD4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 18969630.77,
        "name": "Rebuild line 652884 NUNDRWD-LNX3    230 785430 G24-282-TAP    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 25,
    "upgradeTypeCostUsd": {
      "Current Study": 102382617.22,
      "Interconnection ": 13735000
    }
  },
  "GEN-2024-283": {
    "allocatedCostUsd": 115497617.22,
    "cluster": "DISIS-2024-001",
    "costPerKw": 769.98,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 60201080.95,
      "NRIS": 55296536.27
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 32519481.55,
        "name": "Rebuild line 652497 MAURINE4    230 785430 G24-282-TAP    230 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 21000473.37,
        "name": "Rebuild line 640404 WAYSIDE 4    230 652484 NUNDRWD4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 18969630.77,
        "name": "Rebuild line 652884 NUNDRWD-LNX3    230 785430 G24-282-TAP    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 25,
    "upgradeTypeCostUsd": {
      "Current Study": 102382617.22,
      "Interconnection ": 13115000
    }
  },
  "GEN-2024-284": {
    "allocatedCostUsd": 63408823.23,
    "cluster": "DISIS-2024-001",
    "costPerKw": 318.64,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 63208823.23,
      "NRIS": 200000
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 30292999,
        "name": "Antelope Valley - Broadland 345 kV Line GEN-2024-284 Interconnection (Non-Shared NU) (BEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 10736139.8,
        "name": "Add 3-winding transformer 659120 BROADLND-BE3    345 659204 BD.KU2A_-BE9    13 659205 BROADLND-BE4    230 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7839591.28,
        "name": "Rebuild line 640510 HOLT.CO3    345 652832 GRPRAR1-LNX3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 21,
    "upgradeTypeCostUsd": {
      "Current Study": 28324576.23,
      "Interconnection ": 35084247
    }
  },
  "GEN-2024-285": {
    "allocatedCostUsd": 133888419.2,
    "cluster": "DISIS-2024-001",
    "costPerKw": 535.55,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 133855329.51,
      "NRIS": 33089.68
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 33013520.56,
        "name": "Rebuild line 652529 WATERTN3    345 659165 CROCKER_-BE3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 17100022.97,
        "name": "Rebuild line 652568 GROTONSOUTH7    115 655481 REDFELD-ER7    115 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 12686450.51,
        "name": "Add 3-winding transformer 652237 WATERT19    13 652529 WATERTN3    345 652530 WATERTN4    230 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 29,
    "upgradeTypeCostUsd": {
      "Current Study": 127343409.2,
      "Interconnection ": 6545010
    }
  },
  "GEN-2024-286": {
    "allocatedCostUsd": 17509812.52,
    "cluster": "DISIS-2024-001",
    "costPerKw": 128.75,
    "costUnavailableReason": null,
    "requestMw": 136,
    "serviceCostUsd": {
      "ERIS": 17509812.52
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12000000,
        "name": "AES 5 161 kV Substation GEN-2024-286 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5000000,
        "name": "AES 5 161 kV Substation GEN-2024-286 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 326057.1,
        "name": "Rebuild line 515235 PECANCK7    345 516374 KEEFTON7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Current Study": 509812.52,
      "Interconnection ": 17000000
    }
  },
  "GEN-2024-287": {
    "allocatedCostUsd": 37509118.67,
    "cluster": "DISIS-2024-001",
    "costPerKw": 187.73,
    "costUnavailableReason": null,
    "requestMw": 199.8,
    "serviceCostUsd": {
      "ERIS": 37295871.11,
      "NRIS": 213247.56
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28818600,
        "name": "Wolf Creek - Blackberry 345 kV Line GEN-2024-287 Interconnection (Non-Shared NU) (NEET)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2009901.2,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1515826.2,
        "name": "Rebuild line 532793 NEOSHO 7    345 784170 G24-240-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 17,
    "upgradeTypeCostUsd": {
      "Current Study": 7850263.67,
      "Interconnection ": 29658855
    }
  },
  "GEN-2024-288": {
    "allocatedCostUsd": 26085392.3,
    "cluster": "DISIS-2024-001",
    "costPerKw": 200.66,
    "costUnavailableReason": null,
    "requestMw": 130,
    "serviceCostUsd": {
      "ERIS": 26043759.53,
      "NRIS": 41632.77
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 11453817.36,
        "name": "Add line 640600 DAYKIN3    345 785610 G24-288-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4652804.7,
        "name": "Rebuild line 640277 MOORE  3    345 640525 TOBIAS     3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2027301.77,
        "name": "Add line 532771 RENO   7    345 532796 WICHITA7    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 28,
    "upgradeTypeCostUsd": {
      "Current Study": 26085392.3,
      "Interconnection ": 0
    }
  },
  "GEN-2024-289": {
    "allocatedCostUsd": 78949988.83,
    "cluster": "DISIS-2024-001",
    "costPerKw": 225.57,
    "costUnavailableReason": null,
    "requestMw": 350,
    "serviceCostUsd": {
      "ERIS": 78949988.83
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 36300000,
        "name": "Rebuild line 541207 ARCHIE 5    161 785640 G24-289-TAP    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 16033822.81,
        "name": "Rebuild line 300071 5CLINTN    161 761278 G17-108-TAP    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7763701,
        "name": "Archie - Clinton 161 kV Line GEN-2024-289 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 19,
    "upgradeTypeCostUsd": {
      "Current Study": 69691162.83,
      "Interconnection ": 9258826
    }
  },
  "GEN-2024-291": {
    "allocatedCostUsd": 55826871.68,
    "cluster": "DISIS-2024-001",
    "costPerKw": 223.31,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 55653885.89,
      "NRIS": 172985.79
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6876412.84,
        "name": "Rebuild line 516210 RAVEN 7    345 785850 G24-296-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5000000,
        "name": "Muskogee - Pittsburg 345 kV Line GEN-2024-291 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3839241.86,
        "name": "Rebuild line 510907 PITTSB-7    345 515045 SEMINOL7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 124,
    "upgradeTypeCostUsd": {
      "Current Study": 47826871.68,
      "Interconnection ": 8000000
    }
  },
  "GEN-2024-293": {
    "allocatedCostUsd": 8936185.78,
    "cluster": "DISIS-2024-001",
    "costPerKw": 36.03,
    "costUnavailableReason": null,
    "requestMw": 248,
    "serviceCostUsd": {
      "ERIS": 8936185.78
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 5000000,
        "name": "Muskoge7 345 kV Substation GEN-2024-293 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3000000,
        "name": "Muskoge7 345 kV Substation GEN-2024-293 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 610970.63,
        "name": "Add 4 MVAR switched shunt at GEN-2017-140 345 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Current Study": 936185.78,
      "Interconnection ": 8000000
    }
  },
  "GEN-2024-294": {
    "allocatedCostUsd": 117834305.13,
    "cluster": "DISIS-2024-001",
    "costPerKw": 235.67,
    "costUnavailableReason": null,
    "requestMw": 500,
    "serviceCostUsd": {
      "ERIS": 116621497.03,
      "NRIS": 1212808.1
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 13489988.01,
        "name": "Rebuild line 509752 INOLATP4    138 509790 CATOOSA4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9223535.47,
        "name": "Rebuild line 765721 G21-047-TAP    345 785790 G24-294-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5396037.4,
        "name": "Rebuild line 532799 WAVERLY7    345 766261 G20-007-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 106,
    "upgradeTypeCostUsd": {
      "Current Study": 117704305.13,
      "Interconnection ": 130000
    }
  },
  "GEN-2024-295": {
    "allocatedCostUsd": 109199440.94,
    "cluster": "DISIS-2024-001",
    "costPerKw": 949.56,
    "costUnavailableReason": null,
    "requestMw": 115,
    "serviceCostUsd": {
      "ERIS": 109117962.92,
      "NRIS": 81478.02
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17528944.1,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 14525857.22,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 13021493.09,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 58,
    "upgradeTypeCostUsd": {
      "Current Study": 103664722.2,
      "Interconnection ": 5534718.74
    }
  },
  "GEN-2024-296": {
    "allocatedCostUsd": 47876901.49,
    "cluster": "DISIS-2024-001",
    "costPerKw": 286.69,
    "costUnavailableReason": null,
    "requestMw": 167,
    "serviceCostUsd": {
      "ERIS": 47732754.51,
      "NRIS": 144146.98
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6000000,
        "name": "Muskogee - Pittsburg 345 kV Line GEN-2024-296/297/298 Interconnection (Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5491543.83,
        "name": "Rebuild line 516210 RAVEN 7    345 785850 G24-296-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3000000,
        "name": "Muskogee - Pittsburg 345 kV Line GEN-2024-296 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 119,
    "upgradeTypeCostUsd": {
      "Current Study": 38876901.49,
      "Interconnection ": 9000000
    }
  },
  "GEN-2024-297": {
    "allocatedCostUsd": 47876901.49,
    "cluster": "DISIS-2024-001",
    "costPerKw": 286.69,
    "costUnavailableReason": null,
    "requestMw": 167,
    "serviceCostUsd": {
      "ERIS": 47732754.51,
      "NRIS": 144146.98
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6000000,
        "name": "Muskogee - Pittsburg 345 kV Line GEN-2024-296/297/298 Interconnection (Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5491543.83,
        "name": "Rebuild line 516210 RAVEN 7    345 785850 G24-296-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3000000,
        "name": "Muskogee - Pittsburg 345 kV Line GEN-2024-297 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 119,
    "upgradeTypeCostUsd": {
      "Current Study": 38876901.49,
      "Interconnection ": 9000000
    }
  },
  "GEN-2024-298": {
    "allocatedCostUsd": 47876901.49,
    "cluster": "DISIS-2024-001",
    "costPerKw": 286.69,
    "costUnavailableReason": null,
    "requestMw": 167,
    "serviceCostUsd": {
      "ERIS": 47732754.51,
      "NRIS": 144146.98
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6000000,
        "name": "Muskogee - Pittsburg 345 kV Line GEN-2024-296/297/298 Interconnection (Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5491543.83,
        "name": "Rebuild line 516210 RAVEN 7    345 785850 G24-296-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3000000,
        "name": "Muskogee - Pittsburg 345 kV Line GEN-2024-298 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 119,
    "upgradeTypeCostUsd": {
      "Current Study": 38876901.49,
      "Interconnection ": 9000000
    }
  },
  "GEN-2024-299": {
    "allocatedCostUsd": 32842025.47,
    "cluster": "DISIS-2024-001",
    "costPerKw": 44.14,
    "costUnavailableReason": null,
    "requestMw": 744,
    "serviceCostUsd": {
      "ERIS": 32842025.47
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 20000000,
        "name": "AES 5 345 kV Substation GEN-2024-299 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 8000000,
        "name": "AES 5 345 kV Substation GEN-2024-299 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3708503.76,
        "name": "Rebuild line 515235 PECANCK7    345 516374 KEEFTON7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 7,
    "upgradeTypeCostUsd": {
      "Current Study": 4842025.47,
      "Interconnection ": 28000000
    }
  },
  "GEN-2024-303": {
    "allocatedCostUsd": 422061677.8,
    "cluster": "DISIS-2024-001",
    "costPerKw": 844.12,
    "costUnavailableReason": null,
    "requestMw": 500,
    "serviceCostUsd": {
      "ERIS": 421721408.05,
      "NRIS": 340269.75
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 61130133.31,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 53314538.21,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 51313017.3,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 55,
    "upgradeTypeCostUsd": {
      "Current Study": 408922004.49,
      "Interconnection ": 13139673.31
    }
  },
  "GEN-2024-304": {
    "allocatedCostUsd": 422061677.8,
    "cluster": "DISIS-2024-001",
    "costPerKw": 844.12,
    "costUnavailableReason": null,
    "requestMw": 500,
    "serviceCostUsd": {
      "ERIS": 421721408.05,
      "NRIS": 340269.75
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 61130133.31,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 53314538.21,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 51313017.3,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 55,
    "upgradeTypeCostUsd": {
      "Current Study": 408922004.49,
      "Interconnection ": 13139673.31
    }
  },
  "GEN-2024-305": {
    "allocatedCostUsd": 31284776.8,
    "cluster": "DISIS-2024-001",
    "costPerKw": 625.7,
    "costUnavailableReason": null,
    "requestMw": 50,
    "serviceCostUsd": {
      "ERIS": 31244574.41,
      "NRIS": 40202.39
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 16475000,
        "name": "Superior - Jefferson 69 kV Line GEN-2024-305 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3275000,
        "name": "Superior - Jefferson 69 kV Line GEN-2024-305 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2106287.84,
        "name": "Rebuild line 508813 PLAINDL2    69 778290 G24-044-TAP    69 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 94,
    "upgradeTypeCostUsd": {
      "Current Study": 11534776.8,
      "Interconnection ": 19750000
    }
  },
  "GEN-2024-306": {
    "allocatedCostUsd": 149393712.7,
    "cluster": "DISIS-2024-001",
    "costPerKw": 995.96,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 149288468.91,
      "NRIS": 105243.79
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 21550441.87,
        "name": "Taylor Switching Station 115 kV Substation GEN-2024-306 Interconnection (Non-Shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 18757659.55,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 16457586.54,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 64,
    "upgradeTypeCostUsd": {
      "Current Study": 124936089.2,
      "Interconnection ": 24457623.5
    }
  },
  "GEN-2024-308": {
    "allocatedCostUsd": 218602584.95,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1098.51,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 218438809.16,
      "NRIS": 163775.8
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 40740000,
        "name": "Rebuild line 520848 CDRDLTP4    138 521016 OKEENE 4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 18100000,
        "name": "Add 3-winding transformer 515375 WWRDEHV7    345 515376 WWRDEHV4    138 515795 WWDEHV21    13 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 18100000,
        "name": "Add 3-winding transformer 515375 WWRDEHV7    345 515376 WWRDEHV4    138 515799 WWDEHV31    13 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 131,
    "upgradeTypeCostUsd": {
      "Current Study": 209602584.95,
      "Interconnection ": 9000000
    }
  },
  "GEN-2024-310": {
    "allocatedCostUsd": 75613221.72,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1008.18,
    "costUnavailableReason": null,
    "requestMw": 75,
    "serviceCostUsd": {
      "ERIS": 75613221.72
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 9347338.96,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9096135.67,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8158016.2,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 66,
    "upgradeTypeCostUsd": {
      "Current Study": 71063465.8,
      "Interconnection ": 4549755.92
    }
  },
  "GEN-2024-311": {
    "allocatedCostUsd": 217897093.54,
    "cluster": "DISIS-2024-001",
    "costPerKw": 968.43,
    "costUnavailableReason": null,
    "requestMw": 225,
    "serviceCostUsd": {
      "ERIS": 217740153.32,
      "NRIS": 156940.22
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28042016.89,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 27288407.01,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 24474048.6,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 68,
    "upgradeTypeCostUsd": {
      "Current Study": 213347337.62,
      "Interconnection ": 4549755.92
    }
  },
  "GEN-2024-312": {
    "allocatedCostUsd": 76473250.23,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1529.47,
    "costUnavailableReason": null,
    "requestMw": 50,
    "serviceCostUsd": {
      "ERIS": 76461344.91,
      "NRIS": 11905.32
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 46399927.49,
        "name": "Rebuild line 338110 5HILLTOP%    161 505507 SWPINEY5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 15590219.54,
        "name": "Rebuild line 505507 SWPINEY5    161 505508 DARDANE5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8600000,
        "name": "Clarksville Ozark 161 kV line GEN-2024-312 Interconnection (Non-Shared NU) (SWPA)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 74,
    "upgradeTypeCostUsd": {
      "Current Study": 67073250.23,
      "Interconnection ": 9400000
    }
  },
  "GEN-2024-316": {
    "allocatedCostUsd": 104797345.51,
    "cluster": "DISIS-2024-001",
    "costPerKw": 349.32,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 104524350.45,
      "NRIS": 272995.06
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28225000,
        "name": "Pittsburg - Valliant 345 kV Line GEN-2024-316 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 10117655.86,
        "name": "Rebuild line 508072 NWTXARK7    345 508359 WELSH  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5706387.27,
        "name": "Rebuild line 508359 WELSH  7    345 508841 WILKES 7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 126,
    "upgradeTypeCostUsd": {
      "Current Study": 71347345.51,
      "Interconnection ": 33450000
    }
  },
  "GEN-2024-317": {
    "allocatedCostUsd": 170486811.9,
    "cluster": "DISIS-2024-001",
    "costPerKw": 568.29,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 170250573.82,
      "NRIS": 236238.09
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 36476168.57,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 24582863.13,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 24252389.03,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 49,
    "upgradeTypeCostUsd": {
      "Current Study": 161039917.87,
      "Interconnection ": 9446894.03
    }
  },
  "GEN-2024-318": {
    "allocatedCostUsd": 68106135.13,
    "cluster": "DISIS-2024-001",
    "costPerKw": 342.24,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 63138071.6,
      "NRIS": 4968063.53
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17175000,
        "name": "Tulsa North - American Airlines 138 kV Line GEN-2024-318 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 4968063.53,
        "name": "Rebuild line 509817 T.NO.--4    138 509900 46ST-TP-4    138 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4428467.2,
        "name": "Add 3-winding transformer 512623 CATSAGD4    138 512638 CATSAGR5    161 512833 CATTER1 1    13 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 109,
    "upgradeTypeCostUsd": {
      "Current Study": 47606135.13,
      "Interconnection ": 20500000
    }
  },
  "GEN-2024-319": {
    "allocatedCostUsd": 13292656.83,
    "cluster": "DISIS-2024-001",
    "costPerKw": 66.8,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 13292656.83
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 2757867,
        "name": "Metro 5 161 kV Substation GEN-2024-319 Interconnection (Non-Shared NU) (KACY)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2324855.46,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1952510.77,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 19,
    "upgradeTypeCostUsd": {
      "Current Study": 10334789.83,
      "Interconnection ": 2957867
    }
  },
  "GEN-2024-320": {
    "allocatedCostUsd": 28692554.27,
    "cluster": "DISIS-2024-001",
    "costPerKw": 144.18,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 28692554.27
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 16424539,
        "name": "Jaggard 115 kV Substation GEN-2024-320 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2606649.14,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2000036.27,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 19,
    "upgradeTypeCostUsd": {
      "Current Study": 11227773.27,
      "Interconnection ": 17464781
    }
  },
  "GEN-2024-321": {
    "allocatedCostUsd": 10195951.15,
    "cluster": "DISIS-2024-001",
    "costPerKw": 20.68,
    "costUnavailableReason": null,
    "requestMw": 493,
    "serviceCostUsd": {
      "ERIS": 8909885.56,
      "NRIS": 1286065.58
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 5000000,
        "name": "Seminole 345 kV Substation GEN-2024-321 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3000000,
        "name": "Seminole 345 kV Substation GEN-2024-321 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 810078,
        "name": "Rebuild line 515055 MAUD   4    138 787770 G24-360-TAP    138 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 10,
    "upgradeTypeCostUsd": {
      "Current Study": 2195951.15,
      "Interconnection ": 8000000
    }
  },
  "GEN-2024-322": {
    "allocatedCostUsd": 33672337.13,
    "cluster": "DISIS-2024-001",
    "costPerKw": 448.96,
    "costUnavailableReason": null,
    "requestMw": 75,
    "serviceCostUsd": {
      "ERIS": 33639460.71,
      "NRIS": 32876.42
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7964021.52,
        "name": "Redlin - Beach3 115 kV line GEN-2024-322 Interconnection (Non-Shared NU) (MIDW)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 4617523.37,
        "name": "Rebuild line 640183 GENTLMN3    345 640325 REDWILO3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2463541.83,
        "name": "Add line 516106 BOBCAT 7    345 539841 G-2011-008-1    345 YY",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 60,
    "upgradeTypeCostUsd": {
      "Current Study": 24485835.26,
      "Interconnection ": 9186501.87
    }
  },
  "GEN-2024-323": {
    "allocatedCostUsd": 20497038.45,
    "cluster": "DISIS-2024-001",
    "costPerKw": 57.45,
    "costUnavailableReason": null,
    "requestMw": 356.8,
    "serviceCostUsd": {
      "ERIS": 20497038.45
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 6635683.52,
        "name": "Add 3-winding transformer 520560 HUGOITC4    138 521157 HUGO   7    345 521189 HUGO TERTA    13 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4630437,
        "name": "ITC Hugo 7 345 kV Substation GEN-2024-323 Interconnection (Non-Shared NU) (ITCGP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 4042993.01,
        "name": "Rebuild line 510907 PITTSB-7    345 515045 SEMINOL7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 16,
    "upgradeTypeCostUsd": {
      "Current Study": 14560163.45,
      "Interconnection ": 5936875
    }
  },
  "GEN-2024-324": {
    "allocatedCostUsd": 187488455.96,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1171.8,
    "costUnavailableReason": null,
    "requestMw": 160,
    "serviceCostUsd": {
      "ERIS": 187377535.98,
      "NRIS": 110919.98
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 19801473.77,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 17292421.54,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 17080684.25,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 76,
    "upgradeTypeCostUsd": {
      "Current Study": 184354011.3,
      "Interconnection ": 3134444.66
    }
  },
  "GEN-2024-325": {
    "allocatedCostUsd": 182689088.98,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1217.93,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 182585081.16,
      "NRIS": 104007.82
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18567549.89,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 16266991.12,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 16021736.09,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 76,
    "upgradeTypeCostUsd": {
      "Current Study": 172165329.18,
      "Interconnection ": 10523759.8
    }
  },
  "GEN-2024-326": {
    "allocatedCostUsd": 134719301.87,
    "cluster": "DISIS-2024-001",
    "costPerKw": 598.75,
    "costUnavailableReason": null,
    "requestMw": 225,
    "serviceCostUsd": {
      "ERIS": 65796837.09,
      "NRIS": 68922464.78
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 27145464.72,
        "name": "Rebuild line 652216 WATFORD4    230 659302 CHARL_CK-BE4    230 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 24198297.34,
        "name": "Rebuild line 652424 BELFELD3    345 659183 CHARL_CK-BE3    345 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 13867819.86,
        "name": "Rebuild line 640404 WAYSIDE 4    230 652484 NUNDRWD4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 32,
    "upgradeTypeCostUsd": {
      "Current Study": 125069301.87,
      "Interconnection ": 9650000
    }
  },
  "GEN-2024-327": {
    "allocatedCostUsd": 30521349.51,
    "cluster": "DISIS-2024-001",
    "costPerKw": 152.61,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 30521349.51
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 9134799.05,
        "name": "Rebuild line 640404 WAYSIDE 4    230 652484 NUNDRWD4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5567486.46,
        "name": "Rebuild line 640510 HOLT.CO3    345 652832 GRPRAR1-LNX3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5300000,
        "name": "Rebuild the SOURIS 7 to MALLARD7 115kV Line 1",
        "serviceType": "ERIS",
        "upgradeType": "JTIQ Expanded Scope Analysis"
      }
    ],
    "upgradeCount": 25,
    "upgradeTypeCostUsd": {
      "Current Study": 23612349.51,
      "Interconnection ": 1609000,
      "JTIQ Expanded Scope Analysis": 5300000
    }
  },
  "GEN-2024-328": {
    "allocatedCostUsd": 283194954.41,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1132.78,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 259065985.8,
      "NRIS": 24128968.61
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 47324452.32,
        "name": "Rebuild line 652497 MAURINE4    230 659351 BISON___-GE4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 40456623.3,
        "name": "Rebuild line 652403 DAWSONC4    230 652411 MI CTYE4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 31174339.19,
        "name": "Rebuild line 659265 LITTL_MS-BE4    230 659266 RHAME___-BE4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 38,
    "upgradeTypeCostUsd": {
      "Current Study": 273562200.41,
      "Interconnection ": 9632754
    }
  },
  "GEN-2024-329": {
    "allocatedCostUsd": 25543624.18,
    "cluster": "DISIS-2024-001",
    "costPerKw": 127.72,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 25543624.18
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 9645241.59,
        "name": "Rebuild line 640404 WAYSIDE 4    230 652484 NUNDRWD4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5550219.6,
        "name": "Rebuild line 640510 HOLT.CO3    345 652832 GRPRAR1-LNX3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3192490.01,
        "name": "Rebuild line 652529 WATERTN3    345 659165 CROCKER_-BE3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 24,
    "upgradeTypeCostUsd": {
      "Current Study": 24343624.18,
      "Interconnection ": 1200000
    }
  },
  "GEN-2024-330": {
    "allocatedCostUsd": 41649928.33,
    "cluster": "DISIS-2024-001",
    "costPerKw": 185.11,
    "costUnavailableReason": null,
    "requestMw": 225,
    "serviceCostUsd": {
      "ERIS": 41481639.65,
      "NRIS": 168288.68
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 24263481,
        "name": "Butler 138 kV Substation GEN-2024-330 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 4279068.23,
        "name": "Add line 515378 WWRDEHV9    765 523966 POTTER_CO  9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3475334.18,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 31,
    "upgradeTypeCostUsd": {
      "Current Study": 16346205.33,
      "Interconnection ": 25303723
    }
  },
  "GEN-2024-331": {
    "allocatedCostUsd": 48649591.39,
    "cluster": "DISIS-2024-001",
    "costPerKw": 162.17,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 48649591.39
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 16042911.26,
        "name": "Rebuild line 640404 WAYSIDE 4    230 652484 NUNDRWD4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 8539851.63,
        "name": "Rebuild line 640510 HOLT.CO3    345 652832 GRPRAR1-LNX3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5716377,
        "name": "Round Up 345 kV Substation GEN-2024-331 Interconnection (Non-Shared NU) (BEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 25,
    "upgradeTypeCostUsd": {
      "Current Study": 40128450.39,
      "Interconnection ": 8521141
    }
  },
  "GEN-2024-332": {
    "allocatedCostUsd": 56739608.26,
    "cluster": "DISIS-2024-001",
    "costPerKw": 378.26,
    "costUnavailableReason": null,
    "requestMw": 150,
    "serviceCostUsd": {
      "ERIS": 49089937.95,
      "NRIS": 7649670.31
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8974293.12,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3864000,
        "name": "Rebuild line 514889 WRAIRPT4    138 514925 PENN   4    138 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3312634.93,
        "name": "Rebuild line 532768 EMPEC 7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 126,
    "upgradeTypeCostUsd": {
      "Current Study": 51739608.26,
      "Interconnection ": 5000000
    }
  },
  "GEN-2024-333": {
    "allocatedCostUsd": 35587630.49,
    "cluster": "DISIS-2024-001",
    "costPerKw": 355.88,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 35536736.28,
      "NRIS": 50894.22
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 5991778.7,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4500000,
        "name": "Kelley Avenue 138 kV GEN-2024-333 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2229350.28,
        "name": "Rebuild line 532768 EMPEC 7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 119,
    "upgradeTypeCostUsd": {
      "Current Study": 29087630.49,
      "Interconnection ": 6500000
    }
  },
  "GEN-2024-334": {
    "allocatedCostUsd": 1788909.4,
    "cluster": "DISIS-2024-001",
    "costPerKw": 14.43,
    "costUnavailableReason": null,
    "requestMw": 124,
    "serviceCostUsd": {
      "ERIS": 1788909.4
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 1021836.08,
        "name": "Add 19 MVAR switched shunt at RANCHRD7 345 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 558048.65,
        "name": "Add 38 MVAR switched shunt at FRNT2WD7 345 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 109024.67,
        "name": "Add 10 MVAR switched shunt at G20-007-TAP 345 kV",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 5,
    "upgradeTypeCostUsd": {
      "Current Study": 1688909.4,
      "Interconnection ": 100000
    }
  },
  "GEN-2024-336": {
    "allocatedCostUsd": 255500413.67,
    "cluster": "DISIS-2024-001",
    "costPerKw": 851.67,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 255289678.16,
      "NRIS": 210735.51
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 37501074.33,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 32860295.49,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 32718630.95,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 60,
    "upgradeTypeCostUsd": {
      "Current Study": 245492997.02,
      "Interconnection ": 10007416.65
    }
  },
  "GEN-2024-337": {
    "allocatedCostUsd": 134431652.59,
    "cluster": "DISIS-2024-001",
    "costPerKw": 537.73,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 134192302.97,
      "NRIS": 239349.62
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 13490000.98,
        "name": "Rebuild line 515134 PRARPNT4    138 515570 MAYSVLT4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11349521.12,
        "name": "Rebuild line 515100 PAOLI- 4    138 515124 MAYSVIL4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 10572974.94,
        "name": "Rebuild line 515129 RATLIFF4    138 515134 PRARPNT4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 151,
    "upgradeTypeCostUsd": {
      "Current Study": 125431652.59,
      "Interconnection ": 9000000
    }
  },
  "GEN-2024-338": {
    "allocatedCostUsd": 139827112.93,
    "cluster": "DISIS-2024-001",
    "costPerKw": 399.51,
    "costUnavailableReason": null,
    "requestMw": 350,
    "serviceCostUsd": {
      "ERIS": 139366569.41,
      "NRIS": 460543.52
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28225000,
        "name": "Pittsburg - Johnston County 345 kV line GEN-2024-338 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5267921.9,
        "name": "Rebuild line 510907 PITTSB-7    345 515045 SEMINOL7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5225000,
        "name": "Pittsburg - Johnston County 345 kV line GEN-2024-338 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 148,
    "upgradeTypeCostUsd": {
      "Current Study": 106377112.93,
      "Interconnection ": 33450000
    }
  },
  "GEN-2024-339": {
    "allocatedCostUsd": 21557780.43,
    "cluster": "DISIS-2024-001",
    "costPerKw": 71.86,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 21557780.43
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4559392.29,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2995163.17,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 2502420.96,
        "name": "Rebuild line 645458 S3458  3    345 778170 G24-040-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 20,
    "upgradeTypeCostUsd": {
      "Current Study": 19228401.43,
      "Interconnection ": 2329379
    }
  },
  "GEN-2024-340": {
    "allocatedCostUsd": 211041286.77,
    "cluster": "DISIS-2024-001",
    "costPerKw": 150.74,
    "costUnavailableReason": null,
    "requestMw": 1400,
    "serviceCostUsd": {
      "ERIS": 211041286.77
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 98098000,
        "name": "Rebuild line 509782 R.S.S.-7    345 787170 G24-340-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 58278000,
        "name": "Rebuild line 514909 REDBUD 7    345 787290 G24-344-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 28225000,
        "name": "Riverside - Redbud 345 kV line GEN-2024-340 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 9,
    "upgradeTypeCostUsd": {
      "Current Study": 177591286.77,
      "Interconnection ": 33450000
    }
  },
  "GEN-2024-341": {
    "allocatedCostUsd": 60853241.69,
    "cluster": "DISIS-2024-001",
    "costPerKw": 58.23,
    "costUnavailableReason": null,
    "requestMw": 1045,
    "serviceCostUsd": {
      "ERIS": 58672002.21,
      "NRIS": 2181239.48
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 26251734.64,
        "name": "Rebuild line 510907 PITTSB-7    345 515045 SEMINOL7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9250000,
        "name": "Pittsburgh 345 kV Substation GEN-2024-341 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 8228547.63,
        "name": "Add 3-winding transformer 514808 JOHNCO 4    138 514809 JOHNCO 7    345 514810 JOHNCO11    13 M2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 15,
    "upgradeTypeCostUsd": {
      "Current Study": 46378241.69,
      "Interconnection ": 14475000
    }
  },
  "GEN-2024-343": {
    "allocatedCostUsd": 81528207.72,
    "cluster": "DISIS-2024-001",
    "costPerKw": 173.28,
    "costUnavailableReason": null,
    "requestMw": 470.5,
    "serviceCostUsd": {
      "ERIS": 81167568.16,
      "NRIS": 360639.55
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 59500000,
        "name": "LeBrock 345 kV Substation GEN-2024-343 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 9700000,
        "name": "LeBrock 345 kV Substation GEN-2024-343 Interconnection (TOIF) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3436889.1,
        "name": "Rebuild line 509049 MURVAUL4    138 712002 TENASK4    138 P",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 18,
    "upgradeTypeCostUsd": {
      "Current Study": 12328207.72,
      "Interconnection ": 69200000
    }
  },
  "GEN-2024-344": {
    "allocatedCostUsd": 43884375.84,
    "cluster": "DISIS-2024-001",
    "costPerKw": 219.42,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 43821127.2,
      "NRIS": 63248.64
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 18000000,
        "name": "Riverside - Redbud Switch 345 kV Line  GEN-2024-344 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3000000,
        "name": "Riverside - Redbud Switch 345 kV Line  GEN-2024-344 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1588468.55,
        "name": "Add line 532773 SUMMIT 7    345 532998 G16-111-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 120,
    "upgradeTypeCostUsd": {
      "Current Study": 22384375.84,
      "Interconnection ": 21500000
    }
  },
  "GEN-2024-345": {
    "allocatedCostUsd": 103047807.41,
    "cluster": "DISIS-2024-001",
    "costPerKw": 171.75,
    "costUnavailableReason": null,
    "requestMw": 600.001,
    "serviceCostUsd": {
      "ERIS": 101022088.54,
      "NRIS": 2025718.87
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 13035874.31,
        "name": "Rebuild line 532793 NEOSHO 7    345 784170 G24-240-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7317039.84,
        "name": "Rebuild line 542965 W.GRDNR7    345 542981 LACYGNE7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7174205.28,
        "name": "Add line 542968 STILWEL7    345 765571 G21-029-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 79,
    "upgradeTypeCostUsd": {
      "Current Study": 93922807.41,
      "Interconnection ": 9125000
    }
  },
  "GEN-2024-346": {
    "allocatedCostUsd": 112265902.18,
    "cluster": "DISIS-2024-001",
    "costPerKw": 510.3,
    "costUnavailableReason": null,
    "requestMw": 220,
    "serviceCostUsd": {
      "ERIS": 112265902.18
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 17175000,
        "name": "Coffeyville Tap - North Barlettsville 138 kV Line GEN-2024-346 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 12369542.25,
        "name": "Rebuild line 533008 TV1MNDV4    138 533020 NEOSHOS4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11909264.32,
        "name": "Rebuild line 532996 TIOGA  4    138 533001 ALTOONA4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 88,
    "upgradeTypeCostUsd": {
      "Current Study": 91765902.18,
      "Interconnection ": 20500000
    }
  },
  "GEN-2024-351": {
    "allocatedCostUsd": 199818857.13,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1004.11,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 199679194.68,
      "NRIS": 139662.45
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 24909916.5,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 23992015.86,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 21903910.67,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 66,
    "upgradeTypeCostUsd": {
      "Current Study": 179908315.58,
      "Interconnection ": 19910541.55
    }
  },
  "GEN-2024-352": {
    "allocatedCostUsd": 53154924.28,
    "cluster": "DISIS-2024-001",
    "costPerKw": 267.11,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 53154924.28
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 42429444,
        "name": "Sibley 345 kV Substation GEN-2024-352 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1958092,
        "name": "Sibley 345 kV Substation GEN-2024-352 Interconnection (TOIF) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 1872992.91,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 20,
    "upgradeTypeCostUsd": {
      "Current Study": 8767388.28,
      "Interconnection ": 44387536
    }
  },
  "GEN-2024-355": {
    "allocatedCostUsd": 166048959.17,
    "cluster": "DISIS-2024-001",
    "costPerKw": 834.42,
    "costUnavailableReason": null,
    "requestMw": 199,
    "serviceCostUsd": {
      "ERIS": 165906319.04,
      "NRIS": 142640.13
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 25049889.21,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 22124606.69,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 22094436.88,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 53,
    "upgradeTypeCostUsd": {
      "Current Study": 146610841.17,
      "Interconnection ": 19438118
    }
  },
  "GEN-2024-359": {
    "allocatedCostUsd": 49209214.38,
    "cluster": "DISIS-2024-001",
    "costPerKw": 492.09,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 18392059.09,
      "NRIS": 30817155.29
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15637574.92,
        "name": "Rebuild line 652216 WATFORD4    230 659302 CHARL_CK-BE4    230 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 11998326.53,
        "name": "Rebuild line 652424 BELFELD3    345 659183 CHARL_CK-BE3    345 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 6217263.96,
        "name": "Rebuild line 640404 WAYSIDE 4    230 652484 NUNDRWD4    230 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 30,
    "upgradeTypeCostUsd": {
      "Current Study": 44859219.38,
      "Interconnection ": 4349995
    }
  },
  "GEN-2024-360": {
    "allocatedCostUsd": 42838010.13,
    "cluster": "DISIS-2024-001",
    "costPerKw": 267.74,
    "costUnavailableReason": null,
    "requestMw": 160,
    "serviceCostUsd": {
      "ERIS": 38158240.33,
      "NRIS": 4679769.79
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 4555411.52,
        "name": "Rebuild line 515055 MAUD   4    138 787770 G24-360-TAP    138 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3551066.88,
        "name": "Rebuild 2-winding transformer 515045 SEMINOL7    345 515049 SEMINOLE9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3551066.88,
        "name": "Rebuild 2-winding transformer 515045 SEMINOL7    345 515049 SEMINOLE9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 124,
    "upgradeTypeCostUsd": {
      "Current Study": 37838010.13,
      "Interconnection ": 5000000
    }
  },
  "GEN-2024-361": {
    "allocatedCostUsd": 22549581.87,
    "cluster": "DISIS-2024-001",
    "costPerKw": 281.87,
    "costUnavailableReason": null,
    "requestMw": 80,
    "serviceCostUsd": {
      "ERIS": 22354748.04,
      "NRIS": 194833.83
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 7000000,
        "name": "Spring Valley - Warwick 138 kV line GEN-2024-361 Interconnection (Non-Shared NU) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 2000000,
        "name": "Spring Valley - Warwick 138 kV line GEN-2024-361 Interconnection (TOIF) (OGE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 946974.95,
        "name": "Rebuild line 532799 WAVERLY7    345 766261 G20-007-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 116,
    "upgradeTypeCostUsd": {
      "Current Study": 13549581.87,
      "Interconnection ": 9000000
    }
  },
  "GEN-2024-362": {
    "allocatedCostUsd": 68863680.14,
    "cluster": "DISIS-2024-001",
    "costPerKw": 491.88,
    "costUnavailableReason": null,
    "requestMw": 140,
    "serviceCostUsd": {
      "ERIS": 56099876.3,
      "NRIS": 12763803.84
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8636072.08,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7751252.76,
        "name": "Rebuild line 511425 TUTCONT4    138 514898 CIMARON4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4313595.97,
        "name": "Rebuild line 514894 CZECHAL4    138 514898 CIMARON4    138 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 126,
    "upgradeTypeCostUsd": {
      "Current Study": 62538680.14,
      "Interconnection ": 6325000
    }
  },
  "GEN-2024-364": {
    "allocatedCostUsd": 258449832.4,
    "cluster": "DISIS-2024-001",
    "costPerKw": 861.5,
    "costUnavailableReason": null,
    "requestMw": 300,
    "serviceCostUsd": {
      "ERIS": 258258735.89,
      "NRIS": 191096.51
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 34638096.83,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 28415949.58,
        "name": "Add line 515378 WWRDEHV9    765 523966 POTTER_CO  9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 25562473.35,
        "name": "Add line 515378 WWARD9    765 523966 POTTER_CO  9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 66,
    "upgradeTypeCostUsd": {
      "Current Study": 252881254.85,
      "Interconnection ": 5568577.55
    }
  },
  "GEN-2024-365": {
    "allocatedCostUsd": 189047225.27,
    "cluster": "DISIS-2024-001",
    "costPerKw": 945.24,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 188688316.21,
      "NRIS": 358909.07
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 27790566.6,
        "name": "Hobbs - Yoakum 345 kV Line GEN-2024-365 Interconnection (Non-Shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 19582831.08,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 19380947.48,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 70,
    "upgradeTypeCostUsd": {
      "Current Study": 142659505.02,
      "Interconnection ": 46387720.25
    }
  },
  "GEN-2024-366": {
    "allocatedCostUsd": 161256658.67,
    "cluster": "DISIS-2024-001",
    "costPerKw": 806.28,
    "costUnavailableReason": null,
    "requestMw": 200,
    "serviceCostUsd": {
      "ERIS": 160897749.61,
      "NRIS": 358909.07
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 19582831.08,
        "name": "Add line 526001 CRWFSHDRW9    765 514812 MINCO 9    765 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 19380947.48,
        "name": "Add line 514812 MINCO 9    765 526001 CRWFSHDRW9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 18343064.16,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 69,
    "upgradeTypeCostUsd": {
      "Current Study": 142659505.02,
      "Interconnection ": 18597153.65
    }
  },
  "GEN-2024-367": {
    "allocatedCostUsd": 144648231.31,
    "cluster": "DISIS-2024-001",
    "costPerKw": 578.59,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 144433975.5,
      "NRIS": 214255.81
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 20900000,
        "name": "Lawton East Side 345 kV Substation GEN-2024-367 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 15672037.2,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 9614524.96,
        "name": "Rebuild line 511423 FLE TAP4    138 511467 L.E.S.-4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 140,
    "upgradeTypeCostUsd": {
      "Current Study": 118523231.31,
      "Interconnection ": 26125000
    }
  },
  "GEN-2024-368": {
    "allocatedCostUsd": 217393956.71,
    "cluster": "DISIS-2024-001",
    "costPerKw": 869.58,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 217225946.72,
      "NRIS": 168009.99
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 28896000,
        "name": "Rebuild line 511458 ELKCTY-4    138 511485 CLINTJC4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 28396860.54,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 17857954.94,
        "name": "Add line 515378 WWRDEHV9    765 523966 POTTER_CO  9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 60,
    "upgradeTypeCostUsd": {
      "Current Study": 211151066.68,
      "Interconnection ": 6242890.03
    }
  },
  "GEN-2024-369": {
    "allocatedCostUsd": 108410227.96,
    "cluster": "DISIS-2024-001",
    "costPerKw": 433.64,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 101313769.46,
      "NRIS": 7096458.5
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15481411.53,
        "name": "Add line 531449 HOLCOMB7    345 659133 SIDNEY__-MB3    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5644687.94,
        "name": "Rebuild line 532768 EMPEC 7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5133585.88,
        "name": "Rebuild line 532796 WICHITA7    345 532803 BURNS  7    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 138,
    "upgradeTypeCostUsd": {
      "Current Study": 102085227.96,
      "Interconnection ": 6325000
    }
  },
  "GEN-2024-370": {
    "allocatedCostUsd": 29304350.79,
    "cluster": "DISIS-2024-001",
    "costPerKw": 117.22,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 29304350.79
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8025000,
        "name": "Rebuild line 541204 SMTHVL 5    161 541221 PLTCTY 5    161 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 3659394,
        "name": "Smithville 161 kV Substation GEN-2024-370 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3446119.83,
        "name": "Rebuild line 635017 ATCHISON 3    345 640139 COOPER 3    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 21,
    "upgradeTypeCostUsd": {
      "Current Study": 24583405.79,
      "Interconnection ": 4720945
    }
  },
  "GEN-2024-371": {
    "allocatedCostUsd": 257576859.82,
    "cluster": "DISIS-2024-001",
    "costPerKw": 1030.31,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 257401521.01,
      "NRIS": 175338.81
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 44215863.76,
        "name": "Maddox 115 kV Substation GEN-2024-371 Interconnection (Non-Shared NU) (SPS)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 31264622.93,
        "name": "Add line 507768 SWSHRV9    765 515049 SEMINOLE9    765 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 28397124.15,
        "name": "Add line 528014 PHANTOM    9    765 526001 CRDRW9    765 2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 65,
    "upgradeTypeCostUsd": {
      "Current Study": 209821538.24,
      "Interconnection ": 47755321.58
    }
  },
  "GEN-2024-372": {
    "allocatedCostUsd": 27945036.43,
    "cluster": "DISIS-2024-001",
    "costPerKw": 111.78,
    "costUnavailableReason": null,
    "requestMw": 250,
    "serviceCostUsd": {
      "ERIS": 1980211.86,
      "NRIS": 25964824.57
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 25000000,
        "name": "Add 3-winding transformer 652305 SIOUXC29    13 652552 SIOUXCY2    230 652564 SIOUXCY3    345 M2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 1500000,
        "name": "S1252 161 kV Substation GEN-2024-372 Interconnection (Non-Shared NU) (OPPD)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 485750.16,
        "name": "Add 3-winding transformer 659105 LELAND_O-BE3    345 659106 LELAND_O-BE4    230 659202 LO.KVA2_-BE9    13 M2",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Current Study": 25968997.43,
      "Interconnection ": 1976039
    }
  },
  "GEN-2024-373": {
    "allocatedCostUsd": 65581389.6,
    "cluster": "DISIS-2024-001",
    "costPerKw": 546.51,
    "costUnavailableReason": null,
    "requestMw": 120,
    "serviceCostUsd": {
      "ERIS": 65484850.32,
      "NRIS": 96539.28
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 5689045.74,
        "name": "Rebuild line 521098 WSBNKTP4    138 778530 G24-052-TAP    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 5185185.19,
        "name": "Unger - West Bank Tap 138 kV Line GEN-2024-052/373 Interconnection (Shared NU) (WFEC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 3899837,
        "name": "Rebuild line 505600 TUPELO 4    138 505602 S BROWN4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 148,
    "upgradeTypeCostUsd": {
      "Current Study": 58396204.41,
      "Interconnection ": 7185185.19
    }
  },
  "GEN-2024-374": {
    "allocatedCostUsd": 24422013.32,
    "cluster": "DISIS-2024-001",
    "costPerKw": 108.54,
    "costUnavailableReason": null,
    "requestMw": 225,
    "serviceCostUsd": {
      "ERIS": 9995843.47,
      "NRIS": 14426169.85
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 8523024.36,
        "name": "Rebuild line 652424 BELFELD3    345 659183 CHARL_CK-BE3    345 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7125379,
        "name": "Stegall 345 kV Substation GEN-2024-374 Interconnection (Non-Shared NU) (BEPC)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 5109036.89,
        "name": "Rebuild line 652497 MAURINE4    230 785430 G24-282-TAP    230 1",
        "serviceType": "NRIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 6,
    "upgradeTypeCostUsd": {
      "Current Study": 14461859.32,
      "Interconnection ": 9960154
    }
  },
  "GEN-2024-375": {
    "allocatedCostUsd": 40255797.14,
    "cluster": "DISIS-2024-001",
    "costPerKw": 402.56,
    "costUnavailableReason": null,
    "requestMw": 100,
    "serviceCostUsd": {
      "ERIS": 40255797.14
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 15638683,
        "name": "West Southwest 161 kV Substation GEN-2024-375 Interconnection (Non-Shared NU) (WERE)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 6075000,
        "name": "Rebuild 2-winding transformer 543063 SWAVRLY5    161 543094 SWAVRLY2    69 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 4845000,
        "name": "Rebuild line 543100 AMOCOPL2    69 543102 WHGNSVL2    69 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 21,
    "upgradeTypeCostUsd": {
      "Current Study": 23121989.14,
      "Interconnection ": 17133808
    }
  },
  "GEN-2024-376": {
    "allocatedCostUsd": 18002993.22,
    "cluster": "DISIS-2024-001",
    "costPerKw": 126.62,
    "costUnavailableReason": null,
    "requestMw": 142.183,
    "serviceCostUsd": {
      "ERIS": 17910969.78,
      "NRIS": 92023.45
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 9680498.43,
        "name": "Rebuild line 509106 HEMPHIL4    138 509107 SIXMILE4    138 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 976755.06,
        "name": "Add line 532773 SUMMIT 7    345 532998 G16-111-TAP    345 P2",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 625623.91,
        "name": "Rebuild line 542981 LACYGNE7    345 767240 G22-013-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 65,
    "upgradeTypeCostUsd": {
      "Current Study": 18002993.22,
      "Interconnection ": 0
    }
  },
  "GEN-2024-377": {
    "allocatedCostUsd": 51138404.42,
    "cluster": "DISIS-2024-001",
    "costPerKw": 37.88,
    "costUnavailableReason": null,
    "requestMw": 1350.001,
    "serviceCostUsd": {
      "ERIS": 50099632.05,
      "NRIS": 1038772.37
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 12750000,
        "name": "Pirkey 345 kV Substation GEN-2024-377 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      },
      {
        "costUsd": 8563110.9,
        "name": "Rebuild line 509049 MURVAUL4    138 712002 TENASK4    138 P",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 7706799.81,
        "name": "Rebuild line 509048 MURVAULTP    138 509049 MURVAUL4    138 P",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      }
    ],
    "upgradeCount": 18,
    "upgradeTypeCostUsd": {
      "Current Study": 33163404.42,
      "Interconnection ": 17975000
    }
  },
  "GEN-2024-379": {
    "allocatedCostUsd": 183649344.65,
    "cluster": "DISIS-2024-001",
    "costPerKw": 136.04,
    "costUnavailableReason": null,
    "requestMw": 1350.001,
    "serviceCostUsd": {
      "ERIS": 182657312.36,
      "NRIS": 992032.29
    },
    "sourceDetail": "DISIS Phase 1; Posted 2026-04-08; Assigned Upgrade Costs tab.",
    "sourceTitle": "SPP DISIS-2024-001 Phase 1 Powerflow and Short Circuit Final Report",
    "sourceUrl": "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/DISIS_Results_Workbook_DIS2401-P1-PowerFlow_Final_04082026.xlsx",
    "topUpgrades": [
      {
        "costUsd": 46904000,
        "name": "Rebuild line 337376 7SAREPTA%    345 788340 G24-379-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 42020000,
        "name": "Rebuild line 508809 LONGWD 7    345 788340 G24-379-TAP    345 1",
        "serviceType": "ERIS",
        "upgradeType": "Current Study"
      },
      {
        "costUsd": 28225000,
        "name": "Longwood - El Dorado 345 kV Line GEN-2024-379 Interconnection (Non-Shared NU) (AEP)",
        "serviceType": "ERIS",
        "upgradeType": "Interconnection "
      }
    ],
    "upgradeCount": 17,
    "upgradeTypeCostUsd": {
      "Current Study": 128359344.65,
      "Interconnection ": 33450000,
      "JTIQ Expanded Scope Analysis": 21840000
    }
  }
};
