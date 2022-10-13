


function forward()
{
	const search = window.location.search
	const path = search.substring(1)
	if (!(path.length))
		window.location.href="index.html"
	else
		setTimeout(()=>{window.location.href=path}, 1000)
}

forward()