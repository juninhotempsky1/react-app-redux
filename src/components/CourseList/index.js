import React from "react";
import { useSelector, useDispatch } from 'react-redux';

const CourseList = () => {
    const courses = useSelector(state => state.data);
    const dispatch = useDispatch();
    function addCourse() {
        dispatch({ type: 'ADD_COURSE', title: 'AngularJS' });
    }
    return (
        <div>
            <div>
                <button type="button" onClick={addCourse} >Renderizar</button>
            </div>
            <div>
                <ul>
                    {
                        courses.map(course => <li key={course}>{course}</li>)
                    }
                </ul>
            </div>

        </div>
    );
}

export default CourseList;