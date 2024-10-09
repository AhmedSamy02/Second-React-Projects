import { useState } from 'react'

function TaskListComponent() {
	const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3', 'Task 4'])
	const addTaskHandler = () => {
		const tf = document.getElementById('task-input')
		const value = tf.value
		setTasks((prevTasks) => [...prevTasks, value])
		tf.value = ''
	}
	const deleteTaskHandler = (index) => {
		setTasks(tasks.filter((_, i) => i !== index))
	}
	const taskUpHandler = (index) => {
		if (index === 0) {
			return
		}
		let updatedTasks = [...tasks]
		;[updatedTasks[index - 1], updatedTasks[index]] = [
			updatedTasks[index],
			updatedTasks[index - 1],
		]
		setTasks(updatedTasks)
	}
	const taskDownHandler = (index) => {
		if (index === tasks.length - 1) {
			return
		}
		let updatedTasks = [...tasks]
		;[updatedTasks[index + 1], updatedTasks[index]] = [
			updatedTasks[index],
			updatedTasks[index + 1],
		]
		setTasks(updatedTasks)
	}
	return (
		<>
			<h1 className="title">Task List</h1>
			<input placeholder="Task" id="task-input"></input>
			<button
				className="add-task-button"
				onClick={() => {
					addTaskHandler()
				}}
			>
				Add Task
			</button>
			<br></br>
			{tasks.map((task, index) => {
				return (
					<div key={index} className="task-item">
						<p className="task">{task}</p>
						<hr />
						<button
							className="delete-task"
							onClick={() => {
								deleteTaskHandler(index)
							}}
						>
							Delete
						</button>
						<img
							src="https://cdn-icons-png.flaticon.com/256/3148/3148312.png"
							className="image-button"
							alt="Task Up"
							onClick={() => {
								taskUpHandler(index)
							}}
						></img>
						<img
							src="https://cdn-icons-png.flaticon.com/512/16937/16937659.png"
							className="image-button"
							alt="Task Down"
							onClick={() => {
								taskDownHandler(index)
							}}
						></img>
					</div>
				)
			})}
		</>
	)
}
export default TaskListComponent
