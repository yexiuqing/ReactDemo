function getElementsByClass(classname) {
	var newArray = new Array()
	var classIndex = 0
	var tags = document.getElementsByTagName('*')
	for(var i in tags) {
		if(tags[i].nodeType == 1) {
			if(tags[1].getAttribute('class') === classname) {
				newwArray[classIndex] =tags[i]
				classIndex++
			}
		}
	}
	return newArray;
}