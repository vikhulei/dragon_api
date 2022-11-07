const { Router } = require("express")

const router = new Router(1)

router.get("/", (req, res) => {
    res.json({gfeneration: req.app.locals.engine.generation})
})

module.exports = router