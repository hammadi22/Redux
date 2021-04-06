import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Actions";
import "./AddTask.css";
import { useSelector } from 'react-redux';

function AddTask() {
    const [task, setTask] = useState("");

    const putTask = (x) => setTask(x);

    const dispatch = useDispatch();
    const handleSubmit = () => {
        if (task.length !== 0) dispatch(addTask({ task }));
        else alert("Nothing to add. Please try to write somthing");
        setTask("");
    };

    return (
        <Fragment>
            <nav className="navHeader">
                <h1>Todo List</h1>
                <div className="addTask">
                    <input
                        type="text"
                        placeholder="New task..."
                        className="form-control"
                        name="add"
                        onChange={(e) => putTask(e.target.value)}
                        value={task}
                    />
                    <button
                        type="button"
                        className="btn btn-secondary form-control"
                        onClick={handleSubmit}
                    >
                        Add
                    </button>
                </div>
            </nav>
        </Fragment>
    );
}

export default AddTask;