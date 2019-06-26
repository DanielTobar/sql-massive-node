module.exports = {
  update: (req, res) => {
    const dbInstance = req.app.get('db')
    const { id } = req.params
    const { name, description, price, image_url } = req.body
    console.log(dbInstance)
    dbInstance.update_product(id, name, description, price, image_url).then(response => {
        res.status(200).send('Update completed')
    }).catch(err => req.status(500).send('Error, there was a problem processing your request.'))
},
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { name, description, price, image_url } = req.body;  

      dbInstance.create_product( name, description, price, image_url )
        .then( () => res.sendStatus(200) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
          console.log(err)
        } );
    },
  
    getOne: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;


      dbInstance.read_product( id )
        .then( product => res.status(200).send( product ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
          console.log(err)
        } );
    },
  
    getAll: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_products()
        .then( products => res.status(200).send( products ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
          console.log(err)
        } );
    },
  
  
    delete: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params; 
  
      dbInstance.delete_product( id )
        .then( () => res.sendStatus(200) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
          console.log(err)
        } );
    }
  };