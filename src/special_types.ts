type Being = {
  name: string;
  country: string;
};

function findByName(name: string): Being | null {
  if (["alice", "bob"].includes(name)) {
    return {
      name: name,
      country: "Middle Earth",
    };
  }
  return null;
}

// The optional chain operator guards null
const result = findByName("Adolfo")?.country ?? "outerland";
console.log(result);

function findByCountry(country: string): string | undefined {
  if (["Middle Earth", "Australia"].includes(country)) {
    return "Aeee";
  }
  return undefined;
}

const result2 = findByCountry("Brazil")?.length ?? 0;
console.log(`Result length: ${result2}`);
