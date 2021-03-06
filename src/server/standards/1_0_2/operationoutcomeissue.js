/**
 * @name exports
 * @summary OperationOutcomeIssue Class
 */
module.exports = class OperationOutcomeIssue {
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

		Object.defineProperty(this, '_severity', {
			enumerable: true,
			get: () => this.__data._severity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._severity = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/issue-severity
		Object.defineProperty(this, 'severity', {
			enumerable: true,
			get: () => this.__data.severity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.severity = value;
			},
		});

		Object.defineProperty(this, '_code', {
			enumerable: true,
			get: () => this.__data._code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._code = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/issue-type
		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.code = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/operation-outcome
		Object.defineProperty(this, 'details', {
			enumerable: true,
			get: () => this.__data.details,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.details = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_diagnostics', {
			enumerable: true,
			get: () => this.__data._diagnostics,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._diagnostics = new Element(value);
			},
		});

		Object.defineProperty(this, 'diagnostics', {
			enumerable: true,
			get: () => this.__data.diagnostics,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.diagnostics = value;
			},
		});

		Object.defineProperty(this, '_location', {
			enumerable: true,
			get: () => this.__data._location,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._location = new Element(value);
			},
		});

		Object.defineProperty(this, 'location', {
			enumerable: true,
			get: () => this.__data.location,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.location = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'OperationOutcomeIssue',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'OperationOutcomeIssue';
	}

	toJSON() {
		return {
			_id: this._id && this._id.toJSON(),
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_severity: this._severity && this._severity.toJSON(),
			severity: this.severity,
			_code: this._code && this._code.toJSON(),
			code: this.code,
			details: this.details && this.details.toJSON(),
			_diagnostics: this._diagnostics && this._diagnostics.toJSON(),
			diagnostics: this.diagnostics,
			_location: this._location && this._location.toJSON(),
			location: this.location,
		};
	}
};
