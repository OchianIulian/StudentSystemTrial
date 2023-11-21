package com.andrei.studentsystem.service;

import com.andrei.studentsystem.StudentsystemApplication;
import com.andrei.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudents();
}
