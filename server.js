const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.json({ extended: false }))

const usersData = JSON.parse(fs.readFileSync('data/users.json', 'utf8'))
const usersStatisticData = JSON.parse(
	fs.readFileSync('data/users_statistic.json', 'utf8')
)

const totalUser = usersData.length

app.get('/users', (req, res) => {
	const amount = parseInt(req.query.amount)
	const page = parseInt(req.query.page)

	const start = amount * page - amount
	const end = start + amount

	let users = usersData.slice(start, end)
	let userStats = usersStatisticData.filter(el =>
		users.some(user => user.id === el.user_id)
	)

	let usersRes = users.map(user => {
		let newEl = Object.assign({}, user)
		newEl.total_clicks = userStats.reduce((count, stat) => {
			if (stat.user_id === user.id) {
				return count + parseInt(stat.clicks)
			}
			return count
		}, 0)
		newEl.total_page_views = userStats.reduce((count, stat) => {
			if (stat.user_id === user.id) {
				return count + parseInt(stat.page_views)
			}
			return count
		}, 0)
		return newEl
	})
	res.json(usersRes)
})

app.get('/user/:id', (req, res) => {
	const userId = parseInt(req.params.id)
	const reqStart = req.query.start
	const reqEnd = req.query.end

	const user = usersData.find(el => el.id === userId)

	if (!user) {
		res.json({
			error: true,
			message: "User doesn't exist"
		})
	}

	let days = usersStatisticData.filter(el => el.user_id === userId)
	let startDate = days[0].date
	let endDate = days[days.length - 1].date

	const resDays = () => {
		if (!reqStart && !reqEnd) {
			return days.slice(0, 7)
		}
		let startIndex = days.findIndex(el => el.date === reqStart)
		let endIndex = days.findIndex(el => el.date === reqEnd) + 1
		return days.slice(startIndex, endIndex)
	}

	res.json({
		startDate,
		endDate,
		firstName: user.first_name,
		lastName: user.last_name,
		days: resDays()
	})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
