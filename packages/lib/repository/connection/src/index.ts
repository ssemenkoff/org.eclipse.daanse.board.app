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

import { Container } from 'inversify'
import {
  ConnectionRepository,
  type ConnectionIdentifiers,
  type IConnection,
  type PubSubConnection,
  type PubSubEvents,
} from './classes'

const identifier = Symbol.for('ConnectionRepository')

const init = (container: Container) => {
  const connectionRepository = new ConnectionRepository(container)

  container
    .bind<ConnectionRepository>(identifier)
    .toConstantValue(connectionRepository)
}

export { ConnectionRepository, init, identifier }
export type {
  ConnectionIdentifiers,
  IConnection,
  PubSubConnection,
  PubSubEvents,
}
