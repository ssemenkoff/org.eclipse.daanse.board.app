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
import { WidgetRepository, type WidgetConfig } from './classes'

const identifier = Symbol.for('WidgetRepository')
const init = (container: Container) => {
  container
    .bind<WidgetRepository>(identifier)
    .to(WidgetRepository)
    .inSingletonScope()
}

export { WidgetRepository, type WidgetConfig, init, identifier }
