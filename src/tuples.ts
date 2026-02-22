// Tuples must be declared explicitly
const deeWhy: [string, string, number] = ["Dee Why", "40x40", 200];

function paintingDescription(painting: [string, string, number]): string {
  return `
        Title: ${painting[0]}
        Size: ${painting[1]}
        Price: ${painting[2]}
    `;
}

paintingDescription(deeWhy);

// TypeScript always widens array literals to arrays, not tuples
// const longreef = ["Longreef", "30x40", 500];
// paintingDescription(longreef);  array can't be assigned to the tuple type

// Tuple with optional elements
function printFamousPainters(painter: [name: string, style?: string]) {
  const [name, style] = painter;
  if (style) {
    return `
            name: ${name}
            style: ${style}
        `;
  }
  return `name: ${name}`;
}
printFamousPainters(["Monet", "Impressionist"]);
printFamousPainters(["Seu Madruga"]);

// Rest elements
function printCharacter(character: [string, ...string[]]) {
  return `character: ${character}`;
}

printCharacter(["Ryu", "Hadouken", "Shoryuken", "Tastumaki-sempukiaiku"]);
printCharacter(["Sagat", "Tiger", "Tiger Uppercut"]);
printCharacter(["Dalshim", "Yoga"]);
printCharacter(["Dan"]);
