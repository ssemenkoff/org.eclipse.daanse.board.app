<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>

import { ref, toRefs } from 'vue'
import { IDataPoint } from '../../api/Datapoint'


export interface IUnitPoint {
  unit: string
  prefix: string
  suffix: string
}


const props = withDefaults(defineProps<IDataPoint & { config: IUnitPoint }>(), {})
const { config, data } = toRefs(props)
if (config.value && !config.value.unit) {
  config.value.unit = ''
}
if (config.value && !config.value.prefix) {
  config.value.prefix = ''
}
if (config.value && !config.value.suffix) {
  config.value.suffix = ''
}


</script>

<template>

  <div v-if="data" class="datapoint">
    {{ config.prefix }}{{ data }} {{ config.unit }} {{ config.suffix }}
  </div>
  <div v-else class="datapoint">
    {{ config.prefix }} -- {{ config.unit }} {{ config.suffix }}
  </div>
</template>

<style scoped>
.datapoint {
  display: inline-block;
  text-wrap: nowrap;
  position: absolute;
  border: 1px solid #ccc;
  background: #fff;
  padding: 4px;
  margin-top: 0px;
  margin-left: 0px;
  border-radius: 21px;
}

</style>
