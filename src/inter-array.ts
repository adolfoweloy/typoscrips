type MultiType = (string | number)[];

const list: MultiType = ["alice", 10.0, "bob", 7.5];

console.log(list);

// immutable arrays
const listA: ReadonlyArray<string> = ["juca"];
const listB = listA.concat("10");
const listC = listA.concat(["adolfo", "pinheiro"]).concat(listB);

console.log(Array.isArray(listC));

const listD: readonly number[] = [1, 2, 3];
listD.slice(0, 1);
