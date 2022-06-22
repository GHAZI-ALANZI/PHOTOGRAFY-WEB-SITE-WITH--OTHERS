import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    Swal.fire({
      title:"Login",
      html:`<div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    ` + `<div class="form-floating mb-3">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
    <label for="floatingPassword">Password</label>
  </div>`
    })
  }
  
  register(){
    Swal.fire({
      title:"Register",
      html:
      `<div class="input-group d-flex justify-content-between">
      <div class="form-floating mb-3">
      <input type="fName" class="form-control" id="floatingInput" placeholder="First Name">
      <label for="floatingInput">First Name</label></div>
      <div class="form-floating mb-3">
      <input type="lName" class="form-control" id="floatingInput" placeholder="Last Name">
      <label for="floatingInput">Last Name</label></div>
    </div>
    ` +
      `<div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    ` + `<div class="form-floating mb-3">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
    <label for="floatingPassword">Password</label>
  </div>` + `<div class="form-floating mb-3">
  <input type="date" class="form-control" id="floatingInput" placeholder="Your birthday">
  <label for="floatingInput">Date of birth</label>
  </div>`,
  showCancelButton: true,
  confirmButtonText: 'Register me, bebe!',
  cancelButtonText: 'I changed my mind',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          "You're registered!",
          "Enjoy the content :)",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "If you ever change your mind you know where to find me.", "error");
      }
    })
  }
}
