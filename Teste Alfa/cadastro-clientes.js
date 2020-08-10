const formCadastroCliente = document.querySelector("[data-form]")

formCadastroCliente.addEventListener("submit",
    event => { 
        event.preventDefault()

        const username = event.target.querySelector("[data-username]").value
        const name = event.target.querySelector("[data-name]").value
        const lastname = event.target.querySelector("[data-lastname]").value
        const email = event.target.querySelector("[data-email]").value
        const address = event.target.querySelector("[data-address]").value
        const city = event.target.querySelector("[data-city]").value
        const countryRegion = event.target.querySelector("[data-countryRegion]").value
        const region = event.target.querySelector("[data-region]").value


    cadastrarClientes(username, name, lastname, email, address, city, countryRegion, region )

           
        
        
    }
)
