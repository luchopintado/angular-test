import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Employee } from './employee.model';
import { EMPLOYEES } from './mock-employees';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    getEmployees(): Observable<Employee[]> {
        return of(EMPLOYEES);
    }

    getEmployee(id: number): Observable<Employee> {
        const employee = EMPLOYEES.find(emp => emp.id === id);
        return of(employee);
    }
}
