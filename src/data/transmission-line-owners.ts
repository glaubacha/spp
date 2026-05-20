export type TransmissionLineOwnerRecord = {
  aliases: string[];
  lineName: string;
  operator?: string;
  owner: string;
  sourceDetail: string;
  sourceTitle: string;
  sourceUrl: string;
};

export const transmissionLineOwnerRecords: TransmissionLineOwnerRecord[] = [
  {
    aliases: [
      "hitchland beaver county",
      "beaver county hitchland",
      "hitchland - beaver county",
      "beaver county - hitchland",
      "unknown157432 hitchland",
      "hitchland unknown157432",
      "hitchland to beaver county",
    ],
    lineName: "Hitchland - Beaver County 345 kV (Xcel/SPS portion)",
    operator: "Southwestern Public Service Company (SPS / Xcel Energy)",
    owner: "Southwestern Public Service Company (SPS / Xcel Energy)",
    sourceDetail:
      "Xcel states that its portion of the Hitchland-Woodward 345 kV project runs from the Hitchland Substation to Beaver County, Oklahoma.",
    sourceTitle: "Xcel Energy Power for the Plains project page",
    sourceUrl: "https://www.powerfortheplains.com/Projects/Hitchland%E2%80%93Woodward-345-kV-Transmission-Line",
  },
  {
    aliases: [
      "finney hitchland",
      "hitchland finney",
      "finney - hitchland",
      "hitchland - finney",
      "tap finney hitchland",
      "tap hitchland finney",
    ],
    lineName: "Finney - Hitchland 345 kV",
    operator: "Southwestern Public Service Company (SPS / Xcel Energy)",
    owner: "Southwestern Public Service Company (SPS / Xcel Energy)",
    sourceDetail:
      "Public PUCT filing for Control No. 36763 identifies SPS ownership of the 345 kV transmission line tied to Finney and Hitchland facilities.",
    sourceTitle: "PUCT Control No. 36763 filing",
    sourceUrl: "https://interchange.puc.texas.gov/Documents/36763_33_625559.PDF",
  },
  {
    aliases: [
      "hitchland woodward",
      "woodward hitchland",
      "hitchland - woodward",
      "woodward - hitchland",
      "hitchland woodward dbl ckt",
      "hitchland-woodward",
    ],
    lineName: "Hitchland - Woodward 345 kV",
    operator: "Xcel Energy / SPS and Oklahoma Gas and Electric Company (OG&E)",
    owner: "Xcel Energy / SPS and Oklahoma Gas and Electric Company (OG&E)",
    sourceDetail:
      "Xcel's project page identifies the Hitchland-Woodward 345 kV line as a joint Xcel Energy and OG&E project, with Xcel's portion from Hitchland to Beaver County.",
    sourceTitle: "Xcel Energy Power for the Plains project page",
    sourceUrl: "https://www.powerfortheplains.com/Projects/Hitchland%E2%80%93Woodward-345-kV-Transmission-Line",
  },
  {
    aliases: [
      "crossroads hobbs roadrunner",
      "crossroads - hobbs - roadrunner",
      "hobbs roadrunner",
      "crossroads hobbs",
    ],
    lineName: "Crossroads - Hobbs - Roadrunner 345 kV",
    operator: "NextEra Energy Transmission Southwest, LLC",
    owner: "NextEra Energy Transmission Southwest, LLC",
    sourceDetail:
      "NextEra's release states that NextEra Energy Transmission Southwest was awarded the SPP Crossroads-Hobbs-Roadrunner 345 kV Competitive Upgrade project.",
    sourceTitle: "NextEra Energy Transmission Southwest project announcement",
    sourceUrl: "https://www.investor.nexteraenergy.com/news-and-events/news-releases/2023/8-29-2023",
  },
];
