import React, { useState, useEffect } from 'react';
import CourseList from "./CourseList";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStore";
import {loadCourses, deleteCourse } from "../actions/courseActions";

function CoursesPage() {
    
    const [courses, setCourses] = useState(courseStore.getCourses());

    useEffect( () => {
        courseStore.addChangeListener(onChange); 
        if (courseStore.getCourses().length === 0) 
            loadCourses();
        return () => courseStore.removeChangeListener(onChange); //cleanup on unmount
    }, []);

    function onChange() {
        setCourses(courseStore.getCourses());
    }

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">Add course</Link>
            <CourseList deleteCourse={deleteCourse} courses={courses}/>    
        </>
    );
}

//PropTypes - for documenting and validating props
CourseList.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            authorId: PropTypes.number.isRequired,
            category:PropTypes.string.isRequired
        })
    ).isRequired
};

export default CoursesPage;