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

import { VariableRepository, type VariableConfig } from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const identifier = Symbol.for('VariableRepository')

if (!container.isBound(identifier)) {
  container.bind<VariableRepository>(identifier).to(VariableRepository).inSingletonScope()
}

export { VariableRepository, type VariableConfig, identifier }
