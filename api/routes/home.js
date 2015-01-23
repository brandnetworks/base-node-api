'use strict';

module.exports = {
  /* GET home page. */
  '/': {
    method: 'get',
    handler: function (req, res, next) {
      res.status(200).json({
        ok: true
      });
      next = next;
    }
  }
};
