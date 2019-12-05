import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ApiAdonisjsService } from 'src/app/services/api-adonisjs/api-adonisjs.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  buses: any
  hours:any
  places:any
  createTravelForm: FormGroup

  marked = false;
  theCheckbox = false;

  constructor(
    private modalService: NgbModal,
    private apiAdonisService: ApiAdonisjsService,
    private formBuilder:FormBuilder,
    public activeModal: NgbActiveModal
  ) { 
    
  }

  ngOnInit() {
    this.apiAdonisService.get_buses().subscribe(data => { 
      this.buses = data.data, console.log(this.buses[0].name) 
    })
    this.apiAdonisService.get_hours().subscribe(data => { this.hours = data.data, console.log(data) })
    this.apiAdonisService.get_places().subscribe(data => { this.places = data.data, console.log(data) })
    this.createTravelForm = this.formBuilder.group({
      bus_id: [this.buses[0].id],
      departure_date: [''],
      arrival_date: [''],
      departure_hour_id: ['1'],
      arrival_hour_id: ['2'],
      origin_place_id: ['1'],
      place_destination_id: ['2']
    })
  }

  toggleVisibility(e){
    this.marked= e.target.checked;
    this.createTravelForm.value.origin_place_id = 2 
    this.createTravelForm.value.place_destination_id = 1
  }
  
  async add_travel(){
    console.log(this.createTravelForm.value)
    this.apiAdonisService.add_travel(this.createTravelForm.value).subscribe(data=>{
      Swal.fire({
        icon: 'success',
        title:"Buen trabajo",
        text: "El Viaje se ha creado correctamente",
        showConfirmButton: true,
        preConfirm: () => { 
          this.activeModal.close("save")
        }
      })
    },error=>{
      Swal.fire({
        icon: 'warning',
        title:"Error!!!",
        text: "No se ha podido registrar el Viaje",
        showConfirmButton: true,
      })
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
