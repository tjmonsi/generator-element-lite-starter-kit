import { dedupingMixin } from '@tjmonsi/element-lite/lib/deduping-mixin.js';

export const ComponentWrapperMixin = dedupingMixin(base => {
  class ComponentWrapperMixin extends /** @type {HTMLElement} */ base {
    getComponents () {
      const components = [];
      const query = this.querySelectorAll('[component]');
      for (let i = 0; i < query.length; i++) {
        // only direct children are allowed
        if (query[i].parentNode === this) {
          components.push(query[i]);
        }
      }
      return components;
    }
  }

  return ComponentWrapperMixin;
});
