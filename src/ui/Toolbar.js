import { el } from '../utils/dom.js';
import {
  REGION_EFFECT_OPTIONS,
  REGION_SHAPE_OPTIONS,
} from '../tools/regionDefinitions.js';

export class Toolbar {
  constructor() {
    this.refs = {};
    this.element = null;
    this.toolSelectorElement = null;
    this.render();
  }

  render() {
    const compactLayout = this.isCompactLayout();

    this.refs.eraserButton = this.button('eraserButton', 'Eraser');
    this.refs.brushButton = this.button('brushButton', 'Brush mode', 'is-active');
    this.refs.moveButton = this.button('disableDrawing', 'Move mode');
    this.refs.cropButton = this.button('cropButton', 'Crop / Resize');
    this.refs.applyCropButton = this.button('applyCropButton', 'Apply resize');
    this.refs.cancelCropButton = this.button('cancelCropButton', 'Cancel resize');
    this.refs.addRectangleButton = this.button('addRectangle', 'Add rectangle');
    this.refs.duplicateButton = this.button('dupeMask', 'Duplicate');
    this.refs.deleteButton = this.button('deleteObject', 'Delete');
    this.refs.undoButton = this.button('undo', 'Undo');
    this.refs.brushSizeInput = this.slider('brushSize', 1, 50, 10, { 'aria-label': 'Brush size' });
    this.refs.brushColorInput = el('input', {
      id: 'colorSelect',
      type: 'color',
      value: '#000000',
      'aria-label': 'Brush color',
    });
    this.refs.brushTypeSelect = el('select', { id: 'brushTypeSelect', 'aria-label': 'Brush type' }, [
      el('option', { value: 'smooth', textContent: 'Smooth' }),
      el('option', { value: 'marker', textContent: 'Marker' }),
      el('option', { value: 'dotted', textContent: 'Dotted' }),
      el('option', { value: 'spray', textContent: 'Spray' }),
    ]);
    this.refs.brushOpacityInput = this.slider('brushOpacity', 0, 100, 100, { 'aria-label': 'Brush opacity' });
    this.refs.paintEffectAmountInput = this.slider('paintEffectAmount', 1, 40, 12, { 'aria-label': 'Paint effect amount' });
    this.refs.addRegionButton = this.button('addRegion', 'Add region');
    this.refs.regionShapeSelect = el('select', { id: 'regionShapeSelect', 'aria-label': 'Region shape' }, REGION_SHAPE_OPTIONS.map((shape) =>
      el('option', { value: shape.value, textContent: shape.label })
    ));
    this.refs.regionEffectSelect = el('select', { id: 'regionEffectSelect', 'aria-label': 'Region effect' }, REGION_EFFECT_OPTIONS.map((effect) =>
      el('option', { value: effect.value, textContent: effect.label })
    ));
    this.refs.regionEffectSelect.value = 'blur';
    this.refs.regionAmountInput = this.slider('regionEffectAmount', 0, 100, 12, { 'aria-label': 'Region effect amount' });
    this.refs.regionRadiusInput = this.slider('regionEffectRadius', 10, 400, 120, { 'aria-label': 'Region effect radius' });
    this.refs.regionMagnifyInput = this.slider('regionMagnify', 25, 400, 100, { 'aria-label': 'Region magnify amount' });
    this.refs.regionContentRotationInput = this.slider('regionContentRotation', 0, 360, 0, { 'aria-label': 'Region content rotation' });
    this.refs.regionReflectXButton = this.button('regionReflectX', 'Reflect X');
    this.refs.regionReflectYButton = this.button('regionReflectY', 'Reflect Y');
    this.refs.regionReseedButton = this.button('regionReseed', 'Reseed');
    this.refs.blendModeSelect = el('select', { id: 'blendModeSelect', 'aria-label': 'Blend mode' }, [
      el('option', { value: 'normal', textContent: 'Normal blend' }),
      el('option', { value: 'multiply', textContent: 'Multiply' }),
      el('option', { value: 'screen', textContent: 'Screen' }),
      el('option', { value: 'add', textContent: 'Add' }),
    ]);
    this.refs.textSizeInput = this.slider('textSize', 0, 100, 50, { 'aria-label': 'Text size' });
    this.refs.textFontSelect = el('select', { id: 'textFontSelect', 'aria-label': 'Text font' }, [
      el('option', { value: 'Arial Black', textContent: 'Arial Black' }),
      el('option', { value: 'Impact', textContent: 'Impact' }),
      el('option', { value: 'Georgia', textContent: 'Georgia' }),
      el('option', { value: 'Courier New', textContent: 'Courier New' }),
    ]);
    this.refs.textAlignSelect = el('select', { id: 'textAlignSelect', 'aria-label': 'Text alignment' }, [
      el('option', { value: 'left', textContent: 'Left' }),
      el('option', { value: 'center', textContent: 'Center' }),
      el('option', { value: 'right', textContent: 'Right' }),
    ]);
    this.refs.textColorInput = el('input', {
      id: 'colorSelectText',
      type: 'color',
      value: '#000000',
      'aria-label': 'Text color',
    });
    this.refs.textBoldButton = this.button('textBold', 'Bold');
    this.refs.textItalicButton = this.button('textItalic', 'Italic');
    this.refs.textOutlineColorInput = el('input', {
      id: 'colorSelectTextOutline',
      type: 'color',
      value: '#000000',
      'aria-label': 'Text outline color',
    });
    this.refs.textOutlineWidthInput = this.slider('textOutlineWidth', 0, 10, 0, { 'aria-label': 'Text outline width' });
    this.refs.textShadowButton = this.button('textShadow', 'Shadow');
    this.refs.textShadowColorInput = el('input', {
      id: 'colorSelectTextShadow',
      type: 'color',
      value: '#000000',
      'aria-label': 'Text shadow color',
    });
    this.refs.textShadowBlurInput = this.slider('textShadowBlur', 0, 20, 4, { 'aria-label': 'Text shadow blur' });
    this.refs.textShadowDistanceInput = this.slider('textShadowDistance', 0, 20, 6, { 'aria-label': 'Text shadow distance' });
    this.refs.addTextButton = this.button('addText', 'Add text');

    this.toolSelectorElement = el('div', { id: 'toolsDiv' }, [
      el('fieldset', { className: 'panel-fieldset tool-selector-panel' }, [
        el('legend', { textContent: 'Tools' }),
        this.refs.brushButton,
        this.refs.eraserButton,
        this.refs.moveButton,
        this.refs.cropButton,
        this.refs.cropActionRow = el('div', { className: 'crop-action-row' }, [this.refs.applyCropButton, this.refs.cancelCropButton]),
        this.refs.addRectangleButton,
        this.refs.addTextButton,
        this.refs.addRegionButton,
        el('hr', { className: 'tool-divider' }),
        this.refs.duplicateButton,
        this.refs.deleteButton,
        this.refs.undoButton,
      ]),
    ]);

    this.element = el('div', { id: 'toolOptions' }, [
      el('fieldset', { id: 'tools', className: 'panel-fieldset' }, [
        el('legend', { textContent: 'Options' }),
        this.section('Brush', [
          this.field('Size & color:', [this.refs.brushSizeInput, this.refs.brushColorInput]),
          this.field('Type:', [this.refs.brushTypeSelect]),
          this.field('Opacity:', [this.refs.brushOpacityInput]),
          this.refs.paintEffectAmountField = this.field('Effect amount:', [this.refs.paintEffectAmountInput]),
        ], { open: true, tone: 'primary' }),
        this.section('Text', [
          this.field('Size & color:', [this.refs.textSizeInput, this.refs.textColorInput, this.refs.textFontSelect, this.refs.textAlignSelect, this.refs.textBoldButton, this.refs.textItalicButton]),
          this.field('Outline & shadow:', [this.refs.textOutlineColorInput, this.refs.textOutlineWidthInput, this.refs.textShadowButton, this.refs.textShadowColorInput, this.refs.textShadowBlurInput, this.refs.textShadowDistanceInput]),
        ], { open: !compactLayout }),
        this.section('Region Effects', [
          this.refs.regionShapeField = this.field('Shape:', [this.refs.regionShapeSelect]),
          this.refs.regionEffectField = this.field('Effect:', [this.refs.regionEffectSelect]),
          this.refs.regionAmountField = this.field('Amount:', [this.refs.regionAmountInput]),
          this.refs.regionRadiusField = this.field('Radius:', [this.refs.regionRadiusInput]),
          this.refs.regionMagnifyField = this.field('Magnify:', [this.refs.regionMagnifyInput]),
          this.refs.regionContentRotationField = this.field('Rotation:', [this.refs.regionContentRotationInput]),
          this.refs.regionReflectField = this.field('Reflect:', [this.refs.regionReflectXButton, this.refs.regionReflectYButton]),
          this.refs.regionReseedField = this.field('Randomize:', [this.refs.regionReseedButton]),
        ], { open: !compactLayout }),
      ]),
    ]);

    this.refs.root = this.element;
  }

  button(id, textContent, className = '', extraAttrs = {}) {
    return el('button', {
      id,
      type: 'button',
      className: `app-button ${className}`.trim(),
      textContent,
      'data-shortcut-label': textContent,
      ...extraAttrs,
    });
  }

  slider(id, min, max, value, extraAttrs = {}) {
    return el('input', {
      id,
      type: 'range',
      min: String(min),
      max: String(max),
      value: String(value),
      className: 'sliders',
      ...extraAttrs,
    });
  }

  row(children) {
    return el('div', { className: 'button-row tool-button-cluster' }, children);
  }

  field(label, children, extraClass = '') {
    return el('div', { className: `tool-field-block ${extraClass}`.trim() }, [
      ...(label ? [el('div', { className: 'field-label', textContent: label })] : []),
      el('div', { className: 'field-controls' }, children),
    ]);
  }

  section(title, children, options = {}) {
    const { open = true, tone = '' } = options;

    return el('details', {
      className: `tool-section ${tone ? `tool-section--${tone}` : ''}`.trim(),
      ...(open ? { open: '' } : {}),
    }, [
      el('summary', {
        className: 'tool-section-summary',
        textContent: title,
      }),
      el('div', { className: 'tool-section-body' }, children),
    ]);
  }

  isCompactLayout() {
    return window.matchMedia?.('(max-width: 1120px), (max-aspect-ratio: 11/16)')?.matches ?? false;
  }
}
