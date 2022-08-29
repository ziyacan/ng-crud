import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../employe.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employies: any;
  id: any;

  constructor(
    private employeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.employies = new Employee();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeService.getEmployeById(this.id).subscribe(res => {
      this.employies = res;
    })
  }

  update() {
    this.employeService.updateEmp(this.id, this.employies).subscribe(res => {
      this.employies = res;
      this.toastr.success('İşlem başarılı bir şekilde tamamlandı!')
      this.router.navigate(['/employe-list']);
    })
  }

}
