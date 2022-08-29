import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from './../employe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employies: any;
  id: any;

  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getAllEmp();
  }

  getAllEmp() {
    this.employeeService.getAllUser().subscribe(response => {
      this.employies = response;
    })
  }

  delUser(employee: { id: any; }) {
    this.employeeService.deleteEmp(employee.id).subscribe(res => {
      this.toastr.success(this.translate.instant('success'));
      this.getAllEmp();
    })
  }

}

