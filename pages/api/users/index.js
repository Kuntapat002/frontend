const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_users'
  });

  export default function handler(req, res) {
  connection.query(
    'SELECT * FROM `tbl_users`',
    function(err, results) {
      console.log(results); // results contains rows returned by server
      res.status(200).json({users: results}); // fields contains extra meta data about results, if available
    }
  );    

}

// export default function handler(req, res) {
//     res.status(200).json([
//         { id: '01', firstname: 'kantapat', lastname: 'wongvichit', username: 'kantapat', password: '1234', status: 'online' },
//         { id: '02', firstname: 'กันตพัฒน์', lastname: 'วงษ์วิจิตต์', username: 'กันตพัฒน์', password: '1234', status: 'ออนไลน์' }
//     ])
//   }
  