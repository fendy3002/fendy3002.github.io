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
                    "lt",
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
                            "lt",
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
                            "gt",
                            "1980-01-01"
                        ]
                    }
                ]
            }
        ]
    }
}