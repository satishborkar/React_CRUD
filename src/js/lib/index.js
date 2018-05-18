export function isEmpty(prop) {
  return (
    prop === null ||
    prop === undefined ||
    //(prop.hasOwnProperty("length") && prop.length === 0) ||
    (prop.contructor === Object && Object.keys(prop).length === 0)
  );
}

export function getUserById(data, id) {
  if (!!data) {
    return data.find(record => record.id === JSON.parse(id))
  }
}
