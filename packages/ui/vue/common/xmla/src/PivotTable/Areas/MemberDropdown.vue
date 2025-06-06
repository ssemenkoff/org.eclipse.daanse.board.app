<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script setup lang="ts">
import type { TinyEmitter } from "tiny-emitter";
import { inject, ref, watch } from "vue";
import { v4 } from "uuid";
// import { useI18n } from 'vue-i18n';

defineEmits([
  "drilldown",
  "drillup",
  "openMemberProperties",
  "showMemberProperties",
  "hideMemberProperties",
]);
defineProps(["drillupDisabled", "propertiesShown"]);

const t = (string: string) => string;
const opened = ref(false);
const eventBus = inject("pivotTableEventBus") as TinyEmitter;
const uid = "id" + v4();

eventBus.on("DropdownOpened", (openedUid: string) => {
  if (uid === openedUid) return;
  opened.value = false;
});

watch(opened, () => {
  if (opened.value) {
    eventBus.emit("DropdownOpened", uid);
  }
});
</script>
<template>
  <va-dropdown prevent-overflow v-model="opened" placement="bottom-start" trigger="right-click" keep-anchor-width
    :offset="[-5, 10]">
    <template #anchor>
      <slot></slot>
    </template>

    <va-dropdown-content style="padding: 0; margin: 0">
      <va-button-group class="dropdown_button-group">
        <va-button preset="plain" class="dropdown_button" text-color="#000" :hover-opacity="0.5"
          @click="$emit('drilldown')">
          {{ t('PivotTable.drillDownButton') }}
        </va-button>
        <va-button v-if="!drillupDisabled" preset="plain" class="dropdown_button" text-color="#000" :hover-opacity="0.5"
          @click="$emit('drillup')">
          {{ t('PivotTable.drillUpButton') }}
        </va-button>
        <va-button v-if="!drillupDisabled" preset="plain" class="dropdown_button" text-color="#000" :hover-opacity="0.5"
          @click="$emit('openMemberProperties')">
          {{ t('PivotTable.openButton') }}
        </va-button>
        <va-button v-if="propertiesShown" preset="plain" class="dropdown_button" text-color="#000" :hover-opacity="0.5"
          @click="$emit('hideMemberProperties')">
          {{ t('PivotTable.hideButton') }}
        </va-button>
        <va-button v-else preset="plain" class="dropdown_button" text-color="#000" :hover-opacity="0.5"
          @click="$emit('showMemberProperties')">
          {{ t('PivotTable.showButton') }}
        </va-button>
      </va-button-group>
    </va-dropdown-content>
  </va-dropdown>
</template>
<style scoped>
.dropdown_button-group {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
}

.dropdown_button {
  text-align: left;
  justify-content: flex-start;
  border: 1px solid silver !important;
  border-bottom: 0 !important;
  border-radius: 0 !important;
  padding: 0.25rem !important;
}

.dropdown_button .va-button__content:deep() {
  color: #000;
}

.dropdown_button:hover .va-button__content:deep() {
  color: #555;
}

.dropdown_button:last-child {
  border-bottom: 1px solid silver !important;
}
</style>
