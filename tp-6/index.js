// EXO 1
// utilities ---------------------
const vowels = "aeuioy";
const vowelRegex = new RegExp(`[${vowels}]`, "gi");
const consonantRegex = new RegExp(`(?![${vowels}])[a-z]`, "gi");

const getMonthCode = (month) => {
  switch (month) {
    case 0:
      return "A";
    case 1:
      return "B";
    case 2:
      return "C";
    case 3:
      return "D";
    case 4:
      return "E";
    case 5:
      return "H";
    case 6:
      return "L";
    case 7:
      return "M";
    case 8:
      return "P";
    case 9:
      return "R";
    case 10:
      return "S";
    case 11:
      return "T";
    default:
      break;
  }
};

const transformDaysAndYears = (date, gender) => {
  let result;
  const dateOfBirth = new Date(date);
  const dateOfBirthStr = dateOfBirth.toLocaleDateString();

  const DoBSplit = dateOfBirthStr.split("/");
  [DoBSplit[0], DoBSplit[1]] = [DoBSplit[1], DoBSplit[0]];

  const monthCode = getMonthCode(Number(DoBSplit[1]) - 1);
  const days = Number(DoBSplit.join("").slice(0, 2));
  const years = DoBSplit.join("").slice(-2);

  switch (true) {
    case gender === "M" && days < 10:
      result = `${years}${monthCode}0${days}`;
      break;
    case gender === "M" && days > 10:
      result = `${years}${monthCode}${days}`;
      break;
    case gender === "F":
      result = `${years}${monthCode}${days + 40}`;
      break;
    default:
      break;
  }

  return result;
};

const CodeForLessThan3Consonants = (consonants, vowels, length) => {
  switch (true) {
    case length === 2 && vowels.length > 0:
      consonants.push(vowels[0]);
      return consonants.join("");
    case length === 1 && vowels.length !== 1:
      consonants.push(vowels[0]);
      consonants.push(vowels[1]);
      return consonants.join("");
    case vowels.length === 1:
      const merged = consonants.concat(vowels);
      return merged.join("");
    case !length && vowels.length !== 2:
      return vowels.splice(0, 3).join("");
    case !length && vowels.length === 2:
      vowels.push("X");
      return vowels.join("");

    default:
      break;
  }
};

// transformers -------------------------

const getCodeFromSurName = (name) => {
  const vowels = name.match(vowelRegex).map((letter) => letter.toUpperCase());
  const consonants = name.match(consonantRegex)
    ? name.match(consonantRegex).map((letter) => letter.toUpperCase())
    : [];
  const consonantsLength = consonants.length ? consonants.length : 0;

  switch (true) {
    case consonantsLength === 3:
      return consonants.join("");
    case consonantsLength > 3:
      const indexesArray = [0, 2, 3];
      return consonants
        .filter((letter, index) => indexesArray.includes(index))
        .join("");
    case consonantsLength < 3:
      return CodeForLessThan3Consonants(consonants, vowels, consonantsLength);
    default:
      break;
  }
};

const getCodeFromName = (surName) => {
  const vowels = surName
    .match(vowelRegex)
    .map((letter) => letter.toUpperCase());
  const consonants = surName.match(consonantRegex)
    ? surName.match(consonantRegex).map((letter) => letter.toUpperCase())
    : [];
  const consonantsLength = consonants.length ? consonants.length : 0;

  switch (true) {
    case consonantsLength >= 3:
      return consonants.splice(0, 3).join("");
    case consonantsLength < 3:
      return CodeForLessThan3Consonants(consonants, vowels, consonantsLength);
    default:
      break;
  }
};

const getCodeFromBirthDate = (date, gender) => {
  switch (gender) {
    case "M":
      const codeM = transformDaysAndYears(date, gender);
      return codeM;
    case "F":
      const codeF = transformDaysAndYears(date, gender);
      return codeF;
    default:
      break;
  }
};

// MAIN FUNCTION ------------------------

const fiscalCode = (person) => {
  const { name, surname, gender, dob } = person;
  let fiscalCode;
  fiscalCode = `${getCodeFromName(surname)}${getCodeFromSurName(
    name
  )}${getCodeFromBirthDate(dob, gender)}`;
  return fiscalCode;
};

const person1 = {
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900",
};
const person2 = {
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950",
};
// results----------
// console.log(fiscalCode(person1)); //"DBTMTT00A01"

// console.log(fiscalCode(person2)); //"YUXHLN50T41"

// -----------------------------------------------------------------------------------------
// EXO 2
const obj1 = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
};
const obj2 = {
  a: { z: 5 },
  b: [2, 3],
  c: "foo",
};
const obj3 = {
  c: ["bar", "baz"],
  d: 3,
};

const merge = (...objects) => {
  let mergedObjects;

  let allKeys = objects.reduce((acc, cur) => {
    return (acc = [...new Set([...acc, ...Object.keys(cur)])].sort());
  }, []);

  mergedObjects = objects.reduce((mergedObjs, currentObj) => {
    for (const key of allKeys) {
      const currentHasKey = Object.hasOwnProperty.call(currentObj, key);
      const mergedHasKey = Object.hasOwnProperty.call(mergedObjs, key);
      let currentValue = currentObj[key];
      let mergedValue = mergedObjs[key];

      if (currentHasKey && mergedHasKey) {
        console.log("line 202 both have => ", key, currentValue, mergedValue);
        if (Array.isArray(currentValue)) {
          mergedValue = currentValue.push(mergedValue);
        }
        if (Array.isArray(mergedValue)) {
          mergedValue.push(currentValue);
        }
        if (Array.isArray(mergedValue) && Array.isArray(currentValue)) {
          mergedValue = [...mergedValue, ...currentValue];
        }
      }
      if (currentHasKey && !mergedHasKey) {
        console.log("line 205 current have =>", key, currentValue);
        mergedObjs[key] = currentValue;
      }
      if (!currentHasKey && mergedHasKey) {
        console.log("line 208 current doesn't have =>", key, mergedValue);
        mergedObjs[key] = mergedValue;
      }
      if (!currentHasKey && !mergedHasKey) {
        console.log("line 210 both doesn't have =>", key);
      }
    }

    return mergedObjs;
  });
  console.log(mergedObjects);
  return mergedObjects;
};

merge(obj1, obj2, obj3);
