
import { FormControl} from '@angular/forms'

export class PasswordMatch{

  constructor(control: FormControl){
      var val = control.value
      if(val.pass != val.confirmPass){
        //console.log('matched', val.pass, val.confirmPass);
        return {'passMatch': true};
      }
    return null;
  }
}