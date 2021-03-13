module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      actionName: String,
    }
  );     
 
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  
  const Tutorial = mongoose.model("excData", schema,"excData");

  // const tutorial = new Tutorial({
  //   actionName: 'Foo',
  //   });

  
  //  tutorial.save();
  
  // const userFromDb =  tutorial.findOne({ actionName: 'Foo' });
  // console.log(userFromDb); 
  
  return Tutorial;
};
