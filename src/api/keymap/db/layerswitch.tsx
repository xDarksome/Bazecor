/* bazecor-keymap -- Bazecor keymap library
 * Copyright (C) 2018  Keyboardio, Inc.
 * Copyright (C) 2019, 2020  DygmaLab SE
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import React from "react";
import LayerTag from "@Renderer/components/molecules/KeyTags/LayerTag";
import { BaseKeycodeTableType } from "../types";

// Number of layers the layer keys cover. The xDarksome Sonsei firmware has 16 layers.
export const MAX_LAYERS = 16;

const layerKeys = (firstCode: number, type: "lock" | "shift") =>
  Array.from({ length: MAX_LAYERS }, (_, i) => ({
    code: firstCode + i,
    labels: {
      top: <LayerTag type={type} layerNumber={i + 1} />,
      primary: "",
    },
  }));

const LockLayerTable: BaseKeycodeTableType = {
  groupName: "Lock layer to",
  keys: layerKeys(17408, "lock"),
};

const ShiftToLayerTable: BaseKeycodeTableType = {
  groupName: "Shift to layer",
  keys: layerKeys(17450, "shift"),
};

const MoveToLayerTable: BaseKeycodeTableType = {
  groupName: "Move to layer",
  keys: layerKeys(17492, "lock"),
};

export { LockLayerTable, ShiftToLayerTable, MoveToLayerTable };
