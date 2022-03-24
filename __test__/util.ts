export function getComposeValue() {
  const set1 = new Set();
  set1.add(1);
  set1.add([1, 2]);
  const map1 = new Map();
  map1.set("name", "Tom");
  map1.set({ age: 18 }, "Luffy");
  const person = { name: "Yuki", worker: {} };
  const worker = { job: "programmer", person: {} };
  person.worker = worker;
  worker.person = person;
  return [0, 1, person, worker, set1, map1];
}
