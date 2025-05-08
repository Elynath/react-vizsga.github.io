import React, { useState, useContext } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      date: new Date().toLocaleString(),
    };
    addTask(newTask);
    navigate('/');
  };

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Új feladat hozzáadása</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Cím</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add meg a feladat címét"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Leírás</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Add meg a feladat részleteit"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Mentés
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TaskForm;
