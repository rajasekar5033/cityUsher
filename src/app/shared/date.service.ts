export class DateService{
    days = [];
    months = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September','October', 'November', 'December'];
    years = [];

    constructor(){
        this.day();
        this.year();
    
    }
    day(){
        for(var i=1; i<=31; i++){
            this.days.push(i);
        }
        return this.days;
    }
    year(){
        for(var i=1970; i<=2000; i++){
            this.years.push(i);
        }
        return this.years;
    }
}