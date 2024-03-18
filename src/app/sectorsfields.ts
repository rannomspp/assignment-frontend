import { Component, OnInit } from '@angular/core';
import { SectorService } from './sector.service';
import { SectorField } from './sector-field.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { FormDataModel } from './formDataModel.interface';
import { SessionService } from './session.service';

@Component({
  selector: 'app-sectors-fields',
  templateUrl: './sector-fields.html',
  styleUrls: ['./SectorsFieldsStyle.css']
})
export class SectorsFields implements OnInit {
  public sessionInfo: string | undefined;
  public sectors: SectorField[] = [];
  public selectedSectors: SectorField[] = [];
  public formData: FormDataModel = {
    name: '',
    sectors: [],
    agree: false
  }; 

  constructor(private sectorService: SectorService, private sessionService: SessionService) { 
  }

  ngOnInit() {
    const storedFormData = this.sessionService.getFormData();
    if (storedFormData) {
      this.formData = storedFormData;
    }
    this.getSessionInfo();
    this.getSectorFields();
    
  }

  public getSectorFields(): void {
    this.sectorService.getAllSectorFields().subscribe(
      (response: SectorField[]) => {
        this.sectors = response;
        const storedFormData = this.sessionService.getFormData();
        if (storedFormData) {
          this.formData = storedFormData;
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public saveFields(): void {
    this.sectorService.saveSectors(this.formData).subscribe(
      (response: SectorField[]) => {
        console.log("Saved successfully!");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public updateFields(): void {
    this.sectorService.updateSectors(this.formData).subscribe(
      (response: any) => {
        console.log("Updated successfully!");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getSessionInfo(): void {
    this.sessionService.getSessionInfo().subscribe(
      (response: string) => {
        this.sessionInfo = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onSubmit() {
    console.log('Form submitted with data:', this.formData);
    if (this.sessionInfo === 'Existing session' && this.sessionService.getFormData()) {
      this.updateFields();
      this.sessionService.setFormData(this.formData);
    } else {
      this.saveFields();
      this.getSessionInfo();
      this.sessionService.setFormData(this.formData);
    }
  }

  isValidForm() {
    return this.formData.name && this.formData.sectors.length > 0 && this.formData.agree;
  }
}