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
  DatasourceRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { factorySymbol as RestDatasourceIdentifier } from 'org.eclipse.daanse.board.app.lib.datasource.rest'

import Preview from './Preview.vue'
import Settings from './Settings.vue'

const datasourceRepository = container.get<DatasourceRepository>(identifier)

const previewSymbol = Symbol.for('RestPreview')
const settingsSymbol = Symbol.for('RestSettings')

container.bind(previewSymbol).toConstantValue(Preview)
container.bind(settingsSymbol).toConstantValue(Settings)

datasourceRepository.registerDatasourceType('rest', {
  Store: RestDatasourceIdentifier,
  Preview: previewSymbol,
  Settings: settingsSymbol,
})
