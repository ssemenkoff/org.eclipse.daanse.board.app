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
import { VariableStorage } from './storage/VariableStorage'
import { ComputedVariable } from './classes/ComputedVariable'
import { ConstantVariable } from './classes/ConstantVariable'
import { QueryVariable } from './classes/QueryVariable'
import { RequestVariable } from './classes/RequestVariable'
import { TimeVariable } from './classes/TimeVariable'
import { UsesComputedVariable } from './utils/UsesComputedVariable'

enum SourceType {
  Constant = 'Constant',
  QueryParameter = 'Query parameter',
  SystemProperties = 'System properties',
  EnvironmentVariables = 'Environment variables',
  BrowserProperties = 'Browser properties',
  Time = 'Time',
  Expression = 'Expression',
  AsyncParameters = 'Async parameters',
  ComputedString = 'Computed String',
}

enum VariableEvents {
  VariableUpdated = 'VariableUpdated',
  VariableDeleted = 'VariableDeleted',
  VariableCreated = 'VariableCreated',
  VariablesCleared = 'VariablesCleared',
  VariableRemoved = 'VariableRemoved',
}

enum RefreshType {
  None = 'None',
  Reactive = 'Reactive',
  Interval = 'Interval',
  Trigger = 'Trigger',
}

interface IVariableConfig {
  description: string
  refreshType: RefreshType
  refreshInterval?: number
  refreshTrigger?: string
  type: string
}

interface IQueryVariableConfig extends IVariableConfig {
  queryParam: string
  description: string
}

interface IComputedVariableConfig extends IVariableConfig {
  expression: string
}

interface IConstantVariableConfig extends IVariableConfig {
  value: any
}

interface IRequestVaribleConfig extends IVariableConfig {
  request: string
}

type INewVariableConfig =
  | IConstantVariableConfig
  | IComputedVariableConfig
  | IQueryVariableConfig
  | IRequestVaribleConfig
  | IVariableConfig

const identifier = Symbol.for('VariableStorage')

const init = (container: Container) => {
  container
    .bind<VariableStorage>(identifier)
    .to(VariableStorage)
    .inSingletonScope()
}

export {
  VariableStorage,
  init,
  identifier,
  ComputedVariable,
  ConstantVariable,
  QueryVariable,
  RequestVariable,
  TimeVariable,
  SourceType,
  VariableEvents,
  RefreshType,
  IVariableConfig,
  IQueryVariableConfig,
  IComputedVariableConfig,
  IConstantVariableConfig,
  IRequestVaribleConfig,
  INewVariableConfig,
  UsesComputedVariable,
}
