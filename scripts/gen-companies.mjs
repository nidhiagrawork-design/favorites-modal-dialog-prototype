// One-off generator for src/companies.ts — produces additional placeholder
// company names in the same "[Surname] [Place-word]" style as the original
// Figma-sourced list, to pad out the "All Companies" section for scale
// testing. Run with: node scripts/gen-companies.mjs
//
// Uses a seeded PRNG (not Math.random) so the output is reproducible between
// runs — re-running this script always yields the same 300 names.
const surnames = [
  "Collins", "Johnson", "Anderson", "Smithtown", "Pine", "Cedarwood", "Oakridge", "Maple", "Lakeside",
  "Ashford", "Bennett", "Carrington", "Dalton", "Ellison", "Fairweather", "Grayson", "Harrington",
  "Ingram", "Jefferson", "Kingsley", "Lancaster", "Morrison", "Norwood", "Osborne", "Pemberton",
  "Quincy", "Radcliffe", "Sterling", "Thackeray", "Underwood", "Vanderbilt", "Whitfield", "Yardley",
  "Ashworth", "Blackwood", "Cavendish", "Drummond", "Eastwood", "Fenwick", "Greenfield", "Holloway",
  "Ivywood", "Jamison", "Kirkland", "Larkspur", "Middlebrook", "Northgate", "Oakhurst", "Prescott",
  "Rutherford", "Stonebridge", "Thorne", "Ashbury", "Birchwood", "Clearwater", "Dunmore", "Elmwood",
  "Foxglove", "Glendale", "Hawthorne", "Ironwood", "Juniper", "Knollwood", "Lockhart", "Millbrook",
  "Nightingale", "Overton", "Pinehurst", "Ravenscroft", "Silverton", "Timberline", "Upland",
  "Vinewood", "Westbrook", "Yellowstone", "Zephyr", "Ambrose", "Brambleton", "Copperfield",
  "Dashwood", "Everly", "Fernwood", "Gable", "Heathcote", "Ivorton", "Jonquil", "Kensington",
  "Ludlow", "Maplewood", "Newbridge", "Oakmont", "Parkside", "Queensbury", "Rosewood", "Sutcliffe",
  "Thistledown", "Ulverston", "Vesper", "Waverly", "Ashfield", "Briarwood", "Coldstream", "Deepwater",
];

const places = [
  "Cornerstone", "Junction", "Alley", "Plaza", "Ridge", "Crossing", "Estate", "Center", "Heights",
  "Grove", "Harbor", "Landing", "Meadows", "Springs", "Terrace", "Vista", "Way", "Woods", "Commons",
  "Court", "Falls", "Fields", "Gardens", "Glen", "Haven", "Hills", "Hollow", "Lake", "Lane", "Manor",
  "Park", "Point", "Quarter", "Row", "Shores", "Square", "Station", "Trail", "Valley", "View",
  "Village", "Yard", "Bay", "Bend", "Bluff", "Brook", "Cliff", "Corner", "Creek", "Dale", "Dell",
  "Downs", "Edge", "Ferry", "Ford", "Gate", "Green", "Grounds", "Hall", "Knoll", "Mill", "Mount",
  "Orchard", "Overlook", "Pass", "Path", "Pier", "Pines", "Place", "Pond", "Reach", "Reserve",
  "Run", "Shore", "Side", "Summit", "Wharf", "Chase", "Close", "Common", "Cove", "Crest",
];

// mulberry32 — small deterministic PRNG, seeded for reproducible output.
function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rng = mulberry32(20260925);
const pick = (arr) => arr[Math.floor(rng() * arr.length)];

function toId(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const existing = new Set([
  "Collins Cornerstone",
  "Johnson Junction",
  "Anderson Alley",
  "Smithtown Plaza",
  "Pine Hill Ridge",
  "Cedarwood Crossing",
  "Oakridge Estate",
  "Maple Grove Center",
  "Lakeside Heights",
]);

const generated = [];
const seen = new Set(existing);

while (generated.length < 300) {
  const name = `${pick(surnames)} ${pick(places)}`;
  if (seen.has(name)) continue;
  seen.add(name);
  generated.push(name);
}

const lines = generated.map((name) => `  { id: "${toId(name)}", name: "${name}", favourite: false },`);

const output = `// Company data taken verbatim from the Figma "Setting Favorites" flyout
// (oFzaU8erKFMwWELFEXdFm5, node 274-47660): Favourites section starts with
// Collins Cornerstone / Johnson Junction / Anderson Alley starred; All
// Companies lists the remaining names shown in the design, padded out with
// ~300 additional placeholder companies (same "[Surname] [Place-word]"
// naming style, randomly paired) for scale testing of the flyout's
// scroll/search/filter. Regenerate with: node scripts/gen-companies.mjs
export type Company = {
  id: string;
  name: string;
  favourite: boolean;
};

export const initialCompanies: Company[] = [
  { id: "collins-cornerstone", name: "Collins Cornerstone", favourite: true },
  { id: "johnson-junction", name: "Johnson Junction", favourite: true },
  { id: "anderson-alley", name: "Anderson Alley", favourite: true },
  { id: "smithtown-plaza", name: "Smithtown Plaza", favourite: false },
  { id: "pine-hill-ridge", name: "Pine Hill Ridge", favourite: false },
  { id: "cedarwood-crossing", name: "Cedarwood Crossing", favourite: false },
  { id: "oakridge-estate", name: "Oakridge Estate", favourite: false },
  { id: "maple-grove-center", name: "Maple Grove Center", favourite: false },
  { id: "lakeside-heights", name: "Lakeside Heights", favourite: false },
${lines.join("\n")}
];
`;

process.stdout.write(output);
