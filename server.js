const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.json({ extended: false }))

const usersData = JSON.parse(fs.readFileSync('data/users.json', 'utf8'))
const usersStatisticData = JSON.parse(
	fs.readFileSync('data/users_statistic.json', 'utf8')
)

const totalUser = usersData.length
// console.log(users.length)
// console.log(users_statistic.length)

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

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
