module.exports={
    register: (req, res) => {
        const dbSet = req.app.get('db');
        const {username, password} = req.body;
        dbSet.create_user([username, password])
        .then((users) => res.status(200).send(users))
        .catch(err => {res.status(500).send({errorMessage: 'Oops, an error occured'})
    // console.log(err);
    })
    },
    getPosts: (req, res) => {
        const dbSet = req.app.get('db');
        dbSet.get_posts()
        .then ( (posts) => res.status(200).send(posts) )
        .catch(err => res.status(404).send({ errorMessage: 'Oops, encountered error' }));
        // console.log(err);

    },
    searchPosts: (req, res) => {
        const dbSet = req.app.get('db');
        dbSet.search_posts()
        .then ( (posts) => res.status(200).send(posts) )
        .catch(err => res.status(404).send({ errorMessage: 'Oops, encountered error' }));
        // console.log(err);

    }
}