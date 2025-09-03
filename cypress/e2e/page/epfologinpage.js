class epfologinpage{

    // Getter method to access a link inside a menu div that navigates to the 'For Employees' section using its href attribute
    get serviceDropDown() { return cy.get('div [class="menu"] [href="For_Employees.php?id=sm2_index"]'); }

    // Getter method to access the anchor tag that links to the UAN Member e-Sewa portal using its href attribute
    get MmemberUanOnlineService() { return cy.get('a[href="https://unifiedportal-mem.epfindia.gov.in/memberinterface/"]'); }

    // Getter method to access the anchor tag linking to the EPFO office location page using its href attribute
    get locationOnEpfoOffice() { return cy.get('a[href="https://www.epfindia.gov.in/site_en/Location_an_office.php"]'); }

    // Getter method to access the option with value 'TAMILNADU' inside the state dropdown using its ID attribute
    get selectStateDropDown() { return cy.get('select[id="state"]'); }

    // Getter method to access the specific option 'TAMILNADU' from a dropdown by its value attribute
     get selectStateName() { return cy.get('option[value="TAMILNADU"]'); }

// function will start

//  selectForEmployees() {
//     this.serviceDropDown.click(); 
//   }

  selectForEmployees() {
  // this.serviceDropDown.should('be.visible').click({ force: true });

}

clickUANServiceLink() {
  this.MmemberUanOnlineService.first().click();
}

clicklocationOnEpfoOfficeLink() {
  this.locationOnEpfoOffice.should('be.visible').click({ force: true });
}

selectState(stateName) {
  this.selectStateDropDown.should('exist').should('be.visible').select(stateName);

  cy.selectDropdown(this.selectStateDropDown,stateName)
}




}

export default new epfologinpage();