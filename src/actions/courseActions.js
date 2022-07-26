import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";
import { act } from "react-dom/test-utils";

export function saveCourse(course) {
    return courseApi.saveCourse(course).then(savedCourse => {
        //Hey dispatcher, go tell all the stores that a course was just created.
        dispatcher.dispatch({
            actionType: course.id 
            ? actionTypes.UPDATE_COURSE 
            : actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    });
}

export function loadCourses() {
    return courseApi.getCourses().then(courses => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_COURSES,
            courses: courses //we can write just "courses" in this line because it's the same word
        });
    });
}

export function deleteCourse(id) {
    return courseApi.deleteCourse(id).then(() => {
        dispatcher.dispatch({
            actionType: actionTypes.DELETE_COURSE,
            courses: id
        })
    })
}


//whole function saveCourse(course) {}  is called ACTION CREATOR(function that makes action)
//what is placed in a dispatch is called the ACTION
