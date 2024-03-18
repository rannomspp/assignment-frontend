import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { FormDataModel } from "./formDataModel.interface";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
    private apiServerUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    public getSessionInfo(): Observable<string> {
        return this.http.get(`${this.apiServerUrl}/api/session/session-info`, { responseType: 'text', withCredentials: true}).pipe(
            map(response => response.toString())
        );
    }

    setFormData(formData: FormDataModel): void {
        sessionStorage.setItem('formData', JSON.stringify(formData));
    }
    
    getFormData(): FormDataModel | null {
        const formData = sessionStorage.getItem('formData');
        return formData ? JSON.parse(formData) : null;
    }

    clearFormData(): void {
        sessionStorage.removeItem('formData');
    }
    
}