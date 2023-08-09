function removeDuplicates(arr) {
  return arr.filter((a, b) => arr.indexOf(a) === b);
}
let ok = [1, 4, 6];
console.log(ok.indexOf(1));

/* ÉNONCÉ 📚 */

/* Créez un algorithme qui retourne un tableau sans les valeurs doublon de celui qui est passé en argument. */

/* Tests à passer 🧪 */

console.log(removeDuplicates([5, 5, 4, 6, 3, 5])); // [5, 4, 6, 3]
console.log(removeDuplicates(["a", "b", "z", "z", "e", "a"])); // ["a", "b", "z", "e"]
