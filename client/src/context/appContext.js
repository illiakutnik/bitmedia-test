import React, { createContext, useState } from 'react'
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider = props => {
	const [users, setUsers] = useState(null)
	const [user, setUser] = useState(null)

	const [dateStart, setDateStart] = useState(null)
	const [dateEnd, setDateEnd] = useState(null)

	const getUsers = async (amount, page) => {
		try {
			const res = await axios.get(`/api/users?amount=${amount}&page=${page}`)
			setUsers(res.data)
		} catch (error) {
			alert(error.message)
			console.error(error.message)
		}
	}

	const getUser = async (id, start, end) => {
		try {
			let res
			if (!start || !end) {
				res = await axios.get(`/api/user/${id}`)
			} else {
				res = await axios.get(`/api/user/${id}?start=${start}&end=${end}`)
			}
			if (res.data.error) {
				setUser(res.data)
			} else {
				setDateStart(res.data.startDate)
				setDateEnd(res.data.endDate)
				setUser(res.data)
			}
		} catch (error) {
			alert(error.message)
			console.error(error.message)
		}
	}

	const cleanDates = () => {
		setDateStart(null)
		setDateEnd(null)
	}

	return (
		<AppContext.Provider
			value={{
				getUsers,
				users,
				getUser,
				user,
				dateStart,
				setDateStart,
				dateEnd,
				setDateEnd,
				cleanDates
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}

export default AppContextProvider
