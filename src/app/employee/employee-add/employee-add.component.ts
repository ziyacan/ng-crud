import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../employe.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employe';
import { TranslateService } from '@ngx-translate/core';

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
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.employies = new Employee();
  }

  save() {
    this.employeeService.createEmploye({ model: this.employies }).subscribe(res => {
      this.toastr.success(this.translate.instant('success'));
      this.router.navigate(['/employe-list'])
    })
  }

}
