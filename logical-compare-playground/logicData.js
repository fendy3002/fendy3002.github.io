(window.state = window.state || {}).logicData = {
    "first": {
        "$and": [
            {
                "$compare": [
                    {
                        "$prop": "gender"
                    },
                    "eq",
                    "male"
                ]
            },
            {
                "$compare": [
                    {
                        "$date": {
                            "$prop": "birth"
                        }
                    },
                    "lte",
                    {
                        "$date": "2000-01-01"
                    }
                ]
            }
        ]
    },
    "second": {
        "$and": [
            {
                "$compare": [
                    {
                        "$prop": "gender"
                    },
                    "eq",
                    "female"
                ]
            },
            {
                "$or": [
                    {
                        "$compare": [
                            {
                                "$prop": "height"
                            },
                            "lte",
                            160
                        ]
                    },
                    {
                        "$compare": [
                            {
                                "$date": {
                                    "$prop": "birth"
                                }
                            },
                            "gte",
                            "1980-01-01"
                        ]
                    }
                ]
            }
        ]
    }
}