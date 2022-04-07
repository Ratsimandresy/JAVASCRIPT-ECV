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
  return promise1("this is a test to check if it does work ! ")
    .then((res) => {
      console.log(res);
    })
    .catch((e) => e);
};
const execute2 = () => {
  return promise1(65, 24)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => e);
};
const execute3 = () => {
  return promise1("15/04/2000")
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => e);
};

console.log(execute1(), execute2(), execute3());

// exo 5 :

const result4 = async () => {
  try {
    const result = await promise1("this is a test");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

console.log(result4());
