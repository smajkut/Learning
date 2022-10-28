let root = document.querySelector(':root')
let scroll
let bodyD = document.body
let htmlD = document.documentElement
let heightOfPage = Math.max(
	bodyD.scrollHeight,
	bodyD.offsetHeight,
	htmlD.clientHeight,
	htmlD.scrollHeight,
	htmlD.offsetHeight
)
let viewPortHeight
let pxToScroll
let pxProgress



const scrollRefresh = () => {
    scroll = window.scrollY
	viewPortHeight = window.innerHeight
	pxToScroll = heightOfPage - viewPortHeight
    pxProgress = (scroll / pxToScroll * 100) + '%'
    
	// console.log(scroll)
	// console.log(pxToScroll)
    // console.log(pxProgress)
    root.style.setProperty('--scroll-width', pxProgress )
}

addEventListener('scroll', scrollRefresh)
