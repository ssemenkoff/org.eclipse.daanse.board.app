/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

import { injectable, inject, Container } from 'inversify'
import {
  BaseDatasource,
  IBaseConnectionConfiguration,
} from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import {
  identifier,
  type IConnection,
  ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'

export interface IRssStoreConfiguration extends IBaseConnectionConfiguration {
  resourceUrl: string
  connection: string
}

export interface IRssParseResult {
  header: string[]
  rows: any[]
  // mappedRows: IDataTableRow[];
  mappedRows: any[]
}

@injectable()
export class RssStore extends BaseDatasource {
  private connection: any

  constructor(
    configuration: IRssStoreConfiguration,
    @inject(identifiers.CONTAINER) private container: Container,
  ) {
    super(configuration, container)

    this.connection = configuration.connection
  }

  async getOriginalData() {
    const connectionRepository = this.container.get(
      identifier,
    ) as ConnectionRepository
    if (!connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    const connection = connectionRepository.getConnection(
      this.connection,
    ) as IConnection
    const req = await connection.fetch({} as any)
    return req
  }

  async getData(type: string): Promise<any> {
    const connectionRepository = this.container.get(
      identifier,
    ) as ConnectionRepository
    if (!connectionRepository) {
      throw new Error('ConnectionRepository is not provided to Store Classes')
    }
    const connection = connectionRepository.getConnection(
      this.connection,
    ) as IConnection
    const req = await connection.fetch({} as any)
    if (type === 'object') {
      return req
    } else {
      console.warn('Invalid data type')
      return null
    }
  }

  callEvent(event: string, params: any) {
    console.warn(
      `Event "${event}" is not available for this type of store`,
      params,
    )
  }

  destroy(): void {}

  static validateConfiguration(configuration: IRssStoreConfiguration) {
    if (!configuration.connection) {
      return false
    }

    return true
  }
}
