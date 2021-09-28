import { Injectable } from '@angular/core';

export class ListpService {

  constructor() { }

  getParticipants() {
    return [
        {name:'Nadia Shanaa',                 gender:'female',  age:18},
        {name:'Samuel García Domínguez',      gender:'male',    age:19},
        {name:'Carla Rosón Caleruega',        gender:'female',  age:18},
        {name:'Guzmán Nunier Osuna',          gender:'male',    age:21},
        {name:'Polo Benaven',                 gender:'male',    age:21},
        {name:'Arón Piper',                   gender:'male',    age:20},
        {name:'Lucrecia Montesinos Hendrich', gender:'female',  age:19},
        {name:'Rebeka de Bormujo Ávalos',     gender:'female',  age:20},
        {name:'Omar Ayuso',                   gender:'male',    age:22},
        {name:'Cayetana Grajera Pando',       gender:'female',  age:19},
    ]
}
}
