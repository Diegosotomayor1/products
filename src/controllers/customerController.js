const controller = {};
controller.list = (req, res) =>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM product', (err, products) => {
            if(err){
                res.json(err);
            }
            res.render('products', {
                data: products
            });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
      const query = conn.query('INSERT INTO product set ?', [data], (err, product) => {
        
        console.log(product)
        res.redirect('/');
      })
    })
  };

  controller.delete = (req, res) => {
      const { id } = req.params;
      req.getConnection((err,conn) => {
          conn.query('DELETE FROM product WHERE id = ?',[id], (err, rows) => {
              res.redirect('/');
          })
      })

  };

module.exports = controller;