import { MAX_LAYERS } from "../../api/keymap/db/layerswitch";

type LayerElement = {
  layer: number;
  type: string;
  name: string;
  keynum: number;
};

const findLayerType = (keynum?: number, type?: string, layer?: number): LayerElement | undefined => {
  const layers = [
    ...Array.from({ length: MAX_LAYERS }, (_, i) => ({
      layer: i + 1,
      type: "layerLock",
      name: `Layer Lock ${i + 1}`,
      keynum: 17492 + i,
    })),
    ...Array.from({ length: MAX_LAYERS }, (_, i) => ({
      layer: i + 1,
      type: "layerShift",
      name: `Layer Shift ${i + 1}`,
      keynum: 17450 + i,
    })),
    { layer: 1, type: "layerShot", name: "One shot 1", keynum: 49161 },
    { layer: 2, type: "layerShot", name: "One shot 2", keynum: 49162 },
    { layer: 3, type: "layerShot", name: "One shot 3", keynum: 49163 },
    { layer: 4, type: "layerShot", name: "One shot 4", keynum: 49164 },
    { layer: 5, type: "layerShot", name: "One shot 5", keynum: 49165 },
    { layer: 6, type: "layerShot", name: "One shot 6", keynum: 49166 },
    { layer: 7, type: "layerShot", name: "One shot 7", keynum: 49167 },
    { layer: 8, type: "layerShot", name: "One shot 8", keynum: 49168 },
    { layer: 1, type: "layerDual", name: "Dual layer 1", keynum: 51218 },
    { layer: 2, type: "layerDual", name: "Dual layer 2", keynum: 51474 },
    { layer: 3, type: "layerDual", name: "Dual layer 3", keynum: 51730 },
    { layer: 4, type: "layerDual", name: "Dual layer 4", keynum: 51986 },
    { layer: 5, type: "layerDual", name: "Dual layer 5", keynum: 52242 },
    { layer: 6, type: "layerDual", name: "Dual layer 6", keynum: 52498 },
    { layer: 7, type: "layerDual", name: "Dual layer 7", keynum: 52754 },
    { layer: 8, type: "layerDual", name: "Dual layer 8", keynum: 53010 },
  ];

  if (keynum !== undefined) {
    return layers.find(layerObj => layerObj.keynum === keynum);
  }

  if (type !== undefined && layer !== undefined) {
    return layers.find(layerObj => layerObj.type === type && layerObj.layer === layer);
  }

  return undefined; // return undefined if neither keynum nor type/layer combo is provided
};

export default findLayerType;
