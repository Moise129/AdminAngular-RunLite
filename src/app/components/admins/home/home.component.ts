import { Component, OnInit } from '@angular/core';
import { ApiAdonisjsService } from 'src/app/services/api-adonisjs/api-adonisjs.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'
import { ApiNodejsService } from 'src/app/services/api-nodejs/api-nodejs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  travels: any
  sales: any
  places: any
  buses: any

  constructor(
    private apiAdonisService: ApiAdonisjsService,
    private apiNodejsService: ApiNodejsService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.apiAdonisService.get_buses().subscribe(data => { this.buses = data.data, console.log(this.buses[0].name) })
    this.apiAdonisService.get_travels().subscribe(data => { this.travels = data.data })
    this.apiAdonisService.get_places().subscribe(data => { this.places = data.data, console.log(this.places), error => console.log(error) })
    this.apiNodejsService.get_sales().subscribe(data => { this.sales = data, console.log(this.sales) })
  }

  //async get_buses(bus: any) {}
  async add_bus() {
    await Swal.fire({
      title: 'REGISTRAR AUTOBUSES',
      html: 
      '<br><label>Nombre:</label><input id="input1" type="text" placeholder="Nombre" class="form-control">'+
      '<br><label>Clase:</label>'+ //<input id="input2" type="text" placeholder="Clase" class="form-control">
      '<select class="selectpicker form-control" id="input2"> '+
        '<option value="premier" selected>Premier</option>'+
        '<option value="standar" >Standar</option>'+
        '<option value="comun" >Comun</option>'+
      '</select>'+
      '<br><label>Precio base:</label><input id="input3" type="number" placeholder="Precio" class="form-control">',
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        let bus = {
          name: (<HTMLInputElement>document.getElementById('input1')).value,
          class: (<HTMLInputElement>document.getElementById('input2')).value,
          base_price: (<HTMLInputElement>document.getElementById('input3')).value
        }
        this.apiAdonisService.add_bus(bus).subscribe( data => {
          Swal.fire({
            icon: 'success',
            title:"Buen trabajo",
            text: "Se ha registrado un AUtobus correctamente",
            showConfirmButton: true,
            preConfirm: () => { 
              this.apiAdonisService.get_buses().subscribe(data => {
                this.buses = data.data
              })
            }
          })
        }, error=>{
          Swal.fire({
            icon: 'warning',
            title:"Error!!!",
            text: "No se ha podido registrar el Autobus",
            showConfirmButton: true,
          })
        });
      }
    })
  }
  async disable_bus(bus: any) {
    Swal.fire({
      icon: 'info',
      //title:"Eliminar el autobus "+bus.name.toUpperCase(),
      text: "¿Esta seguro de inhabilitar el autobus '"+bus.name.toUpperCase()+"'?",
      showConfirmButton: true,
      showCancelButton: true,
      preConfirm: () => { 
        this.apiAdonisService.disable_bus(bus,bus.id).subscribe(data => {
          Swal.fire({
            icon: 'success',
            title:"Buen trabajo",
            text: "El Autobus se ha inhabilitado correctamente",
            showConfirmButton: true,
            preConfirm: () => { 
              this.apiAdonisService.get_buses().subscribe(data => {
                this.buses = data.data
              })
            }
          })
        },error=>{
          Swal.fire({
            icon: 'warning',
            title:"Error!!!",
            text: "No se ha podido inhabilitar el Autobus",
            showConfirmButton: true,
          })
        })
      }
    })
  }
  async enable_bus(bus: any) {
    Swal.fire({
      icon: 'info',
      //title:"Eliminar el autobus "+bus.name.toUpperCase(),
      text: "¿Esta seguro de habilitar el autobus '"+bus.name.toUpperCase()+"'?",
      showConfirmButton: true,
      showCancelButton: true,
      preConfirm: () => { 
        this.apiAdonisService.enable_bus(bus,bus.id).subscribe(data => {
          Swal.fire({
            icon: 'success',
            title:"Buen trabajo",
            text: "El Autobus se ha habilitado correctamente",
            showConfirmButton: true,
            preConfirm: () => { 
              this.apiAdonisService.get_buses().subscribe(data => {
                this.buses = data.data
              })
            }
          })
        },error=>{
          Swal.fire({
            icon: 'warning',
            title:"Error!!!",
            text: "No se ha podido habilitar el Autobus",
            showConfirmButton: true,
          })
        })
      }
    })
  }
  async update_bus(bus: any) {
    let premier="",standar="",other=""
    if(bus.class=="premier"){
      premier = "selected"
    }else if(bus.class=="standar"){
      standar = "selected"
    }else{
      other = "selected"
    }
    await Swal.fire({
      title: 'EDITAR AUTOBUS',
      html: 
      '<br><label>Nombre:</label><input id="input1" type="text" placeholder="Nombre" class="form-control" value="'+bus.name+'">'+
      '<br><label>Clase:</label>'+ //<input id="input2" type="text" placeholder="Clase" class="form-control">
      '<select class="selectpicker form-control" id="input2"> '+
        '<option value="premier" '+premier+' >Premier</option>'+
        '<option value="standar" '+standar+'>Standar</option>'+
        '<option value="comun" '+other+'>Comun</option>'+
      '</select>'+
      '<br><label>Precio base:</label><input id="input3" type="number" placeholder="Precio" class="form-control" value="'+bus.base_price+'">',
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        let bus_ob = {
          name: (<HTMLInputElement>document.getElementById('input1')).value,
          class: (<HTMLInputElement>document.getElementById('input2')).value,
          base_price: (<HTMLInputElement>document.getElementById('input3')).value
        }
        this.apiAdonisService.update_bus(bus_ob,bus.id).subscribe( data => {
          Swal.fire({
            icon: 'success',
            title:"Buen trabajo",
            text: "Se ha registrado un AUtobus correctamente",
            showConfirmButton: true,
            preConfirm: () => { 
              this.apiAdonisService.get_buses().subscribe(data => {
                this.buses = data.data
              })
            }
          })
        }, error=>{
          Swal.fire({
            icon: 'warning',
            title:"Error!!!",
            text: "No se ha podido registrar el Autobus",
            showConfirmButton: true,
          })
        });
      }
    })   
  }
  async delete_bus(bus: any) {
    Swal.fire({
      icon: 'info',
      //title:"Eliminar el autobus "+bus.name.toUpperCase(),
      text: "¿Esta seguro de eliminar el autobus '"+bus.name.toUpperCase()+"'?",
      showConfirmButton: true,
      showCancelButton: true,
      preConfirm: () => { 
        this.apiAdonisService.delete_bus(bus.id).subscribe(data => {
          Swal.fire({
            icon: 'success',
            title:"Buen trabajo",
            text: "El Autobus se ha eliminado correctamente",
            showConfirmButton: true,
            preConfirm: () => { 
              this.apiAdonisService.get_buses().subscribe(data => {
                this.buses = data.data
              })
            }
          })
        },error=>{
          Swal.fire({
            icon: 'warning',
            title:"Error!!!",
            text: "No se ha podido eliminar el Autobus",
            showConfirmButton: true,
          })
        })
      }
    })
  }


  //async get_travels(bus: any) {}
  async add_travel() {
    this.router.navigate(['travel'])
  }
  async disable_travel(bus: any) {}
  async update_travel(bus: any) {}
  async delete_travel(bus: any) {}

  //async get_destinations(bus: any) {}
  async add_place(){
    await Swal.fire({
      title: 'REGISTRAR LUGAR DE DESTINO',
      html: 
      '<br><label>Nombre:</label><input id="input1" type="text" placeholder="Nombre" class="form-control">'+
      '<br><label>Distancia:</label><input id="input2" type="number" placeholder="Distancia (km)" class="form-control">',
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        let place = {
          name: (<HTMLInputElement>document.getElementById('input1')).value,
          kilometres: (<HTMLInputElement>document.getElementById('input2')).value
        }
        this.apiAdonisService.add_place(place).subscribe( data => {
          Swal.fire({
            icon: 'success',
            title:"Buen trabajo",
            text: "Se ha registrado un lugar de destino correctamente",
            showConfirmButton: true,
            preConfirm: () => { 
              this.apiAdonisService.get_places().subscribe(data => {
                this.places = data.data
              })
            }
          })
        }, error=>{
          Swal.fire({
            icon: 'warning',
            title:"Error!!!",
            text: "No se ha podido registrar el Lugar de destino",
            showConfirmButton: true,
          })
        });
      }
    })
  }
  async disable_place(bus: any) {}
  async update_place(place: any) {
    await Swal.fire({
      title: 'ACTUALIZAR LUGAR DE DESTINO  '+place.name.toUpperCase(),
      html: 
      '<br><label>Nombre:</label><input id="input1" type="text" placeholder="Nombre" class="form-control" value="'+place.name+'">'+
      '<br><label>Distancia:</label><input id="input2" type="number" placeholder="Distancia (km)" class="form-control" value="'+place.kilometres+'">',
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        let place_obj = {
          name: (<HTMLInputElement>document.getElementById('input1')).value,
          kilometres: (<HTMLInputElement>document.getElementById('input2')).value
        }
        this.apiAdonisService.update_place(place_obj,place.id).subscribe( data => {
          Swal.fire({
            icon: 'success',
            title:"Buen trabajo",
            text: "Se ha actualizado un lugar de destino correctamente",
            showConfirmButton: true,
            preConfirm: () => { 
              this.apiAdonisService.get_places().subscribe(data => {
                this.places = data.data
              })
            }
          })
        }, error=>{
          Swal.fire({
            icon: 'warning',
            title:"Error!!!",
            text: "No se ha podido actualizar el Lugar de destino",
            showConfirmButton: true,
          })
        });
      }
    })
  }
  async delete_place(place: any) {
    Swal.fire({
      icon: 'info',
      //title:"Eliminar el autobus "+bus.name.toUpperCase(),
      text: "¿Esta seguro de eliminar el lugar '"+place.name.toUpperCase()+"'?",
      showConfirmButton: true,
      showCancelButton: true,
      preConfirm: () => { 
        this.apiAdonisService.delete_place(place.id).subscribe(data => {
          Swal.fire({
            icon: 'success',
            title:"Buen trabajo",
            text: "El lugar de destino se ha eliminado correctamente",
            showConfirmButton: true,
            preConfirm: () => { 
              this.apiAdonisService.get_places().subscribe(data => {
                this.places = data.data
              })
            }
          })
        },error=>{
          Swal.fire({
            icon: 'warning',
            title:"Error!!!",
            text: "No se ha podido eliminar el Lugar de destino",
            showConfirmButton: true,
          })
        })
      }
    })
  }

  async get_records(bus: any) {}
}
