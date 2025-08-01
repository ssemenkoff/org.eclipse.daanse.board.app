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
import {
  type IRequestParams,
  type BaseConnectionConfig,
} from 'org.eclipse.daanse.board.app.lib.connection.base'
import { injectable } from 'inversify'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

export interface IConnection {
  fetch(config: IRequestParams, options?: any): Promise<any>
  setConfig(config: any): void
}

export type PubSubEvents = 'connect' | 'message' | 'close' | 'error'

export interface PubSubConnection {
  setConfig(config: any): void
  subscribe(subscriber: (event: PubSubEvents, data?: any) => any): void
  unsubscribe(subscriber: () => any): void
  notify(event: PubSubEvents, data?: any): void
}

export interface ConnectionIdentifiers {
  Connection: symbol
  Settings: symbol
}

const connections = new Map<string, IConnection | PubSubConnection>()

@injectable()
export class ConnectionRepository {
  private availableConnections: Record<string, ConnectionIdentifiers> = {}
  private connectionsByType: Record<string, string> = {}

  removeConnection(connectionId: string): void {
    if (connections.has(connectionId)) {
      connections.delete(connectionId)
    }
  }

  getConnection(connectionId: string): IConnection | PubSubConnection {
    const connection = connections.get(connectionId)
    if (!connection)
      throw new Error(`Connection with id ${connectionId} not found`)

    return connection
  }

  registerConnectionType(
    name: string,
    identifiers: ConnectionIdentifiers,
  ): void {
    this.availableConnections[name] = identifiers
  }

  get registeredConnections(): string[] {
    return Object.keys(this.availableConnections)
  }

  getConnectionIdentifiers(type: string): ConnectionIdentifiers {
    return this.availableConnections[type]
  }
  getRegisteredTypes() {
    return Object.keys(this.availableConnections)
  }
  getConnectionType(connectionId: string) {
    return this.connectionsByType[connectionId]
  }
  getConnectionId(connection: IConnection | PubSubConnection) {
    let key: string | undefined
    connections.forEach((aconnection, akey) => {
      if (connection === aconnection) {
        key = akey
      }
    })
    return key
  }
  getConnectionTypeFromConnection(connection: IConnection | PubSubConnection) {
    const id = this.getConnectionId(connection)
    if (!id) return undefined
    return this.getConnectionType(id)
  }
  registerConnection(
    connectionId: string,
    type: string,
    connectionConfig: BaseConnectionConfig,
  ): void {
    const identifiers = this.availableConnections[type]

    if (identifiers) {
      const connectionFactory = container.get(identifiers.Connection) as any
      const connection = connectionFactory(connectionConfig)
      connections.set(connectionId, connection)
      this.connectionsByType[connectionId] = type
    }
  }
}
