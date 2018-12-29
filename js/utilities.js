var getYearsOld = function() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    
    var birthday_int = 210;
    var birth_year = 1993;
    var actual_year = new Date().getFullYear()
    
    if(day < birthday_int) {
        return (actual_year - birth_year) - 1;
    }
    
    return actual_year - birth_year;
}

$("#yearsOld").html(getYearsOld());