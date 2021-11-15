import {Entity, model, property} from '@loopback/repository';

@model()
export class EquipoPortatil extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  fabricante?: string;

  @property({
    type: 'string',
  })
  modelo?: string;

  @property({
    type: 'string',
  })
  serviceTag?: string;

  @property({
    type: 'number',
  })
  ram?: number;

  @property({
    type: 'string',
  })
  procesadorMarca?: string;

  @property({
    type: 'number',
  })
  procesadorGeneracion?: number;

  @property({
    type: 'number',
  })
  procesadorFq?: number;

  @property({
    type: 'number',
  })
  cacheL1?: number;

  @property({
    type: 'number',
  })
  cacheL2?: number;

  @property({
    type: 'number',
  })
  cacheL3?: number;

  @property({
    type: 'number',
  })
  discoDuro?: number;

  @property({
    type: 'string',
  })
  discoDuroUnidad?: string;

  @property({
    type: 'number',
  })
  pantalla?: number;

  @property({
    type: 'string',
  })
  color?: string;


  constructor(data?: Partial<EquipoPortatil>) {
    super(data);
  }
}

export interface EquipoPortatilRelations {
  // describe navigational properties here
}

export type EquipoPortatilWithRelations = EquipoPortatil & EquipoPortatilRelations;
