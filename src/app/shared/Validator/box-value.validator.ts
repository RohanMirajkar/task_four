import { AbstractControl, ValidationErrors } from "@angular/forms";

export class InputValueValidator{
    static maxValue( control : AbstractControl) : null | ValidationErrors{
        if(+control.value > 100){
            return {'OverValue' : true}
        }else{
            return null
        }
    }
}