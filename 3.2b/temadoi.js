function returnObject (inputObject, propToBeRemoved){
  const newObj = { ...inputObject};
  propToBeRemoved.forEach(prop => delete newObj [prop]);
  return newObj;
}
const inputObject = {a:1, b:2}
const propToBeRemoved = ['b']

const newObject = returnObject(inputObject, propToBeRemoved);
console.log(newObject)