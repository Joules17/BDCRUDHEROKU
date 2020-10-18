const { Pool } = require('pg');
const Router = require('express-promise-router');
const keys = require('../config/keys');


const pool = new Pool({
  connectionString: keys.posgresqlURI,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect();

const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;

router.delete('/eliminarpacientes', async (req, res) => {
  const { numid } = req.body; 

  pool.query(
    `DELETE FROM pacientes WHERE numid = '${numid}'` , (error, results) => {

      if (error) {
        throw error
      }

      res.json(`Paciente eliminado con el numid: '${numid}'`)
    }
  )

});
