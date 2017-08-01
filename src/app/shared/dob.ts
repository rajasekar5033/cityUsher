import { FormControl } from '@angular/forms'
import { OnInit } from '@angular/core'

export class Dob{
    
    constructor(control: FormControl){
         var months = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September','October', 'November', 'December'];

        var val = control.value;
        if(val.month == "April" || val.month == "June" || val.month == "September"
        || val.month == "November"){
            for(var i =0; i<months.length; i++){
                if(months[i] == val.month){
                var key = i+1;
             }
            }
            console.log(key, 'month key');
            if(val.day == "31"){
                return {'maxDate': true};
            }
            return null;
        }

        if(val.month == "February"){

            for(var i =0; i<months.length; i++){
                if(months[i] == val.month){
                var key = i+1;
             }
            }
            console.log(key, 'month key');

            if(val.day == "31" || val.day =="30"){
                return {'maxDate': true};
            }
            
            else if((val.day == "29") && (parseInt(val.year)%4 !=0) &&
            (parseInt(val.year)%100 !=0) && (parseInt(val.year)%400)!=0){
                console.log("hello");
                return {'leap': true};
            }
            return null;
            
        }

        
        //age validation
       
        for(var i=0; i<months.length; i++){
            console.log(months[i])
            if(months[i] == val.month){
                    var key = i+1;
            }
        }
        var today = new Date();
        var age = today.getFullYear() - parseInt(val.year);
        var m = today.getMonth() - key;
        if (m < 0 || (m === 0 && today.getDate() < parseInt(val.day))) {
            age--;
        }
        if(age<18){
            return {'ageValidation': true}
        }

    }
    
}