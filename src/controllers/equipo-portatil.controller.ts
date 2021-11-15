import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {EquipoPortatil} from '../models';
import {EquipoPortatilRepository} from '../repositories';

export class EquipoPortatilController {
  constructor(
    @repository(EquipoPortatilRepository)
    public equipoPortatilRepository : EquipoPortatilRepository,
  ) {}

  @post('/equipo-portatils')
  @response(200, {
    description: 'EquipoPortatil model instance',
    content: {'application/json': {schema: getModelSchemaRef(EquipoPortatil)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EquipoPortatil, {
            title: 'NewEquipoPortatil',
            exclude: ['id'],
          }),
        },
      },
    })
    equipoPortatil: Omit<EquipoPortatil, 'id'>,
  ): Promise<EquipoPortatil> {
    return this.equipoPortatilRepository.create(equipoPortatil);
  }

  @get('/equipo-portatils/count')
  @response(200, {
    description: 'EquipoPortatil model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EquipoPortatil) where?: Where<EquipoPortatil>,
  ): Promise<Count> {
    return this.equipoPortatilRepository.count(where);
  }

  @get('/equipo-portatils')
  @response(200, {
    description: 'Array of EquipoPortatil model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EquipoPortatil, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EquipoPortatil) filter?: Filter<EquipoPortatil>,
  ): Promise<EquipoPortatil[]> {
    return this.equipoPortatilRepository.find(filter);
  }

  @patch('/equipo-portatils')
  @response(200, {
    description: 'EquipoPortatil PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EquipoPortatil, {partial: true}),
        },
      },
    })
    equipoPortatil: EquipoPortatil,
    @param.where(EquipoPortatil) where?: Where<EquipoPortatil>,
  ): Promise<Count> {
    return this.equipoPortatilRepository.updateAll(equipoPortatil, where);
  }

  @get('/equipo-portatils/{id}')
  @response(200, {
    description: 'EquipoPortatil model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EquipoPortatil, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(EquipoPortatil, {exclude: 'where'}) filter?: FilterExcludingWhere<EquipoPortatil>
  ): Promise<EquipoPortatil> {
    return this.equipoPortatilRepository.findById(id, filter);
  }

  @patch('/equipo-portatils/{id}')
  @response(204, {
    description: 'EquipoPortatil PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EquipoPortatil, {partial: true}),
        },
      },
    })
    equipoPortatil: EquipoPortatil,
  ): Promise<void> {
    await this.equipoPortatilRepository.updateById(id, equipoPortatil);
  }

  @put('/equipo-portatils/{id}')
  @response(204, {
    description: 'EquipoPortatil PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() equipoPortatil: EquipoPortatil,
  ): Promise<void> {
    await this.equipoPortatilRepository.replaceById(id, equipoPortatil);
  }

  @del('/equipo-portatils/{id}')
  @response(204, {
    description: 'EquipoPortatil DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.equipoPortatilRepository.deleteById(id);
  }
}
