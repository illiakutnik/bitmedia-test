import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context/appContext'

import Header from '../Header'
import Footer from '../Footer'
import Pagination from './Pagination'

const List = ({ history }) => {
	const { getUsers, users } = useContext(AppContext)
	const [amount, setAmount] = useState(15)
	const [page, setPage] = useState(1)

	useEffect(() => {
		getUsers(amount, page)
	}, [amount, page])

	const onAmountChange = e => {
		setAmount(e)
		setPage(1)
	}

	return (
		<>
			<Header />
			<div className='list'>
				<div className='list__nav'>
					<p className='list__nav-main' onClick={() => history.push('/')}>
						Main page >
					</p>
					<p className='list__nav-current'> User statistics</p>
				</div>
				<h2>User statistics</h2>
				<div className='list__toolbar'>
					<p>Amount of users per page:</p>
					<select
						value={amount}
						onChange={e => onAmountChange(+e.target.value)}
					>
						<option value='10'>10</option>
						<option value='15'>15</option>
						<option value='20'>20</option>
						<option value='25'>25</option>
						<option value='30'>30</option>
						<option value='40'>40</option>
						<option value='50'>50</option>
					</select>
				</div>
				{!users ? (
					<p>loading...</p>
				) : (
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>First name</th>
								<th>Last name</th>
								<th>Email</th>
								<th>Gender</th>
								<th>IP address</th>
								<th>Total clicks</th>
								<th>Total page views</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, i) => {
								return (
									<tr key={i} onClick={() => history.push(`/user/${user.id}`)}>
										<td>{user.id}</td>
										<td>{user.first_name}</td>
										<td>{user.last_name}</td>
										<td>{user.email}</td>
										<td>{user.gender}</td>
										<td>{user.ip_address}</td>
										<td>{user.total_clicks}</td>
										<td>{user.total_page_views}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				)}

				<Pagination amount={amount} currentPage={page} changePage={setPage} />
			</div>
			<Footer />
		</>
	)
}

export default List
