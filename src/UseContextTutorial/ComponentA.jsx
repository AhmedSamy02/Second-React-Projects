import { createContext, useState } from 'react'
import ComponentB from './ComponentB'
export const UserContext = createContext()
function ComponentA() {
	const [user, setUser] = useState('BroCode')
	return (
		<>
			<div className="box">
				<h1>ComponentA</h1>
				<h2>Hello {user}</h2>
				<UserContext.Provider value={user}>
					<ComponentB />
				</UserContext.Provider>
			</div>
            <button onClick={() => {
                setUser('Ahmed Samy')
            }}>Change Name</button>
		</>
	)
}
export default ComponentA
