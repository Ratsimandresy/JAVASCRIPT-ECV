// exo 1 :

const promise1 = (str) => {
  return new Promise((success, failure) => {
    str.length <= 20 ? success(true) : failure("failed");
  });
};

//exo 2 :

const promise2 = (int1, int2) => {
  return new Promise((success, failure) => {
    if (int1 > int2) {
      success(int1 - int2);
    } else {
      failure("failed");
    }
  });
};

// exo 3 :

const promise3 = (dob) => {
  const today = new Date().getTime();
  const DoB = dob.split("/");
  [DoB[0], DoB[1]] = [DoB[1], DoB[0]];

  const formatedDoB = DoB.join("/");
  const dateOfBirth = new Date(formatedDoB).getTime();
  const age = (today - dateOfBirth) / (1000 * 60 * 60 * 24 * 365);

  return new Promise((success, failure) => {
    return age > 17 ? success(true) : failure("failed: minor");
  });
};

// exo 4 :

const execute1 = () => {
  // => fail
  const res = promise1("this is a test to check the promise result ")
    .then((res) => res)
    .catch((e) => e);
  return res;
};
const execute2 = () => {
  // => success
  const res = promise2(65, 24)
    .then((res) => res)
    .catch((e) => e);
  return res;
};
const execute3 = () => {
  // => fail
  const res = promise3("29/06/2014")
    .then((res) => res)
    .catch((e) => e);
  return res;
};

// console.log(execute1());
// console.log(execute2());
// console.log(execute3());

// exo 5 :

const result4 = async () => {
  // => success
  try {
    const result = await promise1("this is a test");
    return result;
  } catch (error) {
    console.log(error);
  }
};
const result5 = async () => {
  // => fail
  try {
    const result = await promise2(2, 6);
    return result;
  } catch (error) {
    console.log(error);
  }
};
const result6 = async () => {
  // => success
  try {
    const result = await promise3("15/7/1998");
    return result;
  } catch (error) {
    console.log(error);
  }
};

// console.log(result4());
// console.log(result5());
// console.log(result6());

// exo 6 :
