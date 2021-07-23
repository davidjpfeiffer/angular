/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {expect} from '@angular/platform-browser/testing/src/matchers';

import {AbstractControl, FormArray, FormControl, FormGroup} from '../src/forms';
import {FormState} from '../src/model';

// These tests check only the types of strongly typed form controls. They do not validate behavior,
// except where the expected behavior is different according to the provided types.
{
  describe('FormControl', () => {
    it('should support inferred controls', () => {
      const c = new FormControl('');
      type ValueType = string;
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });

    it('should support explicit controls', () => {
      const c = new FormControl<string>('');
      type ValueType = string;
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });

    it('should support nullable controls', () => {
      const c = new FormControl<string|null>('');
      type ValueType = string|null;
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });
  })

  describe('FormGroup', () => {
    it('should support inferred groups', () => {
      const c = new FormGroup({c: new FormControl<string>('')});
      type ValueType = Partial<{c: string}>;
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });

    it('should support explicit groups', () => {
      const c = new FormGroup<{c: string}>({c: new FormControl<string>('')});
      type ValueType = Partial<{c: string}>;
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });

    it('should support groups with nullable controls', () => {
      const c = new FormGroup({c: new FormControl<string|null>('')});
      type ValueType = Partial<{c: string}>;
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });

    it('should support inferred nested groups', () => {
      const c = new FormGroup({outer: new FormGroup({inner: new FormControl<string>('')})});
      type ValueType = Partial<{outer: Partial<{inner: string}>}>;
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });

    it('should support explicit nested groups', () => {
      const c = new FormGroup<{outer: {inner: string}}>(
          {outer: new FormGroup<{inner: string}>({inner: new FormControl<string>('')})});
      type ValueType = Partial<{outer: Partial<{inner: string}>}>;
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });
  });

  describe('FormArray', () => {
    it('should support inferred arrays', () => {
      const c = new FormArray([new FormControl<string>('')]);
      type ValueType = string[];
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });

    it('should support explicit arrays', () => {
      const c = new FormArray<string>([new FormControl<string>('')]);
      type ValueType = string[];
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });

    it('should support arrays with nullable controls', () => {
      const c = new FormArray([new FormControl<string|null>('')]);
      type ValueType = Array<string|null>;
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });

    it('should support inferred arrays with heterogenous controls', () => {
      const c = new FormArray([new FormControl<string>(''), new FormControl<number>(0)]);
      type ValueType = Array<string|number>;
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });

    it('should support explicit arrays with heterogenous controls', () => {
      const c =
          new FormArray<string|number>([new FormControl<string>(''), new FormControl<number>(0)]);
      type ValueType = Array<string|number>;
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });

    it('should support nested arrays', () => {
      const c = new FormArray([new FormArray([new FormControl<string>('')])]);
      type ValueType = Array<Array<string>>;
      {
        let t: ValueType = c.value;
        let t1 = c.value;
        t1 = null as unknown as ValueType;
      }
    });
  });
}