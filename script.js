function inicio (){
    var c = 1
    function move() {
        c = (c%3) + 1
        document.getElementById('i'+c).checked = true
    }
    setInterval(move, 3000)
}