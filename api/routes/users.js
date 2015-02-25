'use strict';

module.exports = {
  /* GET users listing. */
  '/': [
    {
      method: 'get',
      handler: function (req, res) {
        res.status(200).json({
          users: [
            {
              name: 'me'
            }
          ]
        });
      }
    }
  ]
};
