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
  identifier,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'

import { factorySymbol as WSConnectionIdentifier } from 'org.eclipse.daanse.board.app.lib.connection.websocket'

import Settings from './Settings.vue'

const init = (container: Container) => {
  const connectionRepository = container.get<ConnectionRepository>(identifier)

  const settingsSymbol = Symbol.for('WsConnectionSettings')

  container.bind(settingsSymbol).toConstantValue(Settings)

  connectionRepository.registerConnectionType('ws', {
    Connection: WSConnectionIdentifier,
    Settings: settingsSymbol,
  })
}

export { init }
