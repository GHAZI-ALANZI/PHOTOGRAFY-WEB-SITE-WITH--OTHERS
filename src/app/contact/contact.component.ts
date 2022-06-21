import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myForm = new FormGroup({

    firstName: new FormControl('',Validators.required),
 
    lastName: new FormControl('',Validators.required),
    
    email:new FormControl('',[Validators.required, Validators.email])
 
  });
  
  constructor() { }

  ngOnInit(): void {
    
  }
onSubmit(){
  if(this.myForm.valid){
  alert("Your message was sent successfully!")
  console.log("worked")
} else {
  console.log("didn't work")
}}

}
