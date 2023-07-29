class DataNotExists extends Error {
  constructor(){
    super("Data Not Exists");
  }
}

export {DataNotExists};