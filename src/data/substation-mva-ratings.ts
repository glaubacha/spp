export type SubstationMvaRating = {
  aliases: string[];
  mvaLabel: string;
  name: string;
  ratingType: string;
  sourceDetail: string;
  sourceTitle: string;
  sourceUrl: string;
};

export const substationMvaRatings: SubstationMvaRating[] = [
  {
    aliases: ["brown", "brown 138", "brown 138 kv", "brown 4", "brown 4 138", "brown substation"],
    mvaLabel: "60 MVA existing study-model transformer; 180 MVA modification configuration",
    name: "Brown 138 kV Substation",
    ratingType: "Main substation transformer",
    sourceDetail:
      "SPP GEN-2024-SR13 lists the shared Brown 138 kV main substation transformer as Winding MVA 36 MVA, Rating MVA 60 MVA. SPP GEN-2016-030/GEN-2017-232 modification materials list a modification configuration with Winding MVA 108 MVA and Rating MVA 180 MVA.",
    sourceTitle: "SPP generation interconnection studies for Brown 138 kV",
    sourceUrl:
      "https://opsportal.spp.org/documents/studies/files/2024_Generation_Studies/FINAL_SPP_Report_GEN-2024-SR13_10152024.pdf",
  },
  {
    aliases: ["lake hawkins", "lake hawkins 345", "lake hawkins 345 kv", "perdue"],
    mvaLabel: "675/675 MVA",
    name: "Lake Hawkins / Perdue 345/138 kV",
    ratingType: "Planned 345/138 kV transformer",
    sourceDetail:
      "2013 SPP Transmission Expansion Plan Appendix A lists installing a 345/138 kV transformer at Lake Hawkins or Perdue with ratings 675/675.",
    sourceTitle: "2013 SPP Transmission Expansion Plan",
    sourceUrl: "https://www.spp.org/documents/19053/2013stepreport.pdf",
  },
  {
    aliases: ["post rock", "post rock 345", "post rock 230"],
    mvaLabel: "448/448 MVA",
    name: "Post Rock 345/230 kV",
    ratingType: "Second 345/230 kV transformer",
    sourceDetail:
      "2013 SPP Transmission Expansion Plan Appendix A lists installing a second 345/230 kV Post Rock transformer with ratings 448/448.",
    sourceTitle: "2013 SPP Transmission Expansion Plan",
    sourceUrl: "https://www.spp.org/documents/19053/2013stepreport.pdf",
  },
  {
    aliases: ["newhart", "newhart 230", "newhart substation"],
    mvaLabel: "150/173 MVA",
    name: "Newhart 230/115 kV Substation",
    ratingType: "230/115 kV transformer",
    sourceDetail:
      "SPP STEP filing materials list Newhart Substation and installation of a 230/115 kV, 150/173 MVA transformer.",
    sourceTitle: "SPP STEP filing materials",
    sourceUrl: "https://www.spp.org/documents/16298/2012-01-18_2012%20step%20report%20filing_07-00390-ut.pdf",
  },
  {
    aliases: ["bowers", "bowers interchange", "bowers 115", "bowers 69"],
    mvaLabel: "84/96 MVA",
    name: "Bowers Interchange 115/69 kV",
    ratingType: "Second 115/69 kV transformer",
    sourceDetail:
      "SPP STEP filing materials list adding a second 115/69 kV transformer at Bowers with ratings 84/96.",
    sourceTitle: "SPP STEP filing materials",
    sourceUrl: "https://www.spp.org/documents/16298/2012-01-18_2012%20step%20report%20filing_07-00390-ut.pdf",
  },
];

