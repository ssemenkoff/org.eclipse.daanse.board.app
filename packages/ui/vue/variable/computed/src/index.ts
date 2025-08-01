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
import { type VariableRepository, identifier } from "org.eclipse.daanse.board.app.lib.repository.variable"
import { COMPUTED_VARIABLE, ComputedVariableSymbol } from 'org.eclipse.daanse.board.app.lib.variables'
import { container } from "org.eclipse.daanse.board.app.lib.core"
import Settings from "./Settings.vue"

const register = () => {
    const variableRepository = container.get<VariableRepository>(identifier);

    variableRepository.registerVariableType(COMPUTED_VARIABLE, {
        Variable: ComputedVariableSymbol,
        Settings: Settings,
    })
}

register()
