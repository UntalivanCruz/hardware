import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {EquipoPortatil, EquipoPortatilRelations} from '../models';

export class EquipoPortatilRepository extends DefaultCrudRepository<
  EquipoPortatil,
  typeof EquipoPortatil.prototype.id,
  EquipoPortatilRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(EquipoPortatil, dataSource);
  }
}
