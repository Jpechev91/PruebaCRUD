import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadosService } from './services/estados/estados.service';
import { PaisesService } from './services/paises/paises.service';
import { PersonasService } from './services/personas/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  personaForm!: FormGroup;
  paises: any[] = [];
  estados: any[] = [];
  personas: any[] = [];
  personasConDetalles: any[] = [];
  constructor(
    public fb: FormBuilder,
    public estadosService: EstadosService,
    public paisesService: PaisesService,
    public personaService: PersonasService
  ) {

  }
  ngOnInit(): void {
    this.personaForm = this.fb.group({
      idPersona: [''],
      nombreCompleto: ['', Validators.required],
      apellidos: ['', Validators.required],
      edad: ['', Validators.required],
      pais: ['', Validators.required],
      estado: ['', Validators.required],
    });;

    this.paisesService.getAllPaises().subscribe(resp => {
      this.paises = resp;

    },
      error => { console.error(error) }
    )

    this.estadosService.getAllEstados().subscribe(resp => {
      this.estados = resp;

    },
      error => { console.error(error) }
    )

    this.personaService.getAllPersonas().subscribe(resp => {
      this.personas = resp;

    },
      error => { console.error(error) }
    )

    this.cargarPersonas();
  }

  cargarPersonas() {
    this.personaService.getAllPersonas().subscribe(personas => {
      this.personasConDetalles = personas.map((persona: { pais: any; estado: any; }) => {
        const paisNombre = this.paises.find(p => p.idPais === persona.pais)?.nombrePais || 'Desconocido';
        const estadoNombre = this.estados.find(e => e.idEstado === persona.estado)?.nombreEstado || 'Desconocido';
        return {
          ...persona,
          paisNombre,
          estadoNombre
        };
      });
    },
      error => { console.error(error) }
    );
  }

  guardar(): void {
    this.personaService.savePersona(this.personaForm.value).subscribe(resp => {
      this.personaForm.reset();
      this.cargarPersonas();
    },
      error => { console.error(error) }
    )
  }

  delete(persona: any) {
    this.personaService.deletePersona(persona.idPersona).subscribe(resp => {
      this.cargarPersonas();
    })
  }

  edit(persona: any) {
    this.personaForm.setValue({
      idPersona: persona.idPersona,
      nombreCompleto: persona.nombreCompleto,
      apellidos: persona.apellidos,
      edad: persona.edad,
      pais: persona.pais,
      estado: persona.estado
    })
  }

}
