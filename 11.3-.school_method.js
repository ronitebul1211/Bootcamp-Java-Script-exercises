`use-strict`


const school = 
{
 teachers:[
   {
     name: 'Pini',
     studySubjects: ['HTML', 'CSS'],
     students: [],
     classroomCapacity: 7
   },
   {
     name: 'Shani',
     studySubjects: ['HTML', 'JS'],
     students: [],
     classroomCapacity: 8
   },

 ],
 students:[
   {
     name: 'Roni',
     age: 27
   },
   {
     name: 'Sally',
     age: 30
   },
   {
     name: 'Keren',
     age: 29
   },
   {
     name: 'Matias',
     age: 27
   }
 ],
 assignStudent: function(studentName, subjectName){

    const student = school.students.find((student) => studentName === student.name);
    const availableTeacher = school.teachers.find((teacher) => {
      return teacher.classroomCapacity > 0 && teacher.studySubjects.find((subject) => subject === subjectName);
    });

    if( !availableTeacher){
      console.log('Sorry, no available teachers left');
    } else {
      availableTeacher['classroomCapacity']--;
      availableTeacher['students'].push(student);
    }
   console.log(availableTeacher);
 }
};

school.assignStudent('Roni', 'JS');


/**
 Create a method for your school object that you created in the last exercise 
 called “assignStudent” that takes two arguments, a student and a subject.
 
 Assign all of the students to the first available teacher who teaches that
 subject and who is not in full capacity. If all of the teachers are in full
 capacity log to the console “Sorry, no available teachers left”
 */