import React from 'react'
//Bai tap 1

export default function ListCourse() {
  const courses: string[] = ["HTML", "CSS", "JavaScript", "ReactJS"];
  return (
    <>
      <div>Danh Sach Khoa Hoc</div>
      <ol>
      {courses.map((course, index) => (<li key={index}>{course}</li>))}
      </ol>
    </>
  )
}
