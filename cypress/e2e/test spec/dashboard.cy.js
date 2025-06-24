describe('epfo Login Page',()=>{
    let epfologindata

    beforeEach(()=>{
        cy . fixture('epfologindata.json').then((mydata)=>{
            epfologindata = mydata
        })

        cy.visit('https://www.epfindia.gov.in/site_en/index.php')
    })

it ('should click "For Employees" from the service',()=>{
    epfologinpage.selectForEmployees(epfologindata.dropDownOption)
    
})
})