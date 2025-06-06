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

import ProgressWidget from './ProgressWidget.vue'
import ProgressWidgetSettings from './ProgressWidgetSettings.vue'
import { type WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/progress.svg'
import { Container } from 'inversify'

const init = (container: Container) => {
  const widgetRepository = container.get<WidgetRepository>(identifier)

  register(widgetRepository);
}

interface IProgressSettings {
  progress: string
  fillColor: string
  gradientColor?: string
  backgroundColor: string
  isGradient: boolean
  isVertical: boolean
  rotation: number
}

const register = (widgetRepository: WidgetRepository) => {
  widgetRepository.registerWidget('ProgressWidget', {
    component: ProgressWidget,
    settingsComponent: ProgressWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name:'Progress'
  })
}

export { ProgressWidget, ProgressWidgetSettings, init }

export type { IProgressSettings }
