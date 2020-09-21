let config = {
    api: {
        base_url: "http://lumen.igor-yuzkiv.website/api/",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    },
    menu: {
        items: [
            {title: "Home", to:"/" ,roles: ["Guest", "Customer", "Agent"]},
            {title: "Ticket List", to:"/ticket-list" , roles: [ "Customer", "Agent"],},
        ]
    },
    auth: {
        defaultUserRole: ["Guest"]
    },

}


export  default config;