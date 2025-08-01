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


import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import 'reflect-metadata'

import { createApp } from 'vue'
import { createPinia, setActivePinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { init } from 'org.eclipse.daanse.board.app.lib.module1'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'

const app = createApp(App)
app.use(createVuestic({
  config: {
    colors: {
      presets: {
        light: {
          primary: '#606060',
          lightPrim:'#cbcbcb',
          orange:'#c29803',
          //active:"rgba(255,201,132,0.25)",
          active:"rgba(147,147,147,0.25)",
          /*secondary: '#E79542',*/
          textPrimary: '#3a3a3a',
        }
      }
    }
  },
}))

init(container)
container.bind(identifiers.CONTAINER).toDynamicValue((ctx: any) => {
  return ctx
})


app.config.globalProperties.$container = container
app.provide('container',container);
app.provide('codeEditorType', 'monaco');
const symbolForApp = Symbol.for('App');
container.bind('App').toConstantValue(app);
const pinia = createPinia();
setActivePinia(pinia)
app.use(pinia)
loadPackages()
// TODO: Move this to initialization of the app
import {
  type ConnectionRepository,
  identifier as ConnectionIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import {
  DatasourceRepository,
  identifier as DatasourceIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import 'org.eclipse.daanse.board.app.lib.connection.rest'
import 'org.eclipse.daanse.board.app.lib.connection.rss'
import { XmlaConnection } from 'org.eclipse.daanse.board.app.lib.connection.xmla'
import 'org.eclipse.daanse.board.app.lib.connection.graphql'
import 'org.eclipse.daanse.board.app.lib.connection.websocket'
import 'org.eclipse.daanse.board.app.lib.connection.mqtt'
import 'org.eclipse.daanse.board.app.lib.datasource.rest'
import 'org.eclipse.daanse.board.app.lib.datasource.csv'
import 'org.eclipse.daanse.board.app.lib.datasource.rss'
import 'org.eclipse.daanse.board.app.lib.datasource.graphql'
import 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import 'org.eclipse.daanse.board.app.lib.datasource.sql_xmla'
import 'org.eclipse.daanse.board.app.lib.datasource.websocket'
import 'org.eclipse.daanse.board.app.lib.datasource.kpi_tmp'
import 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import 'org.eclipse.daanse.board.app.lib.datasource.sparql'
import { init as initChartComposer } from 'org.eclipse.daanse.board.app.lib.composer.chart'
import { init as initDatatableComposer } from 'org.eclipse.daanse.board.app.lib.composer.datatable'

import {
  init as initWidgetRepo
} from 'org.eclipse.daanse.board.app.lib.repository.widget'
import { init as initSample } from 'org.eclipse.daanse.board.app.ui.vue.widget.sample'
import { init as initImage } from 'org.eclipse.daanse.board.app.ui.vue.widget.image'
import { init as initProgress } from 'org.eclipse.daanse.board.app.ui.vue.widget.progress'
import { init as initVideo } from 'org.eclipse.daanse.board.app.ui.vue.widget.video'
import { init as initTextPlain } from 'org.eclipse.daanse.board.app.ui.vue.widget.text.plain'
import { init as initTextRich } from 'org.eclipse.daanse.board.app.ui.vue.widget.text.rich'
import { init as initSvgBase } from 'org.eclipse.daanse.board.app.ui.vue.widget.svg.base'
import { init as initSvgRepeat } from 'org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat'
import { init as initTableData } from 'org.eclipse.daanse.board.app.ui.vue.widget.table.data'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.rest'
import 'org.eclipse.daanse.board.app.ui.vue.connection.rest'
import { init as initPivotTableUI } from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot'
import { init as initKpiTableUI } from 'org.eclipse.daanse.board.app.ui.vue.widget.table.kpi'
import { init as initIconWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.icon'
import { init as initVantaWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.vanta'
import { init as initCodeWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.code'
import { init as initRssWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.rss'
import { init as initMermaidWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.mermaid'
import { init as initChartWidgetUI } from 'org.eclipse.daanse.board.app.ui.vue.widget.chart'
import { init as initMarkdownWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.markdown'
import 'org.eclipse.daanse.board.app.ui.vue.connection.xmla'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.csv'
import 'org.eclipse.daanse.board.app.ui.vue.connection.rss'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.rss'
import 'org.eclipse.daanse.board.app.ui.vue.connection.graphql'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.graphql'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.xmla'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.sql_xmla'
import {
  init as initWebsocketConnectionUI
} from 'org.eclipse.daanse.board.app.ui.vue.connection.ws'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.ws'
import 'org.eclipse.daanse.board.app.ui.vue.connection.mqtt'
import { init as initChartComposerUi } from 'org.eclipse.daanse.board.app.ui.vue.composer.chart'
import {
  init as initDatatableComposerUI
} from 'org.eclipse.daanse.board.app.ui.vue.composer.datatable'
// import {
//   init as initKpiTmpDatasourceUI
// } from 'org.eclipse.daanse.board.app.ui.vue.datasource.kpi'

import 'org.eclipse.daanse.board.app.ui.vue.datasource.ogcsta'
import { init as initWidgetMap } from 'org.eclipse.daanse.board.app.ui.vue.widget.map'

import {
  init as initVariable,
  ConstantVariableSymbol,
  CONSTANT_VARIABLE,
  COMPUTED_VARIABLE,
} from 'org.eclipse.daanse.board.app.lib.variables'
import {
  // init as initVariableWrapperFactory,
  identifier as variableFactoryWrapperIdentifier,
} from 'org.eclipse.daanse.board.app.lib.factory.variableWrapper'
import {
  VariableRepository,
  identifier as variablerepositoryIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.variable'

import 'org.eclipse.daanse.board.app.ui.vue.variable.constant'
import 'org.eclipse.daanse.board.app.ui.vue.variable.computed'

import { init as initWrapper } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'

if (document.readyState === 'complete') {
  // load-Event ist schon vorbei
  onLoaded()
} else {
  window.addEventListener('load', onLoaded)
}
function onLoaded(){
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none'
  }
}


async function loadPackages(){
  await import ("org.eclipse.daanse.board.app.lib.i18next")
  await import ("org.eclipse.daanse.board.app.ui.vue.plugins.i18next")
  await import ( "org.eclipse.daanse.board.app.ui.vue.lang.common.en")
  await import ( "org.eclipse.daanse.board.app.ui.vue.lang.icon.en")
  await import ( "org.eclipse.daanse.board.app.ui.vue.lang.image.en")
  await import ( "org.eclipse.daanse.board.app.ui.vue.lang.progress.en")
  await import ( "org.eclipse.daanse.board.app.ui.vue.lang.video.en")
  await import ( "org.eclipse.daanse.board.app.ui.vue.lang.svg.base.en")
  await import ( "org.eclipse.daanse.board.app.ui.vue.lang.svg.repeat.en")
  await import ( "org.eclipse.daanse.board.app.ui.vue.lang.text.rich.en")
  await import ( "org.eclipse.daanse.board.app.ui.vue.lang.text.plain.en")
  await import ( 'org.eclipse.daanse.board.app.ui.vue.lang.wrapper.en')
  await import ("org.eclipse.daanse.board.app.lib.settings.manager")
  await import ( "org.eclipse.daanse.board.app.ui.vue.plugins.endpointfinder")

  await import ( "org.eclipse.daanse.board.app.lib.repository.persistence")
  await import ( "org.eclipse.daanse.board.app.lib.persistence.local")
  await import ( "org.eclipse.daanse.board.app.lib.persistence.util")
  await import ("org.eclipse.daanse.board.app.lib.persistence.rest")
  await import ("org.eclipse.daanse.board.app.lib.persistence.git")
  await import ("org.eclipse.daanse.board.app.ui.vue.persistence.git")
  await import ("org.eclipse.daanse.board.app.lib.persistence.loader")
}

//initSettingsManager(container)

app.config.globalProperties.$container = container
app.provide('container', container)
app.provide('codeEditorType', 'monaco')



initChartComposer(container)
initDatatableComposer(container)

initWidgetRepo(container)

initWrapper(container)
initSample(container)
initImage(container)
initProgress(container)
initVideo(container)
initTextPlain(container)
initTextRich(container)
initSvgBase(container)
initSvgRepeat(container)
initIconWidget(container)
initWidgetMap(container)
initRssWidget(container)
initVantaWidget(container)
initMermaidWidget(container)
initMarkdownWidget(container)
initCodeWidget(container)

initTableData(container)

initVariable(container)
// // initVariableRepository(container)
// initConstantVariable(container)
// initComputedVariable(container)




const connectionRepository = container.get<ConnectionRepository>(ConnectionIdentifier)

// connectionRepository.registerConnection('test_xmla', 'xmla', {
//   url: 'https://ssemenkoff.dev/emondrian/xmla',
//   catalogName: 'catalog',
//   cubeName: 'cube',
// });

XmlaConnection.getCatalogs('https://ssemenkoff.dev/emondrian/xmla').then((catalogs) => {
  console.log('catalogs', catalogs)
})
XmlaConnection.getCubes('https://ssemenkoff.dev/emondrian/xmla', 'FoodMart').then((cubes) => {
  console.log('catalogs', cubes)
})

connectionRepository.registerConnection('test', 'rest', {
  url: 'https://jsonplaceholder.typicode.com/',
  uid: 'test',
  type: 'rest',
  name: 'test',
})


const datasourceRepository = container.get<DatasourceRepository>(DatasourceIdentifier)
initPivotTableUI(container)
initKpiTableUI(container)
initWebsocketConnectionUI(container)
initChartComposerUi(container)
initDatatableComposerUI(container)
initChartWidgetUI(container)

datasourceRepository.registerDatasource('test_ds', 'rest', {
  resourceUrl: 'posts',
  connection: 'test',
})




app.use(router)

app.mount('#app')
