let data = [
    'cats',
    'dogs',
    'sharks',
    'alligators'
]

module.exports = {
    get: ( req, res ) => {
        res.status(200).send( data )
    },

    post: ( req, res ) => {
        data.push( req.body.animal )
        res.status(200).send( data )
    },

    delete: ( req, res ) => {
        const { id } = req.params
        data.splice( id, 1 )
        res.status(200).send( data )        
    },

    put: ( req, res ) => {
        const { id } = req.params
        data[id] = req.body.name
        res.status(200).send( data )                
    }
}