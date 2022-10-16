import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
//import { Customerdetails } from 'app/model/CustomerDetails/customerdetails';
//import { Empreg } from 'app/model/empreg';
//import { Enquirydetails } from 'app/model/enquirydetails';
//import { CommonService } from 'app/module/common/common.service';
export interface user {
  username: string;
  password: string;
  repassword: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // datalist:Enquirydetails[];
  
  // emplist:Empreg[];
  u: user = {
    username: "",
    password: "",
    repassword: "",
    email: ""
  };
  constructor(private router: Router, private fb:FormBuilder) {}
  username: string='';
  password:string='';
  ngOnInit() {
   // this.common.getenquirydetails().subscribe(list => this.datalist=list);
    
    // alert("In Login")
  }
//   login(u) {
//     console.log("login called");
//     console.log(u.username,u.password);
//   // Customer Login
//   {
//   for(let i=0 ; i< this.datalist.length; i++)
//   {
//     if (this.datalist[i].userName ==u.username && this.datalist[i].passWord == u.password ) 
//     {
//       alert("Customer Login Successfull");
//       console.log(u.username,u.password);
//       this.common.getusername(u.username);
//       sessionStorage.setItem('role', 'customer');
//       this.router.navigateByUrl("role/customer");
//     }
//   }
// }
// }
// signup(u)
// {
//     console.log("signup");
// }


  login(u)
  {
    if (u.username === 'do' && u.password === 'do') {
      console.log('in do');
      sessionStorage.setItem('role', 'do');
      this.router.navigateByUrl("role/do/financial-check");
    }
    if (u.username === 'se' && u.password === 'se') {
      
      sessionStorage.setItem('role', 'se');
      this.router.navigateByUrl("role/se/schemes");
    }

    if (u.username === 'oe' && u.password === 'oe') {
      console.log('in oe');
      sessionStorage.setItem('role', 'oe');
      this.router.navigateByUrl("role/oe/oe-enquiry-list");
    }

    if (u.username === 'bm' && u.password === 'bm') {
      console.log('in bm');
      sessionStorage.setItem('role', 'bm');
      this.router.navigateByUrl("role/bm/bm-application-list");
    }

    if (u.username === 'am' && u.password === 'am') {
      console.log('in am');
      sessionStorage.setItem('role', 'am');
      this.router.navigateByUrl("role/am/am-application-list");
    }

    if (u.username === 'tc' && u.password === 'tc') {
      console.log('in tc');
      sessionStorage.setItem('role', 'tc');
      this.router.navigateByUrl("role/tc/tc-defaulter-list");
    }





    // if (u.username === 'ad' && u.password === 'ad') {
    //   console.log('in admin');
    //   sessionStorage.setItem('role', 'admin');
    //   this.router.navigateByUrl("role/admin/adminbash");
    // }


    // if (u.username === 'emp' && u.password === 'emp') {
    //   console.log('in emp');
    //   sessionStorage.setItem('role', 'emp');
    //   this.router.navigateByUrl("role/emp/empdash");
    // }
    // if (u.username === 'oe' && u.password === 'oe') {
     
    //   sessionStorage.setItem('role', 'operation');
    //   this.router.navigateByUrl("role/operation/oedash");
    // }
    // if (u.username === 'cm' && u.password === 'cm') {
    //   console.log(u.username,u.password);
    //   sessionStorage.setItem('role', 'cr');
    //   this.router.navigateByUrl("role/cr/credit");
    // }
    // if (u.username === 're' && u.password === 're') {
    //   console.log(u.username,u.password);
    //   sessionStorage.setItem('role', 'relation');
    //   this.router.navigateByUrl("role/relation/oecustomer");
    // }
    // if (u.username === 'abc' && u.password === 'abc') {
    //   console.log(u.username,u.password);
    //   sessionStorage.setItem('role', 'ab');
    //   this.router.navigateByUrl("role/ab/abcdash");
    // }
    // // if (u.username === 'prod' && u.password === 'prod') {
    // //   console.log(u.username,u.password);
    // //   sessionStorage.setItem('role', 'product');
    // //   this.router.navigateByUrl("role/product/addproduct");
    // // }
    
    // if (u.username === 'reg' && u.password === 'reg') {
    //   console.log(u.username,u.password);
    //   sessionStorage.setItem('role', 'registration');
    //   this.router.navigateByUrl("role/registration/newreg");
    // }
  } 
}  

