import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from './../employe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2'

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
    Swal.fire({
      title: this.translate.instant('you_sure'),
      text: this.translate.instant('revert'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant('delete_it'),
      cancelButtonText: this.translate.instant('cancel'),
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.deleteEmp(employee.id).subscribe(res => {
          this.getAllEmp();
        })
        Swal.fire(
          this.translate.instant('deleted'),
          this.translate.instant('user_deleted'),
          'success'
        )
      }
    })
  }

}

