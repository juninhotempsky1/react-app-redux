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
            <div className="row">
                <div className="col-sm-3">
                    <div className="card" >
                        <div className="card-body">
                            <button type="button" onClick={addCourse} className="btn btn-success" >RenderRedux</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <div className="card" >
                        <div className="card-body">
                            <ul className="list-group ">
                                {
                                    courses.map((course, index) => {
                                        let classNameParam = "list-group-item";
                                        if (index % 2 === 0) classNameParam += " active"
                                        return (<li className={classNameParam} key={course+index}>{course}</li>);
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseList;