const checkValidImage = (a, b) => {
    if (typeof b !== 'undefined') {
        if ((a === 1 && b === 1) || (a === 0 && b === 0)) return false
        else return true
    } else {
        var img = new Image()
        img.src = a
        img.onload = function() {
            return checkValidImage(this.width, this.height);
        }
        return img.onload()
    }
}

export default {
    checkValidImage
}