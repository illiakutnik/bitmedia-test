import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/appContext'
import Chart from 'react-apexcharts'

import Header from './Header'
import Footer from './Footer'

const User = ({ location }) => {
	const { getUser, user } = useContext(AppContext)
	useEffect(() => {
		getUser(location.pathname.slice(6))
	}, [])

	console.log(user)

	let dates = []
	let clicks = []
	let page_views = []
	if (user) {
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
			) : (
				<div>
					<div>
						<Chart
							options={clicksData.options}
							series={clicksData.series}
							type='line'
							width='1140'
							height='320'
						/>
					</div>
					<div>
						<Chart
							options={pageViewsData.options}
							series={pageViewsData.series}
							type='line'
							width='1140'
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
