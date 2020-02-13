import React from 'react'

const Pagination = ({ changePage, currentPage, amount }) => {
	const pages = Math.ceil(1000 / amount)
	let allPages = []
	for (let i = 0; i < pages; i++) {
		allPages.push(
			<button
				className={
					i + 1 === currentPage
						? 'pagination__item pagination__item-current'
						: 'pagination__item'
				}
				key={i}
				onClick={() => changePage(i + 1)}
			>
				{i + 1}
			</button>
		)
	}

	const showPages = () => {
		if (currentPage === 1 || currentPage === 2) {
			return allPages.slice(0, 5)
		} else if (currentPage === pages || currentPage === pages - 1) {
			return allPages.slice(pages - 5, pages)
		} else {
			return allPages.slice(currentPage - 3, currentPage + 2)
		}
	}
	return (
		<div className='pagination'>
			<button
				onClick={() => changePage(currentPage - 1)}
				disabled={currentPage === 1}
				className={
					currentPage === 1
						? 'pagination__arrow left_disable'
						: 'pagination__arrow left'
				}
			></button>
			{showPages()}
			<button
				onClick={() => changePage(currentPage + 1)}
				disabled={currentPage === pages}
				className={
					currentPage === pages
						? 'pagination__arrow right_disable'
						: 'pagination__arrow right'
				}
			></button>
		</div>
	)
}
export default Pagination
