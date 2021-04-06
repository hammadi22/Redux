import React, { Fragment, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { modifyTask } from "../../Actions";
import { toggleTask } from "../../Actions";
import "./Task.css";

function Task({ task, i }) {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleConfirm = () => {
        setShow(false);
        modifiedName !== ""
            ? dispatch(modifyTask({ modifiedName, id: task.id }))
            : alert("Set true value!");
    };
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [modifiedName, setModifiedName] = useState("");
    const changer = (s) => setModifiedName(s);

    const handleClick = () => {
        dispatch(toggleTask({ id: task.id }));
    };

    return (
        <Fragment>
            <hr />
            <article className="taskClass">
                <h3
                    style={{
                        textDecoration: task.isDone
                            ? "line-through red"
                            : "none",
                    }}
                >
                    - {task.title}
                </h3>
                <div className="btns">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleClick}
                    >
                        {task.isDone ? "Undone" : "Done"}
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleShow}
                    >
                        Edit
                    </button>
                </div>
            </article>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        className="form-control-lg"
                        defaultValue={task.title}
                        onChange={(e) => changer(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export default Task;