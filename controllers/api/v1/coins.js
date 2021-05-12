const getAllTransfers = (req, res) => {
    res.json({
        status: "succes",
        data: {
            message: `Getting all transfers`
        }
    })
}

const getOneTransfer = (req, res) => {
    let id = req.params.id;

    res.json({
        status: "succes",
        data: {
            message: `Getting transfer with id ${id}`
        }
    })
}

const postTransfer = (req, res) => {
    res.json({
        status: "succes",
        data: {
            message: `Posting transfer`
        }
    })
}

const showLeaderboard = (req, res) => {
    res.json({
        status: "succes",
        data: {
            message: `Showing leaderboard`
        }
    })
}