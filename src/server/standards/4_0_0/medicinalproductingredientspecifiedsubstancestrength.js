/**
 * @name exports
 * @summary MedicinalProductIngredientSpecifiedSubstanceStrength Class
 */
module.exports = class MedicinalProductIngredientSpecifiedSubstanceStrength {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		Object.defineProperty(this, '_id', {
			enumerable: true,
			get: () => this.__data._id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._id = new Element(value);
			},
		});

		Object.defineProperty(this, 'id', {
			enumerable: true,
			get: () => this.__data.id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.id = value;
			},
		});

		Object.defineProperty(this, 'extension', {
			enumerable: true,
			get: () => this.__data.extension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.extension = Array.isArray(value) ? value.map(v => new Extension(v)) : [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'modifierExtension', {
			enumerable: true,
			get: () => this.__data.modifierExtension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.modifierExtension = Array.isArray(value)
					? value.map(v => new Extension(v))
					: [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'presentation', {
			enumerable: true,
			get: () => this.__data.presentation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.presentation = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'presentationLowLimit', {
			enumerable: true,
			get: () => this.__data.presentationLowLimit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.presentationLowLimit = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'concentration', {
			enumerable: true,
			get: () => this.__data.concentration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.concentration = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'concentrationLowLimit', {
			enumerable: true,
			get: () => this.__data.concentrationLowLimit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.concentrationLowLimit = new Ratio(value);
			},
		});

		Object.defineProperty(this, '_measurementPoint', {
			enumerable: true,
			get: () => this.__data._measurementPoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._measurementPoint = new Element(value);
			},
		});

		Object.defineProperty(this, 'measurementPoint', {
			enumerable: true,
			get: () => this.__data.measurementPoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.measurementPoint = value;
			},
		});

		Object.defineProperty(this, 'country', {
			enumerable: true,
			get: () => this.__data.country,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.country = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'referenceStrength', {
			enumerable: true,
			get: () => this.__data.referenceStrength,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength = require('./medicinalproductingredientspecifiedsubstancestrengthreferencestrength.js');
				this.__data.referenceStrength = Array.isArray(value)
					? value.map(v => new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength(v))
					: [new MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicinalProductIngredientSpecifiedSubstanceStrength',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicinalProductIngredientSpecifiedSubstanceStrength';
	}

	toJSON() {
		return {
			_id: this._id && this._id.toJSON(),
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			presentation: this.presentation && this.presentation.toJSON(),
			presentationLowLimit: this.presentationLowLimit && this.presentationLowLimit.toJSON(),
			concentration: this.concentration && this.concentration.toJSON(),
			concentrationLowLimit: this.concentrationLowLimit && this.concentrationLowLimit.toJSON(),
			_measurementPoint: this._measurementPoint && this._measurementPoint.toJSON(),
			measurementPoint: this.measurementPoint,
			country: this.country && this.country.map(v => v.toJSON()),
			referenceStrength: this.referenceStrength && this.referenceStrength.map(v => v.toJSON()),
		};
	}
};
