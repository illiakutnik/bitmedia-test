import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider = props => {
	const [users, setUsers] = useState(null)
	const [user, setUser] = useState(null)

	const getUsers = async (amount, page) => {
		try {
			const res = await axios.get(`/users?amount=${amount}&page=${page}`)
			setUsers(res.data)
		} catch (error) {
			console.error(error)
		}
	}

	const getUser = async id => {
		try {
			const res = await axios.get(`/user/${id}`)
			setUser(res.data)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<AppContext.Provider value={{ getUsers, users, getUser, user }}>
			{props.children}
		</AppContext.Provider>
	)
}

export default AppContextProvider
