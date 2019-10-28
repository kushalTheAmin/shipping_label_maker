
function checkFromTo(obj) {
    const errorObj = {};
    if (!obj.name) {
      errorObj.firstName = true;
    }
    if (!obj.street) {
      errorObj.street = true;
    }
    if (!obj.city) {
      errorObj.city = true;
    }
    if (obj.state.length !== 2) {
      errorObj.state = true;
    }
    if (obj.state.length === 5){
      errorObj.zip = true;
    }

    return errorObj;
}

function checkWeight(val) {
  const errorObj = {};
  if (!parseInt(val, 10)) {
    errorObj.weight = true;
  }
  return errorObj;
}

export const validatorObj = {
  0 : checkFromTo,
  1 : checkFromTo,
  2: checkWeight
}
