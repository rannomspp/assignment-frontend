import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SectorField } from "./sector-field.interface";
import { FormDataModel } from "./formDataModel.interface";

@Injectable({
    providedIn: 'root'
})

export class SectorService {
    private apiServerUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) {}

    public getAllSectorFields(): Observable<SectorField[]> {
        return this.http.get<SectorField[]>(`${this.apiServerUrl}/api/sectors/all`);
    }

    public saveSectors(formData: FormDataModel): Observable<SectorField[]> {
        return this.http.post<SectorField[]>(`${this.apiServerUrl}/api/sectors/save`, formData)
    }

    public updateSectors(formData: FormDataModel): Observable<SectorField[]> {
        return this.http.put<SectorField[]>(`${this.apiServerUrl}/api/sectors/update`, formData)
    }

}