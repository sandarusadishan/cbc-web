import Student from "../models/student.js";

export function getStudents(req, res) {
  Student.find().then((studentList) => {
    [
      res.json({
        List: studentList,
      }),
    ];
  });
}

 export function createStudents(req, res) {
  const student = new Student(req.body);
  student
    .save()
    .then(() => {
      res.json({
        message: "student created",
      });
    })
    .catch(() => {
      res.json({
        message: "student not created",
      });
    });
}


export function deleteStudents(req,res){
    Student.deleteOne({name : req.body.name}).then(()=>{
        res.json({
            message : " student deleted successfully"
        });
    });
};