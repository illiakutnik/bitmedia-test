import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/appContext'
import Chart from 'react-apexcharts'

import Header from './Header'
import Footer from './Footer'

const User = ({ location, history }) => {
	const {
		getUser,
		user,
		dateStart,
		setDateStart,
		dateEnd,
		setDateEnd,
		cleanDates
	} = useContext(AppContext)

	useEffect(() => {
		return () => {
			cleanDates()
		}
	}, [])

	useEffect(() => {
		if (dateStart || dateEnd) {
			getUser(location.pathname.slice(6), dateStart, dateEnd)
		} else {
			getUser(location.pathname.slice(6))
		}
	}, [dateStart, dateEnd])

	let dates = []
	let clicks = []
	let page_views = []
	if (user && !user.error) {
		for (let day of user.days) {
			dates.push(day.date)
			page_views.push(day.page_views)
			clicks.push(day.clicks)
		}
	}

	const clicksData = {
		options: {
			chart: {
				id: 'data-bar'
			},
			stroke: {
				curve: 'smooth'
			},
			xaxis: {
				categories: dates
			}
		},
		series: [
			{
				name: 'clicks',
				data: clicks
			}
		]
	}

	const pageViewsData = {
		options: {
			chart: {
				id: 'data-bar'
			},
			stroke: {
				curve: 'smooth'
			},
			xaxis: {
				categories: dates
			}
		},
		series: [
			{
				name: 'page views',
				data: page_views
			}
		]
	}

	return (
		<>
			<Header />
			{!user ? (
				<p>loading...</p>
			) : user && user.error ? (
				<div className='error'>
					<h2>User doesn't exist</h2>
					<button onClick={() => history.push('/users')}>Go back</button>
				</div>
			) : (
				<div className='user'>
					<div className='user__nav'>
						<p className='user__nav-main' onClick={() => history.push('/')}>
							Main page >
						</p>
						<p
							className='user__nav-main'
							onClick={() => history.push('/users')}
						>
							User statistics >
						</p>
						<p className='user__nav-current'>{` ${user.firstName} ${user.lastName}`}</p>
					</div>
					<h2>{`${user.firstName} ${user.lastName}`}</h2>
					<div className='user__toolbar'>
						<p>Show data from</p>

						<select
							value={dateStart ? dateStart : ''}
							onChange={e => setDateStart(e.target.value)}
						>
							{user.dates.slice(0, user.dates.indexOf(dateEnd)).map((el, i) => {
								return (
									<option key={i} value={el}>
										{el}
									</option>
								)
							})}
						</select>
						<p> to </p>
						<select
							value={dateEnd ? dateEnd : ''}
							onChange={e => setDateEnd(e.target.value)}
						>
							{user.dates
								.slice(user.dates.indexOf(dateStart) + 1)
								.map((el, i) => {
									return (
										<option key={i} value={el}>
											{el}
										</option>
									)
								})}
						</select>
					</div>
					<div className='chart'>
						<h3>Clicks</h3>
						<Chart
							options={clicksData.options}
							series={clicksData.series}
							type='line'
							width='100%'
							height='320'
						/>
					</div>
					<div className='chart'>
						<h3>Page views</h3>
						<Chart
							options={pageViewsData.options}
							series={pageViewsData.series}
							type='line'
							width='100%'
							height='320'
						/>
					</div>
				</div>
			)}
			<Footer />
		</>
	)
}

export default User
