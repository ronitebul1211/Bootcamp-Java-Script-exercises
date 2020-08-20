`use-strict`

/**
Create an object called school.

School has two properties teachers and students.

Each teacher has the following:
1. A name

2. An array of subjects he/she can teach.

3. An array of students

4. An integer of how much capacity is left in his/her classroom.

Each student has at least a name and age.

The object should include at least 2 teachers and 4 students
 */

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
      students: ['Matias', 'Sally'],
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
      age: 32
    },
    {
      name: 'Keren',
      age: 29
    },
    {
      name: 'Matias',
      age: 27
    }
  ]
 };