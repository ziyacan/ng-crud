import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../employe.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employe';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employies: any;

  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.employies = new Employee();
  }

  save() {
    this.employeeService.createEmploye({ model: this.employies }).subscribe(res => {
      this.toastr.success('İşlem başarılı bir şekilde tamamlandı!')
      this.router.navigate(['/employe-list'])
    })
  }

}
