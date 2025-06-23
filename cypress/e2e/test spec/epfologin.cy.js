import epfologinpage from "../page/epfologinpage";

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

it ('should click Member UAN/Online Service link',()=>{
    epfologinpage.clickUANServiceLink(epfologindata.memberUanOnline)
    
})

it ('should click Locate an EPFO Office link',()=>{
    epfologinpage.clicklocationOnEpfoOfficeLink(epfologindata.locationEpfo)
})

it ('should select TAMILNADU from dropdown',()=>{
    epfologinpage.selectState(epfologindata.selectStateName)
})

  







})