/* eslint-disable curly, lines-around-comment, no-magic-numbers, id-length */

import { autoUpdate, computePosition, offset, autoPlacement, flip } from '@floating-ui/dom';

export class PopoverPositioner {
  /**
   * @param {HTMLElement} referenceEl - The reference element (trigger)
   * @param {HTMLElement} floatingEl - The floating element (dropdown)
   * @param {Object} options - Configuration options
   */
  constructor(referenceEl, floatingEl, options = {}) {
    this.referenceEl = referenceEl;
    this.floatingEl = floatingEl;
    this.options = {
      placement: options.placement || 'bottom-start',
      offsetDistance: options.offsetDistance || 8,
      ...options
    };

    if (options.autoStart) this.start();
    this.cleanup = null;
  }

  /**
   * Update the position of the floating element
   */
  updatePosition() {
    if (!this.referenceEl || !this.floatingEl) return;

    const middleware = [
      offset(this.options.offsetDistance),
      // autoPlacement(),
      flip()
    ];

    computePosition(this.referenceEl, this.floatingEl, {
      placement: this.options.placement,
      strategy: 'absolute',
      middleware
    }).then(({x, y}) => {
      Object.assign(this.floatingEl.style, {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`
      });
    });
  }

  /**
   * Start auto-updating the position
   * @returns {Function} Cleanup function
   */
  start() {
    if (this.cleanup) {
      this.cleanup();
    }

    this.cleanup = autoUpdate(
      this.referenceEl,
      this.floatingEl,
      this.updatePosition.bind(this)
    );

    return this.cleanup;
  }

  /**
   * Stop auto-updating the position
   */
  stop() {
    if (this.cleanup) {
      this.cleanup();
      this.cleanup = null;
    }
  }

  /**
   * Destroy the instance and clean up
   */
  disconnect() {
    this.stop();
    this.referenceEl = null;
    this.floatingEl = null;
  }
};
